import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "网络部",
    link: "/Net/",
    icon: "fas fa-network-wired",
  },
  {
    text: "学习部",
    link: "/Study/",
    icon: "fas fa-book",
  },
  {
    text: "宣传部",
    link: "/Publicity/",
    icon: "fas fa-newspaper",
  },
]);
