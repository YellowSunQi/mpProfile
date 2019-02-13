// miniprogram/pages/basic/basic.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      imgList: [{
            src: '/images/Sketch.png'
         },
         {
            src: '/images/PS.png'
         },
         {
            src: '/images/AI.png'
         },
         {
            src: '/images/AE.png'
         },
         {
            src: '/images/Principle.png'
         },
         {
            src: '/images/AxureRP.png'
         },
         {
            src: '/images/DW.png'
         },
         {
            src: '/images/Sublime.png'
         }
      ]
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function(options) {

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

   },

   imgLoad(e) {
      console.log(e.target.dataset.index)
      let $width = e.detail.width,
         $height = e.detail.height,
         ratio = $width / $height;
      const imgHeight = 64;
      let imgWidth = 64 * ratio,
         imgLists = this.data.imgList;
      imgLists[e.target.dataset.index].width = imgWidth;
      imgLists[e.target.dataset.index].height = imgHeight;
      this.setData({
         imgList: imgLists
      })
   }
})