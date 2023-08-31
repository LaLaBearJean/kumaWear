<template>
  <ToastMessages/>
  <LoadingOverlay :active="isLoading"/>
  <div class="container mt-5">
    <form class="row justify-content-center" @submit.prevent="signIn">
      <div class="col-md-6">
        <h1 class="h3 mb-3">請先登入</h1>
        <div class="mb-3">
          <label for="inputEmail" class="form-label sr-only">Email address</label>
          <input type="email" v-model="user.username" class="form-control" id="inputEmail" placeholder="name@example.com" autocomplete="username" required autofocus>
        </div>
        <div class="mb-3">
          <label for="inputPassword" class="form-label sr-only">Password</label>
          <input type="password" v-model="user.password" class="form-control" id="inputPassword" placeholder="Password" autocomplete="current-password" required>
        </div>
        <div class="text-end mt-4">
          <button class="btn btn-lg btn-primary" type="submit">登入</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ToastMessages from '@/components/ToastMessages.vue'
import emitter from '@/methods/emitter'
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      isLoading: false
    }
  },
  components: {
    ToastMessages
  },
  provide () {
    return {
      emitter
    }
  },
  methods: {
    signIn () {
      const api = `${process.env.VUE_APP_API}admin/signin`
      this.isLoading = true
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data
            document.cookie = `kumaToken=${token}; expires=${new Date(expired)}`
            this.$router.push('/dashboard/products')
          } else {
            emitter.emit('push-message', {
              style: 'danger',
              title: '登入失敗',
              content: res.data.error.code === 'auth/user-not-found' ? '找不到帳號' : '密碼錯誤'
            })
          }
          this.isLoading = false
        })
    }
  }
}
</script>
