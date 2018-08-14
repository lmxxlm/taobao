<template >
  <div class="login">
    <transition-group name="slide-fade" mode="out-in">
        <div class="goLogin" v-show="isLogin" :key="'goLogin'">
          <div class="header flex_between">
            <i class="icon iconfont icon-zuo1" @click="goBack"></i>
            <span @click="more">更多</span>
          </div>
          <div class="content">
            <img src="../../common/image/set/head.png" alt="">
            <p>李***号</p>
            <div class="input flex_between">
              <i class="icon iconfont " @click="seePass" :class="setEye==true?'icon-eye':'icon-biyan3'"></i>
              <input :type="setEye==true?'text':'password'" name="" value="" placeholder="请输入密码">
              <span>忘记密码</span>
            </div>
            <button type="button" name="button" @click="loginBtn" class="loginBtn grad2">登录</button>
            <p class="face">扫脸登录</p>
            <div class="zfb flex_between">
              <i class="icon iconfont icon-zhifubao3"></i>
              <span>支付宝账户快速登录</span>
            </div>
          </div>
        </div>

        <div class="goRegist" v-show="!isLogin" :key="'goRegist'">
            <div class="header flex_between">
              <i class="icon iconfont icon-zuo1" @click="back"></i>
              <span>注册</span>
              <span>帮助</span>
            </div>
            <p class="flex_between area"> <span>国家地区</span> <span>+86 <i class="icon iconfont icon-you1"></i> </span> </p>
            <div class="content">
              <p class="input"> <input type="text" name="tel" value="" placeholder="请输入手机号码"> </p>
              <p class="input flex_between"> <input type="text" name="verificy" value="" placeholder="请输入验证码"> <button type="button" name="button" class="getVerificy">获取验证码</button> </p>
            </div>
            <button type="button" name="button" @click="loginBtn" class="registBtn grad2">同意协议并注册</button>
            <div class="pro">
               <p class="title">已阅读并同意以下协议</p>
               <p class="allPro">
                 <router-link to='/tbPro'>《淘宝服务协议》</router-link>
                 <router-link to='/hidePro'>《隐私权政策》</router-link>
                 <router-link to='/zfbPro'>《支付宝服务协议》</router-link>
                </p>
                <router-view></router-view>
            </div>
        </div>
    </transition-group>

    <transition-group name="fade">
      <div class="bg" v-show="modelChange" :key="'bg'"></div>
      <div class="modelChange" v-show="modelChange" :key="'modelChange'">
        <div class="top">
          <p class="change">切换账号</p>
          <p class="regist line" @click="goRegist">注册</p>
          <p class="help">帮助</p>
        </div>
        <div class="bottom">
          <p class="cancel" @click="cancel">取消</p>
        </div>
      </div>
    </transition-group>

  </div>
</template>

<script>
  export default {
    data(){
      return {
        mes:'',
        pass:'',
        modelChange:false,
        isLogin:true,
        setEye:false,
      }
    },
    methods:{
        seePass(){//查看密码
          this.setEye=!this.setEye
        },
        loginBtn(){
            this.$router.push({path:'/home'})
        },
        cancel(){
          this.modelChange=false;
        },
        more(){
          this.modelChange=true;
        },
        back(){//反回
          this.isLogin=true
        },
        goRegist(){//去注册
            this.isLogin=false;
            this.modelChange=false;
        },
        goBack(){
          this.$router.go(-1)
        }
    }
  }
</script>

<style scoped lang="less">
@import '../../common/less/bg.less';
/* @import '../../common/less/trans.less'; */
@base:37.5;
    .icon{display:inline-block;}
    /*去注册*/
    .goRegist{
      .header{.line_h(40rem/@base);font-size:16rem/@base;color:#333;.icon{font-size:16rem/@base;font-weight:bold;}}
      .area{font-size:16rem/@base;color:#333;margin-top:50rem/@base;padding-bottom:10rem/@base;}
      .registBtn{width:100%;height:40rem/@base;height:40rem/@base;border-radius:40rem/@base;.bd_radius(40rem/@base);margin-top:20rem/@base;}
      .pro{margin-top:20rem/@base;.title{color:#666;padding-left:5rem/@base;} .allPro{a{color:#333;}}}
      p.input{
        border-bottom:1px solid #FDAC86;
        input{border:none;padding-left:5rem/@base;}
        button{border:none;background:#fff;height:30rem/@base;line-height:30rem/@base;background:rgba(255,255,255,0.5);padding:0 10rem/@base;border-radius:30rem/@base;color:#FDBC9D;}
        .line_h(40rem/@base);
        margin-top:20rem/@base;
      }

    }
    /*去登陆*/
    .goLogin{
      .header,.header .icon{  padding:10rem/@base 0;font-size:16rem/@base;color:#333;}
      .content{  text-align:center;img{width:100rem/@base;height:100rem/@base;}
        /*输入框*/
        .input{padding:5rem/@base 10rem/@base;margin-top:50rem/@base;border-bottom:1px solid #E0BFA2;
            input{border:none;width:100%;}
            span{white-space:nowrap;}
            /*闭眼睁眼*/
            .icon{font-size:20rem/@base;lien-height:10rem/@base;margin-right:5rem/@base;color:#666;}
        }
        .loginBtn{width:100%;border:none;height:40rem/@base;line-height:40rem/@base;border-radius:40rem/@base;margin-top:40rem/@base;}
        .face{margin-top:15rem/@base;}
        .zfb{  position:fixed;bottom:20rem/@base;padding:0 10rem/@base;
          height:30rem/@base;
          height:30rem/@base;
          background:#F4F4F4;
          left:50%;
          transform:translateX(-50%);
          border-radius:15rem/@base;
          .icon{font-size:20rem/@base;line-height:20rem/@base;margin-right:10rem/@base;color:#0997FA;}
          span{color:#666;}
        }
      }

    }
    .goLogin,.goRegist{background:#fff;padding:0 15rem/@base;position:fixed;top:0;bottom:0;width:100%;box-sizing:border-box;}
    /*弹出框*/
    .bg{position:fixed;top:0;left:0;right:0;bottom:0;z-index:10;background:rgba(0,0,0,0.5)}
    .modelChange{
        position:fixed;
        padding:0 10rem/@base;
        padding-bottom:10rem/@base;
        left:50%;
        transform:translateX(-50%);
        width:100%;
        bottom:0;
        z-index:11;
        text-align:center;
        box-sizing:border-box;
        .top,.bottom{border-radius:10rem/@base;background:#fff;
        p{height:40rem/@base;line-height:40rem/@base;color:#137AE6;font-size:16rem/@base;}
        .line{border-top:1px solid #e3e3e3;border-bottom:1px solid #e3e3e3;}}
        .bottom{margin-top:10rem/@base;font-weight:bold;}
    }
</style>
