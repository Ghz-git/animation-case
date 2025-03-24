import { E as ElTable, a as ElPagination, b as ElTableColumn, c as ElInfiniteScroll } from "./el-checkbox-BJ_Y9WCM.js";
import { u as usePayment, _ as __nuxt_component_1 } from "./usePayment-DTlV3mZU.js";
import { _ as __nuxt_component_3 } from "./index-Bms85OJQ.js";
import "dayjs";
import { v as vLoading } from "./directive-o9p6vhNm.js";
import { _ as _export_sfc, u as useI18n, C as formatNumberWithCurrency, a6 as formatterTimeZone, G as ElMessage, a5 as useSeoMeta } from "../server.mjs";
/* empty css                */
import { ref, computed, mergeProps, unref, withCtx, openBlock, createBlock, toDisplayString, createCommentVNode, createVNode, createTextVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./empty-kcYR4DiL.js";
import { q as getOrderList } from "./challenge-C5uxJouc.js";
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
import "./useRequest-FImzQkjq.js";
import "./config-81Rc5edc.js";
import "lodash-es";
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
const _sfc_main$1 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { bindDoPayment, bindDoCancelOrder } = usePayment();
    const { t } = useI18n();
    const publicTipsRef = ref();
    const tipsContent = ref("");
    const publicWaitingPaymentRef = ref();
    const waitingSystemRef = ref();
    const isMobile = computed(() => {
      return useCheckMobile().getItem();
    });
    const initData = ref({
      loading: true,
      list: []
    });
    const pageData = ref({
      current: 1,
      size: 10,
      total: 0,
      orderBy: "mft"
    });
    const cancelData = ref({});
    ref(false);
    const scrollLoad = () => {
      const total = pageData.value.total;
      const size = pageData.value.size;
      const totalPage = Math.ceil(total / size);
      pageData.value.current += 1;
      if (pageData.value.current <= totalPage) {
        getList();
      }
    };
    const getPageChange = (e) => {
      initData.value.loading = true;
      initData.value.list = [];
      pageData.value.current = e;
      getList();
    };
    const getList = () => {
      getOrderList(pageData.value).then((res) => {
        initData.value.loading = false;
        pageData.value.total = res.data.total;
        if (isMobile.value) {
          initData.value.list = initData.value.list.concat(res.data.records);
        } else {
          initData.value.list = res.data.records;
        }
        initData.value.list.forEach((item) => {
          item.createTime = formatterTimeZone(item.createTime);
        });
      }).catch((err) => {
        initData.value.loading = false;
      });
    };
    const bindCallCancel = (data, i) => {
      cancelData.value.index = i;
      cancelData.value.paymentId = data.paymentUid;
      cancelData.value.paymentStatus = data.paymentStatus;
      tipsContent.value = t("User.isCancelOrder");
      publicTipsRef.value.shower();
    };
    const bindCancel = () => {
      const payParams = {
        paymentId: cancelData.value.paymentId,
        paymentStatus: cancelData.value.paymentStatus
      };
      bindDoCancelOrder(payParams, () => {
        publicTipsRef.value.maskClose();
        ElMessage.warning({
          message: `<span style="white-space: nowrap;">${t("User.tips21")}</span>`,
          dangerouslyUseHTMLString: true
        });
        initData.value.list[cancelData.value.index].paymentStatus = 3;
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_table_column = ElTableColumn;
      const _component_publicWaitingPayment = __nuxt_component_1;
      const _component_publicTipsPopup = __nuxt_component_3;
      const _directive_loading = vLoading;
      const _directive_infinite_scroll = ElInfiniteScroll;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "ucDiv" }, _attrs))} data-v-f6c24f84>`);
      if (!unref(isMobile)) {
        _push(`<div class="ucOrder" data-v-f6c24f84><p class="challengeTitle" data-v-f6c24f84>${ssrInterpolate(unref(t)("User.order"))}</p><div${ssrRenderAttrs(mergeProps({
          class: "homeMain",
          "element-loading-background": "rgba(0, 0, 0, 0.5)"
        }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(initData).loading)))} data-v-f6c24f84><div class="mftTable" data-v-f6c24f84>`);
        _push(ssrRenderComponent(unref(ElTable), {
          data: unref(initData).list,
          "empty-text": unref(initData).loading ? "Loading" : "No Data"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_el_table_column, {
                prop: "orderNo",
                label: unref(t)("User.account.li1"),
                fixed: "",
                "show-overflow-tooltip": ""
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_el_table_column, {
                label: unref(t)("User.account.li8"),
                "show-overflow-tooltip": ""
              }, {
                default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (scope.row.paymentStatus === 0) {
                      _push3(`<p class="status_default" data-v-f6c24f84${_scopeId2}>${ssrInterpolate(unref(t)("User.pending"))}</p>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (scope.row.paymentStatus === 1) {
                      _push3(`<p class="status_success" data-v-f6c24f84${_scopeId2}>${ssrInterpolate(unref(t)("User.payOk"))}</p>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (scope.row.paymentStatus === 2) {
                      _push3(`<p class="status_warning" data-v-f6c24f84${_scopeId2}>${ssrInterpolate(unref(t)("User.timeout"))}</p>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (scope.row.paymentStatus === 3) {
                      _push3(`<p class="status_danger" data-v-f6c24f84${_scopeId2}>${ssrInterpolate(unref(t)("User.cancel"))}</p>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (scope.row.paymentStatus === 4) {
                      _push3(`<p class="status_waiting" data-v-f6c24f84${_scopeId2}>${ssrInterpolate(unref(t)("User.waiting"))}</p>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      scope.row.paymentStatus === 0 ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "status_default"
                      }, toDisplayString(unref(t)("User.pending")), 1)) : createCommentVNode("", true),
                      scope.row.paymentStatus === 1 ? (openBlock(), createBlock("p", {
                        key: 1,
                        class: "status_success"
                      }, toDisplayString(unref(t)("User.payOk")), 1)) : createCommentVNode("", true),
                      scope.row.paymentStatus === 2 ? (openBlock(), createBlock("p", {
                        key: 2,
                        class: "status_warning"
                      }, toDisplayString(unref(t)("User.timeout")), 1)) : createCommentVNode("", true),
                      scope.row.paymentStatus === 3 ? (openBlock(), createBlock("p", {
                        key: 3,
                        class: "status_danger"
                      }, toDisplayString(unref(t)("User.cancel")), 1)) : createCommentVNode("", true),
                      scope.row.paymentStatus === 4 ? (openBlock(), createBlock("p", {
                        key: 4,
                        class: "status_waiting"
                      }, toDisplayString(unref(t)("User.waiting")), 1)) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_el_table_column, {
                label: unref(t)("User.account.li9"),
                "show-overflow-tooltip": ""
              }, {
                default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p data-v-f6c24f84${_scopeId2}>${ssrInterpolate(unref(formatNumberWithCurrency)(
                      scope.row.paymentAmount,
                      0
                    ))} `);
                    if (scope.row.paymentType === 1) {
                      _push3(`<span data-v-f6c24f84${_scopeId2}>(${ssrInterpolate(unref(t)(
                        "User.rePay"
                      ))})</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</p>`);
                  } else {
                    return [
                      createVNode("p", null, [
                        createTextVNode(toDisplayString(unref(formatNumberWithCurrency)(
                          scope.row.paymentAmount,
                          0
                        )) + " ", 1),
                        scope.row.paymentType === 1 ? (openBlock(), createBlock("span", { key: 0 }, "(" + toDisplayString(unref(t)(
                          "User.rePay"
                        )) + ")", 1)) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_el_table_column, {
                label: unref(t)("User.account.li2"),
                "show-overflow-tooltip": ""
              }, {
                default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`CFD`);
                  } else {
                    return [
                      createTextVNode("CFD")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_el_table_column, {
                prop: "level",
                label: unref(t)("User.account.li10"),
                "show-overflow-tooltip": ""
              }, {
                default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (scope.row.level === "1") {
                      _push3(`<span data-v-f6c24f84${_scopeId2}>${ssrInterpolate(unref(t)("common.proficient"))}</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (scope.row.level === "2") {
                      _push3(`<span data-v-f6c24f84${_scopeId2}>${ssrInterpolate(unref(t)("common.advanced"))}</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (scope.row.level === "3") {
                      _push3(`<span data-v-f6c24f84${_scopeId2}>${ssrInterpolate(unref(t)("Battle.badges.badge3"))}</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (scope.row.level === "4") {
                      _push3(`<span data-v-f6c24f84${_scopeId2}>${ssrInterpolate(unref(t)("common.master"))}</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (scope.row.level === "5") {
                      _push3(`<span data-v-f6c24f84${_scopeId2}>${ssrInterpolate(unref(t)("common.legendary"))}</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      scope.row.level === "1" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(unref(t)("common.proficient")), 1)) : createCommentVNode("", true),
                      scope.row.level === "2" ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(unref(t)("common.advanced")), 1)) : createCommentVNode("", true),
                      scope.row.level === "3" ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(unref(t)("Battle.badges.badge3")), 1)) : createCommentVNode("", true),
                      scope.row.level === "4" ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString(unref(t)("common.master")), 1)) : createCommentVNode("", true),
                      scope.row.level === "5" ? (openBlock(), createBlock("span", { key: 4 }, toDisplayString(unref(t)("common.legendary")), 1)) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_el_table_column, {
                prop: "platform",
                label: unref(t)("Battle.plat"),
                "show-overflow-tooltip": ""
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_el_table_column, {
                prop: "createTime",
                label: unref(t)("User.created"),
                "show-overflow-tooltip": ""
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_el_table_column, {
                label: unref(t)("User.list.th12"),
                align: "right",
                fixed: "right"
              }, {
                default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="btnList" data-v-f6c24f84${_scopeId2}>`);
                    if (scope.row.paymentStatus === 0 || scope.row.paymentStatus === 4) {
                      _push3(`<button class="tableBtn" data-v-f6c24f84${_scopeId2}>${ssrInterpolate(unref(t)(
                        "User.cancelOrder"
                      ))}</button>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "btnList" }, [
                        scope.row.paymentStatus === 0 || scope.row.paymentStatus === 4 ? (openBlock(), createBlock("button", {
                          key: 0,
                          class: "tableBtn",
                          onClick: withModifiers(($event) => bindCallCancel(
                            scope.row,
                            scope.$index
                          ), ["stop"])
                        }, toDisplayString(unref(t)(
                          "User.cancelOrder"
                        )), 9, ["onClick"])) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_el_table_column, {
                  prop: "orderNo",
                  label: unref(t)("User.account.li1"),
                  fixed: "",
                  "show-overflow-tooltip": ""
                }, null, 8, ["label"]),
                createVNode(_component_el_table_column, {
                  label: unref(t)("User.account.li8"),
                  "show-overflow-tooltip": ""
                }, {
                  default: withCtx((scope) => [
                    scope.row.paymentStatus === 0 ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "status_default"
                    }, toDisplayString(unref(t)("User.pending")), 1)) : createCommentVNode("", true),
                    scope.row.paymentStatus === 1 ? (openBlock(), createBlock("p", {
                      key: 1,
                      class: "status_success"
                    }, toDisplayString(unref(t)("User.payOk")), 1)) : createCommentVNode("", true),
                    scope.row.paymentStatus === 2 ? (openBlock(), createBlock("p", {
                      key: 2,
                      class: "status_warning"
                    }, toDisplayString(unref(t)("User.timeout")), 1)) : createCommentVNode("", true),
                    scope.row.paymentStatus === 3 ? (openBlock(), createBlock("p", {
                      key: 3,
                      class: "status_danger"
                    }, toDisplayString(unref(t)("User.cancel")), 1)) : createCommentVNode("", true),
                    scope.row.paymentStatus === 4 ? (openBlock(), createBlock("p", {
                      key: 4,
                      class: "status_waiting"
                    }, toDisplayString(unref(t)("User.waiting")), 1)) : createCommentVNode("", true)
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode(_component_el_table_column, {
                  label: unref(t)("User.account.li9"),
                  "show-overflow-tooltip": ""
                }, {
                  default: withCtx((scope) => [
                    createVNode("p", null, [
                      createTextVNode(toDisplayString(unref(formatNumberWithCurrency)(
                        scope.row.paymentAmount,
                        0
                      )) + " ", 1),
                      scope.row.paymentType === 1 ? (openBlock(), createBlock("span", { key: 0 }, "(" + toDisplayString(unref(t)(
                        "User.rePay"
                      )) + ")", 1)) : createCommentVNode("", true)
                    ])
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode(_component_el_table_column, {
                  label: unref(t)("User.account.li2"),
                  "show-overflow-tooltip": ""
                }, {
                  default: withCtx((scope) => [
                    createTextVNode("CFD")
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode(_component_el_table_column, {
                  prop: "level",
                  label: unref(t)("User.account.li10"),
                  "show-overflow-tooltip": ""
                }, {
                  default: withCtx((scope) => [
                    scope.row.level === "1" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(unref(t)("common.proficient")), 1)) : createCommentVNode("", true),
                    scope.row.level === "2" ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(unref(t)("common.advanced")), 1)) : createCommentVNode("", true),
                    scope.row.level === "3" ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(unref(t)("Battle.badges.badge3")), 1)) : createCommentVNode("", true),
                    scope.row.level === "4" ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString(unref(t)("common.master")), 1)) : createCommentVNode("", true),
                    scope.row.level === "5" ? (openBlock(), createBlock("span", { key: 4 }, toDisplayString(unref(t)("common.legendary")), 1)) : createCommentVNode("", true)
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode(_component_el_table_column, {
                  prop: "platform",
                  label: unref(t)("Battle.plat"),
                  "show-overflow-tooltip": ""
                }, null, 8, ["label"]),
                createVNode(_component_el_table_column, {
                  prop: "createTime",
                  label: unref(t)("User.created"),
                  "show-overflow-tooltip": ""
                }, null, 8, ["label"]),
                createVNode(_component_el_table_column, {
                  label: unref(t)("User.list.th12"),
                  align: "right",
                  fixed: "right"
                }, {
                  default: withCtx((scope) => [
                    createVNode("div", { class: "btnList" }, [
                      scope.row.paymentStatus === 0 || scope.row.paymentStatus === 4 ? (openBlock(), createBlock("button", {
                        key: 0,
                        class: "tableBtn",
                        onClick: withModifiers(($event) => bindCallCancel(
                          scope.row,
                          scope.$index
                        ), ["stop"])
                      }, toDisplayString(unref(t)(
                        "User.cancelOrder"
                      )), 9, ["onClick"])) : createCommentVNode("", true)
                    ])
                  ]),
                  _: 1
                }, 8, ["label"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="mftPagination" style="${ssrRenderStyle(!unref(initData).loading ? null : { display: "none" })}" data-v-f6c24f84>`);
        _push(ssrRenderComponent(unref(ElPagination), {
          background: "",
          layout: "prev, pager, next",
          total: unref(pageData).total,
          "page-size": unref(pageData).size,
          "hide-on-single-page": "",
          onCurrentChange: getPageChange
        }, null, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<div class="mobUcIndex record" data-v-f6c24f84><p class="title" data-v-f6c24f84>${ssrInterpolate(unref(t)("User.btn2"))}</p>`);
        if (unref(initData).list.length > 0) {
          _push(`<ul${ssrRenderAttrs(mergeProps({
            class: "list",
            "infinite-scroll-distance": 20,
            "infinite-scroll-delay": 500
          }, ssrGetDirectiveProps(_ctx, _directive_infinite_scroll, scrollLoad)))} data-v-f6c24f84><!--[-->`);
          ssrRenderList(unref(initData).list, (item, index) => {
            _push(`<li class="item" data-v-f6c24f84><div class="statusLine" data-v-f6c24f84><p class="name" data-v-f6c24f84>${ssrInterpolate(unref(t)("User.startBtn"))}</p></div><div class="contentWrap" data-v-f6c24f84><div class="textLine" data-v-f6c24f84><p class="label" data-v-f6c24f84>${ssrInterpolate(unref(t)("User.account.li1"))}</p><p class="value" data-v-f6c24f84>${ssrInterpolate(item.orderNo)}</p></div><div class="textLine" data-v-f6c24f84><p class="label" data-v-f6c24f84>${ssrInterpolate(unref(t)("User.account.li8"))}</p><p class="value" data-v-f6c24f84>`);
            if (item.paymentStatus === 0) {
              _push(`<span class="status_default" data-v-f6c24f84>${ssrInterpolate(unref(t)("User.pending"))}</span>`);
            } else {
              _push(`<!---->`);
            }
            if (item.paymentStatus === 1) {
              _push(`<span class="status_success" data-v-f6c24f84>${ssrInterpolate(unref(t)("User.payOk"))}</span>`);
            } else {
              _push(`<!---->`);
            }
            if (item.paymentStatus === 2) {
              _push(`<span class="status_warning" data-v-f6c24f84>${ssrInterpolate(unref(t)("User.timeout"))}</span>`);
            } else {
              _push(`<!---->`);
            }
            if (item.paymentStatus === 3) {
              _push(`<span class="status_danger" data-v-f6c24f84>${ssrInterpolate(unref(t)("User.cancel"))}</span>`);
            } else {
              _push(`<!---->`);
            }
            if (item.paymentStatus === 4) {
              _push(`<span class="status_waiting" data-v-f6c24f84>${ssrInterpolate(unref(t)("User.waiting"))}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</p></div><div class="textLine" data-v-f6c24f84><p class="label" data-v-f6c24f84>${ssrInterpolate(unref(t)("User.account.li9"))}</p><p class="value" data-v-f6c24f84>${ssrInterpolate(unref(formatNumberWithCurrency)(
              item.paymentAmount,
              0
            ))}</p></div><div class="textLine" data-v-f6c24f84><p class="label" data-v-f6c24f84>${ssrInterpolate(unref(t)("User.account.li2"))}</p><p class="value" data-v-f6c24f84>CFD1</p></div><div class="textLine" data-v-f6c24f84><p class="label" data-v-f6c24f84>${ssrInterpolate(unref(t)("User.account.li10"))}</p><p class="value" data-v-f6c24f84>`);
            if (item.level === "1") {
              _push(`<span data-v-f6c24f84>${ssrInterpolate(unref(t)("common.proficient"))}</span>`);
            } else {
              _push(`<!---->`);
            }
            if (item.level === "2") {
              _push(`<span data-v-f6c24f84>${ssrInterpolate(unref(t)("common.advanced"))}</span>`);
            } else {
              _push(`<!---->`);
            }
            if (item.level === "3") {
              _push(`<span data-v-f6c24f84>${ssrInterpolate(unref(t)("Battle.badges.badge3"))}</span>`);
            } else {
              _push(`<!---->`);
            }
            if (item.level === "4") {
              _push(`<span data-v-f6c24f84>${ssrInterpolate(unref(t)("common.master"))}</span>`);
            } else {
              _push(`<!---->`);
            }
            if (item.level === "5") {
              _push(`<span data-v-f6c24f84>${ssrInterpolate(unref(t)("common.legendary"))}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</p></div><div class="textLine" data-v-f6c24f84><p class="label" data-v-f6c24f84>${ssrInterpolate(unref(t)("Battle.plat"))}</p><p class="value" data-v-f6c24f84>${ssrInterpolate(item.platform)}</p></div><div class="textLine" data-v-f6c24f84><p class="label" data-v-f6c24f84>${ssrInterpolate(unref(t)("User.created"))}</p><p class="value" data-v-f6c24f84>${ssrInterpolate(item.createTime)}</p></div><div class="btnLine" data-v-f6c24f84>`);
            if (item.paymentStatus === 0 || item.paymentStatus === 4) {
              _push(`<p class="btn light" data-v-f6c24f84>${ssrInterpolate(unref(t)("User.cancelOrder"))}</p>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div></div></li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<div class="emptyWrap" data-v-f6c24f84><img class="icon" alt=""${ssrRenderAttr("src", _imports_0)} data-v-f6c24f84><p class="text" data-v-f6c24f84>${ssrInterpolate(unref(t)("User.tips3"))}</p><p class="startBtn" data-v-f6c24f84>${ssrInterpolate(unref(t)("Login.btn1"))}</p></div>`);
        }
        _push(`</div>`);
      }
      _push(ssrRenderComponent(_component_publicWaitingPayment, {
        ref_key: "publicWaitingPaymentRef",
        ref: publicWaitingPaymentRef
      }, null, _parent));
      _push(ssrRenderComponent(_component_publicTipsPopup, {
        ref_key: "publicTipsRef",
        ref: publicTipsRef,
        content: unref(tipsContent),
        onSubmit: bindCancel
      }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/order/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f6c24f84"]]);
const _sfc_main = {
  __name: "order",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      // title: t("pagesName.User"),
      ssr: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_userOrder = __nuxt_component_0;
      _push(ssrRenderComponent(_component_userOrder, _attrs, null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/order.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=order-B9l-isKz.js.map
