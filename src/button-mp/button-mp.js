Component({
  properties: {
    content: {
      type: String,
      value: '',
    },
    visible: {
      type: Boolean,
      value: false,
    },
  },
  methods: {
    showTooltip() {
      this.setData({visible: true})
    },
    hideTooltip() {
      this.setData({visible: false})
    },
  },
})
