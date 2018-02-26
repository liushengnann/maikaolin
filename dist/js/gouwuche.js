var $sec=$('#con_11 section:nth-of-type(1)');
for(var i=0;i<2;i++){
    $sec.append('<ul class="center">\
        <li class="l">\
         <input type="checkbox"/>\
        </li>\
        <li class="l">\
           <p class="l"><img src="../images/xiangqing/7957_thumb_G_1469482697514.jpg"></p>\
           <p class="l">LA CELLER 胶原蛋白精华线球超值分享装\
             <span>商品编号：V15C0190-001</span>\
            </p>\
        </li >\
        <li class="l">￥380</li>\
        <li class="l">\
            <span class="l">-</span>\
            <span class="l">1</span>\
            <span class="l">+</span>\
        </li>\
        <li class="l">￥380</li>\
        <li class="l">X 删除</li>\
    </ul>');
}
var $deleteUl=$('#con_11 section:nth-of-type(1) .center');
for(var i=0;i<$deleteUl.length;i++){
}
var $addNum=$('#con_11 section:nth-of-type(1) .center li:nth-of-type(5)');
var $addNum1=$('#con_11 section:nth-of-type(1) .center li:nth-of-type(3)');
var $addspan2=$('#con_11 section:nth-of-type(1) .center li:nth-of-type(4) span:nth-of-type(2)');

var $addspan1=$('#con_11 section:nth-of-type(1) .center li:nth-of-type(4) span:nth-of-type(1)');

var $addspan3=$('#con_11 section:nth-of-type(1) .center li:nth-of-type(4) span:nth-of-type(3)');
var $addHenum=$('#con_11 .bottom  li:nth-of-type(4) b:nth-of-type(1)');
var $addHe=$('#con_11 .bottom  li:nth-of-type(4) b:nth-of-type(2)');
var $inputs=$('#con_11 section:nth-of-type(1) .center li:nth-of-type(1) input')
$addHenum.html($addspan2.html());
$addHe.html($addNum.html());
var $num=0;
for(var i=0;i<$deleteUl.length;i++){

$addspan3.eq(i).on('click',function(){
    $num = parseInt($(this).prev().html())
    $num++;
    //$addspan2.eq(0).html($num);
    $(this).prev().html($num);
    $addHenum.html($num);
    $(this).parent().next().html('￥'+ $num*($(this).parent().prev().html().slice(1)));
    //$addNum.eq(0).html('￥'+ $num*($addNum1.html().slice(1)));
   $addHe.eq(0).html('￥'+ $num*($addNum1.html().slice(1)));
})
$addspan1.eq(i).on('click',function(){
    $num = parseInt($(this).next().html())
    $num-- ;
    if($num<1){
        $num=1;
    }else{
        //$addHenum.html($num);
       // $addspan2.html($num);
        $(this).next().html($num);
    }
       $(this).parent().next().html('￥'+ $num*($(this).parent().prev().html().slice(1)));
       // $addNum.html('￥'+ $num*($addNum1.html().slice(1)));
       $addHe.html('￥'+ $num*($addNum1.html().slice(1)));

})

var $btn=$('#con_11 .bottom  li:nth-of-type(1) input');
var $btn1=$('#con_11 .top  li:nth-of-type(1) input')
$btn.on('click',function(){
    if($(this).get(0).checked){
      for(var i=0;i<$inputs.length;i++){
           $inputs.get(i).checked = true;
            $btn1.get(0).checked=true;
             }
    }
     else{
              for(var i=0;i<$inputs.length;i++){
                     $inputs.get(i).checked = false;
                      $btn1.get(0).checked=false;
                 }
          }
})
$btn1.on('click',function(){
    if($(this).get(0).checked){
      for(var i=0;i<$inputs.length;i++){
           $inputs.get(i).checked = true;
            $btn.get(0).checked=true;
             }
    }
     else{
              for(var i=0;i<$inputs.length;i++){
                     $inputs.get(i).checked = false;
                      $btn.get(0).checked=false;
                 }
          }
})
// btn.onclick = function(){

//             if(btn.checked){
//                 for(var i=0;i<cbs.length;i++){
//                     cbs[i].checked = true;
//                 }
//             }
//             else{
//                 for(var i=0;i<cbs.length;i++){
//                     cbs[i].checked = false;
//                 }
//             }

//         };



















var $deleteLi=$('#con_11 section:nth-of-type(1) .center li:last-of-type');
$deleteLi.eq(i).on('click',function(){
       /* $('body').append('<div id="login">\
        <p>请同意麦考林用户服务协议</p><p>quedin</p><div id="close">X</div>\
        </div>');
        $login=('#login')
        $login.css('left','$(window).width()-$login.offset().left');
        $login.get(0).style.top = (window.innerHeight - $login.get(0).offsetHeight)/2 + 'px';
        $('body').append('<div id="mark"></div>')
        $mark=('#mark');
        $mark.get(0).style.width = window.innerWidth + 'px';
        $mark.get(0).style.height = Math.max(window.innerHeight,document.body.scrollHeight) + 'px';
        $close=$('#close');
        $close.on('click',function(){
            $login.remove();
             $mark.remove();
        })*/
        // var close = document.getElementById('close');

        // close.onclick = function(){
        //     document.body.removeChild(login);
        //     document.body.removeChild(mark);
        // };
        var login = document.createElement('div');
        login.innerHTML = '<p>请同意麦考林用户服务协议</p><p id="close2">确定要删除此商品吗？</p><div id="close">X</div>';
        login.id = 'login';
        document.body.appendChild(login);
        login.style.left = (window.innerWidth - login.offsetWidth)/2 + 'px';
        login.style.top = (window.innerHeight - login.offsetHeight)/2 + 'px';

        var mark = document.createElement('div');
        mark.id = 'mark';
        mark.style.width = window.innerWidth + 'px';
        mark.style.height = Math.max(window.innerHeight,document.body.scrollHeight) + 'px';
        document.body.appendChild(mark);

        var close = document.getElementById('close');
        var close2 = document.getElementById('close2');
        close.onclick = function(){
            document.body.removeChild(login);
            document.body.removeChild(mark);
        };
         close2.onclick = function(){
            document.body.removeChild(login);
            document.body.removeChild(mark);
            $(this).parent().remove();
        }.bind(this);
})
}
