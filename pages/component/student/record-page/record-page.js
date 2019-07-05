Page({
  data: {
    ymq: ['周一 9：30-11：30     (2019.7.1)', '周二 9：30-11：30     (2019.7.2）'],
    ppq: ['周一 9：30-11：30     (2019.7.3)', '周二 9：30-11：30     (2019.7.4）'],
    lq: ['周一 9：30-11：30     (2019.7.5)', '周二 9：30-11：30     (2019.7.6）'],
    px: [],
    pxopen1: false,
    pxshow1: false,
    active1: true,
    pxopen2: false,
    pxshow2: false,
    active2: true,
    pxopen3: false,
    pxshow3: false,
    active3: true,
    imgUrl: "../../images/down.png"
  },
  onLoad: function () {
  },
  listpx1: function (e) {
    console.log(e)
    if (this.data.pxopen1) {
      this.setData({
        pxopen1: false,
        pxshow1: false,
        active1: true,
        imgUrl: "../../images/down.png"
      })
    } else {
      this.setData({
        pxopen1: true,
        pxshow1: false,
        active1: false,
        imgUrl: "../../images/up.png"
      })
    }
    console.log(e.target)
  },
  listpx2: function (e) {
    console.log(e)
    if (this.data.pxopen2) {
      this.setData({
        pxopen2: false,
        pxshow2: false,
        active2: true,
        imgUrl: "../../images/down.png"
      })
    } else {
      this.setData({
        pxopen2: true,
        pxshow2: false,
        active2: false,
        imgUrl: "../../images/up.png"
      })
    }
    console.log(e.target)
  },
  listpx3: function (e) {
    console.log(e)
    if (this.data.pxopen3) {
      this.setData({
        pxopen3: false,
        pxshow3: false,
        active3: true,
        imgUrl: "../../images/down.png"
      })
    } else {
      this.setData({
        pxopen3: true,
        pxshow3: false,
        active3: false,
        imgUrl: "../../images/up.png"
      })
    }
    console.log(e.target)
  }
  
})