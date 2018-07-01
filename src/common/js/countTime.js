export  function countTime(endtime) {
   var countDown = ''
   //获取当前时间
   var date = new Date();
   var now = date.getTime();
   //设置截止时间
   var endDate = new Date(endtime);
   endDate = endDate.getFullYear() > 0 ? endDate : new Date(Date.parse(endtime.replace(/-/g, "/")));
   //var endDate = new Date(time);
   var end = endDate.getTime();

   //时间差
   var leftTime = end - now;
   //定义变量 d,h,m,s保存倒计时的时间
   var d, h, m, s;
   if (leftTime >= 0) {
      d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
      d = addZero(d);
      h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
      h = addZero(h);
      m = Math.floor(leftTime / 1000 / 60 % 60);
      m = addZero(m);
      s = Math.floor(leftTime / 1000 % 60);
      s = addZero(s);
      //setTimeout(countTime,1000);
      //d<1?(countDown=h+':'+m+':'+s):(countDown=d+':'+h+':'+m+':'+s);
      countDown = d + ':' + h + ':' + m + ':' + s;
   } else {
     //结束时
      countDown = '00:00:00:00';
  

   }
   return countDown;
};

//补零
function addZero(str) {
   if (str.toString()
      .length < 2) {
      str = '0' + str;
   }
   return str;
};



//多条
export let Alarm = function (endtime, countFunc, endFunc) {
   var date = new Date();
   var startime = date.getTime();
   var endDate = new Date(endtime);
   endDate = endDate.getFullYear() > 0 ? endDate : new Date(Date.parse(endtime.replace(/-/g, "/")));
   endtime = endDate.getTime();
   this.time = Math.floor((endtime - startime) / 1000); //时间
   this.countFunc = countFunc; //计时函数
   this.endFunc = endFunc; //结束函数
   this.flag = 't' + Date.parse(new Date());
};

Alarm.prototype.start = function () {
   var self = this;
   self.flag = setInterval(function () {
      if (self.time < 0) {
         clearInterval(self.flag);
         self.endFunc();
            endTimeTimedTask();
            Reload();
      } else {
         var minute, hour, day, second;
         day = Math.floor(self.time / 60 / 60 / 24) < 10 ? '0' + Math.floor(self.time / 60 / 60 / 24) : Math.floor(self.time / 60 / 60 / 24);
         hour = Math.floor(self.time / 60 / 60 % 24) < 10 ? '0' + Math.floor(self.time / 60 / 60 % 24) : Math.floor(self.time / 60 / 60 % 24);
         minute = Math.floor(self.time / 60 % 60) < 10 ? '0' + Math.floor(self.time / 60 % 60) : Math.floor(self.time / 60 % 60);
         second = Math.floor(self.time % 60) < 10 ? '0' + Math.floor(self.time % 60) : Math.floor(self.time % 60);

         //倒计时执行函数
         self.countFunc(second, minute, hour, day);
         self.time--;
      }
   }, 1000);
}

/*for (var i = 0; i < list.length; i++) {
   list[i].showTime = countTime(list[i].endTime);
   (function (ele) {
      alarm = new Alarm(ele.endTime, function (second, minute, hour, day) { //计时钟
         var timeStr = day + ':' + hour + ':' + minute + ':' + second;
         ele.showTime = timeStr;
      }, function () { //倒计时结束
         ele.showTime = '00:00:00:00'
      });
      alarm.start();
   })(list[i]);
   that.resultList.push(list[i]);
  
}*/
 
//几天以后
export function daysLater(n){
	var dd = new Date();  
    dd.setDate(dd.getDate()+n);//获取AddDayCount天后的日期  
    var y = dd.getFullYear();   
    var m = (dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);//获取当前月份的日期，不足10补0  
    var d = dd.getDate()<10?"0"+dd.getDate():dd.getDate();//获取当前几号，不足10补0  
    return y+"-"+m+"-"+d;  
}