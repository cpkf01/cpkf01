// pages/classic/classic.js
import {ClassicModel} from '../../models/classic.js';
let classic = new ClassicModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    load:22
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 
    classic.getLatest((res)=>{})
    // console.log(this.data.load);
    // http.request({
    //   url:'classic/latest',
    //   success:(res)=>{
    //     console.log(res)
    //   }
    // })
    // wx.request({
    //   // url也可以写为'http://bl.7yue.pro/v1/classic/latest?appkey=8hARSMgfuY2ykKws',
    //   // 一般appkey写在header里
    //   url:'http://bl.7yue.pro/v1/classic/latest',
    //   header:{
    //     appkey:"8hARSMgfuY2ykKws"
    //   },
    //   // 回调函数
    //   success:(res)=>{
    //     console.log(this.data.load);
    //     console.log(res);
    //   }
    // })
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

  }
})