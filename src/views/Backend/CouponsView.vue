<template>
  <LoadingOverlay :active="isLoading"/>
  <div class="text-end">
    <button type="button" class="btn btn-primary" @click="openCouponModal(true)">新增優惠券</button>
  </div>
  <div class="table-responsive mt-4 text-nowrap">
    <table class="table">
      <thead>
        <tr class="border-dark">
          <th scope="col">名稱</th>
          <th scope="col">優惠碼</th>
          <th scope="col" width="120px">折扣百分比</th>
          <th scope="col" width="150px">到期日</th>
          <th scope="col" width="100px">是否啟用</th>
          <th scope="col" width="200px">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr class="align-middle" v-for="item in coupons" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.code }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ $filters.date(item.due_date) }}</td>
          <td>
            <span class="text-success" v-if="item.is_enabled">啟用</span>
            <span class="text-muted" v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" type="button" @click="openCouponModal(false,item)">編輯</button>
              <button class="btn btn-outline-danger btn-sm" type="button" @click="openDelCouponModal(item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <CouponModal ref="couponModal" :coupon="tempCoupon" @update-coupon="updateCoupon"/>
  <DelModal ref="delModal" :item="tempCoupon" @del-item="delCoupon"/>
  <PaginationSelect v-if="pagination.total_pages" :pages="pagination" @emit-pages="getCoupons"/>
</template>

<script>
import CouponModal from '@/components/Backend/CouponModal.vue'
import PaginationSelect from '@/components/PaginationSelect.vue'
import DelModal from '@/components/DelModal.vue'
export default {
  data () {
    return {
      coupons: [],
      pagination: {},
      tempCoupon: {
        percent: 100
      },
      isNew: false,
      isLoading: false
    }
  },
  components: {
    CouponModal,
    DelModal,
    PaginationSelect
  },
  inject: ['$httpMessageState'],
  methods: {
    getCoupons (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.coupons = res.data.coupons
            this.pagination = res.data.pagination
          }
          this.isLoading = false
        })
        .catch((err) => {
          this.$httpMessageState(err, '連線')
          this.isLoading = false
        })
    },
    openCouponModal (isNew, item) {
      if (isNew) {
        this.tempCoupon = {
          due_date: Math.floor(new Date().getTime() / 1000)
        }
      } else {
        this.tempCoupon = { ...item }
      }
      this.isNew = isNew
      const couponComponent = this.$refs.couponModal
      couponComponent.showModal()
    },
    updateCoupon (item) {
      this.isLoading = true
      this.tempCoupon = item
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
      let httpMethod = 'post'
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`
        httpMethod = 'put'
      }
      const couponComponent = this.$refs.couponModal
      this.$http[httpMethod](api, { data: this.tempCoupon })
        .then((res) => {
          if (res.data.success) {
            this.getCoupons()
          }
          couponComponent.hideModal()
          this.isLoading = false
          this.$httpMessageState(res, '新增優惠券')
        })
        .catch((err) => {
          this.$httpMessageState(err, '連線')
          this.isLoading = false
        })
    },
    openDelCouponModal (item) {
      this.tempCoupon = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    delCoupon () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
      this.isLoading = true
      this.$http.delete(api)
        .then((res) => {
          const delComponent = this.$refs.delModal
          if (res.data.success) {
            this.getCoupons()
          }
          delComponent.hideModal()
          this.isLoading = false
          this.$httpMessageState(res, '刪除優惠券')
        })
        .catch((err) => {
          this.$httpMessageState(err, '連線')
          this.isLoading = false
        })
    }
  },
  created () {
    this.getCoupons()
  }
}
</script>
