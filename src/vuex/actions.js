// 获取秒杀数据
import api from './../axios/api.js'
export const loadSeckillsInfo = ({ commit }) => {
  return new Promise((resolve, reject) => {
   
    
    
    api.gain('/seckill/index','').then(res =>{   
      const data=res.data;
       const  deadline=res.deadline
     commit('SET_SECKILLS_INFO', [data,deadline]);
   })
   
   
  });
};

// 获取轮播(营销)图片
export const loadCarouselItems = ({ commit }) => {
  return new Promise((resolve, reject) => {

   
     const data = {
      carouselItems: [''],
      activity: []
    };
   api.gain('/navBar/index','').then(res =>{   
    data.carouselItems=res.carouselItems;
    data.activity=res.activity;
    commit('SET_CAROUSELITEMS_INFO', data);
  })
  });
};

// 加载食物专区数据
export const loadComputer = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const food = {
      title: '生鲜馆-尝遍天下',
      link: [ '休闲食品', '饮料冲调', '茗茶', '粮油调味', '进口食品', '食品礼券', '地方特产', '各类坚果', '生鲜蔬果' ],
      detail: [
        {
          bigImg: 'static/img/index/food/item-food-1.jpg',
          itemFour: [
            {
              title: '水果罐头',
              intro: '超甜蜜',
              img: 'static/img/index/food/item-food-2.jpg'
            },
            {
              title: '麦丽素',
              intro: '童年的记忆   50两大桶！',
              img: 'static/img/index/food/item-food-1-3.jpg'
            },
            {
              title: '核桃仁',
              intro: '亲手剥的 吃起来很香',
              img: 'static/img/index/food/item-food-1-4.jpg'
            },
            {
              title: '普洱茶',
              intro: '5折神券 精品茶叶',
              img: 'static/img/index/food/item-food-1-5.jpg'
            }
          ],
          itemContent: [
            'static/img/index/food/item-food-1-6.jpg',
            'static/img/index/food/item-food-1-7.jpg',
            'static/img/index/food/item-food-1-8.jpg'
          ]
        },
        {
          bigImg: 'static/img/index/food/item-food-2-1.jpg',
          itemFour: [
            {
              title: '麻酱',
              intro: '咱老北京儿组合',
              img: 'static/img/index/food/item-food-2-2.jpg'
            },
            {
              title: '大闸蟹',
              intro: '抢999减666神券',
              img: 'static/img/index/food/item-food-2-3.jpg'
            },
            {
              title: '蜂蜜',
              intro: '澳洲进口蜂蜜',
              img: 'static/img/index/food/item-food-2-4.jpg'
            },
            {
              title: '香辣素魔芋',
              intro: '超级好吃！',
              img: 'static/img/index/food/item-food-2-5.jpg'
            }
          ],
          itemContent: [
            'static/img/index/food/item-food-2-6.jpg',
            'static/img/index/food/item-food-2-7.jpg',
            'static/img/index/food/item-food-2-8.jpg'
          ]
        }
      ]
    };
    commit('SET_COMPUTER_INFO', food);
  });
};


