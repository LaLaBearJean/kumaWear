<template>
  <LoadingOverlay :active="isLoading"/>
  <div class="row row-cols-2 row-cols-md-3" v-if="filterProducts.length">
    <div class="col product-list mb-3" v-for="item in filterProducts" :key="item.id">
      <div class="card border-0 h-100 position-relative">
        <a href="#" class="text-decoration-none h-100" @click.prevent="getProduct(item.id)">
          <div class="product-img">
            <img :src="item.imageUrl" class="card-img-top rounded-0 object-fit-cover w-100" style="height: 180px;" :alt="item.title">
          </div>
          <div class="card-body text-center">
            <h5 class="card-title text-black">{{ item.title }}</h5>
            <p class="card-text h5 fw-bold text-warning">NT$ {{ $filters.currency(item.price) }}</p>
            <del class="text-secondary m-0">NT$ {{ $filters.currency(item.origin_price) }}</del>
          </div>
        </a>
        <div class="card-body p-0">
          <div class="d-flex align-items-center">
            <button type="button" class="btn btn-outline-secondary w-100" @click="addCart(item.id)" :disabled="status.loadingItem === item.id">加入購物車</button>
            <a href="#" class="link-danger favProduct" v-if="!isFavProduct(item.id)" @click.prevent="addWishList(item)"><i class="bi bi-heart fs-4"></i></a>
            <a href="#" class="link-danger favProduct" v-if="isFavProduct(item.id)" @click.prevent="removeWishList(item)"><i class="bi bi-heart-fill fs-4"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <h6>很抱歉，找不到{{ id }}</h6>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      products: [],
      wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
      status: {
        loadingItem: ''
      },
      isLoading: false
    }
  },
  inject: ['reload', '$httpMessageState', 'emitter', 'updateWishQty'],
  computed: {
    filterProducts () {
      return this.products.filter(i => i.title.match(this.id))
    }
  },
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          this.products = res.data.products
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
    addCart (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.status.loadingItem = id
      this.isLoading = true
      const cart = {
        product_id: id,
        qty: 1
      }
      this.$http.post(api, { data: cart })
        .then((res) => {
          this.status.loadingItem = ''
          this.reload()
          this.isLoading = false
          setTimeout(() => {
            this.$httpMessageState(res, '加入購物車')
          })
        })
        .catch((err) => {
          this.$httpMessageState(err, '連線')
          this.isLoading = false
        })
    },
    isFavProduct (id) {
      return this.wishlist.some(x => x.id === id)
    },
    addWishList (item) {
      this.wishlist.push(item)
      localStorage.setItem('wishlist', JSON.stringify(this.wishlist))
      this.updateWishQty(this.wishlist.length)
      this.emitter.emit('push-message', {
        style: 'success',
        title: `${item.title}已加入最愛`
      })
    },
    removeWishList (item) {
      this.wishlist = this.wishlist.filter(i => {
        return i.id !== item.id
      })
      localStorage.setItem('wishlist', JSON.stringify(this.wishlist))
      this.updateWishQty(this.wishlist.length)
      this.emitter.emit('push-message', {
        style: 'danger',
        title: `${item.title}已刪除最愛商品`
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
