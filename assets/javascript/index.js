$(document).ready(function(){
    
   
  //SLIDES
  $(".center").slick({
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 1700,
    arrows: false,
     responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]

  });

  //FIN SLIDES

  $("#btn1").click(function(){
    $("#panel1").animate({
        height: 'show'
    });
    $("#panel2").animate({
        height: 'hide'
    });
    $("#panel3").animate({
        height: 'hide'
    });
    $("#panel4").animate({
        height: 'hide'
    });
    $("#panel5").animate({
        height: 'hide'
    });
  });

  $("#btn2").click(function(){
    $("#panel1").animate({
      height: 'hide'
    });
    $("#panel2").animate({
        height: 'show'
    });
    $("#panel3").animate({
        height: 'hide'
    });
    $("#panel4").animate({
        height: 'hide'
    });
    $("#panel5").animate({
        height: 'hide'
    });
  });

  $("#btn3").click(function(){
    $("#panel1").animate({
      height: 'hide'
    });
    $("#panel2").animate({
        height: 'hide'
    });
    $("#panel3").animate({
        height: 'show'
    });
    $("#panel4").animate({
        height: 'hide'
    });
    $("#panel5").animate({
        height: 'hide'
    });
  });

  $("#btn4").click(function(){
    $("#panel1").animate({
      height: 'hide'
    });
    $("#panel2").animate({
        height: 'hide'
    });
    $("#panel3").animate({
        height: 'hide'
    });
    $("#panel4").animate({
        height: 'show'
    });
    $("#panel5").animate({
        height: 'hide'
    });
  });

  $("#btn5").click(function(){
    $("#panel1").animate({
      height: 'hide'
    });
    $("#panel2").animate({
        height: 'hide'
    });
    $("#panel3").animate({
        height: 'hide'
    });
    $("#panel4").animate({
        height: 'hide'
    });
    $("#panel5").animate({
        height: 'show'
    });
  });

  $(".first-image").css("width", "$( window ).width()");

  function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test( $email );
  }
  $("#contactBtn").click(function(){
    var txtA = $('#contactTxtArea').val();
    var email = $('#email').val();
    var name = $('#name').val();
    if( !validateEmail(email)) {alert("Email incorrect")}
      else{alert("Sended")}
  });
  // Nav Bar
  $(function() {
    $('#scroll1').click(function() {
      var pos = $('#scrolled1').offset().top;
      $('html, body').animate({'scrollTop' : pos},'2000');
      return false;
    });
    $('#scroll2').click(function() {
        var pos = $('#scrolled2').offset().top;
        $('html, body').animate({'scrollTop' : pos},'1000');
          return false;
    });
    $('#scroll3').click(function() {
      var pos = $('#scrolled3').offset().top;
      $('html, body').animate({'scrollTop' : pos},'2000');
        return false;
    });
    $('#scroll4').click(function() {
      var pos = $('#scrolled4').offset().top;
      $('html, body').animate({'scrollTop' : pos},'10000');
        return false;
    });
  });
  if ($(window).width() < 960) {
    window.location = "./jQueryMobileProject/index.html";
  }

});
