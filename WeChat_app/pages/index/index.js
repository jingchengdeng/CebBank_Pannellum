//index.js
//获取应用实例
const app = getApp()

//显示分享menu
wx.showShareMenu({
  withShareTicket: true
})
//长震动
wx.vibrateLong()

wx.clearStorage()
Page({
  //分享模块
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '光大银行网上展厅',
      path: '/pages/index/index',
      imageUrl: '../../icon/preview.png',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
})

