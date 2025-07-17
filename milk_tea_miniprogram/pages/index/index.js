Page({
  scanCode() {
    wx.scanCode({
      success: () => {
        wx.navigateTo({
          url: '../order/order'
        })
      }
    })
  },
  goDelivery() {
    wx.navigateTo({
      url: '../order/order?delivery=1'
    })
  }
})
