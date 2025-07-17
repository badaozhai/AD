Page({
  data: {
    method: 'wechat'
  },
  choosePay(e) {
    this.setData({ method: e.detail.value })
  },
  pay() {
    if (this.data.method === 'wechat') {
      // 模拟微信支付
      wx.requestPayment({
        timeStamp: '',
        nonceStr: '',
        package: '',
        signType: 'MD5',
        paySign: '',
        success: () => {
          wx.navigateTo({ url: '../queue/queue' })
        }
      })
    } else {
      // 模拟信用卡支付
      wx.showModal({
        title: '信用卡支付',
        content: '支付成功',
        success: () => {
          wx.navigateTo({ url: '../queue/queue' })
        }
      })
    }
  }
})
