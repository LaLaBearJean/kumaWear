<template>
  <Navbar/>
  <FrontPage/>
  <FooterInfo/>
  <ScrollTop/>
  <UserCouponModal ref="couponModal"/>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Frontend/NavBar.vue'
import FrontPage from '@/components/Frontend/FrontPage.vue'
import FooterInfo from '@/components/Frontend/FooterInfo.vue'
import ScrollTop from '@/components/ScrollTop.vue'
import UserCouponModal from '@/components/Frontend/UserCouponModal.vue'

export default {
  components: {
    Navbar,
    FrontPage,
    FooterInfo,
    ScrollTop,
    UserCouponModal
  },
  methods: {
    openCoupon () {
      const couponComponent = this.$refs.couponModal
      couponComponent.showModal()
    }
  },
  mounted () {
    this.openCoupon()
  }
}
</script>
