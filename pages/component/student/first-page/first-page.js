// pages/components/first-page/first-page.js
var sex_value
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: {
    },
    date: '2000-09-01',
    sex: [
      { name: '0', value: '男'},
      { name: '1', value: '女'}
    ]
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
  listenRadioGroup: function (value) {
    console.log(value)
    sex_value = value.detail.value
  },
  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    })
    console.log(this.data.date)
  },
  onShareAppMessage: function () {

  },
  input: function(e){
    var parm = e.target.id
    console.log(e.target.id)
    this.setData({ [parm]: e.detail.value})
    console.log(this.data)
  },
  registe: function(event){
    var s = ''
    for (var index in this.data) {
      if (index!='__webviewId__'){
        s += [index + '=' +this.data[index]+'&']}
    }
    s = s.substr(0,s.length-1)
    console.log(this.data)
    wx:wx.request({
      url: 'http://localhost:8080/tst_demo/insertstudent.jsp',
      data: {
        'StudentName': this.data.name,
        'Age': this.data.age,
        'Sex': sex_value,
        'StudentIDNumber': this.data.cardid,
        'Date': this.data.date,
        'SchoolName': this.data.school
      }
    })

    wx.switchTab({
      url: '/pages/component/student/home-page/home-page',
      
    })
  }
})