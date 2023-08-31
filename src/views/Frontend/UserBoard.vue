<template>
  <div class="sticky-footer">
    <Navbar/>
    <div class="container my-4 my-lg-5">
      <ToastMessages/>
      <router-view/>
    </div>
    <FooterInfo class="sticky-footer-bottom"/>
    <ScrollTop/>
  </div>
</template>

<script>
import ToastMessages from '@/components/ToastMessages.vue'
import emitter from '@/methods/emitter'
import $httpMessageState from '@/methods/pushMessageState'
import { updateWishQty } from '@/methods/updateQty'
import Navbar from '@/components/Frontend/NavBar.vue'
import FooterInfo from '@/components/Frontend/FooterInfo.vue'
import ScrollTop from '@/components/ScrollTop.vue'
export default {
  components: {
    Navbar,
    FooterInfo,
    ToastMessages,
    ScrollTop
  },
  provide () {
    return {
      emitter,
      $httpMessageState,
      updateWishQty
    }
  }
}
</script>
