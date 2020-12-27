webpackJsonp([16],{"2IbJ":function(e,n,t){var r=t("UIRg");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t("rjj0")("964f4bbe",r,!1,{})},UIRg:function(e,n,t){(e.exports=t("FZ+f")(!0)).push([e.i,"\n.info-form[data-v-54fa7786] {\n  width: 90% !important;\n}\n","",{version:3,sources:["C:/Users/hp/Desktop/Shopmall-By-Mxl/src/components/signUp/src/components/signUp/CheckPhone.vue"],names:[],mappings:";AA4EA;EACA,sBAAA;CACA",file:"CheckPhone.vue",sourcesContent:["<template>\n  <div class=\"info-form\">\n    <Form ref=\"formValidate\" :model=\"formValidate\" :label-width=\"80\" :rules=\"ruleValidate\">\n      <FormItem label=\"手机号\" prop=\"phone\">\n          <i-input v-model=\"formValidate.phone\" clearable size=\"large\"  placeholder=\"请输入手机号\"></i-input>\n      </FormItem>\n      <FormItem label=\"验证码\" prop=\"checkNum\">\n          <i-input v-model=\"formValidate.checkNum\" size=\"large\"  placeholder=\"请输入验证码\">\n            <Button slot=\"append\" @click=\"getcheckNum\">获取验证码</Button>\n          </i-input>\n      </FormItem>\n      <Button type=\"error\" size=\"large\" long @click=\"handleSubmit('formValidate')\">验证手机号</Button>\n    </Form>\n  </div>\n</template>\n\n<script>\nimport store from '@/vuex/store';\nimport { mapMutations } from 'vuex';\nexport default {\n  name: 'CheckPhone',\n  data () {\n    return {\n      formValidate: {\n        phone: '',\n        checkNum: ''\n      },\n      ruleValidate: {\n        phone: [\n          { required: true, message: '手机号不能为空', trigger: 'blur' },\n          { type: 'string', pattern: /^1[3|4|5|7|8][0-9]{9}$/, message: '手机号格式出错', trigger: 'blur' }\n        ],\n        checkNum: [\n          { required: true, message: '必须填写验证码', trigger: 'blur' },\n          { type: 'string', min: 4, max: 4, message: '验证码长度错误', trigger: 'blur' }\n        ]\n      }\n    };\n  },\n  methods: {\n    ...mapMutations(['SET_SIGN_UP_SETP']),\n    getcheckNum () {\n      if (this.formValidate.phone.length === 11) {\n        this.$Message.success({\n          content: '验证码为: 1234',\n          duration: 6,\n          closable: true\n        });\n      } else {\n        this.$Message.error({\n          content: '请输入正确的手机号',\n          duration: 6,\n          closable: true\n        });\n      }\n    },\n    handleSubmit (name) { // 提交验证\n      this.$refs[name].validate((valid) => {\n        if (valid) {\n          this.$router.push({ path: '/SignUp/inputInfo', query: { phone: this.formValidate.phone } });\n          this.SET_SIGN_UP_SETP(1);\n        } else {\n          this.$Message.error({\n            content: '请填写正确的信息',\n            duration: 6,\n            closable: true\n          });\n        }\n      });\n    }\n  },\n  store\n};\n<\/script>\n\n<style scoped>\n.info-form {\n  width: 90% !important;\n}\n</style>\n"],sourceRoot:""}])},h1o3:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("Dd8w"),a=t.n(r),o=t("YtJ0"),i=t("NYxO"),s={name:"CheckPhone",data:function(){return{formValidate:{phone:"",checkNum:""},ruleValidate:{phone:[{required:!0,message:"手机号不能为空",trigger:"blur"},{type:"string",pattern:/^1[3|4|5|7|8][0-9]{9}$/,message:"手机号格式出错",trigger:"blur"}],checkNum:[{required:!0,message:"必须填写验证码",trigger:"blur"},{type:"string",min:4,max:4,message:"验证码长度错误",trigger:"blur"}]}}},methods:a()({},Object(i.d)(["SET_SIGN_UP_SETP"]),{getcheckNum:function(){11===this.formValidate.phone.length?this.$Message.success({content:"验证码为: 1234",duration:6,closable:!0}):this.$Message.error({content:"请输入正确的手机号",duration:6,closable:!0})},handleSubmit:function(e){var n=this;this.$refs[e].validate(function(e){e?(n.$router.push({path:"/SignUp/inputInfo",query:{phone:n.formValidate.phone}}),n.SET_SIGN_UP_SETP(1)):n.$Message.error({content:"请填写正确的信息",duration:6,closable:!0})})}}),store:o.a},l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"info-form"},[t("Form",{ref:"formValidate",attrs:{model:e.formValidate,"label-width":80,rules:e.ruleValidate}},[t("FormItem",{attrs:{label:"手机号",prop:"phone"}},[t("i-input",{attrs:{clearable:"",size:"large",placeholder:"请输入手机号"},model:{value:e.formValidate.phone,callback:function(n){e.$set(e.formValidate,"phone",n)},expression:"formValidate.phone"}})],1),e._v(" "),t("FormItem",{attrs:{label:"验证码",prop:"checkNum"}},[t("i-input",{attrs:{size:"large",placeholder:"请输入验证码"},model:{value:e.formValidate.checkNum,callback:function(n){e.$set(e.formValidate,"checkNum",n)},expression:"formValidate.checkNum"}},[t("Button",{attrs:{slot:"append"},on:{click:e.getcheckNum},slot:"append"},[e._v("获取验证码")])],1)],1),e._v(" "),t("Button",{attrs:{type:"error",size:"large",long:""},on:{click:function(n){return e.handleSubmit("formValidate")}}},[e._v("验证手机号")])],1)],1)};l._withStripped=!0;var u={render:l,staticRenderFns:[]},c=u;var m=!1;var p=t("VU/8")(s,c,!1,function(e){m||t("2IbJ")},"data-v-54fa7786",null);p.options.__file="src/components/signUp/CheckPhone.vue";n.default=p.exports}});
//# sourceMappingURL=16.a62eb993cbe892ef52ce.js.map