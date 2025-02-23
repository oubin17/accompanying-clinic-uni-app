"use strict";
const common_vendor = require("../vendor.js");
class Utils {
  constructor() {
    this.baseUrl = "http://127.0.0.1:8080/accompanying-clinic/api";
  }
  //获取用户信息
  getUserInfo() {
    common_vendor.index.login({
      success: (res) => {
        this.request({
          url: "/user/login",
          data: {
            "loginId": "1",
            "loginType": "1",
            "identifyType": "1",
            "identifyValue": "123456"
          },
          method: "POST",
          success: (res2) => {
            common_vendor.index.__f__("log", "at common/js/utils.js:22", res2, "res");
          },
          fail: (res2) => {
            common_vendor.index.__f__("log", "at common/js/utils.js:25", res2, "fail");
          }
        });
      }
    });
  }
  request(option = {
    showLoading: false
  }) {
    if (!option.url) {
      return false;
    }
    if (option.showLoading) {
      this.showLoading();
    }
    common_vendor.index.request({
      url: this.baseUrl + option.url,
      data: option.data ? option.data : {},
      header: option.header ? option.header : {},
      method: option.method ? option.method : "GET",
      success: (response) => {
        common_vendor.index.hideLoading();
        if (response.data.success) {
          if (option.success && typeof option.success == "function") {
            option.success(response);
          }
        } else {
          if (option.fail && typeof option.fail == "function") {
            option.fail(response);
          }
        }
      },
      fail: (response) => {
        common_vendor.index.hideLoading();
        common_vendor.index.__f__("log", "at common/js/utils.js:66", response);
      }
    });
  }
  //创建加载的loading效果
  showLoading() {
    const isShowLoading = common_vendor.index.getStorageSync("isShowLoading");
    if (isShowLoading) {
      common_vendor.index.hideLoading();
      common_vendor.index.setStorageSync("isShowLoading", false);
    }
    common_vendor.index.showLoading({
      title: "加载中...",
      complete: function() {
        common_vendor.index.setStorageSync("isShowLoading", true);
      },
      fail: () => {
        common_vendor.index.setStorageSync("isShowLoading", false);
      }
    });
  }
}
const Utils$1 = new Utils();
exports.Utils = Utils$1;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/common/js/utils.js.map
