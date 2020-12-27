webpackJsonp([3],{IKqP:function(n,A,o){(n.exports=o("FZ+f")(!0)).push([n.i,"\n.text-danger[data-v-4ccfc5f8] {\n  color: #A94442;\n}\n.seckill-price[data-v-4ccfc5f8]{\n  margin-right: 5px;\n  font-size: 25px;\n  font-weight: bold;\n}\n.goods-container[data-v-4ccfc5f8] {\n  margin: 15px auto;\n  width: 80%;\n}\n.goods-list[data-v-4ccfc5f8] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.goods-show-info[data-v-4ccfc5f8]{\n  width: 240px;\n  padding: 10px;\n  margin: 15px 0px;\n  border: 1px solid #fff;\n  cursor: pointer;\n}\n.goods-show-info[data-v-4ccfc5f8]:hover{\n  border: 1px solid #ccc;\n  -webkit-box-shadow: 0px 0px 15px #ccc;\n          box-shadow: 0px 0px 15px #ccc;\n}\n.goods-show-price[data-v-4ccfc5f8]{\n  margin-top: 6px;\n}\n.goods-show-detail[data-v-4ccfc5f8]{\n  font-size: 12px;\n  margin: 6px 0px;\n}\n.goods-show-num[data-v-4ccfc5f8]{\n  font-size: 12px;\n  margin-bottom: 6px;\n  color: #009688;\n}\n.goods-show-num span[data-v-4ccfc5f8]{\n  color: #005AA0;\n  font-weight: bold;\n}\n.goods-show-seller[data-v-4ccfc5f8]{\n  font-size: 12px;\n  color:#E4393C;\n}\n.goods-page[data-v-4ccfc5f8] {\n  margin-top: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n","",{version:3,sources:["C:/Users/hp/Desktop/Shopmall-By-Mxl/src/components/src/components/Merchant.vue"],names:[],mappings:";AAqDA;EACA,eAAA;CACA;AACA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;CACA;AACA;EACA,kBAAA;EACA,WAAA;CACA;AACA;EACA,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,oBAAA;MAAA,gBAAA;EACA,0BAAA;MAAA,uBAAA;UAAA,+BAAA;CACA;AACA;EACA,aAAA;EACA,cAAA;EACA,iBAAA;EACA,uBAAA;EACA,gBAAA;CACA;AACA;EACA,uBAAA;EACA,sCAAA;UAAA,8BAAA;CACA;AACA;EACA,gBAAA;CACA;AACA;EACA,gBAAA;EACA,gBAAA;CACA;AACA;EACA,gBAAA;EACA,mBAAA;EACA,eAAA;CACA;AACA;EACA,eAAA;EACA,kBAAA;CACA;AACA;EACA,gBAAA;EACA,cAAA;CACA;AACA;EACA,iBAAA;EACA,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,sBAAA;MAAA,mBAAA;UAAA,0BAAA;CACA",file:"Merchant.vue",sourcesContent:['<template>\n  <div>\n    <ShopHeader></ShopHeader>\n    <div class="goods-container">\n      <div class="goods-list">\n        <div class="goods-show-info" v-for="(item, index) in orderGoodsList" :key="index">\n          <div class="goods-show-img">\n            <router-link to="/goodsDetail"><img :src="item.img"/></router-link>\n          </div>\n          <div class="goods-show-price">\n            <span>\n              <Icon type="social-yen text-danger"></Icon>\n              <span class="seckill-price text-danger">{{item.price}}</span>\n            </span>\n          </div>\n          <div class="goods-show-detail">\n            <span>{{item.intro}}</span>\n          </div>\n          <div class="goods-show-num">\n            已有<span>{{item.remarks}}</span>人评价\n          </div>\n        </div>\n      </div>\n      <div class="goods-page">\n        <Page :total="100" show-sizer></Page>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport ShopHeader from \'@/components/header/ShopHeader\';\nimport store from \'@/vuex/store\';\nimport { mapGetters, mapActions } from \'vuex\';\nexport default {\n  name: \'Merchant\',\n  created () {\n    this.loadGoodsList();\n  },\n  computed: {\n    ...mapGetters([\'orderGoodsList\'])\n  },\n  methods: {\n    ...mapActions([\'loadGoodsList\'])\n  },\n  components: {\n    ShopHeader\n  },\n  store\n};\n<\/script>\n\n<style scoped>\n.text-danger {\n  color: #A94442;\n}\n.seckill-price{\n  margin-right: 5px;\n  font-size: 25px;\n  font-weight: bold;\n}\n.goods-container {\n  margin: 15px auto;\n  width: 80%;\n}\n.goods-list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.goods-show-info{\n  width: 240px;\n  padding: 10px;\n  margin: 15px 0px;\n  border: 1px solid #fff;\n  cursor: pointer;\n}\n.goods-show-info:hover{\n  border: 1px solid #ccc;\n  box-shadow: 0px 0px 15px #ccc;\n}\n.goods-show-price{\n  margin-top: 6px;\n}\n.goods-show-detail{\n  font-size: 12px;\n  margin: 6px 0px;\n}\n.goods-show-num{\n  font-size: 12px;\n  margin-bottom: 6px;\n  color: #009688;\n}\n.goods-show-num span{\n  color: #005AA0;\n  font-weight: bold;\n}\n.goods-show-seller{\n  font-size: 12px;\n  color:#E4393C;\n}\n.goods-page {\n  margin-top: 20px;\n  display: flex;\n  justify-content: flex-end;\n}\n</style>\n'],sourceRoot:""}])},"O+ii":function(n,A,o){(n.exports=o("FZ+f")(!0)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 店铺介绍 */\n.shop-box[data-v-e67620b6] {\n  width: 100%;\n  height: 120px;\n  background-color: #02A0EA;\n}\n.shop-container[data-v-e67620b6] {\n  width: 80%;\n  height: 100%;\n  margin: 0px auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #fff;\n}\n.shop-title[data-v-e67620b6] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.shop-title-icon[data-v-e67620b6] {\n  font-size: 46px;\n}\n.shop-title-content[data-v-e67620b6] {\n  padding-top: 8px;\n  margin-left: 15px;\n}\n.shop-title-content p[data-v-e67620b6] {\n  line-height: 26px;\n  font-size: 20px;\n}\n.shop-title-content a[data-v-e67620b6] {\n  color: #fff;\n}\n.shop-another-item[data-v-e67620b6] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.shop-another-item-detail[data-v-e67620b6] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-left: 15px;\n}\n.shop-another-item-img[data-v-e67620b6] {\n  height: 80px;\n  border-radius: 40px;\n  overflow: hidden;\n}\n.shop-another-item-img img[data-v-e67620b6] {\n  width: 80px;\n}\n.shop-anoter-item-intro[data-v-e67620b6] {\n  margin-left: 15px;\n}\n","",{version:3,sources:["C:/Users/hp/Desktop/Shopmall-By-Mxl/src/components/header/src/components/header/ShopHeader.vue"],names:[],mappings:";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAyDA,UAAA;AACA;EACA,YAAA;EACA,cAAA;EACA,0BAAA;CACA;AAEA;EACA,WAAA;EACA,aAAA;EACA,iBAAA;EACA,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,+BAAA;EAAA,8BAAA;MAAA,wBAAA;UAAA,oBAAA;EACA,0BAAA;MAAA,uBAAA;UAAA,+BAAA;EACA,0BAAA;MAAA,uBAAA;UAAA,oBAAA;EACA,YAAA;CACA;AAEA;EACA,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,+BAAA;EAAA,8BAAA;MAAA,wBAAA;UAAA,oBAAA;CACA;AAEA;EACA,gBAAA;CACA;AAEA;EACA,iBAAA;EACA,kBAAA;CACA;AAEA;EACA,kBAAA;EACA,gBAAA;CACA;AAEA;EACA,YAAA;CACA;AAEA;EACA,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,+BAAA;EAAA,8BAAA;MAAA,wBAAA;UAAA,oBAAA;CACA;AAEA;EACA,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,+BAAA;EAAA,8BAAA;MAAA,wBAAA;UAAA,oBAAA;EACA,0BAAA;MAAA,uBAAA;UAAA,oBAAA;EACA,kBAAA;CACA;AAEA;EACA,aAAA;EACA,oBAAA;EACA,iBAAA;CACA;AAEA;EACA,YAAA;CACA;AAEA;EACA,kBAAA;CACA",file:"ShopHeader.vue",sourcesContent:['<template>\n  <div class="shop-box">\n    <div class="shop-container">\n      <div class="shop-title">\n        <div class="shop-title-icon">\n          <Icon type="fireball"></Icon>\n          <i class="fa fa-fire"></i>\n        </div>\n        <div class="shop-title-content">\n          <p><router-link to="/merchant">{{ shopIntro.shopName }}</router-link></p>\n          <p><router-link to="/merchant">{{ shopIntro.slogen }}</router-link></p>\n        </div>\n      </div>\n      <div class="shop-another-item">\n        <div class="shop-another-item-detail" v-for="(item, index) in shopIntro.showGoods" :key="index">\n          <div class="shop-another-item-img">\n            <img :src="item.img" alt="">\n          </div>\n          <div class="shop-anoter-item-intro">\n            <p>{{ item.intro[0] }}</p>\n            <p>{{ item.intro[1] }}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'ShopHeader\',\n  data () {\n    return {\n      shopIntro: {\n        shopName: \'Our Shop\',\n        slogen: \'The Best Thing For You\',\n        showGoods: [\n          {\n            img: \'static/img/goodsList/item-show-1.jpg\',\n            intro: [ \'全身磨砂\', \'防指纹\' ]\n          },\n          {\n            img: \'static/img/goodsList/item-show-2.jpg\',\n            intro: [ \'环保PP材质\', \'不发黄\' ]\n          },\n          {\n            img: \'static/img/goodsList/item-show-3.jpg\',\n            intro: [ \'0.4mm纤细\', \'纤薄手感\' ]\n          }\n        ]\n      }\n    };\n  }\n};\n<\/script>\n\n<style scoped>\n/* 店铺介绍 */\n.shop-box {\n  width: 100%;\n  height: 120px;\n  background-color: #02A0EA;\n}\n\n.shop-container {\n  width: 80%;\n  height: 100%;\n  margin: 0px auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: #fff;\n}\n\n.shop-title {\n  display: flex;\n  flex-direction: row;\n}\n\n.shop-title-icon {\n  font-size: 46px;\n}\n\n.shop-title-content {\n  padding-top: 8px;\n  margin-left: 15px;\n}\n\n.shop-title-content p {\n  line-height: 26px;\n  font-size: 20px;\n}\n\n.shop-title-content a {\n  color: #fff;\n}\n\n.shop-another-item {\n  display: flex;\n  flex-direction: row;\n}\n\n.shop-another-item-detail {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-left: 15px;\n}\n\n.shop-another-item-img {\n  height: 80px;\n  border-radius: 40px;\n  overflow: hidden;\n}\n\n.shop-another-item-img img {\n  width: 80px;\n}\n\n.shop-anoter-item-intro {\n  margin-left: 15px;\n}\n</style>\n'],sourceRoot:""}])},"b+fo":function(n,A,o){"use strict";var t=function(){var n=this,A=n.$createElement,o=n._self._c||A;return o("div",{staticClass:"shop-box"},[o("div",{staticClass:"shop-container"},[o("div",{staticClass:"shop-title"},[o("div",{staticClass:"shop-title-icon"},[o("Icon",{attrs:{type:"fireball"}}),n._v(" "),o("i",{staticClass:"fa fa-fire"})],1),n._v(" "),o("div",{staticClass:"shop-title-content"},[o("p",[o("router-link",{attrs:{to:"/merchant"}},[n._v(n._s(n.shopIntro.shopName))])],1),n._v(" "),o("p",[o("router-link",{attrs:{to:"/merchant"}},[n._v(n._s(n.shopIntro.slogen))])],1)])]),n._v(" "),o("div",{staticClass:"shop-another-item"},n._l(n.shopIntro.showGoods,function(A,t){return o("div",{key:t,staticClass:"shop-another-item-detail"},[o("div",{staticClass:"shop-another-item-img"},[o("img",{attrs:{src:A.img,alt:""}})]),n._v(" "),o("div",{staticClass:"shop-anoter-item-intro"},[o("p",[n._v(n._s(A.intro[0]))]),n._v(" "),o("p",[n._v(n._s(A.intro[1]))])])])}),0)])])};t._withStripped=!0;var e={render:t,staticRenderFns:[]},i=e;var s=!1;var a=o("VU/8")({name:"ShopHeader",data:function(){return{shopIntro:{shopName:"Our Shop",slogen:"The Best Thing For You",showGoods:[{img:"static/img/goodsList/item-show-1.jpg",intro:["全身磨砂","防指纹"]},{img:"static/img/goodsList/item-show-2.jpg",intro:["环保PP材质","不发黄"]},{img:"static/img/goodsList/item-show-3.jpg",intro:["0.4mm纤细","纤薄手感"]}]}}}},i,!1,function(n){s||o("zKt7")},"data-v-e67620b6",null);a.options.__file="src/components/header/ShopHeader.vue";A.a=a.exports},eH2y:function(n,A,o){"use strict";Object.defineProperty(A,"__esModule",{value:!0});var t=o("Dd8w"),e=o.n(t),i=o("b+fo"),s=o("YtJ0"),a=o("NYxO"),r={name:"Merchant",created:function(){this.loadGoodsList()},computed:e()({},Object(a.c)(["orderGoodsList"])),methods:e()({},Object(a.b)(["loadGoodsList"])),components:{ShopHeader:i.a},store:s.a},p=function(){var n=this,A=n.$createElement,o=n._self._c||A;return o("div",[o("ShopHeader"),n._v(" "),o("div",{staticClass:"goods-container"},[o("div",{staticClass:"goods-list"},n._l(n.orderGoodsList,function(A,t){return o("div",{key:t,staticClass:"goods-show-info"},[o("div",{staticClass:"goods-show-img"},[o("router-link",{attrs:{to:"/goodsDetail"}},[o("img",{attrs:{src:A.img}})])],1),n._v(" "),o("div",{staticClass:"goods-show-price"},[o("span",[o("Icon",{attrs:{type:"social-yen text-danger"}}),n._v(" "),o("span",{staticClass:"seckill-price text-danger"},[n._v(n._s(A.price))])],1)]),n._v(" "),o("div",{staticClass:"goods-show-detail"},[o("span",[n._v(n._s(A.intro))])]),n._v(" "),o("div",{staticClass:"goods-show-num"},[n._v("\n          已有"),o("span",[n._v(n._s(A.remarks))]),n._v("人评价\n        ")])])}),0),n._v(" "),o("div",{staticClass:"goods-page"},[o("Page",{attrs:{total:100,"show-sizer":""}})],1)])],1)};p._withStripped=!0;var d={render:p,staticRenderFns:[]},c=d;var l=!1;var h=o("VU/8")(r,c,!1,function(n){l||o("kbaX")},"data-v-4ccfc5f8",null);h.options.__file="src/components/Merchant.vue";A.default=h.exports},kbaX:function(n,A,o){var t=o("IKqP");"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);o("rjj0")("c5b240dc",t,!1,{})},zKt7:function(n,A,o){var t=o("O+ii");"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);o("rjj0")("10235bf6",t,!1,{})}});
//# sourceMappingURL=3.2121333df06f45c73bf0.js.map