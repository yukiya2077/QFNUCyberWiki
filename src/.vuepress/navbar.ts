import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "指南",
    icon: "lightbulb",
    link: "/guide/",
  },
  {
    text: "配置",
    icon: "gears", 
    link: "/config/",
  },
  {
    text: "常见问题",
    icon: "circle-question",
    link: "/faq/",
  },
  {
    text: "演示",
    icon: "laptop-code",
    link: "/demo/",
  },
]);
