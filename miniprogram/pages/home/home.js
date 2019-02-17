// miniprogram/pages/home/home.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      duration: 500,
      interval: 3000,
      canClick: true
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function(options) {
      const app = getApp();
      const db = wx.cloud.database();
      db.collection('bannerList').where({
         _id: "banner"
      }).get().then(res => {
         // banner图多于1张，展示指示器和自动播放
         if (res.data[0].bannerList.length > 1) {
            this.setData({
               data: res.data[0],
               designList: app.globalData.designList,
               indicatorDots: true,
               autoPlay: true
            })
         } else {
            // banner图只有一张，隐藏指示器，停止自动播放
            this.setData({
               data: res.data[0],
               designList: app.globalData.designList,
               indicatorDots: false,
               autoPlay: false
            })
         }
      })
   },

   /**
    * 生命周期函数--监听页面初次渲染完成
    */
   onReady: function() {

   },

   /**
    * 生命周期函数--监听页面显示
    */
   onShow: function() {

   },

   /**
    * 生命周期函数--监听页面隐藏
    */
   onHide: function() {

   },

   /**
    * 生命周期函数--监听页面卸载
    */
   onUnload: function() {
      clearTimeout()
   },

   /**
    * 页面相关事件处理函数--监听用户下拉动作
    */
   onPullDownRefresh: function() {

   },

   /**
    * 页面上拉触底事件的处理函数
    */
   onReachBottom: function() {

   },

   /**
    * 用户点击右上角分享
    */
   onShareAppMessage: function() {

   },

   gotoMine() {
      wx.switchTab({
         url: './../mine/mine',
      })
   },

   gotoDesign() {
      wx.switchTab({
         url: './../design/design',
      })
   },
   showCover(e) {
      let index = e.currentTarget.dataset.index;
      let newList = this.data.designList;
      if (this.data.designList[index].showCover == false && this.data.canClick) {
         newList[index].showCover = true;
         this.setData({
            designList: newList,
            canClick: false
         }, () => {
            setTimeout(() => {
					if (this.data.designList[index].shortName == "jmf" || this.data.designList[index].shortName == "ang" || this.data.designList[index].shortName == "jjtg"){
						wx.navigateTo({
							url: '/pages/detail/detail?shortName=' + this.data.designList[index].shortName + '',
							success: function (res) { },
							fail: function (res) { },
							complete: function (res) { },
						})
					}
					else{
						wx.navigateTo({
							url: `/pages/detail-${this.data.designList[index].shortName}/detail-${this.data.designList[index].shortName}`,
							success: function (res) { },
							fail: function (res) { },
							complete: function (res) { },
						})
					}
               newList[index].showCover = false;
               this.setData({
                  designList: newList,
                  canClick: true
               }, () => {
                  
               })
            }, 400)
         })
      } else return;
   }
})