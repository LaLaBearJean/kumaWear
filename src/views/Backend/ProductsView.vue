<template>
  <LoadingOverlay :active="isLoading"/>
  <div class="text-end text-nowrap">
    <button class="btn btn-primary" type="button" @click="openModal(true)">新增產品</button>
  </div>
  <div class="table-responsive mt-4 text-nowrap">
    <table class="table">
      <thead>
        <tr class="border-dark">
          <th scope="col" width="120px">分類</th>
          <th scope="col">產品名稱</th>
          <th scope="col" width="120px">原價</th>
          <th scope="col" width="120px">售價</th>
          <th scope="col" width="100px">是否啟用</th>
          <th scope="col" width="200px">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id" class="align-middle">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-right">{{ $filters.currency(item.origin_price) }}</td>
          <td class="text-right">{{ $filters.currency(item.price) }}</td>
          <td>
            <span class="text-success" v-if="item.is_enabled">啟用</span>
            <span class="text-muted" v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" type="button" @click="openModal(false,item)">編輯</button>
              <button class="btn btn-outline-danger btn-sm" type="button" @click="openDelProductModal(item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <ProductModal ref="productModal" :product="tempProduct" @update-product="updateProduct"/>
  <DelModal ref="delModal" :item="tempProduct" @del-item="delProduct"/>
  <PaginationSelect v-if="pagination.total_pages" :pages="pagination" @emit-pages="getProducts"/>
</template>

<script>
import ProductModal from '@/components/Backend/ProductModal.vue'
import DelModal from '@/components/DelModal.vue'
import PaginationSelect from '@/components/PaginationSelect.vue'
export default {
  data () {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false
    }
  },
  components: {
    ProductModal,
    DelModal,
    PaginationSelect
  },
  inject: ['emitter', '$httpMessageState'],
  methods: {
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products
            this.pagination = res.data.pagination
          }
          this.isLoading = false
        })
        .catch((err) => {
          this.$httpMessageState(err, '連線')
          this.isLoading = false
        })
    },
    openModal (isNew, item) {
      if (isNew) {
        this.tempProduct = {}
      } else {
        this.tempProduct = { ...item }
      }
      this.isNew = isNew
      const productComponent = this.$refs.productModal
      productComponent.showModal()
    },
    updateProduct (item) {
      this.tempProduct = item
      // 新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethod = 'post'
      let page = 1
      // 修改
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        httpMethod = 'put'
        page = this.pagination.current_page
      }
      const productComponent = this.$refs.productModal
      this.$http[httpMethod](api, { data: this.tempProduct })
        .then((res) => {
          productComponent.hideModal()
          productComponent.clearFileValue()
          if (res.data.success) {
            this.getProducts(page)
          }
          this.$httpMessageState(res, '更新')
        })
        .catch((err) => {
          this.$httpMessageState(err, '連線')
        })
    },
    openDelProductModal (item) {
      this.tempProduct = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    delProduct () {
      const delComponent = this.$refs.delModal
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.$http.delete(api)
        .then((res) => {
          delComponent.hideModal()
          this.getProducts()
          this.$httpMessageState(res, '刪除')
        })
        .catch((err) => {
          this.$httpMessageState(err, '連線')
        })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
