/**
 * @license Highcharts JS v2.2.4 (2012-05-31)
 * MooTools adapter
 *
 * (c) 2010-2011 Torstein Hønsi
 *
 * License: www.highcharts.com/license
 */
// JSLint options:
/*global Fx, $, $extend, $each, $merge, Events, Event, DOMEvent */
(function(){var e=window,t=document,n=e.MooTools.version.substring(0,3),r=n==="1.2"||n==="1.1",i=r||n==="1.3",s=e.$extend||function(){return Object.append.apply(Object,arguments)};e.HighchartsAdapter={init:function(e){var t=Fx.prototype,n=t.start,r=Fx.Morph.prototype,i=r.compute;t.start=function(t,r){var i=this,s=i.element;return t.d&&(i.paths=e.init(s,s.d,i.toD)),n.apply(i,arguments),this},r.compute=function(t,n,r){var s=this,o=s.paths;if(!o)return i.apply(s,arguments);s.element.attr("d",e.step(o[0],o[1],r,s.toD))}},adapterRun:function(e,t){return $(e).getStyle(t).toInt()},getScript:function(e,n){var r=t.getElementsByTagName("head")[0],i=t.createElement("script");i.type="text/javascript",i.src=e,i.onload=n,r.appendChild(i)},animate:function(t,n,r){var i=t.attr,o,u=r&&r.complete;i&&!t.setStyle&&(t.getStyle=t.attr,t.setStyle=function(){var e=arguments;t.attr.call(t,e[0],e[1][0])},t.$family=function(){return!0}),e.HighchartsAdapter.stop(t),o=new Fx.Morph(i?t:$(t),s({transition:Fx.Transitions.Quad.easeInOut},r)),i&&(o.element=t),n.d&&(o.toD=n.d),u&&o.addEvent("complete",u),o.start(n),t.fx=o},each:function(e,t){return r?$each(e,t):Array.each(e,t)},map:function(e,t){return e.map(t)},grep:function(e,t){return e.filter(t)},merge:function(){var e=arguments,t=[{}],n=e.length,i;if(r)i=$merge.apply(null,e);else{while(n--)typeof e[n]!="boolean"&&(t[n+1]=e[n]);i=Object.merge.apply(Object,t)}return i},offset:function(e){var t=$(e).getOffsets();return{left:t.x,top:t.y}},extendWithEvents:function(e){e.addEvent||(e.nodeName?e=$(e):s(e,new Events))},addEvent:function(t,n,r){typeof n=="string"&&(n==="unload"&&(n="beforeunload"),e.HighchartsAdapter.extendWithEvents(t),t.addEvent(n,r))},removeEvent:function(t,n,r){if(typeof t=="string")return;e.HighchartsAdapter.extendWithEvents(t),n?(n==="unload"&&(n="beforeunload"),r?t.removeEvent(n,r):t.removeEvents&&t.removeEvents(n)):t.removeEvents()},fireEvent:function(e,t,n,r){var o={type:t,target:e};t=i?new Event(o):new DOMEvent(o),t=s(t,n),t.preventDefault=function(){r=null},e.fireEvent&&e.fireEvent(t.type,t),r&&r(t)},washMouseEvent:function(e){return e.pageX=e.page.x,e.pageY=e.page.y,e},stop:function(e){e.fx&&e.fx.cancel()}}})();