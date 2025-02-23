"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _component_my_component = common_vendor.resolveComponent("my-component");
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  (_component_my_component + _easycom_navBar2)();
}
const _easycom_navBar = () => "../../components/navBar/navBar.js";
if (!Math) {
  _easycom_navBar();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const title = common_vendor.ref("Hello1");
    const list = common_vendor.reactive([
      { name: "apple", num: 1 },
      { name: "orange", num: 2 },
      { name: "banana", num: 3 }
    ]);
    const handleClick = () => {
      list.forEach((element) => {
        element.num++;
      });
    };
    common_vendor.onLoad(() => {
      common_vendor.index.__f__("log", "at pages/index/index.vue:37", "onLoad生命周期");
    });
    const totalNum = common_vendor.computed(() => {
      return list.reduce((total, cur) => total + cur.num, 0);
    });
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.t(title.value),
        c: common_vendor.o(handleClick),
        d: common_vendor.t(totalNum.value),
        e: common_vendor.f(list, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.num),
            c: item.name
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
