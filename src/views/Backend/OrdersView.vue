<template>
  <LoadingOverlay :active="isLoading"/>
  <div class="table-responsive text-nowrap">
    <table class="table">
      <thead>
        <tr class="border-dark">
          <th>購買時間</th>
          <th>Email</th>
          <th>購買品項</th>
          <th>應付金額</th>
          <th>是否付款</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item.id" class="align-middle">
          <td>{{ $filters.date(item.create_at) }}</td>
          <td>{{ item.user.email }}</td>
          <td>
            <ul class="list-unstyled mb-0">
              <li v-for="product in item.products" :key="product.id">{{ product.product.title }} : {{ product.qty }} {{ product.product.unit }}</li>
            </ul>
          </td>
          <td>{{ $filters.currency(item.total) }}</td>
          <td>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" :id="`paidSwitch${item.id}`" v-model="item.is_paid" @change="updatePaid(item)">
              <label class="form-check-label" :for="`paidSwitch${item.id}`">
                <span v-if="item.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" type="button" @click="openOrderModal(item)">檢視</button>
              <button class="btn btn-outline-danger btn-sm" type="button" @click="openDelOrderModal(item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <OrderModal ref="orderModal" :order="tempOrder"/>
  <DelModal ref="delModal" :item="tempOrder" @del-item="delOrder"/>
  <PaginationSelect v-if="pagination.total_pages" :pages="pagination" @emit-pages="getOrders"/>
</template>

<script>
import OrderModal from '@/components/Backend/OrderModal.vue'
import DelModal from '@/components/DelModal.vue'
import PaginationSelect from '@/components/PaginationSelect.vue'
export default {
  data () {
    return {
      orders: [],
      pagination: {},
      tempOrder: {},
      isLoading: false
    }
  },
  components: {
    OrderModal,
    DelModal,
    PaginationSelect
  },
  inject: ['$httpMessageState'],
  methods: {
    getOrders (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.orders = res.data.orders
            this.pagination = res.data.pagination
          }
          this.isLoading = false
        })
        .catch((err) => {
          this.$httpMessageState(err, '連線')
          this.isLoading = false
        })
    },
    openOrderModal (item) {
      this.tempOrder = { ...item }
      const orderComponent = this.$refs.orderModal
      orderComponent.showModal()
    },
    openDelOrderModal (item) {
      this.tempOrder = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    delOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`
      this.$http.delete(api)
        .then((res) => {
          this.$httpMessageState(res, '刪除訂單')
          const delComponent = this.$refs.delModal
          delComponent.hideModal()
          this.getOrders()
        })
        .catch((err) => {
          this.$httpMessageState(err, '連線')
        })
    },
    updatePaid (item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`
      const paid = {
        is_paid: item.is_paid
      }
      this.$http.put(api, { data: paid })
        .then((res) => {
          this.$httpMessageState(res, '更新付款狀態')
          this.getOrders()
        })
        .catch((err) => {
          this.$httpMessageState(err, '連線')
        })
    }
  },
  created () {
    this.getOrders()
  }
}
</script>
