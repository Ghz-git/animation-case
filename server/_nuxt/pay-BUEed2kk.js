import { _ as _export_sfc, u as useI18n, a as __nuxt_component_2 } from "../server.mjs";
import { mergeProps, unref, useSSRContext, ref, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { d as PAY_DESC, e as PAYMENT_DESC } from "./index-D3nYuMsg.js";
import { _ as _imports_0 } from "./back-Dn6PN45-.js";
import { u as ucIcon11 } from "./icon-card1-Cffy6RY4.js";
import { P as PAY_CHANNEL } from "./image-DxSJLE4L.js";
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
const _sfc_main$2 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "desc" }, _attrs))} data-v-c1c1e523><h5 class="title" data-v-c1c1e523>${ssrInterpolate(unref(t)("Battle.orderDesc"))}</h5><div class="acount-total" data-v-c1c1e523><div class="acount-btn" data-v-c1c1e523>${ssrInterpolate(unref(t)("Battle.size"))}</div><span data-v-c1c1e523>$10,000</span></div><div class="desc-list" data-v-c1c1e523><!--[-->`);
      ssrRenderList(unref(PAY_DESC), (desc, idx) => {
        _push(`<div class="desc-item" data-v-c1c1e523><span class="key" data-v-c1c1e523>${ssrInterpolate(desc.key)}</span><span class="val" data-v-c1c1e523>${ssrInterpolate(desc.val)}</span></div>`);
      });
      _push(`<!--]--></div><div class="post-btn" data-v-c1c1e523>${ssrInterpolate(unref(t)("Pay.now"))}</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/desc/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-c1c1e523"]]);
const _sfc_main$1 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    let isShow = ref(false);
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link_locale = __nuxt_component_2;
      const _component_userDesc = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pay" }, _attrs))} data-v-1ae0f452><div class="pay_back" data-v-1ae0f452>`);
      _push(ssrRenderComponent(_component_nuxt_link_locale, {
        to: "/",
        class: "icon"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="" data-v-1ae0f452${_scopeId}>`);
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
      _push(` ${ssrInterpolate(unref(t)("Battle.back"))}</div><div class="pay_inner" data-v-1ae0f452><div class="pay_inner-order" data-v-1ae0f452><h5 class="title" data-v-1ae0f452>订单支付</h5><div class="total" data-v-1ae0f452>Total amount</div><div class="amount" data-v-1ae0f452>99 USD</div><div class="total" data-v-1ae0f452>付款方式</div><div class="pay-channel" data-v-1ae0f452><!--[-->`);
      ssrRenderList(unref(PAY_CHANNEL), (v, k) => {
        _push(`<div class="${ssrRenderClass([{ actived: k === 0 }, "pay-channel__item"])}" data-v-1ae0f452><img class="pic"${ssrRenderAttr("src", ucIcon11)} data-v-1ae0f452><span data-v-1ae0f452>${ssrInterpolate(v.txt)}</span></div>`);
      });
      _push(`<!--]--></div><div class="pay-tips" data-v-1ae0f452>Please make your payments to：</div>`);
      if (unref(isShow)) {
        _push(`<div class="pay-info" data-v-1ae0f452><div class="info" data-v-1ae0f452><div class="info-item" data-v-1ae0f452><span class="name" data-v-1ae0f452>Bank Name</span><span data-v-1ae0f452>+1 666666666</span></div><div class="info-item" data-v-1ae0f452><span class="name" data-v-1ae0f452>Currency</span><span data-v-1ae0f452>USD</span></div></div><div class="code" data-v-1ae0f452><img class="pic"${ssrRenderAttr("src", ucIcon11)} data-v-1ae0f452></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="pay-payment" data-v-1ae0f452><!--[-->`);
      ssrRenderList(unref(PAYMENT_DESC), (desc) => {
        _push(`<div class="pay-payment__desc" data-v-1ae0f452><div class="label" data-v-1ae0f452>${ssrInterpolate(desc.key)}</div><div class="txt" data-v-1ae0f452>${ssrInterpolate(desc.val)}</div></div>`);
      });
      _push(`<!--]--></div></div><div class="pay_inner-desc" data-v-1ae0f452>`);
      _push(ssrRenderComponent(_component_userDesc, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/pay/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1ae0f452"]]);
const _sfc_main = {
  __name: "pay",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_userPay = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "pay" }, _attrs))} data-v-a1bb4db8>`);
      _push(ssrRenderComponent(_component_userPay, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/pay.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pay = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a1bb4db8"]]);
export {
  pay as default
};
//# sourceMappingURL=pay-BUEed2kk.js.map
