<template>
  <header class="header mb-5 d-flex justify-content-center align-items-center bg-attachment-fixed bg-size-cover bg-position-center" :style="{backgroundImage: 'url('+ banner +')'}">
    <div class="p-3 text-center text-light bg-dark-gradient">
      <h2>KumaWear選品小店</h2>
      <p class="h4">天然 x 舒適 x 簡約</p>
      <a href="#" class="btn btn-outline-light btn-lg" @click.prevent="goShopping">進店逛逛</a>
    </div>
  </header>

  <section class="container mb-5">
    <div class="row row-cols-1 row-cols-lg-2 flex-lg-row-reverse">
      <div class="col d-flex align-items-center">
        <div class="text-center">
          <h3 class="fw-bold">有機棉</h3>
          <p class="lh-lg">我們的衣服都是選用有機棉，有機棉是從非轉基因改造的棉花種子通過有機種植的棉花，並且不使用任何合成農業化學品，如肥料或殺蟲劑。讓大家穿得安心又舒適。</p>
          <p class="lh-lg">產品皆通過CU認證，Control Union World Group(管制聯盟全球集團)公司1920年成立於荷蘭，長期從事檢驗認證服務，是荷蘭知名的檢驗認證機構。</p>
        </div>
      </div>
      <div class="col">
        <img class="w-100 object-fit-cover" src="@/assets/images/cotton.jpg" alt="cotton">
      </div>
    </div>
    <div class="row row-cols-1 row-cols-lg-2 mt-3">
      <div class="col d-flex align-items-center">
        <div class="text-center">
          <h3 class="fw-bold">嚴選好物</h3>
          <p class="lh-lg">我們的選品不僅是衣服，還包含了裝飾品、保養品，都是親身使用過，想找最好的產品用最實惠的價格給大家，唯有確認過品質才敢販售給客人。</p>
          <p>請大家安心挑選，保證會再次回購</p>
        </div>
      </div>
      <div class="col">
        <img class="w-100 object-fit-cover" src="@/assets/images/selectProduct.jpg" alt="嚴選商品">
      </div>
    </div>
  </section>

  <section class="bg-light p-4 text-center">
    <h2 class="fw-bold mb-4">2023 July. 7/16 Opening</h2>
    <ul class="list-unstyled lh-lg">
      <li><i class="bi bi-airplane"></i> 不限金額免運 free shipping</li>
      <li><i class="bi bi-heart-fill"></i> 單筆滿2000贈送愛心手機鍊</li>
      <li><i class="bi bi-c-circle"></i> 輸入折扣碼「junopen666」即享9折優惠</li>
      <li><i class="bi bi-facebook"></i> 8/31前到FB按讚即可參加抽獎</li>
      <li><i class="bi bi-instagram"></i> 8/31前到IG分享貼文即可參加抽獎</li>
    </ul>
    <p>--------------------------------------------</p>
    <h4 class="fw-bold">購物須知</h4>
    <ol class="d-flex flex-column align-items-center lh-lg">
      <li>訂單付款完成後，不接受任何理由改單</li>
      <li>付款方式提供線上刷卡、ATM轉帳、超商取貨付款</li>
      <li>寄送方式提供宅配、四大超商(7-11、全家、萊爾富、OK)</li>
      <li>提供7天鑑賞期，每筆訂單提供退換貨乙次</li>
      <li>若商品缺件、瑕疵請於收到貨48小時內拍照與我們反應</li>
    </ol>
  </section>
</template>

<script>
import banner from '@/assets/images/banner.jpg'
export default {
  data () {
    return {
      banner
    }
  },
  methods: {
    goShopping () {
      this.$router.push('/user/productlist')
    }
  }
}
</script>
