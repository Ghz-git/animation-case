import { E as ElTable, a as ElPagination, b as ElTableColumn, c as ElInfiniteScroll } from "./el-checkbox-BJ_Y9WCM.js";
import { _ as __nuxt_component_3 } from "./index-Bms85OJQ.js";
import "dayjs";
import { v as vLoading } from "./directive-o9p6vhNm.js";
import { _ as _export_sfc, u as useI18n, C as formatNumberWithCurrency, a6 as formatterTimeZone, a5 as useSeoMeta } from "../server.mjs";
/* empty css                */
import { ref, computed, mergeProps, unref, withCtx, openBlock, createBlock, toDisplayString, createCommentVNode, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./empty-kcYR4DiL.js";
import { r as getWithDrawList } from "./challenge-C5uxJouc.js";
import { u as useCheckMobile } from "./isMobile-BdEqHLRM.js";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import "decimal.js";
import "lodash-unified";
import "./index-C-aEYaqc.js";
import "@vueuse/core";
import "@popperjs/core";
import "@vue/shared";
import "./index-DvP72MIN.js";
import "./use-form-item-BALinmg-.js";
import "./event-DsDEmsKp.js";
import "./index-DV4HU-o-.js";
import "normalize-wheel-es";
import "./index-DcwL4Y5F.js";
import "./close-CUfcVM9H.js";
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
import "deep-pick-omit";
import "jsencrypt/lib/JSEncrypt.js";
import "axios";
import "./useRequest-FImzQkjq.js";
import "./config-81Rc5edc.js";
const _sfc_main$1 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const waitingSystemRef = ref();
    const isMobile = computed(() => {
      return useCheckMobile().getItem();
    });
    const initData = ref({
      loading: true,
      list: []
    });
    const pageData = ref({
      pageNum: 1,
      pageSize: 10,
      total: 0
    });
    const scrollLoad = () => {
      const total = pageData.value.total;
      const size = pageData.value.pageSize;
      const totalPage = Math.ceil(total / size);
      pageData.value.pageNum += 1;
      if (pageData.value.pageNum <= totalPage) {
        getList();
      }
    };
    const getPageChange = (e) => {
      initData.value.loading = true;
      initData.value.list = [];
      pageData.value.pageNum = e;
      getList();
    };
    const getList = () => {
      getWithDrawList(pageData.value).then((res) => {
        initData.value.loading = false;
        pageData.value.total = res.data.data.total;
        if (isMobile.value) {
          initData.value.list = initData.value.list.concat(
            res.data.data.records
          );
        } else {
          initData.value.list = res.data.data.records;
        }
        initData.value.list.forEach((item) => {
          item.createTime = formatterTimeZone(item.createTime);
        });
      }).catch((err) => {
        initData.value.loading = false;
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_table_column = ElTableColumn;
      const _component_publicTipsPopup = __nuxt_component_3;
      const _directive_loading = vLoading;
      const _directive_infinite_scroll = ElInfiniteScroll;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "ucDiv" }, _attrs))} data-v-00c02395>`);
      if (!unref(isMobile)) {
        _push(`<div class="ucWithDraw" data-v-00c02395><p class="challengeTitle" data-v-00c02395>${ssrInterpolate(unref(t)("User.record"))}</p><div${ssrRenderAttrs(mergeProps({
          class: "homeMain",
          "element-loading-background": "rgba(0, 0, 0, 0.5)"
        }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(initData).loading)))} data-v-00c02395><div class="mftTable" data-v-00c02395>`);
        _push(ssrRenderComponent(unref(ElTable), {
          data: unref(initData).list,
          "empty-text": unref(initData).loading ? "Loading" : "No Data"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_el_table_column, {
                prop: "orderId",
                label: unref(t)("User.list.th1"),
                width: "100",
                fixed: "",
                "show-overflow-tooltip": ""
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_el_table_column, {
                label: unref(t)("User.list.th4"),
                "show-overflow-tooltip": ""
              }, {
                default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (scope.row.status == 1) {
                      _push3(`<p class="status_info" data-v-00c02395${_scopeId2}>${ssrInterpolate(unref(t)("User.review"))}</p>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (scope.row.status == 2) {
                      _push3(`<p class="status_primary" data-v-00c02395${_scopeId2}>${ssrInterpolate(unref(t)("User.pending"))}</p>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (scope.row.status == 3) {
                      _push3(`<p class="status_success" data-v-00c02395${_scopeId2}>${ssrInterpolate(unref(t)("User.claimed"))}</p>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (scope.row.status == 4) {
                      _push3(`<p class="status_warning" data-v-00c02395${_scopeId2}>${ssrInterpolate(unref(t)("User.cancel"))}</p>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      scope.row.status == 1 ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "status_info"
                      }, toDisplayString(unref(t)("User.review")), 1)) : createCommentVNode("", true),
                      scope.row.status == 2 ? (openBlock(), createBlock("p", {
                        key: 1,
                        class: "status_primary"
                      }, toDisplayString(unref(t)("User.pending")), 1)) : createCommentVNode("", true),
                      scope.row.status == 3 ? (openBlock(), createBlock("p", {
                        key: 2,
                        class: "status_success"
                      }, toDisplayString(unref(t)("User.claimed")), 1)) : createCommentVNode("", true),
                      scope.row.status == 4 ? (openBlock(), createBlock("p", {
                        key: 3,
                        class: "status_warning"
                      }, toDisplayString(unref(t)("User.cancel")), 1)) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_el_table_column, {
                label: unref(t)("User.amount"),
                "show-overflow-tooltip": ""
              }, {
                default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(formatNumberWithCurrency)(
                      scope.row.amount
                    ))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(formatNumberWithCurrency)(
                        scope.row.amount
                      )), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_el_table_column, {
                prop: "createTime",
                label: unref(t)("User.created"),
                "show-overflow-tooltip": ""
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_el_table_column, {
                prop: "remark",
                label: unref(t)("User.remark"),
                align: "right",
                width: "200",
                "show-overflow-tooltip": ""
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_el_table_column, {
                  prop: "orderId",
                  label: unref(t)("User.list.th1"),
                  width: "100",
                  fixed: "",
                  "show-overflow-tooltip": ""
                }, null, 8, ["label"]),
                createVNode(_component_el_table_column, {
                  label: unref(t)("User.list.th4"),
                  "show-overflow-tooltip": ""
                }, {
                  default: withCtx((scope) => [
                    scope.row.status == 1 ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "status_info"
                    }, toDisplayString(unref(t)("User.review")), 1)) : createCommentVNode("", true),
                    scope.row.status == 2 ? (openBlock(), createBlock("p", {
                      key: 1,
                      class: "status_primary"
                    }, toDisplayString(unref(t)("User.pending")), 1)) : createCommentVNode("", true),
                    scope.row.status == 3 ? (openBlock(), createBlock("p", {
                      key: 2,
                      class: "status_success"
                    }, toDisplayString(unref(t)("User.claimed")), 1)) : createCommentVNode("", true),
                    scope.row.status == 4 ? (openBlock(), createBlock("p", {
                      key: 3,
                      class: "status_warning"
                    }, toDisplayString(unref(t)("User.cancel")), 1)) : createCommentVNode("", true)
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode(_component_el_table_column, {
                  label: unref(t)("User.amount"),
                  "show-overflow-tooltip": ""
                }, {
                  default: withCtx((scope) => [
                    createTextVNode(toDisplayString(unref(formatNumberWithCurrency)(
                      scope.row.amount
                    )), 1)
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode(_component_el_table_column, {
                  prop: "createTime",
                  label: unref(t)("User.created"),
                  "show-overflow-tooltip": ""
                }, null, 8, ["label"]),
                createVNode(_component_el_table_column, {
                  prop: "remark",
                  label: unref(t)("User.remark"),
                  align: "right",
                  width: "200",
                  "show-overflow-tooltip": ""
                }, null, 8, ["label"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="mftPagination" style="${ssrRenderStyle(!unref(initData).loading ? null : { display: "none" })}" data-v-00c02395>`);
        _push(ssrRenderComponent(unref(ElPagination), {
          background: "",
          layout: "prev, pager, next",
          total: unref(pageData).total,
          "page-size": unref(pageData).pageSize,
          "hide-on-single-page": "",
          onCurrentChange: getPageChange
        }, null, _parent));
        _push(`</div></div><div class="record-tips" data-v-00c02395>${ssrInterpolate(unref(t)("User.recordTips"))}</div></div>`);
      } else {
        _push(`<div class="mobUcIndex record" data-v-00c02395><p class="title" data-v-00c02395>${ssrInterpolate(unref(t)("User.record"))}</p>`);
        if (unref(initData).list.length > 0) {
          _push(`<ul${ssrRenderAttrs(mergeProps({
            class: "list",
            "infinite-scroll-distance": 20,
            "infinite-scroll-delay": 500
          }, ssrGetDirectiveProps(_ctx, _directive_infinite_scroll, scrollLoad)))} data-v-00c02395><!--[-->`);
          ssrRenderList(unref(initData).list, (item, index) => {
            _push(`<li class="item" data-v-00c02395><div class="statusLine" data-v-00c02395><p class="name" data-v-00c02395>${ssrInterpolate(unref(t)("User.order"))}</p></div><div class="contentWrap" data-v-00c02395><div class="textLine" data-v-00c02395><p class="label" data-v-00c02395>${ssrInterpolate(unref(t)("User.list.th1"))}</p><p class="value" data-v-00c02395>${ssrInterpolate(item.orderId)}</p></div><div class="textLine" data-v-00c02395><p class="label" data-v-00c02395>${ssrInterpolate(unref(t)("User.list.th4"))}</p><p class="value" data-v-00c02395>`);
            if (item.status === 1) {
              _push(`<span class="status_info" data-v-00c02395>${ssrInterpolate(unref(t)("User.review"))}</span>`);
            } else {
              _push(`<!---->`);
            }
            if (item.status === 2) {
              _push(`<span class="status_primary" data-v-00c02395>${ssrInterpolate(unref(t)("User.pending"))}</span>`);
            } else {
              _push(`<!---->`);
            }
            if (item.status === 3) {
              _push(`<span class="status_success" data-v-00c02395>${ssrInterpolate(unref(t)("User.claimed"))}</span>`);
            } else {
              _push(`<!---->`);
            }
            if (item.status === 4) {
              _push(`<span class="status_danger" data-v-00c02395>${ssrInterpolate(unref(t)("User.cancel"))}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</p></div><div class="textLine" data-v-00c02395><p class="label" data-v-00c02395>${ssrInterpolate(unref(t)("User.amount"))}</p><p class="value" data-v-00c02395>${ssrInterpolate(unref(formatNumberWithCurrency)(
              item.amount
            ))}</p></div><div class="textLine" data-v-00c02395><p class="label" data-v-00c02395>${ssrInterpolate(unref(t)("User.created"))}</p><p class="value" data-v-00c02395>${ssrInterpolate(item.createTime)}</p></div><div class="textLine" data-v-00c02395><p class="label" data-v-00c02395>${ssrInterpolate(unref(t)("User.remark"))}</p><p class="value" data-v-00c02395>${ssrInterpolate(item.remark)}</p></div></div></li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<div class="emptyWrap" data-v-00c02395><img class="icon" alt=""${ssrRenderAttr("src", _imports_0)} data-v-00c02395><p class="text" data-v-00c02395>${ssrInterpolate(unref(t)("User.tips3"))}</p><p class="startBtn" data-v-00c02395>${ssrInterpolate(unref(t)("Login.btn1"))}</p></div>`);
        }
        _push(`</div>`);
      }
      _push(ssrRenderComponent(_component_publicTipsPopup, {
        ref_key: "waitingSystemRef",
        ref: waitingSystemRef,
        content: unref(t)("common.fund55"),
        isBtnGroup: false,
        isSingleBtn: ""
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/withDraw/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-00c02395"]]);
const _sfc_main = {
  __name: "withDraw",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      // title: t("pagesName.User"),
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_userWithDraw = __nuxt_component_0;
      _push(ssrRenderComponent(_component_userWithDraw, _attrs, null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/withDraw.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=withDraw-B8j7Tk-K.js.map
