<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-header border-bottom-0">
          <h5 class="modal-title" id="exampleModalLabel">新品優惠</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body py-0">
          <div class="userCoupon d-flex justify-content-center align-items-center">
            <p class="mb-0 pe-2" ref="coupontext">newinjuly</p>
            <a href="#" class="link-secondary" ref="copyCoupon" @click.prevent="copyCoupon"><i class="bi bi-clipboard fs-4"></i><i class="bi bi-check2 fs-4"></i></a>
          </div>
        </div>
        <div class="modal-footer border-top-0 justify-content-start pt-0">
          <p>不限金額打8折</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin'
export default {
  mixins: [modalMixin],
  data () {
    return {
      modal: {}
    }
  },
  methods: {
    copyCoupon () {
      navigator.clipboard.writeText(this.$refs.coupontext.textContent)
        .then(() => {
          this.$refs.copyCoupon.classList.add('copy-coupon')
          setTimeout(() => {
            this.hideModal()
          }, 1000)
        })
    }
  }
}
</script>
