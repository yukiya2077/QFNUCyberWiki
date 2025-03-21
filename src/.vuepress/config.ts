import { defineUserConfig } from "vuepress";
import { slimsearchPlugin } from '@vuepress/plugin-slimsearch'
import theme from "./theme.js";

export default defineUserConfig({
  base: "/QFNUCyberWiki/",
  lang: "zh-CN",
  title: "QFNUCyberwiki",
  description:
    "QFNUCyberwiki",

  theme,
  head: [
  ],

  plugins: [
    slimsearchPlugin({
    }),
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
