import { _ as _export_sfc, a as __nuxt_component_2 } from "../server.mjs";
import { mergeProps, withCtx, createVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { _ as _imports_0 } from "./back-Dn6PN45-.js";
import { _ as _imports_1 } from "./policy-vMQiws2_.js";
import { f as PAY_MSG } from "./index-D3nYuMsg.js";
import "hookable";
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
import "destr";
import "ohash";
import "klona";
import "decimal.js";
import "dayjs";
import "consola";
import "@vueuse/core";
import "@vue/shared";
import "lodash-unified";
import "deep-pick-omit";
import "jsencrypt/lib/JSEncrypt.js";
import "axios";
const _sfc_main$1 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link_locale = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "payment" }, _attrs))} data-v-f9c08c64><div class="payment_back" data-v-f9c08c64>`);
      _push(ssrRenderComponent(_component_nuxt_link_locale, {
        to: "/",
        class: "icon"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="" data-v-f9c08c64${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` 返回 </div><div class="payment_tabs" data-v-f9c08c64><button class="btn pay actived" data-v-f9c08c64>法币支付</button><button class="btn cryp" data-v-f9c08c64>加密货币入金</button></div><div class="payment_details" data-v-f9c08c64><div class="pri" data-v-f9c08c64><span data-v-f9c08c64>$10,0000</span><button class="btn" data-v-f9c08c64>付款金额</button></div><div class="detail-list" data-v-f9c08c64><!--[-->`);
      ssrRenderList(unref(PAY_MSG), (detail, idx) => {
        _push(`<div class="item" data-v-f9c08c64><p class="title" data-v-f9c08c64>${ssrInterpolate(detail.title)}</p><p class="content" data-v-f9c08c64>${ssrInterpolate(detail.content)}</p></div>`);
      });
      _push(`<!--]--></div></div><div class="payment_channel" data-v-f9c08c64><div class="channel-header" data-v-f9c08c64><span class="msg grey" data-v-f9c08c64>交易平台</span><span class="msg mc" data-v-f9c08c64>MC Markets （MT5）</span><span class="msg grey" data-v-f9c08c64>绑定邮箱</span><span class="msg" data-v-f9c08c64>a123456789@gmail.com</span></div><div class="channel_title" data-v-f9c08c64>支付渠道</div><div class="channel_list" data-v-f9c08c64><!--[-->`);
      ssrRenderList(10, (v, k) => {
        _push(`<div class="${ssrRenderClass([{ acitved: k === 0 }, "list-item"])}" data-v-f9c08c64><img class="pic"${ssrRenderAttr("src", _imports_1)} data-v-f9c08c64></div>`);
      });
      _push(`<!--]--></div><div class="channel_tips" data-v-f9c08c64>点击&#39;确认&#39;按钮，即表示你同意将绑定邮箱的MC Markets账户与MFT进行绑定。若该邮箱在MC Markets平台上未注册，我们将自动为你完成注册。若该邮箱账户在进行其他挑战，则系统会自动为你分配新的账号，并将账号密码发送至你的邮箱。</div><button class="channel_pay" data-v-f9c08c64>确认 $99</button></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/payFb/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f9c08c64"]]);
const _sfc_main = {
  __name: "payFb",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_userPayFb = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "pay-fb" }, _attrs))} data-v-9dcc2a14>`);
      _push(ssrRenderComponent(_component_userPayFb, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/payFb.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const payFb = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9dcc2a14"]]);
export {
  payFb as default
};
//# sourceMappingURL=payFb-CZsd65kS.js.map
