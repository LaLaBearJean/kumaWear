<template>
  <LoadingOverlay :active="isLoading"/>
  <ProgressBar ref="stepperComponent"/>
  <div v-if="cart.total !== 0">
    <div class="d-none d-md-block">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">品名</th>
            <th scope="col" width="110px">單價</th>
            <th scope="col" width="110px">數量</th>
            <th scope="col" width="110px">小計</th>
            <th scope="col" width="110px"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart.carts" :key="item.id" class="align-middle">
            <td>
              <a href="#" @click.prevent="getProduct(item.product.id)">
                <img :src="item.product.imageUrl" :alt="item.product.title" class="object-fit-cover" width="100" height="80">
              </a>
              {{ item.product.title }}
            </td>
            <td>NT$ {{ $filters.currency(item.product.price) }}</td>
            <td>
              <select class="form-select form-select-sm" v-model.number="item.qty" @change="updateCart(item)" :disabled="status.loadingItem === item.id">
                <option v-for="i in 10" :key="i" :value="i">{{ i }}</option>
              </select>
            </td>
            <td>
              <div v-if="item.total === item.final_total">NT$ {{ $filters.currency(item.total) }}</div>
              <div v-else>
                <del class="text-secondary">NT$ {{ $filters.currency(item.total) }}</del>
                <div>NT$ {{ $filters.currency(item.final_total) }}</div>
              </div>
            </td>
            <td class="text-end">
              <a href="#" class="link-secondary" @click.prevent="openDelCartModal(item)"><i class="bi bi-trash fs-5"></i></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="d-md-none">
      <div class="row border-top border-bottom py-2 align-items-center" v-for="item in cart.carts" :key="item.id">
        <div class="col-4">
          <a href="#" @click.prevent="getProduct(item.product.id)">
            <img :src="item.product.imageUrl" :alt="item.product.title" class="object-fit-cover w-100" height="100">
          </a>
        </div>
        <div class="col">
          <h6>{{ item.product.title }}</h6>
          <p class="mb-2">單價: NT$ {{ $filters.currency(item.product.price) }}</p>
          <select name="" id="" class="form-select form-select-sm w-50" v-model.number="item.qty" @change="updateCart(item)" :disabled="status.loadingItem === item.id">
            <option v-for="i in 10" :key="i" :value="i">{{ i }}</option>
          </select>
          <p class="mb-0 mt-2" v-if="item.total === item.final_total">小計: NT$ {{ $filters.currency(item.total) }}</p>
          <p class="mb-0 mt-2" v-else>
            <del class="text-secondary pe-1">NT$ {{ $filters.currency(item.total) }}</del>
            <span>NT$ {{ $filters.currency(item.final_total) }}</span>
          </p>
        </div>
        <div class="col-2">
          <a href="#" class="link-secondary" @click.prevent="openDelCartModal(item)"><i class="bi bi-trash fs-4"></i></a>
        </div>
      </div>
    </div>
    <div class="col-md-4 offset-md-8">
      <div class="d-flex justify-content-between my-2">
        <span>總計:</span>
        <span>NT$ {{ $filters.currency(cart.total) }}</span>
      </div>
      <div class="d-flex justify-content-between my-2 text-danger" v-if="cart.total !== cart.final_total">
        <span>折扣價:</span>
        <span>NT$ {{ $filters.currency(cart.final_total) }}</span>
      </div>
      <div class="input-group input-group-sm mb-3">
        <input type="text" class="form-control" placeholder="請輸入折扣碼" v-model="coupon_code">
        <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">套用</button>
      </div>
    </div>
  </div>
  <div v-else>
    <h4 class="text-center">購物車尚無商品，快去選購吧~</h4>
  </div>
  <div v-if="cart.total !== 0" class="row justify-content-center my-5">
    <v-form class="col-md-6" v-slot="{ errors }" @submit.prevent="createOrder">
      <h5 class="text-center text-secondary fw-bold">寄送資料</h5>
      <div class="mb-3">
        <label for="name" class="form-label">收件人姓名*</label>
        <v-field type="text" name="姓名" class="form-control" id="name" placeholder="請輸入姓名" rules="required" :class="{ 'is-invalid': errors['姓名'] }" v-model="form.user.name"></v-field>
        <error-message name="姓名" class="invalid-feedback"></error-message>
      </div>
      <div class="mb-3">
        <label for="tel" class="form-label">收件人電話*</label>
        <v-field type="tel" name="tel" class="form-control" id="tel" placeholder="請輸入電話" :rules="isPhone" :class="{ 'is-invalid': errors['tel'] }" v-model="form.user.tel"></v-field>
        <error-message name="tel" class="invalid-feedback"></error-message>
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">收件人地址*</label>
        <v-field type="text" name="地址" class="form-control" id="address" placeholder="請輸入地址" rules="required" :class="{ 'is-invalid': errors['地址'] }" v-model="form.user.address"></v-field>
        <error-message name="地址" class="invalid-feedback"></error-message>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email*</label>
        <v-field type="email" name="email" class="form-control" id="email" placeholder="請輸入Email" rules="email|required" :class="{ 'is-invalid': errors['email'] }" v-model="form.user.email"></v-field>
        <error-message name="email" class="invalid-feedback"></error-message>
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">備註</label>
        <textarea class="form-control" id="message" rows="3" v-model="form.message"></textarea>
      </div>
      <div class="text-end">
        <button type="submit" class="btn btn-outline-warning">送出訂單</button>
      </div>
    </v-form>
  </div>
  <DelModal ref="delModal" :item="tempCart" @del-item="delCartItem"/>
