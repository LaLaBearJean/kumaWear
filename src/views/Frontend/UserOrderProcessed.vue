<template>
  <ProgressBar ref="stepperComponent"/>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <p class="text-center h2"><strong class="text-success">付款完成</strong> 感謝您的購買!</p>
    </div>
  </div>
</template>

<script>
import ProgressBar from '@/components/Frontend/ProgressBar.vue'
export default {
  components: { ProgressBar },
  mounted () {
    this.$refs.stepperComponent.addStepperStatus(3)
  }
}
</script>
