<template>
  <SideBar>
    <div class="p-4 position-relative">
      <ToastMessages/>
      <router-view/>
    </div>
  </SideBar>
</template>

<script>
import emitter from '@/methods/emitter'
import SideBar from '@/components/Backend/SideBar.vue'
import ToastMessages from '@/components/ToastMessages.vue'
import $httpMessageState from '@/methods/pushMessageState'
export default {
  components: {
    SideBar,
    ToastMessages
  },
  provide () {
    return {
      emitter,
      $httpMessageState
    }
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)kumaToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.$http.post(api)
      .then((res) => {
        if (!res.data.success) {
          this.$router.push('/login')
        } else {
          $httpMessageState(res, '登入')
        }
      })
  }
}
</script>
