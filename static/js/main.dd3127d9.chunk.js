(this.webpackJsonpreactarduino=this.webpackJsonpreactarduino||[]).push([[0],{13:function(t,o,e){},14:function(t,o,e){},15:function(t,o,e){"use strict";e.r(o);var n=e(0),c=e(1),s=e.n(c),a=e(3),r=e.n(a),l=(e(13),e(4)),i=e(5),h=e(7),m=e(6),u=(e.p,e(14),function(t){Object(h.a)(e,t);var o=Object(m.a)(e);function e(t){var n;return Object(l.a)(this,e),(n=o.call(this,t)).componentDidMount=function(){n.defineTabID();var t=localStorage.getItem("motor1");t=JSON.parse(t);var o=localStorage.getItem("motor2");o=JSON.parse(o);var e=localStorage.getItem("motor3");e=JSON.parse(e);var c=localStorage.getItem("motor4");c=JSON.parse(c);var s=localStorage.getItem("motor5");s=JSON.parse(s);var a=localStorage.getItem("motor6");a=JSON.parse(a);var r=localStorage.getItem("motor7");r=JSON.parse(r);var l=localStorage.getItem("motor8");l=JSON.parse(l),n.setState({motor1:t,motor2:o,motor3:e,motor4:c,motor5:s,motor6:a,motor7:r,motor8:l})},n.defineTabID=function(){if(null==(o=sessionStorage.getItem("tabID"))){var t=localStorage.getItem("tabID"),o=null==t?1:Number(t)+1;localStorage.setItem("tabID",o),sessionStorage.setItem("tabID",o)}return console.log("pageTabId"+o),n.setState({currentPageTabId:o}),o},n.motor1=function(t){t.target.checked?(localStorage.setItem("motor1",!0),console.log(localStorage.getItem("motor1")),n.setState({motor1:!0}),fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1=10").then((function(t){return t.json()})).then((function(t){console.log(t)}),(function(t){n.setState({IsError:!0})})).catch((function(t){console.log(t)}))):(localStorage.setItem("motor1",!1),n.setState({motor1:!1}),fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1=20").then((function(t){return t.json()})).then((function(t){console.log(t)}),(function(t){n.setState({IsError:!0})})).catch((function(t){console.log(t)})),console.log("noo"))},n.motor2=function(t){t.target.checked?(localStorage.setItem("motor2",!0),console.log(localStorage.getItem("motor2")),n.setState({motor2:!0}),fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field2=10").then((function(t){return t.json()})).then((function(t){console.log(t)}),(function(t){n.setState({IsError:!0})})).catch((function(t){console.log(t)}))):(localStorage.setItem("motor2",!1),n.setState({motor2:!1}),fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field2=20").then((function(t){return t.json()})).then((function(t){console.log(t)}),(function(t){n.setState({IsError:!0})})).catch((function(t){console.log(t)})),console.log("noo"))},n.motor3=function(t){t.target.checked?(localStorage.setItem("motor3",!0),console.log(localStorage.getItem("motor3")),n.setState({motor3:!0}),fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field3=10").then((function(t){return t.json()})).then((function(t){console.log(t)}),(function(t){n.setState({IsError:!0})})).catch((function(t){console.log(t)}))):(localStorage.setItem("motor3",!1),n.setState({motor3:!1}),fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field3=20").then((function(t){return t.json()})).then((function(t){console.log(t)}),(function(t){n.setState({IsError:!0})})).catch((function(t){console.log(t)})),console.log("noo"))},n.motor4=function(t){t.target.checked?(localStorage.setItem("motor4",!0),console.log(localStorage.getItem("motor4")),n.setState({motor4:!0}),fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field4=10").then((function(t){return t.json()})).then((function(t){console.log(t)}),(function(t){n.setState({IsError:!0})})).catch((function(t){console.log(t)}))):(localStorage.setItem("motor4",!1),n.setState({motor4:!1}),fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field4=20").then((function(t){return t.json()})).then((function(t){console.log(t)}),(function(t){n.setState({IsError:!0})})).catch((function(t){console.log(t)})),console.log("noo"))},n.motor5=function(t){t.target.checked?(localStorage.setItem("motor5",!0),console.log(localStorage.getItem("motor5")),n.setState({motor5:!0}),fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field5=10").then((function(t){return t.json()})).then((function(t){console.log(t)}),(function(t){n.setState({IsError:!0})})).catch((function(t){console.log(t)}))):(localStorage.setItem("motor5",!1),n.setState({motor5:!1}),fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field5=20").then((function(t){return t.json()})).then((function(t){console.log(t)}),(function(t){n.setState({IsError:!0})})).catch((function(t){console.log(t)})),console.log("noo"))},n.motor6=function(t){t.target.checked?(localStorage.setItem("motor6",!0),console.log(localStorage.getItem("motor6")),n.setState({motor6:!0}),fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field6=10").then((function(t){return t.json()})).then((function(t){console.log(t)}),(function(t){n.setState({IsError:!0})})).catch((function(t){console.log(t)}))):(localStorage.setItem("motor6",!1),n.setState({motor6:!1}),fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field6=20").then((function(t){return t.json()})).then((function(t){console.log(t)}),(function(t){n.setState({IsError:!0})})).catch((function(t){console.log(t)})),console.log("noo"))},n.motor7=function(t){t.target.checked?(localStorage.setItem("motor7",!0),console.log(localStorage.getItem("motor7")),n.setState({motor7:!0}),fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field7=10").then((function(t){return t.json()})).then((function(t){console.log(t)}),(function(t){n.setState({IsError:!0})})).catch((function(t){console.log(t)}))):(localStorage.setItem("motor7",!1),n.setState({motor7:!1}),fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field7=20").then((function(t){return t.json()})).then((function(t){console.log(t)}),(function(t){n.setState({IsError:!0})})).catch((function(t){console.log(t)})),console.log("noo"))},n.motor8=function(t){t.target.checked?(localStorage.setItem("motor8",!0),console.log(localStorage.getItem("motor8")),n.setState({motor8:!0}),fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field8=10").then((function(t){return t.json()})).then((function(t){console.log(t)}),(function(t){n.setState({IsError:!0})})).catch((function(t){console.log(t)}))):(localStorage.setItem("motor8",!1),n.setState({motor8:!1}),fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field8=20").then((function(t){return t.json()})).then((function(t){console.log(t)}),(function(t){n.setState({IsError:!0})})).catch((function(t){console.log(t)})),console.log("noo"))},n.state={motor1:!1,motor2:!1,motor3:!1,motor4:!1,motor5:!1,motor6:!1,motor7:!1,motor8:!1},n}return Object(i.a)(e,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:"img.png"})}),Object(n.jsxs)("div",{className:"mt-4",children:["FILTER MOTOR VALVE  : \xa0\xa0\xa0\xa0\xa0\xa0",Object(n.jsxs)("label",{class:"switch",children:[Object(n.jsx)("input",{type:"checkbox",id:"myCheck1",checked:this.state.motor1,onChange:this.motor1}),Object(n.jsx)("span",{class:"slider round"})]})]}),Object(n.jsxs)("div",{className:"mt-3",children:["OXYGEN MOTOR VALVE   :\xa0\xa0\xa0\xa0",Object(n.jsxs)("label",{class:"switch",children:[Object(n.jsx)("input",{type:"checkbox",id:"myCheck1",checked:this.state.motor2,onChange:this.motor2}),Object(n.jsx)("span",{class:"slider round"})]})]}),Object(n.jsxs)("div",{className:"mt-3",children:["FILTER MOTOR  :\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(n.jsxs)("label",{class:"switch",children:[Object(n.jsx)("input",{type:"checkbox",id:"myCheck1",checked:this.state.motor3,onChange:this.motor3}),Object(n.jsx)("span",{class:"slider round"})]})]}),Object(n.jsxs)("div",{className:"mt-3",children:["NOT USE  :\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(n.jsxs)("label",{class:"switch",children:[Object(n.jsx)("input",{type:"checkbox",id:"myCheck1",checked:this.state.motor4,onChange:this.motor4}),Object(n.jsx)("span",{class:"slider round"})]})]}),Object(n.jsxs)("div",{className:"mt-3",children:["NOT USE  :\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(n.jsxs)("label",{class:"switch",children:[Object(n.jsx)("input",{type:"checkbox",id:"myCheck1",checked:this.state.motor5,onChange:this.motor5}),Object(n.jsx)("span",{class:"slider round"})]})]}),Object(n.jsxs)("div",{className:"mt-3",children:["NOT USE  :\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(n.jsxs)("label",{class:"switch",children:[Object(n.jsx)("input",{type:"checkbox",id:"myCheck1",checked:this.state.motor6,onChange:this.motor6}),Object(n.jsx)("span",{class:"slider round"})]})]}),Object(n.jsxs)("div",{className:"mt-3",children:["OXYGEN MOTOR  :\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(n.jsxs)("label",{class:"switch",children:[Object(n.jsx)("input",{type:"checkbox",id:"myCheck1",checked:this.state.motor7,onChange:this.motor7}),Object(n.jsx)("span",{class:"slider round"})]})]}),Object(n.jsxs)("div",{className:"mt-3",children:["OXYGEN DRIVER :\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(n.jsxs)("label",{class:"switch",children:[Object(n.jsx)("input",{type:"checkbox",id:"myCheck1",checked:this.state.motor8,onChange:this.motor8}),Object(n.jsx)("span",{class:"slider round"})]})]})]})}}]),e}(s.a.Component)),g=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,16)).then((function(o){var e=o.getCLS,n=o.getFID,c=o.getFCP,s=o.getLCP,a=o.getTTFB;e(t),n(t),c(t),s(t),a(t)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(u,{})}),document.getElementById("root")),g()}},[[15,1,2]]]);
//# sourceMappingURL=main.dd3127d9.chunk.js.map