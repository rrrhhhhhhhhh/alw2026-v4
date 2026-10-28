$(document).ready(function(){
  $('.about-trigger').on('click', function(){
    console.log('clicked');
    $('.about').addClass('open');
  })
  $('.about-close').on('click', function(){
    console.log('clicked');
    $('.about').removeClass('open');
  })
  $('.images').on('click', function(){
    var i = $(this).data('i') || 0
    i++
    var count = $(this).find('figure').length
    $(this).find('figure').hide().eq(i % count).show();
    $(this).data('i', i);
  })
});
