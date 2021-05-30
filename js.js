$('.close-modal').click(function(e) {
    e.preventDefault();
    $('.video-embed').children('iframe').attr('src', '');
  });