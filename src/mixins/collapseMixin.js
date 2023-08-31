import Collapse from 'bootstrap/js/dist/collapse'
export default {
  methods: {
    toggleCollapse () {
      this.Collapse.toggle()
    },
    hideCollapse () {
      this.Collapse.hide()
    }
  },
  mounted () {
    this.Collapse = new Collapse(this.$refs.collapse, {
      toggle: false
    })
  }
}
