import { defineComponent, renderSlot, openBlock, createBlock, Teleport as Teleport$1 } from "vue";
import { b as buildProps, g as definePropType, f as _export_sfc, w as withInstall } from "../server.mjs";
const teleportProps = buildProps({
  to: {
    type: definePropType([String, Object]),
    required: true
  },
  disabled: Boolean
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "teleport",
  props: teleportProps,
  setup(__props) {
    return (_ctx, _cache) => {
      return _ctx.disabled ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createBlock(Teleport$1, {
        key: 1,
        to: _ctx.to
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8, ["to"]));
    };
  }
});
var Teleport = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "teleport.vue"]]);
const ElTeleport = withInstall(Teleport);
export {
  ElTeleport as E
};
//# sourceMappingURL=index-DvP72MIN.js.map
