import { E as ElCollapse, a as ElCollapseItem } from "./index-BVvjx3G1.js";
import { _ as _export_sfc, u as useI18n } from "../server.mjs";
/* empty css                          */
import { ref, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import "hookable";
import "@vue/shared";
import "./event-DsDEmsKp.js";
import "lodash-unified";
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
import "deep-pick-omit";
import "jsencrypt/lib/JSEncrypt.js";
import "axios";
const IOS1 = "" + __buildAssetsURL("1.C9uLaWra.png");
const IOS2 = "" + __buildAssetsURL("2.Be6DLCiW.png");
const IOS3 = "" + __buildAssetsURL("3.CKj9FbTH.png");
const IOS4 = "" + __buildAssetsURL("4.CzGVRWbi.png");
const Android1 = "" + __buildAssetsURL("1.h1Lvm7nW.png");
const Android2 = "" + __buildAssetsURL("2.wRzPD-Fa.png");
const Android3 = "" + __buildAssetsURL("3.Ddr_as0s.png");
const Android4 = "" + __buildAssetsURL("4.s_83ls1G.jpg");
const MicrosoftEdge1 = "" + __buildAssetsURL("1.B4wlS5VV.png");
const MicrosoftEdge2 = "" + __buildAssetsURL("2.CSlSVJ34.png");
const MicrosoftEdge3 = "" + __buildAssetsURL("3.D0yoAyMF.png");
const MicrosoftEdge4 = "" + __buildAssetsURL("4.DpPt8auZ.png");
const MicrosoftEdge5 = "" + __buildAssetsURL("5.BzrfFJvi.png");
const PWA_LIST = [
  {
    title: "Safari (iPhone)",
    steps: [
      {
        txt: "GuidePWA.IOS.txt1",
        img: IOS1
      },
      {
        txt: "GuidePWA.IOS.txt2",
        img: IOS2
      },
      {
        txt: "GuidePWA.IOS.txt3",
        img: IOS3
      },
      {
        txt: "GuidePWA.IOS.txt4",
        img: IOS4
      }
    ]
  },
  {
    title: "Chrome (Android)",
    steps: [
      {
        txt: "GuidePWA.Android.txt1",
        img: Android1
      },
      {
        txt: "GuidePWA.Android.txt2",
        img: Android2
      },
      {
        txt: "GuidePWA.Android.txt3",
        img: Android3
      },
      {
        txt: "GuidePWA.Android.txt4",
        img: Android4
      }
    ]
  },
  {
    title: "Microsoft Edge (Android)",
    steps: [
      {
        txt: "GuidePWA.MicrosoftEdge.txt1",
        img: MicrosoftEdge1
      },
      {
        txt: "GuidePWA.MicrosoftEdge.txt2",
        img: MicrosoftEdge2
      },
      {
        txt: "GuidePWA.MicrosoftEdge.txt3",
        img: MicrosoftEdge3
      },
      {
        txt: "GuidePWA.MicrosoftEdge.txt4",
        img: MicrosoftEdge4
      },
      {
        txt: "GuidePWA.MicrosoftEdge.txt5",
        img: MicrosoftEdge5
      }
    ]
  }
];
const _sfc_main = {
  __name: "guidePwaMain",
  __ssrInlineRender: true,
  setup(__props) {
    const activeNames = ref([]);
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_collapse = ElCollapse;
      const _component_el_collapse_item = ElCollapseItem;
      _push(ssrRenderComponent(_component_el_collapse, mergeProps({
        modelValue: activeNames.value,
        "onUpdate:modelValue": ($event) => activeNames.value = $event
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(PWA_LIST), (li, idx) => {
              var _a;
              _push2(`<!--[-->`);
              if (((_a = li.steps) == null ? void 0 : _a.length) > 0) {
                _push2(ssrRenderComponent(_component_el_collapse_item, {
                  title: li.title,
                  name: idx
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<ul data-v-d0a10c7e${_scopeId2}><!--[-->`);
                      ssrRenderList(li.steps, (child, index) => {
                        _push3(`<li class="collapseItem" data-v-d0a10c7e${_scopeId2}><p class="text" data-v-d0a10c7e${_scopeId2}>${ssrInterpolate(index + 1)} . ${ssrInterpolate(unref(t)(child.txt))}</p><img class="icon" alt=""${ssrRenderAttr("src", child.img)} data-v-d0a10c7e${_scopeId2}></li>`);
                      });
                      _push3(`<!--]--></ul>`);
                    } else {
                      return [
                        createVNode("ul", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(li.steps, (child, index) => {
                            return openBlock(), createBlock("li", { class: "collapseItem" }, [
                              createVNode("p", { class: "text" }, toDisplayString(index + 1) + " . " + toDisplayString(unref(t)(child.txt)), 1),
                              createVNode("img", {
                                class: "icon",
                                alt: "",
                                src: child.img
                              }, null, 8, ["src"])
                            ]);
                          }), 256))
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(PWA_LIST), (li, idx) => {
                var _a;
                return openBlock(), createBlock(Fragment, { key: idx }, [
                  ((_a = li.steps) == null ? void 0 : _a.length) > 0 ? (openBlock(), createBlock(_component_el_collapse_item, {
                    key: 0,
                    title: li.title,
                    name: idx
                  }, {
                    default: withCtx(() => [
                      createVNode("ul", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(li.steps, (child, index) => {
                          return openBlock(), createBlock("li", { class: "collapseItem" }, [
                            createVNode("p", { class: "text" }, toDisplayString(index + 1) + " . " + toDisplayString(unref(t)(child.txt)), 1),
                            createVNode("img", {
                              class: "icon",
                              alt: "",
                              src: child.img
                            }, null, 8, ["src"])
                          ]);
                        }), 256))
                      ])
                    ]),
                    _: 2
                  }, 1032, ["title", "name"])) : createCommentVNode("", true)
                ], 64);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/homeScreen/components/guidePwaMain.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const guidePwaMain = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d0a10c7e"]]);
export {
  guidePwaMain as default
};
//# sourceMappingURL=guidePwaMain-Wi_vwbNE.js.map
