var banner1=document.getElementById('banner1');
banner1.style.height=window.innerHeight+'px';


var $input_1=$('#banner1 #con_1 section div:nth-of-type(1) input');
var $span_1=$('#banner1 #con_1 section div:nth-of-type(2) span')
var $p_1=$('#banner1 #con_1 section div:nth-of-type(2) p')

$input_1.get(0).onblur = function(){
        var val = $input_1.get(0).value;
        var re = /^1[3,4,5,7,8]\d{9}$/;
        if( re.test(val) ){
            $p_1.get(0).innerHTML='';
             $p_6.get(0).onclick=function(){
             var val= $input_1.get(0).value.trim();
             var xhr=new XMLHttpRequest();
            xhr.onreadystatechange =function(){
            if(xhr.readyState==4 && xhr.status==200){
                $span_1.get(0).style.display='block';
                $p_1.get(0).innerHTML= xhr.responseText;
            }
            }
            xhr.open('GET','http://localhost/ajax.php?username='+val,true);
            xhr.send(null);
            }
          }
        else if(val==''){
             $span_1.get(0).style.display='block';
            $p_1.get(0).innerHTML='手机用来登录，不能为空';
            $input_1.get(0).style.border='1px solid #f60'
        }
        else{
             $span_1.get(0).style.display='block';
           $p_1.get(0).innerHTML='手机格式错误';
            $input_1.get(0).style.border='1px solid #f60';
        }

    };
$input_1.get(0).onfocus = function(){
        this.style.border='';
        $span_1.get(0).style.display='none'
        $p_1.get(0).innerHTML='';
}
var $input_2=$('#banner1 #con_1 section div:nth-of-type(3) input');
var $span_2=$('#banner1 #con_1 section div:nth-of-type(4) span')
var $p_2=$('#banner1 #con_1 section div:nth-of-type(4) p')

 $input_2.get(0).onblur = function(){
        var val = $input_2.get(0).value;
        var re = /^CLRW$/;
        if( re.test(val) ){
            $p_1.get(0).innerHTML='';
        }
        else if(val==''){
            $span_2.get(0).style.display='block';
            $p_2.get(0).innerHTML='验证码不能为空';
            $input_2.get(0).style.border='1px solid #f60'
        }
        else{
             $span_2.get(0).style.display='block';
             $p_2.get(0).innerHTML='填写正确的验证码';
             $input_2.get(0).style.border='1px solid #f60';
        }
    };
$input_2.get(0).onfocus = function(){
        this.style.border='';
        $span_2.get(0).style.display='none'
        $p_2.get(0).innerHTML='';
}

var $input_3=$('#banner1 #con_1 section div:nth-of-type(5) input');
var $span_3=$('#banner1 #con_1 section div:nth-of-type(6) span')
var $p_3=$('#banner1 #con_1 section div:nth-of-type(6) p')

 $input_3.get(0).onblur = function(){
        var val = $input_3.get(0).value;
        var re = /^\d{4}$/;
        if( re.test(val) ){
            $p_3.get(0).innerHTML='';
        }
        else if(val==''){
             $span_3.get(0).style.display='block';
            $p_3.get(0).innerHTML='验证码不能为空';
            $input_3.get(0).style.border='1px solid #f60'
        }
        else{
             $span_3.get(0).style.display='block';
           $p_3.get(0).innerHTML='短信验证码错误';
            $input_3.get(0).style.border='1px solid #f60';
        }
    };
$input_3.get(0).onfocus = function(){
        this.style.border='';
        $span_3.get(0).style.display='none'
        $p_3.get(0).innerHTML='';
}
var $input_4=$('#banner1 #con_1 section div:nth-of-type(7) input');
var $span_4=$('#banner1 #con_1 section div:nth-of-type(8) span')
var $p_4=$('#banner1 #con_1 section div:nth-of-type(8) p')

 $input_4.get(0).onblur = function(){
        var val = $input_4.get(0).value;
        var re = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
        if( re.test(val) ){
            $p_4.get(0).innerHTML='';
        }
        else if(val==''){
             $span_4.get(0).style.display='block';
            $p_4.get(0).innerHTML='密码不能为空';
            $input_4.get(0).style.border='1px solid #f60'
        }
        else{
             $span_4.get(0).style.display='block';
           $p_4.get(0).innerHTML='请使用字母、数字组合的密码';
            $input_4.get(0).style.border='1px solid #f60';
        }
    };
