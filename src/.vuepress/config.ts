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


  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
