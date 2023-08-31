<template>
  <a href="#" class="scrolltop" v-if="isScrollTop" @click.prevent="goTop"><i class="bi bi-arrow-up fs-3"></i></a>
</template>

<script>
export default {
  data () {
    return {
      isScrollTop: false
    }
  },
  methods: {
    goTop () {
      window.scrollTo(0, 0)
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 100) {
        this.isScrollTop = true
      } else {
        this.isScrollTop = false
      }
    })
  }
}
</script>