// 请求获得商品详细信息 
export const loadGoodsInfo = ({ commit },intro) => {
  console.log(intro)
  
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let i=1;
      if(intro=='潮流女鞋，白色'){
        i=2
    }
    else if(intro=='【猜您喜欢】Romand唇釉 20色绝美'){
      i=3
    }
    else if(intro=='复古潮流new Balance'){
      i=4;
    }
    if(i==1){
      const data = {
        goodsImg: [
          'static/img/goodsDetail/item-detail-1.jpg',
          'static/img/goodsDetail/item-detail-2.jpg',
          'static/img/goodsDetail/item-detail-3.jpg',
          'static/img/goodsDetail/item-detail-4.jpg'
        ],
        title: '卡通草莓熊推拉壳iphone12手机壳创意苹果11promax全包xsmax/xr情侣7p/8plus防摔12mini潮12pro女7/8可爱se套',
        tags: [ ],
        discount: ['满30减3', '满48减5', '满88减10'],
        promotion: ['跨店满减300-30', '多买多优惠'],
        remarksNum: 6000,
        setMeal: [
          [
            {
              img: 'static/img/goodsDetail/pack/1.jpg',
              intro: 'iPhone12推推熊头',
              price: 9.6
            },
            {
              img: 'static/img/goodsDetail/pack/2.jpg',
              intro: 'iPhone12推推熊屁股',
              price: 9.8
            },
            {
              img: 'static/img/goodsDetail/pack/3.jpg',
              intro: 'iPhone12Pro推推熊头',
              price: 9.6
            }
          ],
          [
            {
              img: 'static/img/goodsDetail/pack/4.jpg',
              intro: 'iPhone12Pro推推熊屁股',
              price: 9.8
            },
            {
              img: 'static/img/goodsDetail/pack/5.jpg',
              intro: 'iPhone11推推熊头',
              price:  9.6
            },
            {
              img: 'static/img/goodsDetail/pack/6.jpg',
              intro: 'iPhone11推推熊屁股',
              price: 9.8
            }
          ],
          [
            {
              img: 'static/img/goodsDetail/pack/7.jpg',
              intro: 'iPhone11Pro推推熊头',
              price: 9.6
            },
            {
              img: 'static/img/goodsDetail/pack/8.jpg',
              intro: '推推熊屁股',
              price: 9.8
            },
            {
              img: 'static/img/goodsDetail/pack/9.jpg',
              intro: 'iPhone12推推熊头和推推熊屁股',
              price: 15.9
            }
          ]
        ],
        hot: [
          {
            img: 'static/img/goodsDetail/hot/1.jpg',
            price: 7.8,
            sale: 165076
          },
          {
            img: 'static/img/goodsDetail/hot/2.jpg',
            price: 12.8,
            sale: 135078
          },
          {
            img: 'static/img/goodsDetail/hot/3.jpg',
            price: 14.5,
            sale: 105073
          },
          {
            img: 'static/img/goodsDetail/hot/4.jpg',
            price: 9.9,
            sale: 95079
          },
          {
            img: 'static/img/goodsDetail/hot/5.jpg',
            price: 12.8,
            sale: 5077
          },
          {
            img: 'static/img/goodsDetail/hot/6.jpg',
            price: 15.9,
            sale: 3077
          }
        ],
        goodsDetail: [
          'static/img/goodsDetail/intro/1.jpg',
          'static/img/goodsDetail/intro/2.jpg',
          'static/img/goodsDetail/intro/3.jpg'
        ],
        param: [
          {
            title: '商品名称',
            content: 'iPhone12等手机壳'
          },
          {
            title: '商品编号',
            content: '10435663237'
          },
          {
            title: '店铺',
            content: '恩码数码旗舰店'
          },
          {
            title: '商品毛重',
            content: '100.00g'
          },
          {
            title: '商品产地',
            content: '中国大陆'
          },
          {
            title: '机型',
            content: 'iPhone 12等'
          },
          {
            title: '材质',
            content: '磨砂'
          },
          {
            title: '款式',
            content: '硬壳'
          },
          {
            title: '适用人群',
            content: '通用'
          }
        ],
        remarks: {
          goodAnalyse: 90,
          remarksTags: [ '颜色可人', '太快了', '设计感一流', '性价比高', '有点小', '比定做还合适', '完美品质',  ],
          remarksNumDetail: [ 2000, 3000, 900, 1 ],
          detail: [
            {
              username: 'p****1',
              values: 5,
              content: '颜色很好看，质量也不错！，还送了个指环，想不到哦！',
              goods: 'iPhone11推推熊屁股',
              create_at: '2019-05-15 09:20'
            },
            {
              username: '13****1',
              values: 5,
              content: '手感没的说，是硬壳，后背带有磨砂手感。很不错，很喜欢，还加送了钢化膜，支架环，物超所值，准备再买一个。很满意。物流很快。很愉快的一次购物！',
              goods: 'iPhone11推推熊屁股',
              create_at: '2019-05-13 15:23'
            },
            {
              username: '3****z',
              values: 5,
              content: '相当轻薄，店家还送了一大堆配件，*元非常值得！',
              goods: 'iPhone11推推熊头',
              create_at: '2019-05-25 12:25'
            },
            {
              username: 'gd****c',
              values: 4.9,
              content: '就是我想要的手机壳，壳子很薄，手感不错，就像没装手机壳一样，想要裸机手感的赶快下手了。',
              goods: 'iPhone12Pro推推熊屁股',
              create_at: '2018-04-06 16:23'
            },
            {
              username: 'r****b',
              values: 4.5,
              content: '壳子还不错，送的膜也可以，不过还是感觉膜小了那么一点，屏幕没法完全覆盖。对了，壳子稍微有点硬，可能会伤漆，所以不要频繁取壳就好。',
              goods: 'iPhone11推推熊屁股',
              create_at: '2019-03-15 19:24'
            },
            {
              username: 'd****e',
              values: 5,
              content: '磨砂的，相当漂亮，尺寸非常合适！精工细作！',
              goods: 'iPhone12推推熊屁股',
              create_at: '2020-12-10 10:13'
            }
          ]
        }
     
      };
      commit('SET_GOODS_INFO', data);
      commit('SET_LOAD_STATUS', false);
    }
    else{
      const data2={
        goodsImg: [
          'static/img/goodsDetail'+i+'/item-detail-1.jpg',
          'static/img/goodsDetail'+i+'/item-detail-2.jpg',
          'static/img/goodsDetail'+i+'/item-detail-3.jpg',
          'static/img/goodsDetail'+i+'/item-detail-4.jpg'
        ],
        title: 'Romand唇釉',
        tags: [ ],
        discount: ['满99减10', '满198减22', '满290减35'],
        promotion: ['跨店满减200-20', ],
        remarksNum: 5800,
        setMeal: [
          [
            {
              img: 'static/img/goodsDetail'+i+'/pack/1.jpg',
              intro: '38',
              price: 56.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/2.jpg',
              intro: '20',
              price: 56.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/3.jpg',
              intro: '19',
              price: 56.0
            }
          ],
          [
            {
              img: 'static/img/goodsDetail'+i+'/pack/4.jpg',
              intro: '09',
              price: 56.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/5.jpg',
              intro: '07',
              price: 56.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/6.jpg',
              intro: '06',
              price: 56.0
            }
          ],
          [
            {
              img: 'static/img/goodsDetail'+i+'/pack/7.jpg',
              intro: '03',
              price: 26.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/8.jpg',
              intro: '02',
              price: 25.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/9.jpg',
              intro: '12',
              price: 28.0
            }
          ]
        ],
        hot: [
          {
            img: 'static/img/goodsDetail'+i+'/hot/1.jpg',
            price: 28.0,
            sale: 165076
          },
          {
            img: 'static/img/goodsDetail'+i+'/hot/2.jpg',
            price: 36.0,
            sale: 135078
          },
          {
            img: 'static/img/goodsDetail'+i+'/hot/3.jpg',
            price: 38.0,
            sale: 105073
          },
          {
            img: 'static/img/goodsDetail'+i+'/hot/4.jpg',
            price: 39.0,
            sale: 95079
          },
          {
            img: 'static/img/goodsDetail'+i+'/hot/5.jpg',
            price: 25.0,
            sale: 5077
          },
          {
            img: 'static/img/goodsDetail'+i+'/hot/6.jpg',
            price: 20.0,
            sale: 3077
          }
        ],
        goodsDetail: [
          'static/img/goodsDetail'+i+'/intro/1.jpg',
          'static/img/goodsDetail'+i+'/intro/2.jpg',
          'static/img/goodsDetail'+i+'/intro/3.jpg',
          'static/img/goodsDetail'+i+'/intro/4.jpg'
        ],
        param: [
          {
            title: '商品名称',
            content: '潮流小白鞋'
          },
          {
            title: '商品编号',
            content: '11234573278'
          },
          {
            title: '店铺',
            content: 'Our Shop'
          },
          {
            title: '商品毛重',
            content: '233g'
          },
          {
            title: '商品产地',
            content: '中国大陆'
          },
          {
            title: '鞋型',
            content: '小白鞋'
          },
          {
            title: '材质',
            content: '真皮'
          },
          {
            title: '款式',
            content: '潮流'
          },
          {
            title: '适用人群',
            content: '通用'
          }
        ],
        remarks: {
          goodAnalyse:99,
          remarksTags: [ '颜色可人', '实惠优选', '严丝合缝',  , '质量没话说', '比定做还合适', '完美品质', '正品行货', '包装有档次', ,   ],
          remarksNumDetail: [ 2000, 3000, 900, 1 ],
          detail: [
            
            {
              username: '13****1',
              values: 5,
              content: '手感没的说，是硬壳，后背带有磨砂手感。很不错，很喜欢，还加送了钢化膜，支架环，物超所值，准备再买一个。很满意。物流很快。很愉快的一次购物！',
              goods: '5.5英寸-玫瑰金',
              create_at: '2018-05-13 15:23'
            },
            {
              username: '3****z',
              values: 4.5,
              content: '相当轻薄，店家还送了一大堆配件，*元非常值得！',
              goods: '4.7英寸-玫瑰金',
              create_at: '2018-05-05 12:25'
            },
            {
              username: 'gd****c',
              values: 3.5,
              content: '就是我想要的手机壳，壳子很薄，手感不错，就像没装手机壳一样，想要裸机手感的赶快下手了。',
              goods: '4.7英寸-中国红',
              create_at: '2018-04-06 16:23'
            },
          
          ]
        }
      
      
      
      
      }
      commit('SET_GOODS_INFO', data2);
      commit('SET_LOAD_STATUS', false);
    }
     
    }, 300);
  });
};

