import{_ as w}from"./plugin-vue_export-helper-DlAUqK2U.js";import{e as d,h as q,f as a,k as b,F as p,l as m,n as u,o as s,t as v,i as g,m as y,p as x}from"./app-lTE_kbdw.js";const Z={data(){return{activePanel:"basic-edit",cards:[{id:"basic-edit",title:"基础剪辑",subtitle:"节奏把控与片段处理",color:"red"},{id:"transition",title:"转场特效",subtitle:"自然流畅的画面过渡",color:"blue"},{id:"audio",title:"音频处理",subtitle:"声音优化与音效添加",color:"green"}],panels:[{id:"basic-edit",title:"基础剪辑与节奏把控",items:[{title:"分割片段",content:'：拖动时间轴至需裁剪处，点击"分割"删除冗余内容。'},{title:"调整顺序",content:"：长按拖动片段，按逻辑重组（如开幕式调至开场）。"},{title:"变速处理",content:"：精彩瞬间用慢动作(0.5x)，冗长部分加速(1.5x)。"}]},{id:"transition",title:"转场与特效添加",items:[{title:"转场效果",content:'：使用"叠化""模糊"等自然效果，避免过度花哨。'},{title:"动态贴纸",content:'：为趣味场景添加"欢呼""星星"等贴纸增强氛围。'},{title:"滤镜选择",content:'：校园场景用"清新"滤镜，毕业视频选"怀旧"色调。'}]},{id:"audio",title:"音频处理",items:[{title:"背景音乐",content:"：选择适配曲目，注意音量平衡避免盖过人声。"},{title:"音效增强",content:"：添加环境音效突出高潮，使用淡入淡出让过渡自然。"},{title:"语音优化",content:"：采访片段降噪处理，调整音量至-6dB~-3dB。"}]}],currentCard:0,advancedCards:[{title:"字幕标注",subtitle:"文字与信息展示",icon:"TextIcon",items:[{title:"动态字幕",content:'：点击"文字-新建文本"，为重要环节添加滚动字幕，字体推荐"兰亭黑"。'},{title:"片头片尾",content:'：模板库搜索"校园"关键词，一键生成含校徽、口号的专业片头。'}]},{title:"多机位剪辑",subtitle:"多视角展示技巧",icon:"CameraIcon",items:[{title:"多视角切换",content:'：导入不同机位素材，通过"画中画"功能实现镜头切换。'},{title:"分屏展示",content:'：使用"分屏"模板同时展示多个社团活动画面。'}]},{title:"互动设计",subtitle:"观众互动元素",icon:"InteractionIcon",items:[{title:"弹幕风格",content:"：为轻松环节添加滚动弹幕文字，字体颜色选用亮黄色或粉色。"},{title:"投票问答",content:'：利用"贴纸"功能插入虚拟按钮，支持后期添加互动链接。'}]}],exportDetails:[{title:"分辨率",content:"校内大屏播放选择1080P（1920×1080），社交媒体上传可选720P"},{title:"帧率",content:"动态场景（如运动会）选30fps，避免画面卡顿"},{title:"文件命名",content:'按"活动名称+日期"格式（如"2025毕业典礼-0328"）便于归档'},{title:"格式选择",content:"MP4通用性最佳，需保留工程文件可同时导出剪映草稿"},{title:"音乐版权",content:'优先使用剪映"商用免费"曲库，避免外部下载未授权音乐'},{title:"肖像权",content:"涉及他人画面需提前签订《肖像使用同意书》，尤其毕业视频"}],savedHash:""}},computed:{detailsClass(){if(!this.activePanel)return"purple-bg";const r=this.cards.find(t=>t.id===this.activePanel);return r?`${r.color}-bg`:"purple-bg"}},mounted(){if(typeof window<"u"){let r=window.scrollY||window.pageYOffset;window.addEventListener("scroll",()=>{r=window.scrollY||window.pageYOffset},{passive:!0}),document.querySelectorAll(".card").forEach(t=>{t.addEventListener("mouseenter",o=>{o.preventDefault(),setTimeout(()=>window.scrollTo(0,r),0);const l=t.querySelector(".card-details");l&&(l.style.opacity="1",l.style.transform="translateY(0)")}),t.addEventListener("mouseleave",o=>{o.preventDefault(),setTimeout(()=>window.scrollTo(0,r),0);const l=t.querySelector(".card-details");l&&(l.style.opacity="0",l.style.transform="translateY(5px)")})}),document.addEventListener("click",t=>{if(t.target.closest(".card, .step-card, .e-card"))return t.preventDefault(),t.stopPropagation(),setTimeout(()=>window.scrollTo(0,r),0),!1},!0),document.querySelectorAll(".e-card").forEach((t,o)=>{t.addEventListener("mouseover",l=>{l.preventDefault(),setTimeout(()=>window.scrollTo(0,r),0),this.currentCard=o})}),document.querySelectorAll(".step-card").forEach((t,o)=>{t.addEventListener("mouseover",l=>{l.preventDefault(),setTimeout(()=>window.scrollTo(0,r),0),this.activePanel=this.cards[o].id})}),window.addEventListener("hashchange",t=>(t.preventDefault(),setTimeout(()=>window.scrollTo(0,r),0),!1))}},components:{TextIcon:{template:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path fill="currentColor" d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"/>
      </svg>`},CameraIcon:{template:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 15a3 3 0 100-6 3 3 0 000 6z"/>
        <path fill="currentColor" d="M20 4h-3.17l-1.24-1.35A1.99 1.99 0 0014.12 2H9.88c-.56 0-1.1.24-1.47.65L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
      </svg>`},InteractionIcon:{template:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
      </svg>`}}},T={class:"steps-container"},M={class:"steps-cards"},C=["onMouseover"],B={class:"tip"},H={class:"second-text"},L={class:"advanced-tips"},P={class:"wave-cards"},k=["onMouseover"],_={class:"infotop"},z={class:"name"},N={class:"export-notice"},D={class:"notice-details"};function E(r,t,o,l,n,f){return s(),d("div",null,[t[4]||(t[4]=q('<h1 id="如何用剪映制作专业级校园视频-学生党必学剪辑攻略" tabindex="-1" data-v-884e3907><a class="header-anchor" href="#如何用剪映制作专业级校园视频-学生党必学剪辑攻略" data-v-884e3907><span data-v-884e3907>如何用剪映制作专业级校园视频？学生党必学剪辑攻略</span></a></h1><div class="notification" data-v-884e3907><div class="notiglow" data-v-884e3907></div><div class="notiborderglow" data-v-884e3907></div><div class="notititle" data-v-884e3907>剪映视频剪辑指南</div><div class="notibody" data-v-884e3907>校园视频是记录青春、展示活动的重要载体，无论是开学典礼、运动会、社团表演还是毕业纪念，剪映都能通过其强大的功能帮助你快速完成高质量剪辑。以下为分步教学与进阶技巧：</div></div><hr data-v-884e3907><h2 id="一、素材准备与规划" tabindex="-1" data-v-884e3907><a class="header-anchor" href="#一、素材准备与规划" data-v-884e3907><span data-v-884e3907>一、素材准备与规划</span></a></h2><div class="cards-container" data-v-884e3907><div class="card" data-v-884e3907><div class="card-content" data-v-884e3907><div class="card-top" data-v-884e3907><span class="card-title" data-v-884e3907>01</span><p data-v-884e3907>拍摄设备</p></div><div class="card-bottom" data-v-884e3907><svg width="32" viewBox="0 -960 960 960" height="32" xmlns="http://www.w3.org/2000/svg" data-v-884e3907><path d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z" data-v-884e3907></path></svg></div></div><div class="card-image" data-v-884e3907><svg width="48" viewBox="0 -960 960 960" height="48" xmlns="http://www.w3.org/2000/svg" data-v-884e3907><path d="M440-440ZM220-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h520q24 0 42 18t18 42v520q0 24-18 42t-42 18H220Zm0-60h520v-520H220v520Zm260-260q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM220-160v-520 520Z" data-v-884e3907></path></svg></div><div class="card-details" data-v-884e3907><ul data-v-884e3907><li data-v-884e3907><strong data-v-884e3907>推荐设备</strong> 手机：小米/苹果/华为；相机：1080p以上；稳定器：三脚架或云台 </li><li data-v-884e3907><strong data-v-884e3907>设备选择建议</strong> 手机：便携、快速分享；相机：画质好、可控性强；稳定器：避免抖动 </li></ul></div></div><div class="card" data-v-884e3907><div class="card-content" data-v-884e3907><div class="card-top" data-v-884e3907><span class="card-title" data-v-884e3907>02</span><p data-v-884e3907>素材整理</p></div><div class="card-bottom" data-v-884e3907><svg width="32" viewBox="0 -960 960 960" height="32" xmlns="http://www.w3.org/2000/svg" data-v-884e3907><path d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z" data-v-884e3907></path></svg></div></div><div class="card-image" data-v-884e3907><svg width="48" viewBox="0 -960 960 960" height="48" xmlns="http://www.w3.org/2000/svg" data-v-884e3907><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm0 0v-400 400Z" data-v-884e3907></path></svg></div><div class="card-details" data-v-884e3907><ul data-v-884e3907><li data-v-884e3907><strong data-v-884e3907>场景分类</strong> 入场、表演片段、互动画面、镜头等分类整理 </li><li data-v-884e3907><strong data-v-884e3907>命名规范</strong> 格式：[日期]-[场景]-[序号]，示例：038-开场-01 </li></ul></div></div><div class="card" data-v-884e3907><div class="card-content" data-v-884e3907><div class="card-top" data-v-884e3907><span class="card-title" data-v-884e3907>03</span><p data-v-884e3907>基础设置</p></div><div class="card-bottom" data-v-884e3907><svg width="32" viewBox="0 -960 960 960" height="32" xmlns="http://www.w3.org/2000/svg" data-v-884e3907><path d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z" data-v-884e3907></path></svg></div></div><div class="card-image" data-v-884e3907><svg width="48" viewBox="0 -960 960 960" height="48" xmlns="http://www.w3.org/2000/svg" data-v-884e3907><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5L78-585l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" data-v-884e3907></path></svg></div><div class="card-details" data-v-884e3907><ul data-v-884e3907><li data-v-884e3907><strong data-v-884e3907>新建项目</strong> 打开APP，选择&quot;新建项目&quot;，支持批量导入 </li><li data-v-884e3907><strong data-v-884e3907>画幅选择</strong> 竖屏：9:16（适合抖音）；横屏：16:9（适合大屏） </li></ul></div></div></div><hr data-v-884e3907><h2 id="二、核心剪辑步骤" tabindex="-1" data-v-884e3907><a class="header-anchor" href="#二、核心剪辑步骤" data-v-884e3907><span data-v-884e3907>二、核心剪辑步骤</span></a></h2>',7)),a("div",T,[a("div",M,[(s(!0),d(p,null,m(n.cards,(e,i)=>(s(),d("div",{key:i,class:u(["step-card",e.color]),onMouseover:c=>n.activePanel=e.id},[a("p",B,v(e.title),1),a("p",H,v(e.subtitle),1)],42,C))),128))]),a("div",{class:u(["step-details",f.detailsClass])},[(s(!0),d(p,null,m(n.panels,(e,i)=>(s(),d("div",{key:i,class:u(["detail-panel",{active:n.activePanel===e.id}])},[a("h3",null,v(e.title),1),a("ul",null,[(s(!0),d(p,null,m(e.items,(c,h)=>(s(),d("li",{key:h},[a("strong",null,v(c.title),1),g(v(c.content),1)]))),128))])],2))),128))],2)]),t[5]||(t[5]=a("hr",null,null,-1)),t[6]||(t[6]=a("h2",{id:"三、校园视频进阶技巧",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#三、校园视频进阶技巧"},[a("span",null,"三、校园视频进阶技巧")])],-1)),a("div",L,[a("div",P,[(s(!0),d(p,null,m(n.advancedCards,(e,i)=>(s(),d("div",{key:i,class:u(["e-card",{playing:n.currentCard===i,dimmed:n.currentCard!==i}]),onMouseover:c=>n.currentCard=i},[t[0]||(t[0]=a("div",{class:"wave"},null,-1)),t[1]||(t[1]=a("div",{class:"wave"},null,-1)),t[2]||(t[2]=a("div",{class:"wave"},null,-1)),a("div",_,[(s(),y(x(e.icon),{class:"icon"})),g(" "+v(e.title)+" ",1),a("div",z,v(e.subtitle),1)])],42,k))),128))]),a("div",{class:u(["tips-content","content-"+n.currentCard])},[(s(!0),d(p,null,m(n.advancedCards,(e,i)=>(s(),d("div",{key:i,class:u(["content-panel",{active:n.currentCard===i}])},[a("ul",null,[(s(!0),d(p,null,m(e.items,(c,h)=>(s(),d("li",{key:h},[a("strong",null,v(c.title),1),g(v(c.content),1)]))),128))])],2))),128))],2)]),t[7]||(t[7]=a("hr",null,null,-1)),t[8]||(t[8]=a("h2",{id:"四、导出与发布注意事项",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#四、导出与发布注意事项"},[a("span",null,"四、导出与发布注意事项")])],-1)),t[9]||(t[9]=a("div",{class:"hint-container warning"},[a("p",{class:"hint-container-title"},"注意事项提醒"),a("p",null,"导出视频前请仔细检查以下关键参数设置，避免因格式、分辨率等问题影响最终效果。")],-1)),a("div",N,[a("div",D,[(s(!0),d(p,null,m(n.exportDetails,(e,i)=>(s(),d("div",{key:i,class:"detail-item"},[a("strong",null,v(e.title),1),a("p",null,v(e.content),1)]))),128))]),t[3]||(t[3]=q('<div class="cube-container" data-v-884e3907><div class="cube" data-v-884e3907><div class="face front" data-v-884e3907>分辨率</div><div class="face back" data-v-884e3907>帧率</div><div class="face right" data-v-884e3907>文件命名</div><div class="face left" data-v-884e3907>格式选择</div><div class="face top" data-v-884e3907>音乐版权</div><div class="face bottom" data-v-884e3907>肖像权</div></div></div>',1))]),t[10]||(t[10]=a("div",{class:"hint-container info"},[a("p",{class:"hint-container-title"},"最后"),a("p",null,"通过以上技巧，即使是剪辑新手也能制作出富有感染力的校园视频。剪映的模板化设计与细节调整功能，让创作既高效又充满个性化。开始你的校园影像记录之旅吧！")],-1)),b(" From Uiverse.io by SelfMadeSystem "),t[11]||(t[11]=q('<div class="container" data-v-884e3907><input id="def" class="s" name="s" checked="" type="radio" data-v-884e3907><input type="radio" name="s" class="s" id="r-0" data-v-884e3907><input type="radio" name="s" class="s" id="r-0-0" data-v-884e3907><input type="radio" name="s" class="s" id="r-0-0-0" data-v-884e3907><input type="radio" name="s" class="s" id="r-0-0-0-0" data-v-884e3907><input type="radio" name="s" class="s" id="r-0-0-0-0-0" data-v-884e3907><input type="radio" name="s" class="s" id="r-0-0-0-0-1" data-v-884e3907><input type="radio" name="s" class="s" id="r-0-0-0-1" data-v-884e3907><input type="radio" name="s" class="s" id="r-0-0-0-1-0" data-v-884e3907><input type="radio" name="s" class="s" id="r-0-0-0-1-1" data-v-884e3907><input type="radio" name="s" class="s" id="r-0-0-1" data-v-884e3907><input type="radio" name="s" class="s" id="r-0-0-1-0" data-v-884e3907><input type="radio" name="s" class="s" id="r-0-0-1-1" data-v-884e3907><input type="radio" name="s" class="s" id="r-0-1" data-v-884e3907><input type="radio" name="s" class="s" id="r-0-1-0" data-v-884e3907><input type="radio" name="s" class="s" id="r-0-1-0-0" data-v-884e3907><input type="radio" name="s" class="s" id="r-0-1-1" data-v-884e3907><input type="radio" name="s" class="s" id="r-0-2" data-v-884e3907><input type="radio" name="s" class="s" id="r-0-2-0" data-v-884e3907><input type="radio" name="s" class="s" id="r-0-2-0-0" data-v-884e3907><input type="radio" name="s" class="s" id="r-0-2-1" data-v-884e3907><input type="radio" name="s" class="s" id="r-1" data-v-884e3907><input type="radio" name="s" class="s" id="r-1-0" data-v-884e3907><input type="radio" name="s" class="s" id="r-1-0-0" data-v-884e3907><input type="radio" name="s" class="s" id="r-1-0-1" data-v-884e3907><input type="radio" name="s" class="s" id="r-1-1" data-v-884e3907><input type="radio" name="s" class="s" id="r-2" data-v-884e3907><input type="radio" name="s" class="s" id="r-2-0" data-v-884e3907><input type="radio" name="s" class="s" id="r-2-0-0" data-v-884e3907><input type="radio" name="s" class="s" id="r-2-0-0-0" data-v-884e3907><input type="radio" name="s" class="s" id="r-2-0-1" data-v-884e3907><input type="radio" name="s" class="s" id="r-2-0-1-0" data-v-884e3907><input type="radio" name="s" class="s" id="r-2-1" data-v-884e3907><input type="radio" name="s" class="s" id="r-2-1-0" data-v-884e3907><input type="radio" name="s" class="s" id="r-3" data-v-884e3907><input type="radio" name="s" class="s" id="r-3-0" data-v-884e3907><input type="radio" name="s" class="s" id="r-3-0-0" data-v-884e3907><input type="radio" name="s" class="s" id="r-3-1" data-v-884e3907><input type="radio" name="s" class="s" id="r-3-1-0" data-v-884e3907><div class="box input" data-v-884e3907><div class="for-def" data-v-884e3907><label for="r-0" data-v-884e3907>我在学习剪映</label><label for="r-1" data-v-884e3907>我刚接触视频编辑</label><label for="r-2" data-v-884e3907>我需要一些制作建议</label><label for="r-3" data-v-884e3907>你是谁？</label></div><div class="for-eod" data-v-884e3907><label for="def" data-v-884e3907>&lt;重新开始对话&gt;</label></div><div class="for-r-0" data-v-884e3907><label for="r-0-0" data-v-884e3907>嘿！我做过一些视频了</label><label for="r-0-1" data-v-884e3907>有什么好用的特效吗</label><label for="r-0-2" data-v-884e3907>你最喜欢什么风格</label></div><div class="for-r-0-0" data-v-884e3907><label for="r-0-0-0" data-v-884e3907>我正在用剪映</label><label for="r-0-0-1" data-v-884e3907>我是专业视频编辑</label></div><div class="for-r-0-0-0" data-v-884e3907><label for="r-0-0-0-0" data-v-884e3907>我觉得它很好用</label><label for="r-0-0-0-1" data-v-884e3907>你推荐什么软件</label></div><div class="for-r-0-0-0-0" data-v-884e3907><label for="r-0-0-0-0-0" data-v-884e3907>别这么刻薄</label><label for="r-0-0-0-0-1" data-v-884e3907>我只是开玩笑</label></div><div class="for-r-0-0-0-1" data-v-884e3907><label for="r-0-0-0-1-0" data-v-884e3907>噢，明白了</label><label for="r-0-0-0-1-1" data-v-884e3907>这不太公平</label></div><div class="for-r-0-0-1" data-v-884e3907><label for="r-0-0-1-0" data-v-884e3907>为什么</label><label for="r-0-0-1-1" data-v-884e3907>希望我的作品能精彩</label></div><div class="for-r-0-1" data-v-884e3907><label for="r-0-1-0" data-v-884e3907>我的作品怎么样</label><label for="r-0-1-1" data-v-884e3907>明白了</label></div><div class="for-r-0-1-0" data-v-884e3907><label for="r-0-1-0-0" data-v-884e3907>独特是什么意思</label></div><div class="for-r-0-2" data-v-884e3907><label for="r-0-2-0" data-v-884e3907>什么意思</label><label for="r-0-2-1" data-v-884e3907>你真的懂剪辑吗</label></div><div class="for-r-0-2-0" data-v-884e3907><label for="r-0-2-0-0" data-v-884e3907>像我这样的</label></div><div class="for-r-1" data-v-884e3907><label for="r-1-0" data-v-884e3907>视频编辑难吗</label><label for="r-1-1" data-v-884e3907>懂了</label></div><div class="for-r-1-0" data-v-884e3907><label for="r-1-0-0" data-v-884e3907>炫酷的视频效果</label><label for="r-1-0-1" data-v-884e3907>我懂了</label></div><div class="for-r-2" data-v-884e3907><label for="r-2-0" data-v-884e3907>关于视频效果的问题</label><label for="r-2-1" data-v-884e3907>不知道从哪开始</label></div><div class="for-r-2-0" data-v-884e3907><label for="r-2-0-0" data-v-884e3907>有什么技巧吗</label><label for="r-2-0-1" data-v-884e3907>颜色搭配怎么选</label></div><div class="for-r-2-0-0" data-v-884e3907><label for="r-2-0-0-0" data-v-884e3907>音效怎么处理</label></div><div class="for-r-2-0-1" data-v-884e3907><label for="r-2-0-1-0" data-v-884e3907>渐变色效果</label></div><div class="for-r-2-1" data-v-884e3907><label for="r-2-1-0" data-v-884e3907>如果我做错了怎么办</label></div><div class="for-r-3" data-v-884e3907><label for="r-3-0" data-v-884e3907>你怎么会懂剪辑</label><label for="r-3-1" data-v-884e3907>你怎么看起来像骷髅</label></div><div class="for-r-3-0" data-v-884e3907><label for="r-3-0-0" data-v-884e3907>你认识Papyrus吗</label></div><div class="for-r-3-1" data-v-884e3907><label for="r-3-1-0" data-v-884e3907>你是从游戏里来的？</label></div></div><div class="box text" data-v-884e3907><div class="sans" data-v-884e3907></div><div class="astx" data-v-884e3907>*<br data-v-884e3907><br data-v-884e3907><br data-v-884e3907></div><div class="lines" data-v-884e3907><div class="line a" data-v-884e3907></div><div class="line b" data-v-884e3907></div><div class="line c" data-v-884e3907></div></div></div></div>',1))])}const V=w(Z,[["render",E],["__scopeId","data-v-884e3907"],["__file","capcut.html.vue"]]),A=JSON.parse('{"path":"/NewMedia/capcut.html","title":"如何用剪映制作专业级校园视频？学生党必学剪辑攻略","lang":"zh-CN","frontmatter":{"title":"如何用剪映制作专业级校园视频？学生党必学剪辑攻略","description":"校园视频剪辑完整实施方案与技巧指南","tags":["剪映教程","视频剪辑","新媒体运营"],"head":[["meta",{"property":"og:url","content":"https://easy-qfnu.top/QFNUCyberWiki/NewMedia/capcut.html"}],["meta",{"property":"og:site_name","content":"QFNUCyberwiki"}],["meta",{"property":"og:title","content":"如何用剪映制作专业级校园视频？学生党必学剪辑攻略"}],["meta",{"property":"og:description","content":"校园视频剪辑完整实施方案与技巧指南"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-31T06:19:44.000Z"}],["meta",{"property":"article:tag","content":"剪映教程"}],["meta",{"property":"article:tag","content":"视频剪辑"}],["meta",{"property":"article:tag","content":"新媒体运营"}],["meta",{"property":"article:modified_time","content":"2025-03-31T06:19:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何用剪映制作专业级校园视频？学生党必学剪辑攻略\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-03-31T06:19:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"W1ndys\\",\\"url\\":\\"https://github.com/W1ndys\\"}]}"]]},"git":{"createdTime":1743308272000,"updatedTime":1743401984000,"contributors":[{"name":"W1ndys","username":"W1ndys","email":"w1ndys@outlook.com","commits":2,"url":"https://github.com/W1ndys"},{"name":"Lrxc123","username":"Lrxc123","email":"2636896605@qq.com","commits":1,"url":"https://github.com/Lrxc123"}]},"readingTime":{"minutes":29.09,"words":8727},"filePathRelative":"NewMedia/capcut.md","localizedDate":"2025年3月30日","excerpt":"\\n<div class=\\"notification\\">\\n  <div class=\\"notiglow\\"></div>\\n  <div class=\\"notiborderglow\\"></div>\\n  <div class=\\"notititle\\">剪映视频剪辑指南</div>\\n  <div class=\\"notibody\\">校园视频是记录青春、展示活动的重要载体，无论是开学典礼、运动会、社团表演还是毕业纪念，剪映都能通过其强大的功能帮助你快速完成高质量剪辑。以下为分步教学与进阶技巧：</div>\\n</div>\\n<hr>\\n<h2>一、素材准备与规划</h2>\\n<div class=\\"cards-container\\">\\n  <div class=\\"card\\">\\n    <div class=\\"card-content\\">\\n      <div class=\\"card-top\\">\\n        <span class=\\"card-title\\">01</span>\\n        <p>拍摄设备</p>\\n      </div>\\n      <div class=\\"card-bottom\\">\\n        <svg width=\\"32\\" viewBox=\\"0 -960 960 960\\" height=\\"32\\" xmlns=\\"http://www.w3.org/2000/svg\\"><path d=\\"M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z\\"></path></svg>\\n      </div>\\n    </div>\\n    <div class=\\"card-image\\">\\n      <svg width=\\"48\\" viewBox=\\"0 -960 960 960\\" height=\\"48\\" xmlns=\\"http://www.w3.org/2000/svg\\"><path d=\\"M440-440ZM220-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h520q24 0 42 18t18 42v520q0 24-18 42t-42 18H220Zm0-60h520v-520H220v520Zm260-260q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM220-160v-520 520Z\\"></path></svg>\\n    </div>\\n    <div class=\\"card-details\\">\\n      <ul>\\n        <li>\\n          <strong>推荐设备</strong>\\n          手机：小米/苹果/华为；相机：1080p以上；稳定器：三脚架或云台\\n        </li>\\n        <li>\\n          <strong>设备选择建议</strong>\\n          手机：便携、快速分享；相机：画质好、可控性强；稳定器：避免抖动\\n        </li>\\n      </ul>\\n    </div>\\n  </div>\\n  <div class=\\"card\\">\\n    <div class=\\"card-content\\">\\n      <div class=\\"card-top\\">\\n        <span class=\\"card-title\\">02</span>\\n        <p>素材整理</p>\\n      </div>\\n      <div class=\\"card-bottom\\">\\n        <svg width=\\"32\\" viewBox=\\"0 -960 960 960\\" height=\\"32\\" xmlns=\\"http://www.w3.org/2000/svg\\"><path d=\\"M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z\\"></path></svg>\\n      </div>\\n    </div>\\n    <div class=\\"card-image\\">\\n      <svg width=\\"48\\" viewBox=\\"0 -960 960 960\\" height=\\"48\\" xmlns=\\"http://www.w3.org/2000/svg\\"><path d=\\"M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm0 0v-400 400Z\\"></path></svg>\\n    </div>\\n    <div class=\\"card-details\\">\\n      <ul>\\n        <li>\\n          <strong>场景分类</strong>\\n          入场、表演片段、互动画面、镜头等分类整理\\n        </li>\\n        <li>\\n          <strong>命名规范</strong>\\n          格式：[日期]-[场景]-[序号]，示例：038-开场-01\\n        </li>\\n      </ul>\\n    </div>\\n  </div>\\n  <div class=\\"card\\">\\n    <div class=\\"card-content\\">\\n      <div class=\\"card-top\\">\\n        <span class=\\"card-title\\">03</span>\\n        <p>基础设置</p>\\n      </div>\\n      <div class=\\"card-bottom\\">\\n        <svg width=\\"32\\" viewBox=\\"0 -960 960 960\\" height=\\"32\\" xmlns=\\"http://www.w3.org/2000/svg\\"><path d=\\"M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z\\"></path></svg>\\n      </div>\\n    </div>\\n    <div class=\\"card-image\\">\\n      <svg width=\\"48\\" viewBox=\\"0 -960 960 960\\" height=\\"48\\" xmlns=\\"http://www.w3.org/2000/svg\\"><path d=\\"m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5L78-585l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z\\"></path></svg>\\n    </div>\\n    <div class=\\"card-details\\">\\n      <ul>\\n        <li>\\n          <strong>新建项目</strong>\\n          打开APP，选择\\"新建项目\\"，支持批量导入\\n        </li>\\n        <li>\\n          <strong>画幅选择</strong>\\n          竖屏：9:16（适合抖音）；横屏：16:9（适合大屏）\\n        </li>\\n      </ul>\\n    </div>\\n  </div>\\n</div>"}');export{V as comp,A as data};
