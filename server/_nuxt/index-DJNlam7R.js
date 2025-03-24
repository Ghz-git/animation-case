import { defineComponent, ref, provide, openBlock, createElementBlock, normalizeClass, unref, renderSlot, getCurrentInstance, inject, createElementVNode, createBlock, withCtx, resolveDynamicComponent, toDisplayString, mergeProps, createTextVNode, Fragment, renderList, useSSRContext } from "vue";
import { b as buildProps, i as iconPropType, c as useLocale, e as useNamespace, f as _export_sfc, g as definePropType, E as ElIcon, w as withInstall, h as withNoopInstall, _ as _export_sfc$1, u as useI18n, n as nuxtTo } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
const breadcrumbKey = Symbol("breadcrumbKey");
const breadcrumbProps = buildProps({
  separator: {
    type: String,
    default: "/"
  },
  separatorIcon: {
    type: iconPropType
  }
});
const __default__$1 = defineComponent({
  name: "ElBreadcrumb"
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: breadcrumbProps,
  setup(__props) {
    const props = __props;
    const { t } = useLocale();
    const ns = useNamespace("breadcrumb");
    const breadcrumb = ref();
    provide(breadcrumbKey, props);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "breadcrumb",
        ref: breadcrumb,
        class: normalizeClass(unref(ns).b()),
        "aria-label": unref(t)("el.breadcrumb.label"),
        role: "navigation"
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, ["aria-label"]);
    };
  }
});
var Breadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "breadcrumb.vue"]]);
const breadcrumbItemProps = buildProps({
  to: {
    type: definePropType([String, Object]),
    default: ""
  },
  replace: Boolean
});
const __default__ = defineComponent({
  name: "ElBreadcrumbItem"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: breadcrumbItemProps,
  setup(__props) {
    const props = __props;
    const instance = getCurrentInstance();
    const breadcrumbContext = inject(breadcrumbKey, void 0);
    const ns = useNamespace("breadcrumb");
    const router = instance.appContext.config.globalProperties.$router;
    const link = ref();
    const onClick = () => {
      if (!props.to || !router)
        return;
      props.replace ? router.replace(props.to) : router.push(props.to);
    };
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(ns).e("item"))
      }, [
        createElementVNode("span", {
          ref_key: "link",
          ref: link,
          class: normalizeClass([unref(ns).e("inner"), unref(ns).is("link", !!_ctx.to)]),
          role: "link",
          onClick
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2),
        ((_a = unref(breadcrumbContext)) == null ? void 0 : _a.separatorIcon) ? (openBlock(), createBlock(unref(ElIcon), {
          key: 0,
          class: normalizeClass(unref(ns).e("separator"))
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(unref(breadcrumbContext).separatorIcon)))
          ]),
          _: 1
        }, 8, ["class"])) : (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(unref(ns).e("separator")),
          role: "presentation"
        }, toDisplayString((_b = unref(breadcrumbContext)) == null ? void 0 : _b.separator), 3))
      ], 2);
    };
  }
});
var BreadcrumbItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "breadcrumb-item.vue"]]);
const ElBreadcrumb = withInstall(Breadcrumb, {
  BreadcrumbItem
});
const ElBreadcrumbItem = withNoopInstall(BreadcrumbItem);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const { t } = useI18n();
    const props = __props;
    let active = ref(props.item.length - 1);
    const linkTo = (path, idx) => {
      active.value = idx;
      path && nuxtTo(path);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_breadcrumb = ElBreadcrumb;
      const _component_el_breadcrumb_item = ElBreadcrumbItem;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "breadcrumb" }, _attrs))} data-v-dc3cf611>`);
      _push(ssrRenderComponent(_component_el_breadcrumb, { separator: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.item, (v, k) => {
              _push2(ssrRenderComponent(_component_el_breadcrumb_item, {
                onClick: ($event) => linkTo(v.path, k),
                key: k,
                class: { "active": k === unref(active) }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(t)(v.page))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(t)(v.page)), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.item, (v, k) => {
                return openBlock(), createBlock(_component_el_breadcrumb_item, {
                  onClick: ($event) => linkTo(v.path, k),
                  key: k,
                  class: { "active": k === unref(active) }
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)(v.page)), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick", "class"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/public/breadcrumb/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-dc3cf611"]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=index-DJNlam7R.js.map
