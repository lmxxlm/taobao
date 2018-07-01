import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index'  
import WT from 'components/wt/wt'
import Mes from 'components/mes/mes'
import GoodsCar from 'components/goodsCar/goodsCar'
import Mine from 'components/mine/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'home',
      redirect: 'Home'  //这面的默认第一个进来的  
    },
    {
      path: '/home',
      component:Home //即使重定向了下面也要再写一个
    },
    {
    	path: '/wt',
    	name:'wt',
    	component:WT
    },
    {
    	path: '/mes',
    	component:Mes
    },
    {
    	path: '/goodsCar',
    	component:GoodsCar
    },
    {
    	path: '/mine',
    	component:Mine
    }
  ]
})
