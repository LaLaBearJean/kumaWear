<template>
  <footer class="border-top py-4">
    <div class="container">
      <div class="row row-cols-1 row-cols-lg-3 text-center text-lg-start">
        <div class="col mb-3 mb-lg-0">
          <h3 class="fw-bold">關於我們</h3>
          <ul class="list-unstyled d-flex justify-content-center justify-content-lg-start">
            <li class="pe-4"><a href="https://www.instagram.com/" target="_blank" class="link-danger"><i class="bi bi-instagram fs-2"></i></a></li>
            <li class="pe-4"><a href="https://www.facebook.com/" target="_blank"><i class="bi bi-facebook fs-2"></i></a></li>
            <li><a href="https://twitter.com/" target="_blank"><i class="bi bi-twitter fs-2"></i></a></li>
          </ul>
        </div>
        <div class="col mb-3 mb-lg-0">
          <h3 class="fw-bold">聯絡我們</h3>
          <ul class="list-unstyled lh-lg">
            <li>407台中市西屯區台灣大道三段</li>
            <li><a href="tel:+886-886-886" class="text-decoration-none link-dark">+886 886 886</a></li>
            <li><a href="mailto:service@kumawear.com" class="text-decoration-none link-dark">service@kumawear.com</a></li>
            <li>MON. - FRI. 11:00-20:00 (假日及國定假日除外)</li>
          </ul>
        </div>
        <div class="col">
          <h3 class="fw-bold">加入我們</h3>
          <a href="#" class="btn btn-outline-secondary" @click.prevent="goShopping">購物去</a>
        </div>
      </div>
      <p class="mt-3 text-center text-secondary"><i class="bi bi-star-fill pe-2"></i>本網頁僅供學習使用，無任何商業用途<i class="bi bi-star-fill ps-2"></i></p>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    goShopping () {
      this.$router.push('/user/productlist')
    }
  }
}
</script>
