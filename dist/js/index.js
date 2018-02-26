var les=document.getElementById('les');
les.style.height=window.innerHeight+'px';

var $navT=$('#les .les .navT');
var $rigLi=$('#rigs .rigs li:nth-of-type(4)');
var $lesLi=$('#les .les li:nth-of-type(3)');
window.onscroll = function(){
        if( document.documentElement.scrollTop > 100 ){
            $rigLi.get(0).style.cssText = 'opacity:1;background:#f0f0f0;transition:1s';
        }
        else{
            $rigLi.get(0).style.opacity = '0';
        }
};
    $rigLi.get(0).onclick=function(){
        document.documentElement.scrollTop = 0;
    }
$navT.on('mouseover',function(){
        $lesLi.css('background','#d10048');
        return false;
})
$lesLi.on('mouseover',function(){
        $lesLi.css('background','#db366f')
})
$lesLi.on('mouseout',function(){
        $lesLi.css('background','#d10048')
})
    var banner = document.getElementById('banner');
    var list = document.getElementById('list');
    var listLi = list.getElementsByTagName('li');
    var btn = document.getElementById('btn');
    var btnLi = btn.getElementsByTagName('li');
    var span=banner.getElementsByTagName('span');
    var num = 0;
    var timer;
    for(var i=0;i<btnLi.length;i++){

        btnLi[i].index = i;

        btnLi[i].onclick = function(){
            for(var i=0;i<btnLi.length;i++){
                btnLi[i].className = '';
            }
            this.className = 'active';
            list.style.top =  this.index * 354 + 'px';
            num = this.index;
        };
    }

  banner.onmouseover = function(){
        clearInterval(timer);
         for (var i = 0; i < span.length; i++) {
            span[i].style.display='block'
        };
    };
    banner.onmouseout = function(){
        timer = setInterval(run,2000);
        for (var i = 0; i < span.length; i++) {
            span[i].style.display='none'
        };
    };

    timer = setInterval(run,2000);

    function run(){
        for(var i=0;i<btnLi.length;i++){
            btnLi[i].className = '';
        }
        if(num == btnLi.length-1){
            num = 0;
        }
        else{
            num++;
        }
        btnLi[num].className = 'active';
        list.style.top =  num * 354 + 'px';

    }
 for (var i = 0; i < span.length; i++) {

  span[i].onmouseover = function(){
     this.style.background='#e1472f';

   }
    span[i].onmouseout = function(){
     this.style.background='';

   }
    var num1=1;
    span[i].onclick=function(){
          for(var i=0;i<listLi.length;i++){
            listLi[i].className= '';
            btnLi[i].className= '';
        }
        btnLi[num1].className='active';
        list.style.top = num1* 354+'px';
        if(num1 == listLi.length - 1){
            num1= 0;
        }
        else{
            num1++;
        }
    }
 }



/*var $li=$('#con_10 ul:nth-of-type(1) li:nth-of-type(2)');
$li.on('click',function(){
    $div=$('<div id="box" class="wode">\
                <aside>\
                <img src="../images/index/58.jpg">\
                <span>X</span>\
                </aside>\
                <aside><a href="#">LA CELLER 胶原蛋白精华线球超值分享装</a></aside>\
                <aside><a href="#">神奇的胶原蛋白线球，具有三重螺旋分子结构，溶于水并被吸收，不受温度影响，使肌肤滋润、光泽、有弹性！</a></aside>\
                <aside><a class="r" href="#">查看详情<<</a><span class="r"></span></aside>\
                <aside>\
                <img src="../images/index/55918.png"/>\
                </aside>\
            </div>')
    $li.append($div)
    var list = document.querySelector('#con_10 ul:nth-of-type(1) li:nth-of-type(2)');
    var box = $li.get(0).getElementsByTagName('div')[0];
    var span = $li.get(0).getElementsByClassName('wode')[0];
    span.onclick = function(ev){
        list.removeChild(box);
        ev.stopPropagation();

    }

})*/

var $li=$('#con_10 ul:nth-of-type(1) li');
var $aside1=$('#con_10 ul:nth-of-type(1) li:nth-of-type(2) aside:nth-of-type(1)');
var $aside2=$('#con_10 ul:nth-of-type(1) li:nth-of-type(2) aside:nth-of-type(2)');
var $span_1=$('#con_10 ul:nth-of-type(1) li:nth-of-type(2) aside:nth-of-type(1) span');
var number1=0;
$li.get(1).onclick=function(){
    $span_1.get(0).style.opacity='1';
    $aside1.get(0).style.opacity='1';
    $aside1.get(0).style.width='316px';
    $aside1.get(0).style.height='194px';
        var mark1 = document.createElement('div');
        mark1.id = 'mark1';
        mark1.style.width = window.innerWidth + 'px';
        mark1.style.height = Math.max(window.innerHeight,document.body.scrollHeight) + 'px';
        document.body.appendChild(mark1);

       // number1++;
      /*  if(number1==2){
             document.body.removeChild(mark);
        }*/
    setTimeout(function(){
                    $aside2.get(0).style.height = '337px';
                    $aside2.get(0).style.opacity='1';
                },500)

$span_1.get(0).onclick=function(ev){
      $aside2.get(0).style.height = '0px';
      $aside2.get(0).style.opacity='0';
      document.body.removeChild(mark1);
       setTimeout(function(){
                  $aside1.get(0).style.width= '0px';
                    $aside1.get(0).style.height= '0px';
                    $span_1.get(0).style.opacity='0';
                    },500)
                 ev.stopPropagation();
}
}
var $aside3=$('#con_10 ul:nth-of-type(1) li:nth-of-type(3) aside:nth-of-type(1)');
var $aside4=$('#con_10 ul:nth-of-type(1) li:nth-of-type(3) aside:nth-of-type(2)');
var $span_2=$('#con_10 ul:nth-of-type(1) li:nth-of-type(3) aside:nth-of-type(1) span');
$li.get(2).onclick=function(){
    $span_2.get(0).style.opacity='1';
    $aside3.get(0).style.opacity='1';
    $aside3.get(0).style.width='316px';
    $aside3.get(0).style.height='194px';
    var mark1 = document.createElement('div');
        mark1.id = 'mark1';
        mark1.style.width = window.innerWidth + 'px';
        mark1.style.height = Math.max(window.innerHeight,document.body.scrollHeight) + 'px';
        document.body.appendChild(mark1);

    setTimeout(function(){
                    $aside4.get(0).style.height = '337px';
                    $aside4.get(0).style.opacity='1';
                },500)
}
$span_2.get(0).onclick=function(ev){
      $aside4.get(0).style.height = '0px';
      $aside4.get(0).style.opacity='0'
      document.body.removeChild(mark1);
       setTimeout(function(){
                  $aside3.get(0).style.width= '0px';
                    $aside3.get(0).style.height= '0px';
                    $span_2.get(0).style.opacity='0';
                    },500)
                 ev.stopPropagation();
}
// var box1 = document.getElementById('box1');
//             var box2 = document.getElementById('box2');
//             var p = box2.getElementsByTagName('p');
//             box1.onclick = function(){
//                 p[0].style.width= '300px';
//                 p[0].style.height= '100px';
//                 setTimeout(function(){
//                     p[1].style.height = '300px';
//                 },500)
//             }
//             p[0].onclick = function(ev){
//                 p[1].style.height = '0px';
//                 setTimeout(function(){
//                     p[0].style.width= '0px';
//                     p[0].style.height= '0px';
//                 },500)
//                 ev.stopPropagation();
//             }