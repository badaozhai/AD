const app = getApp()

Page({
  data: {
    items: [
      { name: '经典奶茶', price: 12 },
      { name: '珍珠奶茶', price: 15 },
      { name: '水果奶茶', price: 18 }
    ]
  },
  addCart(e) {
    const name = e.currentTarget.dataset.name
    app.globalData.cart.push(name)
  },
  goPay() {
    wx.navigateTo({
      url: '../payment/payment'
    })
  }
})
