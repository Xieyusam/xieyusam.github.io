(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{363:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vue项目中引入jquery和jqueryui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue项目中引入jquery和jqueryui"}},[s._v("#")]),s._v(" Vue项目中引入jquery和jqueryui")]),s._v(" "),a("p",[s._v("之前一直不喜欢在vue里面引入jq的东西，因为和vue的理念是背道而驰的，但是后来因为项目需求难以解决，不得不引入入jquery去解决，才感叹jq还是很强大的啊")]),s._v(" "),a("p",[s._v("真香嘻嘻")]),s._v(" "),a("p",[s._v("我的项目是基于vue 2.0的。3.0的可能会有些不同，但是应该问题不大了")]),s._v(" "),a("p",[s._v("首先，我们得在package.json文件中的dependencies添加")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jquery"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^3.4.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jquery-ui-dist"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^1.12.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])]),a("p",[s._v("然后我们npm install一下，安装jq和jqui")]),s._v(" "),a("p",[s._v("接着我们修改webpack.base.conf.js文件\n在上方添加")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" webpack "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpack"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("然后在module.exports里面添加")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//在这里插入代码片")]),s._v("\nplugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("webpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ProvidePlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    jQuery"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jquery"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    jquery"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jquery"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    $"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jquery"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"windows.jQuery"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jquery"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])]),a("p",[s._v("去到入口文件main.js")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//引入jq库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// import $ from 'jquery'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Vue.use($)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jquery-ui-dist/jquery-ui'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jquery-ui-dist/jquery-ui.css'")]),s._v("\n")])])]),a("p",[s._v("一定要引入css，不然没有办法使用\njq在这里可以不用引入了\n不然会报错\n因为在webpack已经设置过了")]),s._v(" "),a("p",[s._v("重新npm run dev一下\n大功告成")])])}),[],!1,null,null,null);t.default=e.exports}}]);