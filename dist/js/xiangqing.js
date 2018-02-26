var $right_2= $('.right_2');
for (var i = 1; i < 7; i++) {
    $right_2.get(0).innerHTML+='\
            <ul>\
            <li>\
                <img src="../images/xiangqing/1.png"/>\
            </li>\
            <li>维您氢之源珊瑚海藻复合胶囊</p>\
            <li>￥720</li>\
      </ul>'

};

var nav=document.getElementsByClassName('nav_1')[0];
var lis=nav.getElementsByTagName('li');
var left=document.getElementsByClassName('left_1')[0];
var div=left.getElementsByTagName('div');
var topp=document.getElementsByClassName('topp')[0];
topp.style.cssText='background:#b2b2b2;color:#fff';
for (var i = 0; i < lis.length; i++) {
    lis[i].index=i;

    lis[i].onmouseover=function(){

      for (var i = 0; i < lis.length; i++) {
        lis[i].style.cssText='';
        if(this.index==0){
                div[i].style.display='block';

                   }
        else{div[i].style.display='none';}

        }
           div[this.index].style.display= 'block';
            lis[this.index].style.cssText='background:#b2b2b2;color:#fff';
    }

};
$div1_p=$('#con_3 section:nth-of-type(1) p:nth-of-type(1)')
$div1_span = $('#con_3 section:nth-of-type(1) p span')
var div2 = document.getElementById('div2');
var div2_img = div2.getElementsByTagName('img')[0];
var iwidth=$div1_span.get(0).offsetWidth/2;
var iheight=$div1_span.get(0).offsetHeight/2;
$div1_p.get(0).onmouseover = function(){
    $div1_span.get(0).style.opacity = '1';
    div2.style.display = 'block';
};
$div1_p.get(0).onmouseout = function(){
    $div1_span.get(0).style.opacity = '0';
    div2.style.display = 'none';
};
document.onmousemove=function(ev){
    var x = ev.pageX;
    var y = ev.pageY;
    var L = x -$div1_p.get(0).offsetLeft-iwidth
    var T = y -$div1_p.get(0).offsetTop-iheight;
    if(L<=0){
        L=0
    }
    if(L>=$div1_p.get(0).offsetWidth-$div1_span.get(0).offsetWidth){
        L=$div1_p.get(0).offsetWidth-$div1_span.get(0).offsetWidth
    }
    if(T<=0){
        T=0
    }
    if(T>=$div1_p.get(0).offsetHeight-$div1_span.get(0).offsetHeight){
        T=$div1_p.get(0).offsetHeight-$div1_span.get(0).offsetHeight
    }
    $div1_span.get(0).style.left=  L+'px';
    $div1_span.get(0).style.top=  T+'px';
    var scaleX = L / ($div1_p.get(0).offsetWidth - $div1_span.get(0).offsetWidth);
    var scaleY = T / ($div1_p.get(0).offsetHeight - $div1_span.get(0).offsetHeight);

    div2_img.style.left = - scaleX * (div2_img.offsetWidth - div2.offsetWidth) + 'px';
    div2_img.style.top = - scaleY * (div2_img.offsetHeight - div2.offsetHeight) + 'px';
}