// 获取商品列表
export const loadGoodsList = ({ commit }) => {
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        asItems: [
          {
            img: 'static/img/goodsList/item-as-img-1.jpg',
            price: 9.8,
            intro: 'iPhone11推推熊头',
            num: 3140,
            sale: 9000
          },
          {
            img: 'static/img/goodsList/item-as-img-1.jpg',
            price: 9.6,
            intro: 'iPhone12推推熊头',
            num: 3140,
            sale: 9000
          },
          
          {
            img: 'static/img/goodsList/item-as-img-2.jpg',
            price: 9.8,
            intro: 'iPhone11Pro推推熊头',
            num: 6160,
            sale: 7990
          },
          {
            img: 'static/img/goodsList/item-as-img-1.jpg',
            price: 9.6,
            intro: 'iPhoneX推推熊头',
            num: 9160,
            sale: 7600
          },
          {
            img: 'static/img/goodsList/item-as-img-2.jpg',
            price: 9.8,
            intro: 'iPhoneXR推推熊头',
            num: 6160,
            sale: 6900
          }
        ],
        goodsList: [
          
          {
            img: 'static/img/goodsList/item-show-2.jpg',
            price: 28.00,
            intro: '蛋糕小熊披萨小兔适用苹果11手机壳iphone11pro硅胶max全包x/xs/xr防摔8plus情侣7p创意Se2可爱保护套软男女9',
            remarks: 3000,
            shopName: 'monqiqi旗舰店',
            sale: 9600
          },
          {
            img: 'static/img/goodsList/item-show-3.jpg',
            price: 15.00,
            intro: '小雏菊适用iPhone 11 Pro Max手机壳苹果X/Xs个性XR硅胶6s/7女款8Plus',
            remarks: 2800,
            shopName: 'BIAZE官方旗舰店',
            sale: 8900
          },
          {
            img: 'static/img/goodsList/item-show-4.jpg',
            price: 29.90,
            intro: '慕臣 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',
            remarks: 9000,
            shopName: '歌乐力手配专营店',
            sale: 8600
          },
          {
            img: 'static/img/goodsList/item-show-5.jpg',
            price: 15.00,
            intro: 'BIAZE 苹果6/6s手机壳 苹果iphone6s 4.7英寸透明手机套 清爽系列',
            remarks: 6160,
            shopName: 'BIAZE官方旗舰店',
            sale: 8560
          },
          {
            img: 'static/img/goodsList/item-show-6.jpg',
            price: 28.00,
            intro: '慕臣 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',
            remarks: 9006,
            shopName: '歌乐力手配专营店',
            sale: 8530
          },
          {
            img: 'static/img/goodsList/item-show-7.jpg',
            price: 15.00,
            intro: 'BIAZE 苹果8手机壳 苹果8P英寸透明手机套 清爽系列',
            remarks: 8666,
            shopName: 'BIAZE官方旗舰店',
            sale: 8360
          },
          {
            img: 'static/img/goodsList/item-show-8.jpg',
            price: 29.90,
            intro: ' 苹果12手机壳全包防摔磨砂软保护套男女 ',
            remarks: 6080,
            shopName: '镖客手配专营店',
            sale: 7560
          },
          {
            img: 'static/img/goodsList/1.jpg',
            price: 36.60,
            intro: ' 侧边卡通小动物iphone12手机壳创意苹果11promax全包xsmax/xr情侣7p/8plus防摔12mini潮12pro女7/8男se镜头套',
            remarks: 6160,
            shopName: ' 飞鸿配件专营店',
            sale: 7360
          },
          {
            img: 'static/img/goodsList/2.jpg',
            price: 28.00,
            intro: ' 潮牌牛年卡通iphone12手机壳创意苹果11promax全包xsmax/xr情侣7p/8plus防摔12mini潮12pro女7/8可爱se镜头套',
            remarks: 3000,
            shopName: '天下翼旗舰店',
            sale: 6960
          },
          {
            img: 'static/img/goodsList/3.jpg',
            price: 15.00,
            intro: '新年刺绣发吉软壳iphone12手机壳创意苹果11promax全包xsmax/xr情侣7p/8plus防摔12mini潮12pro女7/8皮质se套',
            remarks: 2800,
            shopName: '伊人官方旗舰店',
            sale: 6560
          },
          {
            img: 'static/img/goodsList/111.png',
            price: 9.60,
            intro: '卡通草莓苹果手机壳',
            remarks: 9000,
            shopName: '三际数码专营店',
            sale: 6360
          },
          {
            img: 'static/img/goodsList/9.jpg',
            price: 128,
            intro: '【猜您喜欢】Romand唇釉 20色绝美',
            remarks: 6160,
            shopName: 'Romand旗舰店',
            sale: 9900
          },
          {
            img: 'static/img/goodsList/10.jpg',
            price: 128,
            intro: '潮流女鞋，白色',
            remarks: 6160,
            shopName: '酷跑专营店',
            sale: 9900
          },
          {
            img: 'static/img/goodsList/11.jpg',
            price: 448,
            intro: '复古潮流new Balance',
            remarks: 6160,
            shopName: '酷跑专营店',
            sale: 9900
          }
          
        ]
      };
      commit('SET_GOODS_LIST', data);
      commit('SET_LOAD_STATUS', false);
    });
  });
};

