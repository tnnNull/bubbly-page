(window.webpackJsonpbubbly=window.webpackJsonpbubbly||[]).push([[0],{110:function(e,t,a){},205:function(e,t,a){e.exports=a(325)},316:function(e,t,a){},325:function(e,t,a){"use strict";a.r(t);a(206),a(232),a(234),a(235),a(237),a(238),a(239),a(240),a(241),a(242),a(243),a(244),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254),a(255),a(257),a(258),a(259),a(260),a(261),a(262),a(263),a(264),a(265),a(266),a(267),a(268),a(269),a(270),a(271),a(272),a(273),a(274);var n=a(0),c=a.n(n),r=a(78),s=a.n(r),l=a(51),o=a.n(l),u=a(33),i=a.n(u),d=a(44),m=a(124),f=a.n(m),p=a(121),h=a.n(p),b=a(122),E=a.n(b),g=a(53),v=a.n(g),k=a(123),y=a.n(k),O=(a(283),a(54)),j=a.n(O),x=a(45),w=a.n(x),I=a(42),M=a.n(I),N=a(43),A=a.n(N),C=a(47),D=a.n(C),R=a(52),S=a.n(R),U=a(32),_=a.n(U),z=(a(110),function(e){var t=e.id,a=e.go,n=e.fetchedUser;e.setActiveModal;return c.a.createElement(w.a,{id:t},c.a.createElement(M.a,{className:"Panel"},"Bubbly"),n&&c.a.createElement(D.a,{title:"\u0412\u044b \u0432\u043e\u0448\u043b\u0438 \u043a\u0430\u043a"},c.a.createElement(S.a,{description:n.data?"".concat(n.first_name," ").concat(n.last_name):"\u041c\u044b \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c \u0432\u0430\u0448\u0438 \u0434\u0430\u043d\u043d\u044b\u0435..."},"".concat(n.data?n.data.uname:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."))),c.a.createElement(D.a,{title:"\u0427\u0430\u0442\u044b"},c.a.createElement(_.a,null,c.a.createElement(A.a,{size:"xl",level:"2",onClick:a,"data-to":"chat"},c.a.createElement(S.a,{description:"\u041d\u0430\u0436\u043c\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u044c\u0441\u044f"},"".concat(n&&n.data?n.data.motd:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."))))),c.a.createElement(D.a,{title:"\u0412\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"},c.a.createElement(_.a,null,"0.1.6.07")))}),P=a(115),T=a(116),K=a(125),B=a(117),J=a(126),L=a(79),V=a(120),W=a.n(V),Z=a(118),q=a.n(Z),F=a(119),G=a.n(F),H=a(46),Q=a.n(H),X=(a(316),Object(L.b)()),Y=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(K.a)(this,Object(B.a)(t).call(this,e))).textInput=c.a.createRef(),a.sendMsg=function(){console.log(a.textInput.current.value),a.textInput.current.value=""},a}return Object(J.a)(t,e),Object(T.a)(t,[{key:"componentDidMount",value:function(){this.focusTextInput(),this.refreshMsgs()}},{key:"refreshMsgs",value:function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Trying to fetch history with TOKEN["+this.props.fetchedUser.data.token+"]");case 1:return e.next=4,i.a.awrap(j.a.post("https://das.ict.nsc.ru:12000/updates",{token:this.props.fetchedUser.data.token}).then((function(e){console.log(e)})));case 4:return e.abrupt("break",7);case 7:case"end":return e.stop()}}),null,this)}},{key:"focusTextInput",value:function(){this.textInput.current.focus()}},{key:"render",value:function(){var e=this;return c.a.createElement(w.a,{id:this.props.id},c.a.createElement(M.a,{left:c.a.createElement(W.a,{onClick:this.props.go,"data-to":"home"},X===L.a?c.a.createElement(q.a,null):c.a.createElement(G.a,null))},"\u0427\u0430\u0442"),c.a.createElement(D.a,{className:"inputRow"},c.a.createElement(_.a,{style:{display:"flex"},className:"minimalDiv"},c.a.createElement(Q.a,{placeholder:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",className:"msgInput",getRef:this.textInput,onKeyDown:function(t){"Enter"==t.key&&e.sendMsg()}}),c.a.createElement(A.a,{size:"xl",level:"1",className:"msgBtn",onClick:function(){e.sendMsg()}},"\u041e\u0442\u043f\u0440."))))}}]),t}(c.a.Component),$=a(60),ee=a.n($),te=function(e){var t=e.id,a=e.logDataName,n=e.logDataPass,r=e.tryLogin,s=e.errMsg;return c.a.createElement(w.a,{id:t},c.a.createElement(M.a,{className:"Panel"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),c.a.createElement(v.a,null,c.a.createElement(ee.a,{top:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"},c.a.createElement(Q.a,{placeholder:"\u0412\u0430\u0448 \u043f\u0441\u0435\u0432\u0434\u043e\u043d\u0438\u043c",id:"name",getRef:a}),c.a.createElement(Q.a,{placeholder:"\u0412\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c",id:"pass",getRef:n})),c.a.createElement(A.a,{size:"xl",level:"2",onClick:function(){console.log(a.current.value),console.log(n.current.value),r()}},"\u0412\u043e\u0439\u0442\u0438"),c.a.createElement(_.a,null,c.a.createElement("b",null,s&&s))))},ae={id:2,first_name:"\u0424\u0438\u043b\u0438\u043f\u043f \u0414\u0436\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u0438",last_name:"",timezone:7},ne=function(){var e=Object(n.useState)("home"),t=Object(d.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(null),l=Object(d.a)(s,2),u=l[0],m=l[1],p=Object(n.useState)(ae),b=Object(d.a)(p,2),g=b[0],k=b[1],O=Object(n.useState)(null),x=Object(d.a)(O,2),w=x[0],I=(x[1],Object(n.useState)(null)),M=Object(d.a)(I,2),N=M[0],A=M[1];console.log(g);var C=Object(n.useState)(),D=Object(d.a)(C,2),R=D[0],S=D[1];Object(n.useEffect)((function(){o.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_dark",document.body.attributes.setNamedItem(c)}})),function(){var e;i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return k(e=g),t.next=4,i.a.awrap(j.a.get("https://das.ict.nsc.ru:12000/reg/"+e.id+":0:secret").then((function(t){"ok"==t.data.status?e.data=t.data.response:r("login")})));case 4:t.sent,k(e),S(null);case 7:case"end":return t.stop()}}))}()}),[]);var U=function(e){r(e.currentTarget.dataset.to)},_=c.a.createRef(),P=c.a.createRef();var T=c.a.createElement(h.a,{activeModal:u},c.a.createElement(E.a,{id:"register",header:c.a.createElement(y.a,null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")},c.a.createElement(v.a,null)));return c.a.createElement(f.a,{activePanel:a,popout:R,modal:T},c.a.createElement(z,{id:"home",fetchedUser:g,go:U,setActiveModal:m}),c.a.createElement(Y,{id:"chat",go:U,activeChat:w,fetchedUser:g}),c.a.createElement(te,{id:"login",logDataName:_,logDataPass:P,tryLogin:function(){var e;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e=g,t.next=3,i.a.awrap(j.a.get("https://das.ict.nsc.ru:12000/reg/"+e.id+":"+_.current.value+":"+P.current.value).then((function(t){if("ok"==t.data.status)e.data=t.data.response,r("home");else switch(console.log("Auth Error: "+t.data.desc),t.data.code){case"401":A("\u0412\u044b \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b");break;case"306":A("\u041d\u0438\u043a\u043d\u0435\u0439\u043c \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0441\u0440\u0435\u0434\u0438 [A-Za-z0-9\\_\\-\\.]");break;case"302":A("\u0414\u043b\u0438\u043d\u0430 \u043d\u0438\u043a\u043d\u0435\u0439\u043c\u0430 \u0438 \u043f\u0430\u0440\u043e\u043b\u044f \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u0435\u0435 4");break;default:A("\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430")}})));case 3:t.sent,k(e),S(null);case 6:case"end":return t.stop()}}))},errMsg:N}))};o.a.send("VKWebAppInit"),s.a.render(c.a.createElement(ne,null),document.getElementById("root"))}},[[205,1,2]]]);
//# sourceMappingURL=main.6c780bb5.chunk.js.map