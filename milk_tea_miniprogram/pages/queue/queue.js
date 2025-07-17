const app = getApp()

Page({
  data: {
    orderNumber: ''
  },
  onLoad() {
    const num = Math.floor(Math.random() * 1000)
    this.setData({ orderNumber: num })
    app.globalData.orderNumber = num
  }
})