// 添加购物车
export const addShoppingCart = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    commit('ADD_SHOPPING_CART', data);
  });
};

// 获取用户推荐
export const loadRecommend = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = [
      [
        {
          img: 'static/img/otherBuy/1.jpg',
          intro: '卡通草莓熊推拉壳iphone12手机壳创意苹果11promax全包',
          price: 29.00
        },
        {
          img: 'static/img/otherBuy/2.jpg',
          intro: '网红卡通海绵宝宝皮质iphone12手机壳创意苹果11promax',
          price: 36.00
        },
        {
          img: 'static/img/otherBuy/3.jpg',
          intro: '卡通草莓熊推拉壳iphone12手机壳创意苹果11promax全包',
          price: 19.00
        },
        {
          img: 'static/img/otherBuy/4.jpg',
          intro: '网红卡通海绵宝宝皮质iphone12手机壳创意苹果11promax',
          price: 28.00
        }
      ],
      [
        {
          img: 'static/img/otherBuy/5.jpg',
          intro: '卡通草莓熊推拉壳iphone12手机壳创意苹果11promax全包',
          price: 28.00
        },
        {
          img: 'static/img/otherBuy/6.jpg',
          intro: 'iPhone7/8手机壳手机套防摔磨砂保护壳星空黑☆全包保护',
          price: 30.00
        },
        {
          img: 'static/img/otherBuy/7.jpg',
          intro: '数据线 适用于苹果iPhone 6s/6plus/7plus/8/X',
          price: 18.00
        },
        {
          img: 'static/img/otherBuy/8.jpg',
          intro: 'iPhone8/7/6S/6钢化膜 苹果8/7/6s/6玻璃膜 手机高',
          price: 15.00
        }
      ]
    ];
    commit('SET_RECOMMEND_INFO', data);
  });
};

