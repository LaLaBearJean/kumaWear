<template>
  <div v-if="wishlist.length !== 0">
    <div class="d-none d-md-block">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">品名</th>
            <th scope="col">單價</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in wishlist" :key="item.id" class="align-middle">
            <td>
              <a href="#" @click.prevent="getProduct(item.id)">
                <img :src="item.imageUrl" :alt="item.title" class="object-fit-cover" width="100" height="80">
              </a>
              {{ item.title }}
            </td>
            <td>
              <del class="text-secondary">NT${{ $filters.currency(item.origin_price) }}</del>
              <div>NT${{ $filters.currency(item.price) }}</div>
            </td>
            <td>
              <a href="#" class="btn btn-outline-danger" @click.prevent="addCart(item,index)">加到購物車</a>
            </td>
            <td>
              <a href="#" class="link-secondary" @click.prevent="DelWishList(item.title,index)"><i class="bi bi-trash fs-5"></i></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="d-md-none">
      <div class="row border-top border-bottom py-2 align-items-center" v-for="(item, index) in wishlist" :key="item.id">
        <div class="col">
          <a href="#" @click.prevent="getProduct(item.id)">
            <img :src="item.imageUrl" :alt="item.title" class="object-fit-cover w-100" height="100">
          </a>
        </div>
        <div class="col">
          <h6>{{ item.title }}</h6>
          <div class="mb-2">
            <del class="text-secondary">NT${{ $filters.currency(item.origin_price) }}</del>
            <div>NT${{ $filters.currency(item.price) }}</div>
          </div>
        </div>
        <div class="col-2">
          <a href="#" class="link-danger" @click.prevent="addCart(item,index)"><i class="bi bi-cart3 pe-1 fs-4"></i></a>
        </div>
        <div class="col-2">
          <a href="#" class="link-secondary" @click.prevent="DelWishList(item.title,index)"><i class="bi bi-trash fs-4"></i></a>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="text-center">
    <h4 class="mb-5">目前沒有追蹤商品</h4>
    <a href="#" class="btn btn-outline-warning btn-lg" @click.prevent="goShopping">購物去</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      wishlist: JSON.parse(localStorage.getItem('wishlist')) || []
    }
  },
  inject: ['$httpMessageState', 'reload', 'emitter', 'updateWishQty'],
  methods: {
    getProduct (id) {
      this.$router.push(`/user/product/${id}`)
    },
    addCart (item, index) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      const cart = {
        product_id: item.id,
        qty: 1
      }
      this.$http.post(api, { data: cart })
        .then((res) => {
          this.DelWishList(item.title, index)
          this.isLoading = false
          this.reload()
          setTimeout(() => {
            this.$httpMessageState(res, '加入購物車')
          })
        })
        .catch((err) => {
          this.$httpMessageState(err, '連線')
        })
    },
    DelWishList (title, index) {
      this.wishlist.splice(index, 1)
      localStorage.setItem('wishlist', JSON.stringify(this.wishlist))
      this.updateWishQty(this.wishlist.length)
      this.emitter.emit('push-message', {
        style: 'danger',
        title: `${title}已刪除最愛商品`
      })
    },
    goShopping () {
      this.$router.push('/user/productlist')
    }
  }
}
</script>
