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
    const data = common_vendor.ref("动态数组样例");
    const changeData = (val) => {
      data.value = val;
      common_vendor.index.__f__("log", "at pages/index/index.vue:16", val);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(changeData),
        b: common_vendor.p({
          name: "我是navBar组件",
          content: data.value
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
