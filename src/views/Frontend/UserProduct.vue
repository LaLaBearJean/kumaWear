<template>
  <LoadingOverlay :active="isLoading"/>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb link-hover-color">
      <li class="breadcrumb-item"><router-link to="/" class="d-inline-block">Home</router-link></li>
      <li class="breadcrumb-item"><router-link to="/user/productlist" class="d-inline-block">商品列表</router-link></li>
      <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
    </ol>
  </nav>

  <section class="mb-5">
    <div class="row">
      <div class="col-lg-8 mb-3 mb-lg-0">
        <div class="h-100">
          <img :src="img" :alt="product.title" class="w-100 object-fit-cover" :class="{ 'h-100' : !product.imagesUrl }">
          <ul v-if="product.imagesUrl" class="list-unstyled d-flex mt-2">
            <li><a href="#" @click.prevent="changeImage(product.imageUrl)"><img :src="product.imageUrl" :alt="product.title" class="object-fit-cover" width="150" height="80"></a></li>
            <li v-for="(image,i) in product.imagesUrl" :key="i" class="ms-2"><a href="#" @click.prevent="changeImage(image)"><img :src="image" :alt="`${product.title}${i+1}`" class="object-fit-cover" width="150" height="80"></a></li>
          </ul>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="h-100 text-center text-lg-start">
          <h1 class="h2 mb-3">{{ product.title }}</h1>
          <div class="h3 fw-bold text-warning m-0">NT$ {{ $filters.currency(product.price) }}</div>
          <del class="text-secondary">NT$ {{ $filters.currency(product.origin_price) }}</del>
          <div class="my-3" v-if="product.category === 'Acc'">
            <p>寶石是岩石中最美麗而貴重的一類礦石。它們顏色鮮豔，質地晶瑩，光澤燦爛，堅硬耐久，同時賦存稀少，是可以製作首飾等用途的天然礦物晶體，如鑽石、水晶、祖母綠、紅寶石、藍寶石和金綠寶石（變石、貓眼）綠簾石等；也有少數是天然單礦物集合體，如烏蘭孖努、歐泊。還有少數幾種有機質材料，如琥珀、珍珠、珊瑚、煤精，也包括在廣義的寶石之內。</p>
            <p class="m-0"><strong>產地:{{ product.content }}</strong></p>
          </div>
          <div class="my-3" v-else-if="product.category === 'skincare'">
            <p>我們的產品皆為天然保養品，產品中一定成分的原料為天然無加工，如取自植物、礦物、動物等，若要標榜「天然保養品」必須經由第三方國際認證並取得相關標章。</p>
            <p class="m-0"><strong>容量:{{ product.description }}</strong></p>
          </div>
          <div class="my-3" v-else-if="product.category === 'Decoration'">
            <p>透過親自拜訪及網路漫遊的方式走遍多個國家，逾 2,300 個設計品牌，要與跟我們一樣熱愛生活、並享受每個好日子的你分享，讓投入設計師情感的物品，共造生活中的溫暖記憶。</p>
            <p class="m-0"><strong>產地:{{ product.content }}</strong></p>
          </div>
          <div class="my-3" v-else>
            <p>精挑細選不分身形，基本款式不退流行，不論妳是工作婦女或是不同屬性的上班族、或是居家女孩，妳都能找到適合的款式。材質舒服、設計簡約版型大方、專業度、浪漫氣質，保證會再回購。</p>
            <p class="m-0"><strong>材質:{{ product.description }}</strong></p>
            <p class="m-0"><strong>尺寸:{{ product.content }}</strong></p>
          </div>
          <ul class="list-unstyled border fs-5 d-flex justify-content-between align-items-center w-100 link-hover-color rounded">
            <li><a href="#" @click.prevent="quantity(qty-1)" class="btn border-0 p-2" :class="{ 'disabled' : qty === 1 }"><i class="bi bi-dash-lg ps-2 pe-5"></i></a></li>
            <li>{{ qty }}</li>
            <li><a href="#" @click.prevent="quantity(qty+1)" class="btn border-0 p-2" :class="{ 'disabled' : qty === 10 }"><i class="bi bi-plus-lg pe-2 ps-5"></i></a></li>
          </ul>
          <button type="button" class="btn btn-outline-secondary w-100 btn-lg" @click="addCart(product.id)"
          :disabled="status.loadingItem === product.id">加入購物車</button>
          <a href="#" class="d-inline-block mt-3 text-decoration-none text-danger" v-if="!isFavProduct(product.id)" @click.prevent="addWishList(product)"><i class="bi bi-heart pe-1"></i>加到最愛</a>
          <a href="#" class="d-inline-block mt-3 text-decoration-none text-danger" v-if="isFavProduct(product.id)" @click.prevent="removeWishList(product)"><i class="bi bi-heart-fill pe-1"></i>移除最愛</a>
        </div>
      </div>
    </div>
  </section>

  <section>
    <h4 class="text-center mb-3">更多商品</h4>
    <div class="row row-cols-2 row-cols-lg-4">
      <div class="col mb-3 mb-lg-0" v-for="item in products" :key="item.id">
        <a href="#" class="text-decoration-none d-flex flex-column h-100" @click.prevent="otherProduct(item.id)">
          <img :src="item.imageUrl" :alt="item.title" class="object-fit-cover w-100" style="height: 145px;">
          <h5 class="text-center text-dark my-2">{{ item.title }}</h5>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      product: {},
      products: [],
      img: '',
      qty: 1,
      wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
      status: {
        loadingItem: ''
      },
      isLoading: false
    }
  },
  inject: ['$httpMessageState', 'emitter', 'reload', 'updateWishQty'],
  methods: {
    getProduct (productId) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${productId}`
      this.$http.get(api)
        .then((res) => {
          this.product = res.data.product
          this.img = this.product.imageUrl
          this.isLoading = false
        })
        .catch((err) => {
          this.$httpMessageState(err, '連線')
          this.isLoading = false
        })
    },
    getProducts () {
      this.products = []
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(api)
        .then((res) => {
          const arr = res.data.products.filter(i => i.id !== this.product.id)
          for (let i = 0; i < 4; i++) {
            const index = Math.floor(Math.random() * arr.length)
            this.products.push(arr[index])
            arr.splice(index, 1)
          }
        })
        .catch((err) => {
          this.$httpMessageState(err, '連線')
        })
    },
    otherProduct (id) {
      this.$router.push(`/user/product/${id}`)
      this.getProduct(id)
      this.getProducts()
    },
    addCart (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.status.loadingItem = id
      this.isLoading = true
      const cart = {
        product_id: id,
        qty: this.qty
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
    quantity (qty) {
      if (qty <= 0) {
        this.qty = 1
      } else if (qty >= 10) {
        this.qty = 10
      } else {
        this.qty = qty
      }
    },
    changeImage (image) {
      this.img = image
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
    this.getProduct(this.$route.params.productId)
    this.getProducts()
  }
}
</script>