$input_4.get(0).onfocus = function(){
        this.style.border='';
        $span_4.get(0).style.display='none'
        $p_4.get(0).innerHTML='';
}

var $input_5=$('#banner1 #con_1 section div:nth-of-type(9) input');
var $span_5=$('#banner1 #con_1 section div:nth-of-type(10) span')
var $p_5=$('#banner1 #con_1 section div:nth-of-type(10) p')

 $input_5.get(0).onblur = function(){
        var val1=$input_4.get(0).value;
        var val = $input_5.get(0).value;
        if( val==val1 && val1!==''){
            $p_5.get(0).innerHTML='';
        }
        else if(val==''){
             $span_5.get(0).style.display='block';
             $p_5.get(0).innerHTML='确认密码不能为空';
             $input_5.get(0).style.border='1px solid #f60'
        }
        else{
             $span_5.get(0).style.display='block';
           $p_5.get(0).innerHTML='确认密码不一致';
            $input_5.get(0).style.border='1px solid #f60';
        }
    };
$input_5.get(0).onfocus = function(){
        this.style.border='';
        $span_5.get(0).style.display='none'
        $p_5.get(0).innerHTML='';
}
var $input_6=$('#banner1 #con_1 section>input');
var $p_6=$('#banner1 #con_1 section>p:last-of-type');
$p_6.get(0).onclick=function(){
    if( $input_1.get(0).value==''){
        $span_1.get(0).style.display='block';
        $p_1.get(0).innerHTML='手机用来登录，不能为空';
        $input_1.get(0).style.border='1px solid #f60'
    }
    if( $input_2.get(0).value==''){
        $span_2.get(0).style.display='block';
        $p_2.get(0).innerHTML='验证码不能为空';
        $input_2.get(0).style.border='1px solid #f60'
    }
    if( $input_3.get(0).value==''){
        $span_3.get(0).style.display='block';
        $p_3.get(0).innerHTML='短信验证码不能为空';
        $input_3.get(0).style.border='1px solid #f60'
    }
    if( $input_4.get(0).value==''){
        $span_4.get(0).style.display='block';
        $p_4.get(0).innerHTML='密码不能为空';
        $input_4.get(0).style.border='1px solid #f60'
    }
    if( $input_5.get(0).value==''){
        $span_5.get(0).style.display='block';
        $p_5.get(0).innerHTML='确认密码不能为空';
        $input_5.get(0).style.border='1px solid #f60'
    }
    if($input_6.get(0).checked==false){

        var login = document.createElement('aside');
        login.style.top=0+'px';
        login.innerHTML = '<p>请同意麦考林用户服务协议</p><p>确认</p><div id="close">X</div>';
        login.id = 'login';
        document.body.appendChild(login);
        login.style.left = (window.innerWidth - login.offsetWidth)/2 + 'px';
        login.style.top = (window.innerHeight - login.offsetHeight)/2 + 'px';
        var mark = document.createElement('section');
        mark.id = 'mark';
        mark.style.width = window.innerWidth + 'px';
        mark.style.height = Math.max(window.innerHeight,document.body.scrollHeight) + 'px';
        document.body.appendChild(mark);

        var close = document.getElementById('close');

        close.onclick = function(){
            document.body.removeChild(login);
            document.body.removeChild(mark);
        };

        var close1 = login.getElementsByTagName('p')[1];

        close1.onclick = function(){
            document.body.removeChild(login);
            document.body.removeChild(mark);
        };

    };

}

