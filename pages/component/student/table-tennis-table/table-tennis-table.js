var coach;
var time;
var texts;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'Monday', value: '星期一' },
      { name: 'Tuesday', value: '星期二', },
      { name: 'Wedneaday', value: '星期三' },
      { name: 'Thursday', value: '星期四' },
      { name: 'Friday', value: '星期五' },
      { name: 'Saturday', value: '星期六' },
      { name: 'Sunday', value: '星期天' },
    ],
    array: ['教练1', '教练2',],
    index: 0,
    array1: ['10.00-11.00', '11.00-12.00'],
    index1: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
    coach = this.data.array[e.detail.value]
  },
  bindPickerChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
    time = this.data.array1[e.detail.value]
  },

  checkboxChange: function (e) {
    var text = [];
    var id = [];
    for (var i = 0; i < e.detail.value.length; i++) {
      var aaa = e.detail.value[i].split(',');
      text = text.concat(aaa[0])
      id = id.concat(aaa[1])
    };
    texts = text;
  },
  submit: function (e) {
    console.log(texts)
  }
})
