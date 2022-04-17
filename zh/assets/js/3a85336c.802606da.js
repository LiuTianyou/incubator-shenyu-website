"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[1952],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return s}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),o=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=o(t.components);return n.createElement(m.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),k=o(a),s=r,g=k["".concat(m,".").concat(s)]||k[s]||d[s]||l;return a?n.createElement(g,i(i({ref:e},c),{},{components:a})):n.createElement(g,i({ref:e},c))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},41145:function(t,e,a){a.r(e),a.d(e,{contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return c}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],p={title:"Metrics\u63d2\u4ef6",keywords:["Metrics"],description:"Metrics\u63d2\u4ef6"},m=void 0,o={unversionedId:"plugin-center/observability/metrics-plugin",id:"plugin-center/observability/metrics-plugin",isDocsHomePage:!1,title:"Metrics\u63d2\u4ef6",description:"Metrics\u63d2\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/plugin-center/observability/metrics-plugin.md",sourceDirName:"plugin-center/observability",slug:"/plugin-center/observability/metrics-plugin",permalink:"/zh/docs/next/plugin-center/observability/metrics-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/plugin-center/observability/metrics-plugin.md",version:"current",frontMatter:{title:"Metrics\u63d2\u4ef6",keywords:["Metrics"],description:"Metrics\u63d2\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"Logging-RocketMQ\u63d2\u4ef6",permalink:"/zh/docs/next/plugin-center/observability/logging-rocketmq"},next:{title:"GeneralContext\u63d2\u4ef6",permalink:"/zh/docs/next/plugin-center/common/general-context-plugin"}},c=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u6280\u672f\u65b9\u6848",id:"\u6280\u672f\u65b9\u6848",children:[]},{value:"\u63d2\u4ef6\u4f7f\u7528",id:"\u63d2\u4ef6\u4f7f\u7528",children:[]},{value:"metrics\u4fe1\u606f",id:"metrics\u4fe1\u606f",children:[{value:"jmx \u6307\u6807",id:"jmx-\u6307\u6807",children:[]},{value:"jvm \u6307\u6807",id:"jvm-\u6307\u6807",children:[]}]},{value:"\u6536\u96c6 metrics",id:"\u6536\u96c6-metrics",children:[]},{value:"\u9762\u677f\u5c55\u793a",id:"\u9762\u677f\u5c55\u793a",children:[]}],d={toc:c};function k(t){var e=t.components,p=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Metrics\u63d2\u4ef6"),"\u63d2\u4ef6\u662f\u7f51\u5173\u7528\u6765\u76d1\u63a7\u81ea\u8eab\u8fd0\u884c\u72b6\u6001\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"JVM"),"\u76f8\u5173\uff09\uff0c\u8bf7\u6c42\u7684\u54cd\u5e94\u8fdf\u5ef6\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"QPS"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"TPS"),"\u7b49\u76f8\u5173",(0,l.kt)("inlineCode",{parentName:"li"},"metrics"),"\u3002")),(0,l.kt)("h2",{id:"\u6280\u672f\u65b9\u6848"},"\u6280\u672f\u65b9\u6848"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6d41\u7a0b\u56fe\n",(0,l.kt)("img",{src:a(35729).Z}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5f02\u6b65\u6216\u8005\u540c\u6b65\u7684\u65b9\u5f0f\uff0c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u91cc\u9762\u8fdb\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"metrics")," \u57cb\u70b9\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"prometheus")," \u670d\u52a1\u7aef\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"http")," \u8bf7\u6c42\u6765\u62c9\u53d6  ",(0,l.kt)("inlineCode",{parentName:"p"},"metrics"),"\uff0c\u518d\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Grafana")," \u5c55\u793a\u3002"))),(0,l.kt)("h2",{id:"\u63d2\u4ef6\u4f7f\u7528"},"\u63d2\u4ef6\u4f7f\u7528"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u7f51\u5173\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"pom.xml")," \u6587\u4ef6\u4e2d\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"li"},"metrics")," \u7684\u4f9d\u8d56\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu metrics plugin starter--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-metrics</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n        \x3c!-- apache shenyu metrics plugin end--\x3e\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u7f51\u5173\u7684\u914d\u7f6eyaml\u6587\u4ef6\u4e2d\u7f16\u8f91\u5982\u4e0b\u5185\u5bb9\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"shenyu:\n  metrics:\n    enabled: false  #\u8bbe\u7f6e\u4e3a true \u8868\u793a\u5f00\u542f\n    name : prometheus \n    host: 127.0.0.1 #\u66b4\u9732\u7684ip\n    port: 8090 #\u66b4\u9732\u7684\u7aef\u53e3\n    jmxConfig: #jmx\u914d\u7f6e\n    props:\n      jvm_enabled: true #\u5f00\u542fjvm\u7684\u76d1\u63a7\u6307\u6807\n")),(0,l.kt)("h2",{id:"metrics\u4fe1\u606f"},"metrics\u4fe1\u606f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6240\u6709\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"JVM"),"\uff0c\u7ebf\u7a0b\uff0c\u5185\u5b58\uff0c\u7b49\u76f8\u5173\u4fe1\u606f\u90fd\u4f1a\u57cb\u70b9\uff0c\u53ef\u4ee5\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Grafana")," \u9762\u677f\u4e2d\uff0c\u65b0\u589e\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"JVM")," \u6a21\u5757\uff0c\u5219\u4f1a\u5b8c\u5168\u5c55\u793a \u5177\u4f53\u8bf7\u770b\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/prometheus/jmx_exporter"},"https://github.com/prometheus/jmx_exporter"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u53e6\u5916\u8fd8\u6709\u5982\u4e0b\u81ea\u5b9a\u4e49\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"metrics")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6807\u7b7e\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"shenyu_request_total"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Counter"),(0,l.kt)("td",{parentName:"tr",align:"left"},"none"),(0,l.kt)("td",{parentName:"tr",align:"left"},"collecting all requests of Apache ShenYu Gateway")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"shenyu_request_throw_total"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Counter"),(0,l.kt)("td",{parentName:"tr",align:"left"},"none"),(0,l.kt)("td",{parentName:"tr",align:"left"},"collecting all exception requests of Apache ShenYu Gateway")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"shenyu_request_type_total"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Counter"),(0,l.kt)("td",{parentName:"tr",align:"left"},"path,type"),(0,l.kt)("td",{parentName:"tr",align:"left"},"collecting all matched requests of monitor")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"shenyu_execute_latency_millis"),(0,l.kt)("td",{parentName:"tr",align:"left"},"histogram"),(0,l.kt)("td",{parentName:"tr",align:"left"},"none"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ShenYu gateway execute time interval")))),(0,l.kt)("h3",{id:"jmx-\u6307\u6807"},"jmx \u6307\u6807"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"labals"),(0,l.kt)("th",{parentName:"tr",align:"center"},"help"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jmx_config_reload_success_total"),(0,l.kt)("td",{parentName:"tr",align:"center"},"counter"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Number of times configuration have successfully been reloaded.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jmx_config_reload_failure_total"),(0,l.kt)("td",{parentName:"tr",align:"center"},"counter"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Number of times configuration have failed to be reloaded.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jmx_scrape_duration_seconds"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Time this JMX scrape took, in seconds.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jmx_scrape_error"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Non-zero if this scrape failed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jmx_scrape_cached_beans"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Number of beans with their matching rule cached")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jmx_scrape_duration_seconds"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Time this JMX scrape took, in seconds.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jmx_scrape_error"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Non-zero if this scrape failed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jmx_scrape_cached_beans"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Number of beans with their matching rule cached")))),(0,l.kt)("h3",{id:"jvm-\u6307\u6807"},"jvm \u6307\u6807"),(0,l.kt)("h4",{id:"standardexports"},"StandardExports"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"labels"),(0,l.kt)("th",{parentName:"tr",align:"center"},"help"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"process_cpu_seconds_total"),(0,l.kt)("td",{parentName:"tr",align:"center"},"counter"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Total user and system CPU time spent in seconds.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"process_start_time_seconds"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Start time of the process since unix epoch in seconds.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"process_open_fds"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Number of open file descriptors.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"process_max_fds"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Maximum number of open file descriptors.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"process_virtual_memory_bytes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Virtual memory size in bytes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"process_resident_memory_bytes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Resident memory size in bytes.")))),(0,l.kt)("h4",{id:"memorypoolsexports"},"MemoryPoolsExports"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"labels"),(0,l.kt)("th",{parentName:"tr",align:"center"},"help"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_memory_objects_pending_finalization"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"},'{area="heap',"|",'nonheap"}'),(0,l.kt)("td",{parentName:"tr",align:"center"},"The number of objects waiting in the finalizer queue.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_memory_bytes_used"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"},'{area="heap',"|",'nonheap"}'),(0,l.kt)("td",{parentName:"tr",align:"center"},"Used bytes of a given JVM memory area.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_memory_bytes_committed"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"},'{area="heap',"|",'nonheap"}'),(0,l.kt)("td",{parentName:"tr",align:"center"},"Committed (bytes) of a given JVM memory area.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_memory_bytes_max"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"},'{area="heap',"|",'nonheap"}'),(0,l.kt)("td",{parentName:"tr",align:"center"},"Max (bytes) of a given JVM memory area.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_memory_bytes_init"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"},'{area="heap',"|",'nonheap"}'),(0,l.kt)("td",{parentName:"tr",align:"center"},"Initial bytes of a given JVM memory area.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_memory_pool_bytes_used"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{pool}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Used bytes of a given JVM memory pool.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_memory_pool_bytes_committed"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{pool}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Committed bytes of a given JVM memory pool.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_memory_pool_bytes_max"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{pool}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Max bytes of a given JVM memory pool.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_memory_pool_bytes_init"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{pool}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Initial bytes of a given JVM memory pool.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_memory_pool_collection_used_bytes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{pool}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Used bytes after last collection of a given JVM memory pool.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_memory_pool_collection_committed_bytes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{pool}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Committed after last collection bytes of a given JVM memory pool.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_memory_pool_collection_max_bytes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{pool}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Max bytes after last collection of a given JVM memory pool.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_memory_pool_collection_init_bytes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{pool}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Initial after last collection bytes of a given JVM memory pool.")))),(0,l.kt)("h4",{id:"memoryallocationexports"},"MemoryAllocationExports"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"labels"),(0,l.kt)("th",{parentName:"tr",align:"center"},"help"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_memory_pool_allocated_bytes_total"),(0,l.kt)("td",{parentName:"tr",align:"center"},"counter"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{pool}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Total bytes allocated in a given JVM memory pool. Only updated after GC, not continuously.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("h4",{id:"bufferpoolsexports"},"BufferPoolsExports"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"labels"),(0,l.kt)("th",{parentName:"tr",align:"center"},"help"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_buffer_pool_used_bytes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{pool}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Used bytes of a given JVM buffer pool.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_buffer_pool_capacity_bytes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{pool}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Bytes capacity of a given JVM buffer pool.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_buffer_pool_used_buffers"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{pool}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Used buffers of a given JVM buffer pool.")))),(0,l.kt)("h4",{id:"garbagecollectorexports"},"GarbageCollectorExports"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"labels"),(0,l.kt)("th",{parentName:"tr",align:"center"},"help"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_gc_collection_seconds"),(0,l.kt)("td",{parentName:"tr",align:"center"},"summary"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{gc}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Time spent in a given JVM garbage collector in seconds.")))),(0,l.kt)("h4",{id:"threadexports"},"ThreadExports"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"labels"),(0,l.kt)("th",{parentName:"tr",align:"center"},"help"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_threads_current"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Current thread count of a JVM")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_threads_daemon"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Daemon thread count of a JVM")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_threads_peak"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Peak thread count of a JVM")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_threads_started_total"),(0,l.kt)("td",{parentName:"tr",align:"center"},"counter"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Started thread count of a JVM")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_threads_deadlocked"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Cycles of JVM-threads that are in deadlock waiting to acquire object monitors or ownable synchronizers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_threads_deadlocked_monitor"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Cycles of JVM-threads that are in deadlock waiting to acquire object monitors")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_threads_state"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{state}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Current count of threads by state")))),(0,l.kt)("h4",{id:"classloadingexports"},"ClassLoadingExports"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"labels"),(0,l.kt)("th",{parentName:"tr",align:"center"},"help"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_classes_loaded"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"The number of classes that are currently loaded in the JVM")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_classes_loaded_total"),(0,l.kt)("td",{parentName:"tr",align:"center"},"counter"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"The total number of classes that have been loaded since the JVM has started execution")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_classes_unloaded_total"),(0,l.kt)("td",{parentName:"tr",align:"center"},"counter"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"The total number of classes that have been unloaded since the JVM has started execution")))),(0,l.kt)("h4",{id:"versioninfoexports"},"VersionInfoExports"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"labels"),(0,l.kt)("th",{parentName:"tr",align:"center"},"help"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm"),(0,l.kt)("td",{parentName:"tr",align:"center"},"info"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{version(java.runtime.version),vendor(java.vm.vendor),runtime(java.runtime.name)}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"VM version info")))),(0,l.kt)("h2",{id:"\u6536\u96c6-metrics"},"\u6536\u96c6 metrics"),(0,l.kt)("p",null,"\u7528\u6237\u9700\u90e8\u7f72",(0,l.kt)("inlineCode",{parentName:"p"},"Prometheus")," \u670d\u52a1\u6765\u91c7\u96c6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u9009\u62e9\u5bf9\u5e94\u73af\u5883\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://prometheus.io/download/"},"\u4e0b\u8f7d\u5730\u5740"),"\u5b89\u88c5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"prometheus.yml")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"scrape_configs:\n  - job_name: 'Apache ShenYu'\n    # metrics_path defaults to '/metrics'\n    # scheme defaults to 'http'.\n    static_configs:\n    - targets: ['localhost:8090'] # metrics of apache shenyu are exposed on port 8090 by default\n")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\uff1a")," ",(0,l.kt)("inlineCode",{parentName:"p"},"job_name"),"\u8ddf",(0,l.kt)("inlineCode",{parentName:"p"},"monitor"),"\u63d2\u4ef6\u914d\u7f6e\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"metricsName"),"\u76f8\u5bf9\u5e94"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u5b8c\u6210\u4e4b\u540e ",(0,l.kt)("inlineCode",{parentName:"li"},"window")," \u4e0b\u53ef\u4ee5\u76f4\u63a5\u53cc\u51fb ",(0,l.kt)("inlineCode",{parentName:"li"},"prometheus.exe")," \u542f\u52a8\u5373\u53ef\uff0c\u9ed8\u8ba4\u542f\u52a8\u7aef\u53e3\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"9090")," \uff0c\u53ef\u901a\u8fc7http://localhost:9090/ \u9a8c\u8bc1\u662f\u5426\u6210\u529f")),(0,l.kt)("h2",{id:"\u9762\u677f\u5c55\u793a"},"\u9762\u677f\u5c55\u793a"),(0,l.kt)("p",null,"\u63a8\u8350\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Grafana"),"\uff0c\u7528\u6237\u53ef\u4ee5\u81ea\u5b9a\u4e49\u67e5\u8be2\u6765\u4e2a\u6027\u5316\u663e\u793a\u9762\u677f\u76d8\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u4ecb\u7ecd ",(0,l.kt)("inlineCode",{parentName:"p"},"Grafana")," \u90e8\u7f72\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"windows"),"\u7248\uff09"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,l.kt)("inlineCode",{parentName:"li"},"Grafana"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://dl.grafana.com/oss/release/grafana-7.4.2.windows-amd64.zip"},"\u4e0b\u8f7d\u5730\u5740")," \u89e3\u538b\u8fdb\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"bin")," \u76ee\u5f55\u7136\u540e\u53cc\u51fb ",(0,l.kt)("inlineCode",{parentName:"p"},"grafana-server.exe")," \u8fd0\u884c \u8bbf\u95ee ",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/?orgId=1")," admin/admin \u9a8c\u8bc1\u662f\u5426\u6210\u529f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u81ea\u5b9a\u4e49metric\u9762\u677f",(0,l.kt)("inlineCode",{parentName:"li"},"request_total"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"http_request_total"))),(0,l.kt)("p",null,"\u70b9\u51fb ",(0,l.kt)("inlineCode",{parentName:"p"},"Create")," - ",(0,l.kt)("inlineCode",{parentName:"p"},"Import")," \u8f93\u5165",(0,l.kt)("inlineCode",{parentName:"p"},"dashboards")," \u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/img/shenyu/monitor/request_metric_dashboard.json"},"\u9762\u677fjson\u914d\u7f6e")),(0,l.kt)("p",null,"\u6700\u7ec8\u81ea\u5b9a\u4e49 ",(0,l.kt)("inlineCode",{parentName:"p"},"Http")," \u8bf7\u6c42\u76d1\u63a7\u9762\u677f\u6548\u679c\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(90320).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(99794).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(18726).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(81345).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(72708).Z})))}k.isMDXComponent=!0},90320:function(t,e,a){e.Z=a.p+"assets/images/request-metric-1-92f09dff492b284cf5462a1b2149f804.png"},99794:function(t,e,a){e.Z=a.p+"assets/images/request-metric-2-4ef0ea780f6d612bb1076decaa4c4549.png"},18726:function(t,e,a){e.Z=a.p+"assets/images/request-metric-3-25e310a4c0c636d2ccd872bada66bfe9.png"},81345:function(t,e,a){e.Z=a.p+"assets/images/request-metric-4-d95d82437f8344ab537170fc78ee980c.png"},72708:function(t,e,a){e.Z=a.p+"assets/images/request-metric-5-5be0cded02230111957e9cbf0b74f653.png"},35729:function(t,e,a){e.Z=a.p+"assets/images/shenyu-metrics-805b9a2539e9808d934caae9b3a1404f.png"}}]);