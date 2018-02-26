var banner2=document.getElementById('banner2');
banner2.style.height=window.innerHeight+'px';

$input1_1=$('#banner2 #con_2 section div:nth-of-type(1) input');
$input1_2=$('#banner2 #con_2 section div:nth-of-type(2) input');
$input1_3=$('#banner2 #con_2 section div:nth-of-type(3) input');
$span1_1=$('#banner2 #con_2 section div:nth-of-type(4) span')
$p1_1=$('#banner2 #con_2 section div:nth-of-type(4) p')
$p1_2=$('#banner2 #con_2 section>p:last-of-type')
 $p1_2.get(0).onclick= function(){
        var val = $input1_1.get(0).value;
        var val1 = $input1_2.get(0).value;
        var val2 = $input1_3.get(0).value;
        var re = /^1[3,4,5,7,8]\d{9}$/;
        if( re.test(val) && val1==''){
            $p1_1.get(0).innerHTML='请填写密码';
             $span1_1.get(0).style.display='block';
        }
        else if(val1!==''&& val2==''){
             $p1_1.get(0).innerHTML='请输入验证码';
        }
        else if(val!==''&& val1!=='' && val2=='clrw'){
             $p1_1.get(0).innerHTML='账号或邮箱或手机号未填写或格式不正确';
            }
        else if(val==''){
            $span1_1.get(0).style.display='block';
            $p1_1.get(0).innerHTML='账号或邮箱或手机号未填写或格式不正确';
            $input1_1.get(0).style.border='1px solid #f60'
        }
        else{
            $span1_1.get(0).style.display='block';
           $p1_1.get(0).innerHTML='手机格式错误';
          $input1_1.get(0).style.border='1px solid #f60';
        }
    };
$input1_1.get(0).onfocus = function(){
        this.style.border='';
}
$input1_1.get(0).onblur=function(){
     var val = $input1_1.get(0).value;
     if(val==''){
            $input1_1.get(0).style.border='1px solid #f60'
        }
}
$input1_2.get(0).onblur=function(){
     var val = $input1_2.get(0).value;
     if(val==''){
            $input1_2.get(0).style.border='1px solid #f60'
        }
}
$input1_2.get(0).onfocus = function(){
        this.style.border='';
}
$input1_3.get(0).onblur=function(){
     var val = $input1_3.get(0).value;
     if(val==''){
            $input1_3.get(0).style.border='1px solid #f60'
        }
}
$input1_3.get(0).onfocus = function(){
        this.style.border='';
}



 $p1_2.get(0).onclick=function(){

        var val= $input1_1.get(0).value.trim();

        var xhr=new XMLHttpRequest();

        xhr.onreadystatechange =function(){

            if(xhr.readyState==4 && xhr.status==200){
                $span1_1.get(0).style.display= 'block';
                $p1_1.get(0).innerHTML= xhr.responseText;

        }
 }
        xhr.open('GET','http://localhost/ajax1.php?username='+val,true);
        xhr.send(null);
    }