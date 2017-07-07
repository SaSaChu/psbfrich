/**
 * @author      ZEUS Design - http://www.zeusdesign.com.tw
 * @copyright   Copyright (c) 2016 ZEUS Design
 */

$(function () {
  // 圖片縮放
  $(".banner_boxs").imgLiquid ();


  // 漢堡變換 + menu滑出
  $(document).ready(function() {
    $('#nav-icon3').click(function(){
      $(this).toggleClass('open');

      $('#r_menu_boxs').toggleClass('s_menu');
      $('#menu_back').toggleClass('s_menu_b');
    });
  });


  $('.se_menu').click(function() {
    $(this).toggleClass('s_open');
    $('.se_div_box').toggleClass('show_div');

    $('.se_menu').eq (0).click();
  });



});