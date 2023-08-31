<template>
  <ul class="stepper-wrapper list-unstyled d-flex justify-content-around mb-4" ref="stepper">
    <li>
      <span class="step-content"><i class="bi bi-cart fs-4"></i></span>
      <span>購物車</span>
    </li>
    <li>
      <span class="step-content"><i class="bi bi-credit-card fs-4"></i></span>
      <span>付款</span>
    </li>
    <li>
      <span class="step-content"><i class="bi bi-check-circle fs-4"></i></span>
      <span>完成</span>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    addStepperStatus (num) {
      this.$refs.stepper.childNodes.forEach((item, index) => {
        if (num === index + 1) {
          item.classList.add('active')
        } else {
          item.classList.remove('active')
        }
      })
    }
  }
}
</script>
