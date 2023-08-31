<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <div class="d-flex" ref="sidebarDom">
    <aside class="sidebar vh-100 border-end d-flex flex-column">
      <div class="px-4 py-3 fs-5">
        <strong>KumaWear</strong> - 管理後台
      </div>
      <ul class="list-unstyled overflow-auto mb-0">
        <li>
          <router-link class="sidebar-link px-4" to="/dashboard/products"><i class="bi bi-house pe-2"></i>產品管理</router-link>
        </li>
        <li>
          <router-link class="sidebar-link px-4" to="/dashboard/orders"><i class="bi bi-person-fill pe-2"></i>訂單管理</router-link>
        </li>
        <li>
          <router-link class="sidebar-link px-4" to="/dashboard/coupons"><i class="bi bi-c-square pe-2"></i>優惠券</router-link>
        </li>
      </ul>
      <a href="#" class="px-4 mt-auto border-top sidebar-link"  @click.prevent="logout"><i class="bi bi-box-arrow-right pe-2"></i>登出</a>
    </aside>
    <main class="main">
      <div class="border-bottom sticky-top">
        <a href="#" class="py-3 px-4 d-inline-block border-end" ref="sidebarBtn" @click.prevent="sidebarToggle"><i class="bi bi-arrows-angle-expand"></i></a>
      </div>
        <slot></slot>
    </main>
  </div>
</template>

<script>
import $httpMessageState from '@/methods/pushMessageState'
export default {
  data () {
    return {
      isLoading: false
    }
  },
  watch: {
    $route () {
      if (document.body.offsetWidth < 992) {
        this.$refs.sidebarBtn.click()
      }
    }
  },
  methods: {
    sidebarToggle () {
      this.$refs.sidebarDom.classList.toggle('sidebar-toggled')
    },
    logout () {
      const api = `${process.env.VUE_APP_API}logout`
      this.isLoading = true
      this.$http.post(api)
        .then((res) => {
          if (res.data.success) {
            this.$router.push('/login')
          }
          this.isLoading = false
        })
        .catch((err) => {
          $httpMessageState(err, '連線')
          this.isLoading = false
        })
    }
  }
}
</script>
