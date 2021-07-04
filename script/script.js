$( document ).ready(function() {

  const images = [
    "images/header/header2.jpg",
    "images/header/header1.jpg",
    "images/header/header3.jpg",
  ];

  let imageIndex = 0;

  $("#prev").on("click", function(){
    imageIndex = (imageIndex + images.length -1) % (images.length);
    $('#image').fadeOut(200, function() {
      $("#image").attr('src', images[imageIndex]).fadeIn(200);
    });


  });

  $("#next").on("click", function(){
    imageIndex = (imageIndex+1) % (images.length);
    $('#image').fadeOut(200, function() {
      $("#image").attr('src', images[imageIndex]).fadeIn(200);
    });
  });

  $("#image").attr(images[0]);

  $("#menu").on("click","a", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - 20}, 500);
  });

});


