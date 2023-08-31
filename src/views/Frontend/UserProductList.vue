<template>
  <LoadingOverlay :active="isLoading"/>
  <div class="row mb-4">
    <div class="col-lg-3">
      <div class="link-hover-color sticky-top" style="top:65px">
        <a href="#" @click.prevent="toggleCollapse">
          <div class="d-flex justify-content-between">
            <p>商品分類</p>
            <i class="bi bi-caret-down"></i>
          </div>
        </a>
        <ul class="list-unstyled ps-3 lh-lg collapse" ref="collapse">
          <li><a href="#" @click.prevent="getProductsAll">全部商品</a></li>
          <li><a href="#" @click.prevent="filterProducts('TOP')">上身</a></li>
          <li><a href="#" @click.prevent="filterProducts('Bottom')">下身</a></li>
          <li><a href="#" @click.prevent="filterProducts('Dress')">洋裝</a></li>
          <li><a href="#" @click.prevent="filterProducts('Acc')">飾品</a></li>
          <li><a href="#" @click.prevent="filterProducts('Decoration')">裝飾品</a></li>
          <li><a href="#" @click.prevent="filterProducts('skincare')">保養品</a></li>
        </ul>
      </div>
    </div>
    <div class="col-lg-9">
      <div class="row row-cols-2 row-cols-md-3">
        <div class="col product-list mb-3" v-for="item in products" :key="item.id">
          <div class="card border-0 h-100 position-relative">
            <a href="#" class="text-decoration-none h-100" @click.prevent="getProduct(item.id)">
              <div class="product-img">
                <img :src="item.imageUrl" :alt="item.title" class="card-img-top rounded-0 object-fit-cover w-100" style="height: 145px;">
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
    </div>
  </div>
  <PaginationSelect :pages="pagination" @emit-pages="getProducts"/>
</template>

<script>
import collapseMixin from '@/mixins/collapseMixin'
import PaginationSelect from '@/components/PaginationSelect.vue'
export default {
  data () {
    return {
      products: [],
      pagination: {},
      wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
      Collapse: '',
      status: {
        loadingItem: ''
      },
      isLoading: false
    }
  },
  watch: {
    pagination () {
      document.documentElement.scrollTop = 0
    }
  },
  inject: ['$httpMessageState', 'emitter', 'reload', 'updateWishQty'],
  mixins: [collapseMixin],
  components: {
    PaginationSelect
  },
  methods: {
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          this.products = res.data.products
          this.pagination = res.data.pagination
          this.isLoading = false
        })
        .catch((err) => {
          this.$httpMessageState(err, '連線')
          this.isLoading = false
        })
    },
    filterProducts (item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          this.products = res.data.products.filter(i => i.category === item)
          this.pagination = {
            total_pages: 1,
            current_page: 1,
            has_pre: false,
            has_next: false,
            category: item
          }
          if (document.body.offsetWidth < 992) {
            this.hideCollapse()
          }
          this.isLoading = false
        })
        .catch((err) => {
          this.$httpMessageState(err, '連線')
          this.isLoading = false
        })
    },
    getProductsAll () {
      this.getProducts()
      if (document.body.offsetWidth < 992) {
        this.hideCollapse()
      }
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
  },
  mounted () {
    if (document.body.offsetWidth > 992) {
      this.toggleCollapse()
    }
  }
}
</script>
