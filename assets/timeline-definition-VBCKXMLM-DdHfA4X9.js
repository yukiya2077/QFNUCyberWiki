import{m as r,H as bt,t as S,i as B,b6 as kt,b7 as _t,b8 as vt,b9 as wt,aQ as nt,o as St,ba as $t,h as Et}from"./mermaid.esm.min-jUBqgbog.js";import"./app-lTE_kbdw.js";var Z=function(){var i=r(function(f,a,o,d){for(o=o||{},d=f.length;d--;o[f[d]]=a);return o},"o"),t=[6,8,10,11,12,14,16,17,20,21],e=[1,9],s=[1,10],n=[1,11],h=[1,12],c=[1,13],y=[1,16],p=[1,17],m={trace:r(function(){},"trace"),yy:{},symbols_:{error:2,start:3,timeline:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,title:11,acc_title:12,acc_title_value:13,acc_descr:14,acc_descr_value:15,acc_descr_multiline_value:16,section:17,period_statement:18,event_statement:19,period:20,event:21,$accept:0,$end:1},terminals_:{2:"error",4:"timeline",6:"EOF",8:"SPACE",10:"NEWLINE",11:"title",12:"acc_title",13:"acc_title_value",14:"acc_descr",15:"acc_descr_value",16:"acc_descr_multiline_value",17:"section",20:"period",21:"event"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,1],[18,1],[19,1]],performAction:r(function(f,a,o,d,u,l,x){var _=l.length-1;switch(u){case 1:return l[_-1];case 2:this.$=[];break;case 3:l[_-1].push(l[_]),this.$=l[_-1];break;case 4:case 5:this.$=l[_];break;case 6:case 7:this.$=[];break;case 8:d.getCommonDb().setDiagramTitle(l[_].substr(6)),this.$=l[_].substr(6);break;case 9:this.$=l[_].trim(),d.getCommonDb().setAccTitle(this.$);break;case 10:case 11:this.$=l[_].trim(),d.getCommonDb().setAccDescription(this.$);break;case 12:d.addSection(l[_].substr(8)),this.$=l[_].substr(8);break;case 15:d.addTask(l[_],0,""),this.$=l[_];break;case 16:d.addEvent(l[_].substr(2)),this.$=l[_];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},i(t,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:e,12:s,14:n,16:h,17:c,18:14,19:15,20:y,21:p},i(t,[2,7],{1:[2,1]}),i(t,[2,3]),{9:18,11:e,12:s,14:n,16:h,17:c,18:14,19:15,20:y,21:p},i(t,[2,5]),i(t,[2,6]),i(t,[2,8]),{13:[1,19]},{15:[1,20]},i(t,[2,11]),i(t,[2,12]),i(t,[2,13]),i(t,[2,14]),i(t,[2,15]),i(t,[2,16]),i(t,[2,4]),i(t,[2,9]),i(t,[2,10])],defaultActions:{},parseError:r(function(f,a){if(a.recoverable)this.trace(f);else{var o=new Error(f);throw o.hash=a,o}},"parseError"),parse:r(function(f){var a=this,o=[0],d=[],u=[null],l=[],x=this.table,_="",T=0,A=0,j=0,W=2,z=1,C=l.slice.call(arguments,1),g=Object.create(this.lexer),v={yy:{}};for(var I in this.yy)Object.prototype.hasOwnProperty.call(this.yy,I)&&(v.yy[I]=this.yy[I]);g.setInput(f,v.yy),v.yy.lexer=g,v.yy.parser=this,typeof g.yylloc>"u"&&(g.yylloc={});var P=g.yylloc;l.push(P);var F=g.options&&g.options.ranges;typeof v.yy.parseError=="function"?this.parseError=v.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function q($){o.length=o.length-2*$,u.length=u.length-$,l.length=l.length-$}r(q,"popStack");function et(){var $;return $=d.pop()||g.lex()||z,typeof $!="number"&&($ instanceof Array&&(d=$,$=d.pop()),$=a.symbols_[$]||$),$}r(et,"lex");for(var w,Y,H,E,qt,X,O={},R,N,it,V;;){if(H=o[o.length-1],this.defaultActions[H]?E=this.defaultActions[H]:((w===null||typeof w>"u")&&(w=et()),E=x[H]&&x[H][w]),typeof E>"u"||!E.length||!E[0]){var Q="";V=[];for(R in x[H])this.terminals_[R]&&R>W&&V.push("'"+this.terminals_[R]+"'");g.showPosition?Q="Parse error on line "+(T+1)+`:
`+g.showPosition()+`
Expecting `+V.join(", ")+", got '"+(this.terminals_[w]||w)+"'":Q="Parse error on line "+(T+1)+": Unexpected "+(w==z?"end of input":"'"+(this.terminals_[w]||w)+"'"),this.parseError(Q,{text:g.match,token:this.terminals_[w]||w,line:g.yylineno,loc:P,expected:V})}if(E[0]instanceof Array&&E.length>1)throw new Error("Parse Error: multiple actions possible at state: "+H+", token: "+w);switch(E[0]){case 1:o.push(w),u.push(g.yytext),l.push(g.yylloc),o.push(E[1]),w=null,Y?(w=Y,Y=null):(A=g.yyleng,_=g.yytext,T=g.yylineno,P=g.yylloc,j>0);break;case 2:if(N=this.productions_[E[1]][1],O.$=u[u.length-N],O._$={first_line:l[l.length-(N||1)].first_line,last_line:l[l.length-1].last_line,first_column:l[l.length-(N||1)].first_column,last_column:l[l.length-1].last_column},F&&(O._$.range=[l[l.length-(N||1)].range[0],l[l.length-1].range[1]]),X=this.performAction.apply(O,[_,A,T,v.yy,E[1],u,l].concat(C)),typeof X<"u")return X;N&&(o=o.slice(0,-1*N*2),u=u.slice(0,-1*N),l=l.slice(0,-1*N)),o.push(this.productions_[E[1]][0]),u.push(O.$),l.push(O._$),it=x[o[o.length-2]][o[o.length-1]],o.push(it);break;case 3:return!0}}return!0},"parse")},b=function(){var f={EOF:1,parseError:r(function(a,o){if(this.yy.parser)this.yy.parser.parseError(a,o);else throw new Error(a)},"parseError"),setInput:r(function(a,o){return this.yy=o||this.yy||{},this._input=a,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:r(function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a;var o=a.match(/(?:\r\n?|\n).*/g);return o?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},"input"),unput:r(function(a){var o=a.length,d=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-o),this.offset-=o;var u=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),d.length-1&&(this.yylineno-=d.length-1);var l=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:d?(d.length===u.length?this.yylloc.first_column:0)+u[u.length-d.length].length-d[0].length:this.yylloc.first_column-o},this.options.ranges&&(this.yylloc.range=[l[0],l[0]+this.yyleng-o]),this.yyleng=this.yytext.length,this},"unput"),more:r(function(){return this._more=!0,this},"more"),reject:r(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:r(function(a){this.unput(this.match.slice(a))},"less"),pastInput:r(function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:r(function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:r(function(){var a=this.pastInput(),o=new Array(a.length+1).join("-");return a+this.upcomingInput()+`
`+o+"^"},"showPosition"),test_match:r(function(a,o){var d,u,l;if(this.options.backtrack_lexer&&(l={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(l.yylloc.range=this.yylloc.range.slice(0))),u=a[0].match(/(?:\r\n?|\n).*/g),u&&(this.yylineno+=u.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:u?u[u.length-1].length-u[u.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],d=this.performAction.call(this,this.yy,this,o,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),d)return d;if(this._backtrack){for(var x in l)this[x]=l[x];return!1}return!1},"test_match"),next:r(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,o,d,u;this._more||(this.yytext="",this.match="");for(var l=this._currentRules(),x=0;x<l.length;x++)if(d=this._input.match(this.rules[l[x]]),d&&(!o||d[0].length>o[0].length)){if(o=d,u=x,this.options.backtrack_lexer){if(a=this.test_match(d,l[x]),a!==!1)return a;if(this._backtrack){o=!1;continue}else return!1}else if(!this.options.flex)break}return o?(a=this.test_match(o,l[u]),a!==!1?a:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:r(function(){var a=this.next();return a||this.lex()},"lex"),begin:r(function(a){this.conditionStack.push(a)},"begin"),popState:r(function(){var a=this.conditionStack.length-1;return a>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:r(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:r(function(a){return a=this.conditionStack.length-1-Math.abs(a||0),a>=0?this.conditionStack[a]:"INITIAL"},"topState"),pushState:r(function(a){this.begin(a)},"pushState"),stateStackSize:r(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:r(function(a,o,d,u){switch(d){case 0:break;case 1:break;case 2:return 10;case 3:break;case 4:break;case 5:return 4;case 6:return 11;case 7:return this.begin("acc_title"),12;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),14;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 17;case 15:return 21;case 16:return 20;case 17:return 6;case 18:return"INVALID"}},"anonymous"),rules:[/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:timeline\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^:\n]+)/i,/^(?::\s[^:\n]+)/i,/^(?:[^#:\n]+)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,9,11,14,15,16,17,18],inclusive:!0}}};return f}();m.lexer=b;function k(){this.yy={}}return r(k,"Parser"),k.prototype=m,m.Parser=k,new k}();Z.parser=Z;var Tt=Z,lt={};St(lt,{addEvent:()=>gt,addSection:()=>dt,addTask:()=>yt,addTaskOrg:()=>ft,clear:()=>ht,default:()=>It,getCommonDb:()=>ct,getSections:()=>ut,getTasks:()=>pt});var M="",ot=0,J=[],G=[],D=[],ct=r(()=>$t,"getCommonDb"),ht=r(function(){J.length=0,G.length=0,M="",D.length=0,Et()},"clear"),dt=r(function(i){M=i,J.push(i)},"addSection"),ut=r(function(){return J},"getSections"),pt=r(function(){let i=at(),t=100,e=0;for(;!i&&e<t;)i=at(),e++;return G.push(...D),G},"getTasks"),yt=r(function(i,t,e){let s={id:ot++,section:M,type:M,task:i,score:t||0,events:e?[e]:[]};D.push(s)},"addTask"),gt=r(function(i){D.find(t=>t.id===ot-1).events.push(i)},"addEvent"),ft=r(function(i){let t={section:M,type:M,description:i,task:i,classes:[]};G.push(t)},"addTaskOrg"),at=r(function(){let i=r(function(e){return D[e].processed},"compileTask"),t=!0;for(let[e,s]of D.entries())i(e),t=t&&s.processed;return t},"compileTasks"),It={clear:ht,getCommonDb:ct,addSection:dt,getSections:ut,getTasks:pt,addTask:yt,addTaskOrg:ft,addEvent:gt},Nt=12,U=r(function(i,t){let e=i.append("rect");return e.attr("x",t.x),e.attr("y",t.y),e.attr("fill",t.fill),e.attr("stroke",t.stroke),e.attr("width",t.width),e.attr("height",t.height),e.attr("rx",t.rx),e.attr("ry",t.ry),t.class!==void 0&&e.attr("class",t.class),e},"drawRect"),Ct=r(function(i,t){let e=i.append("circle").attr("cx",t.cx).attr("cy",t.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),s=i.append("g");s.append("circle").attr("cx",t.cx-15/3).attr("cy",t.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),s.append("circle").attr("cx",t.cx+15/3).attr("cy",t.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666");function n(y){let p=nt().startAngle(Math.PI/2).endAngle(3*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);y.append("path").attr("class","mouth").attr("d",p).attr("transform","translate("+t.cx+","+(t.cy+2)+")")}r(n,"smile");function h(y){let p=nt().startAngle(3*Math.PI/2).endAngle(5*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);y.append("path").attr("class","mouth").attr("d",p).attr("transform","translate("+t.cx+","+(t.cy+7)+")")}r(h,"sad");function c(y){y.append("line").attr("class","mouth").attr("stroke",2).attr("x1",t.cx-5).attr("y1",t.cy+7).attr("x2",t.cx+5).attr("y2",t.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}return r(c,"ambivalent"),t.score>3?n(s):t.score<3?h(s):c(s),e},"drawFace"),Pt=r(function(i,t){let e=i.append("circle");return e.attr("cx",t.cx),e.attr("cy",t.cy),e.attr("class","actor-"+t.pos),e.attr("fill",t.fill),e.attr("stroke",t.stroke),e.attr("r",t.r),e.class!==void 0&&e.attr("class",e.class),t.title!==void 0&&e.append("title").text(t.title),e},"drawCircle"),mt=r(function(i,t){let e=t.text.replace(/<br\s*\/?>/gi," "),s=i.append("text");s.attr("x",t.x),s.attr("y",t.y),s.attr("class","legend"),s.style("text-anchor",t.anchor),t.class!==void 0&&s.attr("class",t.class);let n=s.append("tspan");return n.attr("x",t.x+t.textMargin*2),n.text(e),s},"drawText"),At=r(function(i,t){function e(n,h,c,y,p){return n+","+h+" "+(n+c)+","+h+" "+(n+c)+","+(h+y-p)+" "+(n+c-p*1.2)+","+(h+y)+" "+n+","+(h+y)}r(e,"genPoints");let s=i.append("polygon");s.attr("points",e(t.x,t.y,50,20,7)),s.attr("class","labelBox"),t.y=t.y+t.labelMargin,t.x=t.x+.5*t.labelMargin,mt(i,t)},"drawLabel"),Ht=r(function(i,t,e){let s=i.append("g"),n=K();n.x=t.x,n.y=t.y,n.fill=t.fill,n.width=e.width,n.height=e.height,n.class="journey-section section-type-"+t.num,n.rx=3,n.ry=3,U(s,n),xt(e)(t.text,s,n.x,n.y,n.width,n.height,{class:"journey-section section-type-"+t.num},e,t.colour)},"drawSection"),rt=-1,Lt=r(function(i,t,e){let s=t.x+e.width/2,n=i.append("g");rt++;let h=300+5*30;n.append("line").attr("id","task"+rt).attr("x1",s).attr("y1",t.y).attr("x2",s).attr("y2",h).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),Ct(n,{cx:s,cy:300+(5-t.score)*30,score:t.score});let c=K();c.x=t.x,c.y=t.y,c.fill=t.fill,c.width=e.width,c.height=e.height,c.class="task task-type-"+t.num,c.rx=3,c.ry=3,U(n,c),xt(e)(t.task,n,c.x,c.y,c.width,c.height,{class:"task"},e,t.colour)},"drawTask"),Ot=r(function(i,t){U(i,{x:t.startx,y:t.starty,width:t.stopx-t.startx,height:t.stopy-t.starty,fill:t.fill,class:"rect"}).lower()},"drawBackgroundRect"),Mt=r(function(){return{x:0,y:0,fill:void 0,"text-anchor":"start",width:100,height:100,textMargin:0,rx:0,ry:0}},"getTextObj"),K=r(function(){return{x:0,y:0,width:100,anchor:"start",height:100,rx:0,ry:0}},"getNoteRect"),xt=function(){function i(n,h,c,y,p,m,b,k){let f=h.append("text").attr("x",c+p/2).attr("y",y+m/2+5).style("font-color",k).style("text-anchor","middle").text(n);s(f,b)}r(i,"byText");function t(n,h,c,y,p,m,b,k,f){let{taskFontSize:a,taskFontFamily:o}=k,d=n.split(/<br\s*\/?>/gi);for(let u=0;u<d.length;u++){let l=u*a-a*(d.length-1)/2,x=h.append("text").attr("x",c+p/2).attr("y",y).attr("fill",f).style("text-anchor","middle").style("font-size",a).style("font-family",o);x.append("tspan").attr("x",c+p/2).attr("dy",l).text(d[u]),x.attr("y",y+m/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),s(x,b)}}r(t,"byTspan");function e(n,h,c,y,p,m,b,k){let f=h.append("switch"),a=f.append("foreignObject").attr("x",c).attr("y",y).attr("width",p).attr("height",m).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");a.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(n),t(n,f,c,y,p,m,b,k),s(a,b)}r(e,"byFo");function s(n,h){for(let c in h)c in h&&n.attr(c,h[c])}return r(s,"_setTextAttrs"),function(n){return n.textPlacement==="fo"?e:n.textPlacement==="old"?i:t}}(),Dt=r(function(i){i.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")},"initGraphics");function tt(i,t){i.each(function(){var e=B(this),s=e.text().split(/(\s+|<br>)/).reverse(),n,h=[],c=1.1,y=e.attr("y"),p=parseFloat(e.attr("dy")),m=e.text(null).append("tspan").attr("x",0).attr("y",y).attr("dy",p+"em");for(let b=0;b<s.length;b++)n=s[s.length-1-b],h.push(n),m.text(h.join(" ").trim()),(m.node().getComputedTextLength()>t||n==="<br>")&&(h.pop(),m.text(h.join(" ").trim()),n==="<br>"?h=[""]:h=[n],m=e.append("tspan").attr("x",0).attr("y",y).attr("dy",c+"em").text(n))})}r(tt,"wrap");var jt=r(function(i,t,e,s){var b;let n=e%Nt-1,h=i.append("g");t.section=n,h.attr("class",(t.class?t.class+" ":"")+"timeline-node "+("section-"+n));let c=h.append("g"),y=h.append("g"),p=y.append("text").text(t.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(tt,t.width).node().getBBox(),m=(b=s.fontSize)!=null&&b.replace?s.fontSize.replace("px",""):s.fontSize;return t.height=p.height+m*1.1*.5+t.padding,t.height=Math.max(t.height,t.maxHeight),t.width=t.width+2*t.padding,y.attr("transform","translate("+t.width/2+", "+t.padding/2+")"),Ft(c,t,n,s),t},"drawNode"),zt=r(function(i,t,e){var c;let s=i.append("g"),n=s.append("text").text(t.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(tt,t.width).node().getBBox(),h=(c=e.fontSize)!=null&&c.replace?e.fontSize.replace("px",""):e.fontSize;return s.remove(),n.height+h*1.1*.5+t.padding},"getVirtualNodeHeight"),Ft=r(function(i,t,e){i.append("path").attr("id","node-"+t.id).attr("class","node-bkg node-"+t.type).attr("d",`M0 ${t.height-5} v${-t.height+2*5} q0,-5 5,-5 h${t.width-2*5} q5,0 5,5 v${t.height-5} H0 Z`),i.append("line").attr("class","node-line-"+e).attr("x1",0).attr("y1",t.height).attr("x2",t.width).attr("y2",t.height)},"defaultBkg"),L={drawRect:U,drawCircle:Pt,drawSection:Ht,drawText:mt,drawLabel:At,drawTask:Lt,drawBackgroundRect:Ot,getTextObj:Mt,getNoteRect:K,initGraphics:Dt,drawNode:jt,getVirtualNodeHeight:zt},Wt=r(function(i,t,e,s){var W,z;let n=bt(),h=n.leftMargin??50;S.debug("timeline",s.db);let c=n.securityLevel,y;c==="sandbox"&&(y=B("#i"+t));let p=(c==="sandbox"?B(y.nodes()[0].contentDocument.body):B("body")).select("#"+t);p.append("g");let m=s.db.getTasks(),b=s.db.getCommonDb().getDiagramTitle();S.debug("task",m),L.initGraphics(p);let k=s.db.getSections();S.debug("sections",k);let f=0,a=0,o=0,d=0,u=50+h,l=50;d=50;let x=0,_=!0;k.forEach(function(C){let g={number:x,descr:C,section:x,width:150,padding:20,maxHeight:f},v=L.getVirtualNodeHeight(p,g,n);S.debug("sectionHeight before draw",v),f=Math.max(f,v+20)});let T=0,A=0;S.debug("tasks.length",m.length);for(let[C,g]of m.entries()){let v={number:C,descr:g,section:g.section,width:150,padding:20,maxHeight:a},I=L.getVirtualNodeHeight(p,v,n);S.debug("taskHeight before draw",I),a=Math.max(a,I+20),T=Math.max(T,g.events.length);let P=0;for(let F of g.events){let q={descr:F,section:g.section,number:g.section,width:150,padding:20,maxHeight:50};P+=L.getVirtualNodeHeight(p,q,n)}A=Math.max(A,P)}S.debug("maxSectionHeight before draw",f),S.debug("maxTaskHeight before draw",a),k&&k.length>0?k.forEach(C=>{let g=m.filter(F=>F.section===C),v={number:x,descr:C,section:x,width:200*Math.max(g.length,1)-50,padding:20,maxHeight:f};S.debug("sectionNode",v);let I=p.append("g"),P=L.drawNode(I,v,x,n);S.debug("sectionNode output",P),I.attr("transform",`translate(${u}, ${d})`),l+=f+50,g.length>0&&st(p,g,x,u,l,a,n,T,A,f,!1),u+=200*Math.max(g.length,1),l=d,x++}):(_=!1,st(p,m,x,u,l,a,n,T,A,f,!0));let j=p.node().getBBox();S.debug("bounds",j),b&&p.append("text").text(b).attr("x",j.width/2-h).attr("font-size","4ex").attr("font-weight","bold").attr("y",20),o=_?f+a+150:a+100,p.append("g").attr("class","lineWrapper").append("line").attr("x1",h).attr("y1",o).attr("x2",j.width+3*h).attr("y2",o).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)"),kt(void 0,p,((W=n.timeline)==null?void 0:W.padding)??50,((z=n.timeline)==null?void 0:z.useMaxWidth)??!1)},"draw"),st=r(function(i,t,e,s,n,h,c,y,p,m,b){var k;for(let f of t){let a={descr:f.task,section:e,number:e,width:150,padding:20,maxHeight:h};S.debug("taskNode",a);let o=i.append("g").attr("class","taskWrapper"),d=L.drawNode(o,a,e,c).height;if(S.debug("taskHeight after draw",d),o.attr("transform",`translate(${s}, ${n})`),h=Math.max(h,d),f.events){let u=i.append("g").attr("class","lineWrapper"),l=h;n+=100,l=l+Rt(i,f.events,e,s,n,c),n-=100,u.append("line").attr("x1",s+190/2).attr("y1",n+h).attr("x2",s+190/2).attr("y2",n+h+(b?h:m)+p+120).attr("stroke-width",2).attr("stroke","black").attr("marker-end","url(#arrowhead)").attr("stroke-dasharray","5,5")}s=s+200,b&&!((k=c.timeline)!=null&&k.disableMulticolor)&&e++}n=n-10},"drawTasks"),Rt=r(function(i,t,e,s,n,h){let c=0,y=n;n=n+100;for(let p of t){let m={descr:p,section:e,number:e,width:150,padding:20,maxHeight:50};S.debug("eventNode",m);let b=i.append("g").attr("class","eventWrapper"),k=L.drawNode(b,m,e,h).height;c=c+k,b.attr("transform",`translate(${s}, ${n})`),n=n+10+k}return n=y,c},"drawEvents"),Vt={setConf:r(()=>{},"setConf"),draw:Wt},Bt=r(i=>{let t="";for(let e=0;e<i.THEME_COLOR_LIMIT;e++)i["lineColor"+e]=i["lineColor"+e]||i["cScaleInv"+e],_t(i["lineColor"+e])?i["lineColor"+e]=vt(i["lineColor"+e],20):i["lineColor"+e]=wt(i["lineColor"+e],20);for(let e=0;e<i.THEME_COLOR_LIMIT;e++){let s=""+(17-3*e);t+=`
    .section-${e-1} rect, .section-${e-1} path, .section-${e-1} circle, .section-${e-1} path  {
      fill: ${i["cScale"+e]};
    }
    .section-${e-1} text {
     fill: ${i["cScaleLabel"+e]};
    }
    .node-icon-${e-1} {
      font-size: 40px;
      color: ${i["cScaleLabel"+e]};
    }
    .section-edge-${e-1}{
      stroke: ${i["cScale"+e]};
    }
    .edge-depth-${e-1}{
      stroke-width: ${s};
    }
    .section-${e-1} line {
      stroke: ${i["cScaleInv"+e]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${i["cScaleLabel"+e]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `}return t},"genSections"),Gt=r(i=>`
  .edge {
    stroke-width: 3;
  }
  ${Bt(i)}
  .section-root rect, .section-root path, .section-root circle  {
    fill: ${i.git0};
  }
  .section-root text {
    fill: ${i.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .eventWrapper  {
   filter: brightness(120%);
  }
`,"getStyles"),Ut=Gt,Qt={db:lt,renderer:Vt,parser:Tt,styles:Ut};export{Qt as diagram};