</template>

<script>
import DelModal from '@/components/DelModal.vue'
import ProgressBar from '@/components/Frontend/ProgressBar.vue'
export default {
  data () {
    return {
      cart: {},
      tempCart: {},
      coupon_code: '',
      status: {
        loadingItem: ''
      },
      isLoading: false,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  inject: ['$httpMessageState', 'reload'],
  components: {
    DelModal,
    ProgressBar
  },
  methods: {
    getCart () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          this.cart = res.data.data
          if (this.cart.total !== 0) {
            if (this.cart.carts[0].coupon && !this.cart.carts[this.cart.carts.length - 1].coupon) {
              this.coupon_code = this.cart.carts[0].coupon.code
              this.addCouponCode()
            }
          }
          this.isLoading = false
        })
        .catch((err) => {
          this.$httpMessageState(err, '連線')
          this.isLoading = false
        })
    },
    getProduct (id) {
      this.$router.push(`/user/product/${id}`)
    },
    updateCart (item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.status.loadingItem = item.id
      this.isLoading = true
      const cart = {
        product_id: item.product_id,
        qty: item.qty
      }
      this.$http.put(api, { data: cart })
        .then((res) => {
          this.status.loadingItem = ''
          this.isLoading = false
          this.getCart()
        })
        .catch((err) => {
          this.$httpMessageState(err, '連線')
          this.isLoading = false
        })
    },
    addCouponCode () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      this.isLoading = true
      this.$http.post(api, { data: { code: this.coupon_code.trim() } })
        .then((res) => {
          this.$httpMessageState(res, '套用優惠券')
          this.isLoading = false
          this.getCart()
        })
        .catch((err) => {
          this.$httpMessageState(err, '連線')
          this.isLoading = false
        })
    },
    openDelCartModal (item) {
      this.tempCart = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    delCartItem () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${this.tempCart.id}`
      this.$http.delete(api)
        .then((res) => {
          const delComponent = this.$refs.delModal
          delComponent.hideModal()
          this.getCart()
          this.reload()
          setTimeout(() => {
            this.$httpMessageState(res, '刪除品項')
          })
        })
        .catch((err) => {
          this.$httpMessageState(err, '連線')
        })
    },
    createOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      this.$http.post(api, { data: this.form })
        .then((res) => {
          if (res.data.success) {
            this.$router.push(`/user/checkout/${res.data.orderId}`)
            this.reload()
          }
        })
        .catch((err) => {
          this.$httpMessageState(err, '連線')
        })
    },
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '請輸入正確的電話號碼'
    }
  },
  created () {
    this.getCart()
  },
  mounted () {
    this.$refs.stepperComponent.addStepperStatus(1)
  }
}
</script>
