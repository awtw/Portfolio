(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"9HGW":function(t,e,n){"use strict";n.r(e),n.d(e,"TestProjectModule",function(){return l});var o=n("ofXK"),r=n("tyNb"),c=n("fXoL"),s=n("tk/3");let i=(()=>{class t{constructor(t){this.http=t}getTest(){let t={headers:new s.c({"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-COntrol-Allow-Mehtods":"GET"})};this.http.get(" https://covidtracking.com/api/states",t).subscribe(t=>console.log(t))}}return t.\u0275fac=function(e){return new(e||t)(c.Ub(s.a))},t.\u0275prov=c.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const p=[{path:"test",component:(()=>{class t{constructor(t){this.testSService=t}ngOnInit(){this.testSService.getTest()}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(i))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-container"]],decls:4,vars:0,template:function(t,e){1&t&&(c.Qb(0,"p"),c.wc(1,"container works!"),c.Pb(),c.Qb(2,"H1"),c.wc(3,"123"),c.Pb())},styles:[""]}),t})()},{path:"**",redirectTo:"test"}];let a=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(e){return new(e||t)},imports:[[r.c.forChild(p)],r.c]}),t})(),l=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(e){return new(e||t)},providers:[i],imports:[[o.c,a]]}),t})()}}]);