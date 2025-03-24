import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "academy" | "components-academy-banner" | "components-trigger-btn" | "components-uc-aside" | "components-uc-header" | "components-uc-main" | "content" | "default" | "header" | "ucenter"
declare module "../../node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}