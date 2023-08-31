<template>
  <LoadingOverlay :active="isLoading"/>
  <ProgressBar ref="stepperComponent"/>
  <div class="row justify-content-center">
    <form class="col-md-8" @submit="payOrder">
      <div class="link-hover-color">
        <a href="#" class="bg-light p-3" @click.prevent="toggleCollapse">購物清單 <i class="bi bi-caret-down"></i></a>
      </div>
      <table class="table collapse my-2" ref="collapse">
        <thead>
          <tr>
            <th scope="col">品名</th>
            <th scope="col">數量</th>
            <th scope="col">單價</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in order.products" :key="item.id">
            <td>{{ item.product.title }}</td>
            <td>{{ item.qty }}/{{ item.product.unit }}</td>
            <td class="text-end">NT$ {{ $filters.currency(item.final_total) }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2" class="text-end">總計:</td>
            <td class="text-end">NT$ {{ $filters.currency(order.total) }}</td>
          </tr>
        </tfoot>
      </table>

      <h4 class="fw-bold mt-4 mb-3 text-center">寄件資料</h4>
      <table class="table">
        <tbody>
          <tr>
            <th>收件人姓名</th>
            <td>{{ order.user.name }}</td>
          </tr>
          <tr>
            <th>收件人電話</th>
            <td>{{ order.user.tel }}</td>
          </tr>
          <tr>
            <th>收件人地址</th>
            <td>{{ order.user.address }}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{{ order.user.email }}</td>
          </tr>
          <tr v-if="order.message">
            <th>備註</th>
            <td>{{ order.message }}</td>
          </tr>
          <tr>
            <th>付款狀態</th>
            <td v-if="order.is_paid" class="text-success">付款完成</td>
            <td v-else class="text-muted">尚未付款</td>
          </tr>
        </tbody>
      </table>
      <div class="text-end">
        <button type="submit" class="btn btn-outline-warning">付款去</button>
      </div>
    </form>
  </div>
</template>

<script>
import collapseMixin from '@/mixins/collapseMixin'
import ProgressBar from '@/components/Frontend/ProgressBar.vue'
export default {
  data () {
    return {
      orderId: '',
      order: {
        user: {}
      },
      isLoading: false,
      Collapse: ''
    }
  },
  components: { ProgressBar },
  mixins: [collapseMixin],
  inject: ['$httpMessageState'],
  methods: {
    getOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          this.order = res.data.order
          this.isLoading = false
        })
        .catch((err) => {
          this.$httpMessageState(err, '連線')
        })
    },
    payOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      this.isLoading = true
      this.$http.post(api)
        .then((res) => {
          if (res.data.success) {
            this.$router.push('/user/orderprocessed')
          }
          this.isLoading = false
        })
        .catch((err) => {
          this.$httpMessageState(err, '連線')
          this.isLoading = false
        })
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  },
  mounted () {
    this.$refs.stepperComponent.addStepperStatus(2)
  }
}
</script>
