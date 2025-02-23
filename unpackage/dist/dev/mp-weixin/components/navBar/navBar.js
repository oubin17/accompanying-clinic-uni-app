"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "navBar",
  props: ["name", "content"],
  emits: ["changeDataEmit"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const handleChange = () => {
      emit("changeDataEmit", "修改后的数据");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(props.name),
        b: common_vendor.t(props.content),
        c: common_vendor.o(handleChange)
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/navBar/navBar.js.map
