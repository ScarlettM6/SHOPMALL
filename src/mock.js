// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;

function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
    case 1: 
     return parseInt(Math.random()*minNum+1); 
    break; 
    case 2: 
     return parseInt(Math.random()*(maxNum-minNum+1)+minNum); 
    break; 
    default: 
     return 0; 
    break; 
    } 
   } 
const navPhoto=function( ){
    let begin= randomNum(1,9);
    var tem;
    var carouselItems=new Array();
    var activity=new Array();
    for(let i=0;i<5;i++)
    {    tem=begin+i;
        if(tem>9)
            tem-=9;
        carouselItems.push('static/img/nav/'+tem+'.jpg'); 
    }
    let begin2= randomNum(1,4);
    var tem=0;
    for(let i=0;i<2;i++){
      tem=begin2+i;
      if(tem>4)
          tem-=4;
          activity.push('static/img/nav/nav_showimg'+tem+'.jpg'); 
    }

   return {
       carouselItems:carouselItems,
       activity:activity
        };
}
const GoodsInfo=function(){
  let i=2;
  const data2={
    goodsImg: [
      'static/img/goodsDetail'+i+'/item-detail-1.jpg',
      'static/img/goodsDetail'+i+'/item-detail-2.jpg',
      'static/img/goodsDetail'+i+'/item-detail-3.jpg',
      'static/img/goodsDetail'+i+'/item-detail-4.jpg'
    ],
    title: '潮流小白/黑鞋',
    tags: [ ],
    discount: ['满99减10', '满198减22', '满290减35'],
    promotion: ['跨店满减200-20', ],
    remarksNum: 5800,
    setMeal: [
      [
        {
          img: 'static/img/goodsDetail'+i+'/pack/1.jpg',
          intro: '4.7英寸-深邃蓝',
          price: 28.0
        },
        {
          img: 'static/img/goodsDetail'+i+'/pack/2.jpg',
          intro: '4.7英寸-星空黑',
          price: 29.0
        },
        {
          img: 'static/img/goodsDetail'+i+'/pack/3.jpg',
          intro: '5.5英寸-香槟金',
          price: 28.5
        }
      ],
      [
        {
          img: 'static/img/goodsDetail'+i+'/pack/4.jpg',
          intro: '5.5英寸-玫瑰金',
          price: 32.0
        },
        {
          img: 'static/img/goodsDetail'+i+'/pack/5.jpg',
          intro: '5.5英寸-深邃蓝',
          price: 32.0
        },
        {
          img: 'static/img/goodsDetail'+i+'/pack/6.jpg',
          intro: '5.5英寸-星空黑',
          price: 35.0
        }
      ],
      [
        {
          img: 'static/img/goodsDetail'+i+'/pack/7.jpg',
          intro: '4.7英寸-香槟金',
          price: 26.0
        },
        {
          img: 'static/img/goodsDetail'+i+'/pack/8.jpg',
          intro: '4.7英寸-玫瑰金',
          price: 25.0
        },
        {
          img: 'static/img/goodsDetail'+i+'/pack/9.jpg',
          intro: '4.7英寸-中国红',
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

  const data1 = {
    goodsImg: [
      'static/img/goodsDetail/item-detail-1.jpg',
      'static/img/goodsDetail/item-detail-2.jpg',
      'static/img/goodsDetail/item-detail-3.jpg',
      'static/img/goodsDetail/item-detail-4.jpg'
    ],
    title: '苹果8/7手机壳iPhone7 Plus保护壳全包防摔磨砂硬外壳',
    tags: [ ],
    discount: ['满20减10', '满40减22', '满59减35'],
    promotion: ['跨店满减200-20', '多买优惠'],
    remarksNum: 6000,
    setMeal: [
      [
        {
          img: 'static/img/goodsDetail/pack/1.jpg',
          intro: '4.7英寸-深邃蓝',
          price: 28.0
        },
        {
          img: 'static/img/goodsDetail/pack/2.jpg',
          intro: '4.7英寸-星空黑',
          price: 29.0
        },
        {
          img: 'static/img/goodsDetail/pack/3.jpg',
          intro: '5.5英寸-香槟金',
          price: 28.5
        }
      ],
      [
        {
          img: 'static/img/goodsDetail/pack/4.jpg',
          intro: '5.5英寸-玫瑰金',
          price: 32.0
        },
        {
          img: 'static/img/goodsDetail/pack/5.jpg',
          intro: '5.5英寸-深邃蓝',
          price: 32.0
        },
        {
          img: 'static/img/goodsDetail/pack/6.jpg',
          intro: '5.5英寸-星空黑',
          price: 35.0
        }
      ],
      [
        {
          img: 'static/img/goodsDetail/pack/7.jpg',
          intro: '4.7英寸-香槟金',
          price: 26.0
        },
        {
          img: 'static/img/goodsDetail/pack/8.jpg',
          intro: '4.7英寸-玫瑰金',
          price: 25.0
        },
        {
          img: 'static/img/goodsDetail/pack/9.jpg',
          intro: '4.7英寸-中国红',
          price: 28.0
        }
      ]
    ],
    hot: [
      {
        img: 'static/img/goodsDetail/hot/1.jpg',
        price: 28.0,
        sale: 165076
      },
      {
        img: 'static/img/goodsDetail/hot/2.jpg',
        price: 36.0,
        sale: 135078
      },
      {
        img: 'static/img/goodsDetail/hot/3.jpg',
        price: 38.0,
        sale: 105073
      },
      {
        img: 'static/img/goodsDetail/hot/4.jpg',
        price: 39.0,
        sale: 95079
      },
      {
        img: 'static/img/goodsDetail/hot/5.jpg',
        price: 25.0,
        sale: 5077
      },
      {
        img: 'static/img/goodsDetail/hot/6.jpg',
        price: 20.0,
        sale: 3077
      }
    ],
    goodsDetail: [
      'static/img/goodsDetail/intro/1.jpg',
      'static/img/goodsDetail/intro/2.jpg',
      'static/img/goodsDetail/intro/3.jpg',
      'static/img/goodsDetail/intro/4.jpg'
    ],
    param: [
      {
        title: '商品名称',
        content: 'iPhoneX手机壳'
      },
      {
        title: '商品编号',
        content: '1123457778'
      },
      {
        title: '店铺',
        content: 'Our Shop'
      },
      {
        title: '商品毛重',
        content: '123.00g'
      },
      {
        title: '商品产地',
        content: '中国大陆'
      },
      {
        title: '机型',
        content: 'iPhone X'
      },
      {
        title: '材质',
        content: 'PC/塑料'
      },
      {
        title: '款式',
        content: '软壳'
      },
      {
        title: '适用人群',
        content: '通用'
      }
    ],
    remarks: {
      goodAnalyse:99,
      remarksTags: [ '颜色可人', '实惠优选', '严丝合缝', '极致轻薄', '质量没话说', '比定做还合适', '完美品质', '正品行货', '包装有档次', '不容易发热', '已经买第二个', '是全覆盖' ],
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
  };
}
const Segoods=function(){
  const sData = [
    {
      intro: 'byphasse蓓昂斯丝卸妆水女眼唇脸三合一温和清洁碧倍昂丝卸妆油液',
      img: 'static/img/index/seckill/seckill-item1.jpg',
      price: 39.9,
      realPrice: 69.6
    },
    {
      intro: '海南小台农芒果新鲜小台芒10斤当季水果整箱包邮应季现摘热带忙果',
      img: 'static/img/index/seckill/seckill-item2.jpg',
      price: 26.80,
      realPrice: 58.8
    },
    {
      intro: '丹东99牛奶草莓礼盒3斤新鲜当季整箱水果奶油红颜大草莓顺丰包邮',
      img: 'static/img/index/seckill/seckill-item3.jpg',
      price: 48.99,
      realPrice: 158.99
    },
    {
      intro: '红心蜜薯烟薯25糖心红薯新鲜10斤农家沙地板栗香薯烤地瓜山芋番薯',
      img: 'static/img/index/seckill/seckill-item4.jpg',
      price: 24.88,
      realPrice: 59.0
    },
    {
      intro: '北欧创意手柄碗烤盘陶瓷碗个性甜品碗烤箱专用家用碗面碗焗饭碗盘',
      img: 'static/img/index/seckill/seckill-item5.jpg',
      price: 10.79,
      realPrice: 34.9
    },
    {
      intro: '滴露衣物除菌液柠檬1.5L/3L家用洗衣杀菌除螨非消毒液非洗衣液',
      img: 'static/img/index/seckill/seckill-item6.jpg',
      price:  49.90,
      realPrice: 99.99
    },
    {
      intro: '官方旗舰店】HP惠普无线鼠标可充电静音女生可爱笔记本办公专适用 ',
      img: 'static/img/index/seckill/seckill-item7.jpg',
      price:  44.5,
      realPrice:  79.9
    },  
    {
      intro: '美迪惠尔可莱丝旗舰店正品 韩国NMF水库面膜 女补水保湿10片',
      img: 'static/img/index/seckill/seckill-item8.jpg',
      price:   89.00,
      realPrice:  288.9
    },
    {
      intro: '【凑单】阿宽多口味组合红油面皮重庆小面铺盖面火鸡面方便面泡面',
      img: 'static/img/index/seckill/seckill-item9.jpg',
      price:   2.9,
      realPrice:  5.9
    }
  ]
  let begin= randomNum(1,8);
    var tem;
    let data=new Array();
    for(let i=0;i<5;i++)
    {    tem=begin+i;
        if(tem>8)
            tem-=8;
            data.push(sData[tem]); 
    }
    let hour= randomNum(1,6);
    let minute=hour+ randomNum(0,40);
    let seconds=randomNum(0,60);
    let deadline = {
      hours: hour,
      minute: minute,
      seconds: seconds
    }
   
   return {
    data:data,
    deadline:deadline

        };
}

 
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/navBar/index', 'post', navPhoto);
Mock.mock('/seckill/index', 'post', Segoods);
Mock.mock('/goodsSearch/index', 'post', GoodsInfo);
