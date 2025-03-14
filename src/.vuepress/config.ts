import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "QFNUCyberwiki",
  description:
    "QFNUCyberwiki",

  theme,
  head: [
  ],

  // 添加返回顶部插件
  plugins: [

  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
