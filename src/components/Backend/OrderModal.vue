<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">訂單細節</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-4">
              <h4 class="fw-bold">用戶資料</h4>
              <table class="table">
                <tbody v-if="order.user">
                  <tr>
                    <th>姓名</th>
                    <td>{{ order.user.name }}</td>
                  </tr>
                  <tr>
                    <th>電話</th>
                    <td>{{ order.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>地址</th>
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
                </tbody>
              </table>
            </div>
            <div class="col-md-8">
              <h4 class="fw-bold">訂單細節</h4>
              <table class="table">
                <tbody>
                  <tr>
                    <th>訂單編號</th>
                    <td>{{ order.id }}</td>
                  </tr>
                  <tr>
                    <th>下單時間</th>
                    <td>{{ $filters.date(order.create_at) }}</td>
                  </tr>
                  <tr v-if="order.is_paid">
                    <th>付款時間</th>
                    <td>{{ $filters.date(order.paid_date) }}</td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td v-if="order.is_paid" class="text-success">已付款</td>
                    <td v-else class="text-muted">尚未付款</td>
                  </tr>
                  <tr>
                    <th>總金額</th>
                    <td>{{ $filters.currency(order.total) }}</td>
                  </tr>
                </tbody>
              </table>
              <h4 class="fw-bold">選購商品</h4>
              <table class="table">
                <tbody>
                  <tr v-for="item in order.products" :key="item.id">
                    <th>{{ item.product.title }}</th>
                    <td>{{ item.qty }} {{ item.product.unit }}</td>
                    <td class="text-end">{{ $filters.currency(item.final_total) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">確定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin'
export default {
  props: {
    order: {
      type: Object,
      default () { return {} }
    }
  },
  data () {
    return {
      modal: {}
    }
  },
  mixins: [modalMixin]
}
</script>
