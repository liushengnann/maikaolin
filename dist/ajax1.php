<?php
  header("Access-Control-Allow-Origin: *");

  header('content-type:text/html; charset=utf-8');
  $con=mysqli_connect('localhost', 'root','', 'h51707');

  mysqli_query($con,'set names utf8');
  $username=$_GET['username'];
  $sql=" select * from list where username='$username' ";
  $query = mysqli_query($con,$sql);
  if($query && mysqli_num_rows($query)){
    echo '可以登录';
  }
  else{
    echo '请先注册';
  }
?>