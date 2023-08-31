<template>
  <div class="modal fade" id="delModal" ref="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title" id="exampleModalLabel" v-if="item.title">刪除 {{ item.title }}</h5>
          <h5 class="modal-title" id="delProduct" v-else-if="item.product">刪除 {{ item.product.title }}</h5>
          <h5 class="modal-title" id="delOrder" v-else-if="item.id">刪除 {{ item.id }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" v-if="item.title">
          是否刪除 <strong class="text-danger">{{ item.title }}</strong> (刪除後將無法恢復)。
        </div>
        <div class="modal-body" v-else-if="item.product">
          是否刪除 <strong class="text-danger">{{ item.product.title }}</strong> (刪除後將無法恢復)。
        </div>
        <div class="modal-body" v-else-if="item.id">
          是否刪除 <strong class="text-danger">{{ item.id }}</strong> (刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-outline-danger" @click="$emit('del-item')">確定刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin'
export default {
  props: {
    item: {}
  },
  data () {
    return {
      modal: {}
    }
  },
  mixins: [modalMixin]
}
</script>