export const loadAddress = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const address = [
      {
        addressId: '123456',
        name: '马大力',
        province: '江苏省',
        city: '苏州市',
        area: '常熟市',
        address: '常熟理工学院东南校区',
        phone: '185****9689',
        postalcode: '226500'
      },
      
    ];
    commit('SET_USER_ADDRESS', address);
  });
};

export const loadShoppingCart = ({ commit }) => {
  
  return new Promise((resolve, reject) => {
    const data = [{
      goods_id: 1529931938150,
      count: 1,
      img: 'static/img/goodsDetail/pack/1.jpg',
      package: '4.7英寸-深邃蓝',
      price: 28,
      title: '苹果8/7手机壳iPhone7 Plus保护壳全包防摔磨砂硬外壳'
    }];
   
    console.log(localStorage.getItem('shopCar'))
    var content= JSON.parse(localStorage.getItem('shopCar'))
    if (content != null) {
      commit('SET_SHOPPING_CART',content);
  }
    
  });
};

// 添加注册用户
export const addSignUpUser = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    const userArr = localStorage.getItem('users');
    let users = [];
    if (userArr) {
      users = JSON.parse(userArr);
    }
    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));
  });
};

// 用户登录
export const login = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    if (data.username === 'user' && data.password === '123456') {
      localStorage.setItem('loginInfo', JSON.stringify(data));
      commit('SET_USER_LOGIN_INFO', data);
      resolve(true);
      return true;
    }
    const userArr = localStorage.getItem('users');
    console.log(userArr);
    if (userArr) {
      const users = JSON.parse(userArr);
      for (const item of users) {
        console.log(item)
        console.log(data)
        if (item.username === data.username ||item.phone==data.username ) {
          localStorage.setItem('loginInfo', JSON.stringify(item));
          commit('SET_USER_LOGIN_INFO', item);
          resolve(true);
          break;
        }
        
      }
    } else {
      resolve(false);
    }
  });
};

// 退出登陆
export const signOut = ({ commit }) => {
  localStorage.removeItem('loginInfo');
  commit('SET_USER_LOGIN_INFO', {});
};

// 判断是否登陆
export const isLogin = ({ commit }) => {
  const user = localStorage.getItem('loginInfo');
  if (user) {
    commit('SET_USER_LOGIN_INFO', JSON.parse(user));
  }
  else 
  return 0;
};
