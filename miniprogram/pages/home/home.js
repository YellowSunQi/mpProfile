// miniprogram/pages/home/home.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      duration: 500,
      interval: 3000
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function(options) {
      const db = wx.cloud.database();
      db.collection('bannerList').where({
         _id: "banner"
      }).get().then(res => {
         console.log(res)
         if (res.data[0].bannerList.length > 1) {
            this.setData({
               data: res.data[0],
               indicatorDots: true,
               autoPlay: true
            })
         }
			else{
				this.setData({
					data: res.data[0],
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

   }
})