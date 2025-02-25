import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "标题",
  description:
    "描述",

  theme,
  head: [

  ],
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
