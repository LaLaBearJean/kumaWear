<template>
  <div class="modal fade" id="exampleModal" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">新增產品</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="image" class="form-label">輸入圖片網址</label>
                <input type="text" class="form-control" id="image" placeholder="請輸入圖片網址" v-model="tempProduct.imageUrl">
              </div>
              <div class="mb-3">
                <label for="customFile" class="form-label">或 上傳圖片</label>
                <input class="form-control" type="file" id="customFile" ref="fileInput" @change="uploadFile">
              </div>
              <img class="img-fluid" :src="tempProduct.imageUrl" :alt="tempProduct.title">
              <div class="mt-5" v-if="tempProduct.imagesUrl">
                <div v-for="(image,key) in tempProduct.imagesUrl" :key="key" class="input-group mb-3">
                  <input type="url" class="form-control" placeholder="請輸入連結" v-model="tempProduct.imagesUrl[key]">
                  <button class="btn btn-outline-danger" type="button" @click="tempProduct.imagesUrl.splice(key,1)">移除</button>
                  <input class="form-control w-100 my-1" type="file" ref="filesInput" @change="uploadFiles(key)">
                  <img class="img-fluid" :src="tempProduct.imagesUrl[key]" :alt="`${tempProduct.title}${key+1}`">
                </div>
                <div v-if="tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1] && tempProduct.imagesUrl.length<5 || !tempProduct.imagesUrl.length ">
                  <button type="button" class="btn btn-outline-primary w-100 d-block" @click="tempProduct.imagesUrl.push('')">新增圖片</button>
                </div>
              </div>
            </div>

            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input type="text" class="form-control" id="title" placeholder="請輸入標題" v-model="tempProduct.title">
              </div>

              <div class="row row-cols-md-2 row-cols-1 gx-2">
                <div class="col mb-3">
                  <label for="category" class="form-label">分類</label>
                  <input type="text" class="form-control" id="category" placeholder="請輸入分類" v-model="tempProduct.category">
                </div>
                <div class="col mb-3">
                  <label for="unit" class="form-label">單位</label>
                  <input type="text" class="form-control" id="unit" placeholder="請輸入單位" v-model="tempProduct.unit">
                </div>
              </div>

              <div class="row row-cols-md-2 row-cols-1 gx-2">
                <div class="col mb-3">
                  <label for="origin_price" class="form-label">原價</label>
                  <input type="number" class="form-control" id="origin_price" placeholder="請輸入原價" v-model="tempProduct.origin_price">
                </div>
                <div class="col mb-3">
                  <label for="price" class="form-label">售價</label>
                  <input type="number" class="form-control" id="price" placeholder="請輸入售價" v-model="tempProduct.price">
                </div>
              </div>
              <hr>
              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea type="text" class="form-control" id="description" placeholder="請輸入產品描述" v-model="tempProduct.description"></textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea type="text" class="form-control" id="content" placeholder="請輸入產品說明內容" v-model="tempProduct.content"></textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="is_enabled" :true-value="1" :false-value="0" v-model="tempProduct.is_enabled">
                  <label class="form-check-label" for="is_enabled">是否啟用</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" @click="$emit('update-product',tempProduct)">確定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin'
import $httpMessageState from '@/methods/pushMessageState'
export default {
  props: {
    product: {
      type: Object,
      default () { return {} }
    }
  },
  watch: {
    product () {
      this.tempProduct = this.product
      if (!this.tempProduct.imagesUrl) {
        this.tempProduct.imagesUrl = []
      }
    }
  },
  data () {
    return {
      modal: {},
      tempProduct: {}
    }
  },
  mixins: [modalMixin],
  methods: {
    uploadFile () {
      const uploadedFile = this.$refs.fileInput
      const formData = new FormData()
      formData.append('file-to-upload', uploadedFile.files[0])
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`
      this.$http.post(api, formData)
        .then((res) => {
          if (res.data.success) {
            this.tempProduct.imageUrl = res.data.imageUrl
          }
        })
        .catch((err) => {
          $httpMessageState(err, '連線')
        })
    },
    uploadFiles (key) {
      const uploadedFiles = this.$refs.filesInput[key]
      const formData = new FormData()
      formData.append('file-to-upload', uploadedFiles.files[0])
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`
      this.$http.post(api, formData)
        .then((res) => {
          if (res.data.success) {
            this.tempProduct.imagesUrl[key] = res.data.imageUrl
          }
        })
        .catch((err) => {
          $httpMessageState(err, '連線')
        })
    },
    clearFileValue () {
      const uploadedFile = this.$refs.fileInput
      uploadedFile.value = ''
    }
  }
}
</script>
