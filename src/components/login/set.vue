<template >
  <div class="set">
    <com-header>
      <i class="icon iconfont icon-zuo1" slot="left" @click="goBack"></i>
      <span slot="center" >设置</span>
      <i class='icon iconfont icon-shenglve' slot="right"></i>
    </com-header>

    <div class="content">
      <div class="line flex_between">
         <div class="left flex_between">
           <img src="../../common/image/set/head.png" alt="">
           <div class="right">
             <p>豆豆飞</p>
             <p>会员名：逗号</p>
           </div>
         </div>
         <div class="right">
           <i class="icon iconfont icon-erweima1"></i>
           <i class="icon iconfont icon-you1"></i>
         </div>
      </div>
      <div class="line flex_between" v-for="(item,index) in names" :key="item.key" :class="(index==0||index==1||index==5)?'mT10':''">
        <div class="left">{{item.name}}</div>
        <div class="right"><i class="icon iconfont icon-you1"></i></div>
      </div>
      <button type="button" name="button" class="grad2 quitBtn" @click="quit">退出当前账户</button>
      <div class="model" v-show="modelQuit">
        <div class="top">
          <p>确定要推出登录吗？</p>
          <button type="button" name="button" class="confirm" @click="confirm">确认</button>
        </div>
        <div class="bottom">
          <button type="button" name="button" class="cancel" @click="cancel">取消</button>
        </div>
      </div>

      <div class="bg" v-show="modelQuit"></div>
    </div>
  </div>
</template>

<script>
  import comHeader from 'components/header/comHeader'
  export default {
    data(){
      return {
        modelQuit:false,
        mes:'',
        names:[
          {key:'adress',name:'我的收货地址'},
          {key:'accountSafe',name:'账户与安全'},
          {key:'area',name:'地区设置'},
          {key:'sound',name:'音效与通知'},
          {key:'hide',name:'隐私'},
          {key:'question',name:'问题反馈'},
          {key:'about',name:'关于手机淘宝'},
        ],
      }
    },
    created(){
    },
    methods:{
      confirm(){
        this.$router.push('./login')
      },
      cancel(){
         this.modelQuit = false;
      },
      quit(){//退出
         this.modelQuit = true;
      },
      goBack(){//返回上一页
        this.$router.go(-1)
      }
    },
    components:{
      comHeader
    }
  }
</script>

<style scoped lang="less">
   @import '../../common/less/bg.less';
   @base:37.5;

   .content{padding-top:40rem/@base;}
   .icon{display:inline-block;}
   .line{padding:10rem/@base;background:#fff;border-top:1px solid #eee;
       img{width:58rem/@base;height:58/@base;margin-right:10rem/@base;}
       .left{color:#333;font-size:14rem/@base;}
   }
   .mT10{margin-top:10rem/@base;border-top:none;}
   .quitBtn{width:100%;position:fixed;bottom:0;z-index:9;height:40rem/@base;line-height:40rem/@base;border:none;}

   /*弹出框*/
   .bg{width:100%;height:100%;top:0;left:0;right:0;bottom:0;z-index:10;background:rgba(0,0,0,0.5);position:fixed;}
   .model{
     width:100%;
     padding:0 10rem/@base;
     padding-bottom:10rem/@base;
     position:fixed;
     bottom:0;
     z-index:11;
     text-align:center;
     box-sizing:border-box;
     button{border:none;background:#fff;}
     .top,.bottom{width:100%;background:#fff;border-radius:10rem/@base;}
     .top{p{border-bottom:1px solid #eee;}}
     .bottom{margin-top:10rem/@base;}
     button,p{padding:15rem/@base;}
     button{font-size:16rem/@base;}
     button.confirm{color:#F83E34;}
     button.cancel{color:#0877EA;}
   }
</style>
