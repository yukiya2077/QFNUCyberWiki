import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "指南",
      icon: "lightbulb",
      prefix: "/guide/",
      children: "structure",
    },
    {
      text: "配置",
      icon: "gears",
      prefix: "/config/",
      children: "structure", 
    },
    {
      text: "常见问题",
      icon: "circle-question",
      prefix: "/faq/",
      children: "structure",
    },
    {
      text: "演示",
      icon: "laptop-code",
      prefix: "/demo/",
      children: "structure",
    },
  ],
});
