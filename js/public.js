/**
 * @author      ZEUS Design - http://www.zeusdesign.com.tw
 * @copyright   Copyright (c) 2016 ZEUS Design
 */

$(function () {
  // 圖片縮放
  $(".banner_boxs").imgLiquid ();

  // // 右邊menu
  // $('.menu_boxs').click(function() {
  //   $('#nav_box').toggleClass('sn');
  //   $('#cover').toggleClass('show');
  // });

  // 漢堡變換
  $(document).ready(function() {

    $('#nav-icon3').click(function(){
      $(this).toggleClass('open');
    });

  });

});