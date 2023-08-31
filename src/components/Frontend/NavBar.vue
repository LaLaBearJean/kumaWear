<template>
  <nav class="navbar navbar-expand-lg navbar-white bg-white my-2 sticky-top">
    <div class="container">
      <router-link class="navbar-brand mb-0 h1" to="/">KumaWear</router-link>
      <button class="navbar-toggler" type="button" @click="toggleCollapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent" ref="collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item mx-2">
            <router-link class="nav-link" aria-current="page" to="/"><i class="bi bi-house pe-1"></i>首頁</router-link>
          </li>
          <li class="nav-item mx-2 dropdown">
            <router-link class="nav-link" to="/user/productlist"><i class="bi bi-handbag pe-1"></i>商品列表</router-link>
          </li>
          <li class="nav-item mx-2 position-relative">
            <router-link class="nav-link" to="/user/cart"><i class="bi bi-cart3 pe-1"></i><span class="amount" v-if="cartQty">{{ cartQty }}</span>購物車</router-link>
          </li>
          <li class="nav-item mx-2 position-relative">
            <router-link class="nav-link" to="/user/wishlist"><i class="bi bi-bag-heart pe-1"></i><span class="amount" v-if="wishQty">{{ wishQty }}</span>喜愛商品</router-link>
          </li>
        </ul>
        <form class="d-flex text-nowrap">
          <input class="form-control me-2" type="search" placeholder="尋找商品" aria-label="Search" v-model="searchText">
          <button class="btn btn-outline-warning" type="button" @click="searchProduct">搜尋</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import collapseMixin from '@/mixins/collapseMixin'
import $httpMessageState from '@/methods/pushMessageState'
import emitter from '@/methods/emitter'
export default {
  data () {
    return {
      Collapse: '',
      cartQty: '',
      wishQty: '',
      searchText: ''
    }
  },
  inject: ['reload'],
  watch: {
    $route () {
      if (document.body.offsetWidth < 992) {
        this.reload()
      }
    }
  },
  mixins: [collapseMixin],
  methods: {
    getCart () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api)
        .then((res) => {
          this.cartQty = res.data.data.carts.length
        })
        .catch((err) => {
          $httpMessageState(err, '連線')
        })
    },
    getWishList () {
      if (JSON.parse(localStorage.getItem('wishlist'))) {
        this.wishQty = JSON.parse(localStorage.getItem('wishlist')).length
      }
    },
    searchProduct () {
      if (!this.searchText.trim()) {
        return
      } else {
        this.$router.push({
          path: '/user/search',
          query: { q: this.searchText.trim() }
        })
      }
      this.searchText = ''
    }
  },
  created () {
    this.getCart()
    this.getWishList()
  },
  mounted () {
    emitter.on('wishQty', (qty) => {
      this.wishQty = qty
    })
  }
}
</script>
