import { _ as __nuxt_component_0 } from "./index-D6B4tX2N.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import challengesBanner from "./index-DQkzZjD6.js";
import challengesProgram from "./index-CnkYLAqF.js";
import challengesHowToSuccess from "./index-CoVUoHfU.js";
import challengesPolicy from "./index-BcU5o72X.js";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import "../server.mjs";
import "decimal.js";
import "dayjs";
import "./index-D3nYuMsg.js";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
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
import "./client-only-Db1Q_2tj.js";
import "./index-C-aEYaqc.js";
import "@popperjs/core";
import "./index-DvP72MIN.js";
/* empty css                   */
import "./doubt-Cq7olve3.js";
import "./index-Cugr8uAE.js";
import "./index-Bg8OR1km.js";
import "./index-BpFK4D3P.js";
import "./challengesData-Ie0NoZuw.js";
import "./yellow-BzR1n8Bd.js";
import "./isMobile-BdEqHLRM.js";
import "./useChallengeInfo-D8ZmMr9V.js";
import "./challenge-C5uxJouc.js";
import "./useRequest-FImzQkjq.js";
import "./directive-o9p6vhNm.js";
import "./config-81Rc5edc.js";
import "./challenges-DfBymhN9.js";
import "lodash-es";
import "./detailPopup-BGCepMil.js";
import "./index-DcwL4Y5F.js";
import "./entry-styles-3.mjs-IQ1Ycl8h.js";
import "swiper/modules";
import "./close-CUfcVM9H.js";
import "./item-CdlyubjY.js";
import "./successLi-kfq3FYbI.js";
import "./index-DP8eDe_k.js";
import "./policy-vMQiws2_.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicTipsScroll = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "challenges-page" }, _attrs))}>`);
      _push(ssrRenderComponent(challengesBanner, null, null, _parent));
      _push(ssrRenderComponent(_component_publicTipsScroll, null, null, _parent));
      _push(`<div id="plan"></div>`);
      _push(ssrRenderComponent(challengesProgram, null, null, _parent));
      _push(ssrRenderComponent(challengesHowToSuccess, null, null, _parent));
      _push(ssrRenderComponent(challengesPolicy, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/challenges/index/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BECJ1_ky.js.map
