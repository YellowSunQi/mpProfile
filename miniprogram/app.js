//app.js
App({
   onLaunch: function() {

      if (!wx.cloud) {
         console.error('请使用 2.2.3 或以上的基础库以使用云能力')
      } else {
         wx.cloud.init({
            traceUser: true,
         })
      }

      this.globalData = {
         designList: [{
            id: 1,
            itemName: '小象直播',
            shortName: 'xxzb',
            itemSort: '移动端APP设计',
            showCover: false
         }, {
            id: 2,
            itemName: 'VINO SOPHY',
            shortName: 'vs',
            itemSort: '移动端H5设计',
            showCover: false
         }, {
            id: 3,
            itemName: '易物网',
            shortName: 'yww',
            itemSort: '移动端APP设计',
            showCover: false
         }, {
            id: 4,
            itemName: 'JUST匠·舍',
            shortName: 'jjs',
            itemSort: '移动端H5设计',
            showCover: false
         }, {
            id: 5,
            itemName: 'JUST匠·礼',
            shortName: 'jjl',
            itemSort: '移动端H5设计',
            showCover: false
         }, {
            id: 6,
            itemName: '易物网后台管理系统',
            shortName: 'htgl',
            itemSort: 'Web端后台管理系统设计',
            showCover: false
         }, {
            id: 7,
            itemName: '爱牛股',
            shortName: 'ang',
            itemSort: '移动端APP设计',
            showCover: false
         }, {
            id: 8,
            itemName: '巨景投顾',
            shortName: 'jjtg',
            itemSort: '移动端H5设计',
            showCover: false
         }, {
            id: 9,
            itemName: '金蜜蜂官网',
            shortName: 'jmf',
            itemSort: 'Web端官网',
            showCover: false
         }]
      }
   }
})