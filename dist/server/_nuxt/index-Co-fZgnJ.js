import { _ as __nuxt_component_0 } from "./index-DP8eDe_k.js";
import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import Item from "./item-Bw81ciBH.js";
import SuccessLi from "./successLi-zL4wW3ad.js";
import { p as process, m as mftTrader, b as blue, y as yellow } from "./yellow-BzR1n8Bd.js";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
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
const HOW_TO_SUCCESS = [
  {
    pic: process,
    headerTitle: "评估流程",
    stepList: [
      {
        title: "步骤1",
        subTitle: "MFT挑战",
        subTitleColor: "90deg, #FF7700 0%, #FFFFFF 59.5%",
        txt: "MFT挑战的目的是培训交易者并引导他们掌握良好的交易习惯。交易者需遵循关键风险管理规则所启示的交易目标，以展示他们的交易经验。在完成MFT挑战赛之后，交易者将进入验证阶段。"
      },
      {
        title: "步骤2",
        subTitle: "MFT验证",
        subTitleColor: "90deg, #FF7700 0%, #FFFFFF 59.5%",
        txt: "验证阶段旨在确认交易者在MFT挑战中所展示的技能。规则仍然保持不变,通过验证后，交易者便可以成为MFT交易员。"
      }
    ]
  },
  {
    pic: mftTrader,
    headerTitle: "MFT交易员",
    stepList: [
      {
        title: "步骤3",
        subTitle: "MFT交易员",
        subTitleColor: "90deg, #66C1FD 0%, #FFFFFF 44.17%",
        txt: "成为MFT交易员后最多可获得高达20,00,000 USD资金的MFT账户，MFT 交易者最高可获得高达 90% 的交易利润奖励"
      }
    ],
    listTitle: "MFT账户",
    listTitleColor: "90deg, #66C1FD 0%, #FFFFFF 44.17%",
    list: [
      {
        content: "账户资金可达 2,000,000 USD",
        listIcon: blue
      },
      {
        content: "最多 90% 的交易利润奖励",
        listIcon: blue
      },
      {
        content: "MFT高级计划",
        listIcon: blue
      },
      {
        content: "资金扩展计划",
        listIcon: blue
      }
    ]
  },
  {
    pic: mftTrader,
    headerTitle: "专业交易员",
    stepList: [
      {
        title: "步骤4",
        subTitle: "专业交易员",
        subTitleColor: "90deg, #FFE456 0%, #FFFFFF 47.33%",
        txt: "优秀的MFT交易员可以通过我们的高级计划获得机会，成为 Advance MCN 的专业交易员，並獲得穩定的薪資待遇。"
      }
    ],
    listTitle: "享受的福利",
    listTitleColor: "90deg, #FFE456 0%, #FFFFFF 47.33%",
    list: [
      {
        content: "固定薪资合同",
        listIcon: yellow
      },
      {
        content: "高额的绩效奖励",
        listIcon: yellow
      },
      {
        content: "更大的平台与机会",
        listIcon: yellow
      },
      {
        content: "持续发展的机会",
        listIcon: yellow
      }
    ]
  }
];
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const list = ref(HOW_TO_SUCCESS);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicMWrap = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "how-to-success" }, _attrs))} data-v-5e808d8f>`);
      _push(ssrRenderComponent(_component_publicMWrap, {
        title: _ctx.t("common.successful")
      }, null, _parent));
      _push(`<div class="list" data-v-5e808d8f><!--[-->`);
      ssrRenderList(list.value, (success, idx) => {
        _push(`<div class="item" data-v-5e808d8f><div class="item-inner" data-v-5e808d8f><div class="item-inner__header" data-v-5e808d8f><img${ssrRenderAttr("src", success.pic)} alt="" class="pic" data-v-5e808d8f><span class="text" data-v-5e808d8f>${ssrInterpolate(success.headerTitle)}</span></div><!--[-->`);
        ssrRenderList(success.stepList, (item, itemIdx) => {
          _push(ssrRenderComponent(Item, {
            itemInfo: item,
            key: itemIdx
          }, null, _parent));
        });
        _push(`<!--]-->`);
        if (success.listTitle) {
          _push(ssrRenderComponent(SuccessLi, {
            itemInfo: success.list,
            listTitle: success.listTitle,
            listTitleColor: success.listTitleColor
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/components/howToSuccess/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5e808d8f"]]);
export {
  index as default
};
//# sourceMappingURL=index-Co-fZgnJ.js.map
