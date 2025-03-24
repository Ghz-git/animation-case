import { _ as __nuxt_component_0 } from "./index-DcwL4Y5F.js";
import { toRefs, ref, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import youTubePlayer from "youtube-player";
import { _ as _export_sfc } from "../server.mjs";
import "decimal.js";
import "hookable";
import "destr";
import "klona";
import "dayjs";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "@vue/devtools-api";
import "cookie-es";
import "ohash";
import "consola";
import "@vueuse/core";
import "@vue/shared";
import "lodash-unified";
import "deep-pick-omit";
import "jsencrypt/lib/JSEncrypt.js";
import "axios";
const _sfc_main = {
  __name: "videoPlayer",
  __ssrInlineRender: true,
  props: {
    id: {
      type: String,
      default: ""
    }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const { id } = toRefs(props);
    const iframeRef = ref();
    const player = ref();
    const bindVideoPlay = () => {
      if (!player.value) {
        player.value = youTubePlayer("youtubePlayer", {
          videoId: id.value,
          width: "100%",
          height: "100%"
        });
      }
      iframeRef.value.maskShow();
      player.value.playVideo();
    };
    const bindMaskClick = () => {
      player.value.pauseVideo();
    };
    __expose({ bindVideoPlay });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicMaskPopup = __nuxt_component_0;
      _push(ssrRenderComponent(_component_publicMaskPopup, mergeProps({
        ref_key: "iframeRef",
        ref: iframeRef,
        isCenter: "",
        onClickMask: bindMaskClick
      }, _attrs), {
        slot_mask: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="iframeBox" data-v-8b606e22${_scopeId}><div id="youtubePlayer" data-v-8b606e22${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "iframeBox" }, [
                createVNode("div", { id: "youtubePlayer" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/academy/education/components/videoPlayer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const videoPlayer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8b606e22"]]);
export {
  videoPlayer as default
};
//# sourceMappingURL=videoPlayer-D1NyNZkz.js.map
