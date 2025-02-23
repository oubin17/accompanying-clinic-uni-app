"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  _easycom_navBar2();
}
const _easycom_navBar = () => "../../components/navBar/navBar.js";
if (!Math) {
  _easycom_navBar();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const app = getApp();
    common_vendor.onLoad(() => {
      app.globalData.utils.getUserInfo();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          isHome: true
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
