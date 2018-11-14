$(document).ready(() => {

  function hideAll() {
    $('.beetlejuice').hide();
    $('.batman').hide();
    $('.scissorhands').hide();
    $('.nightmare').hide();
  }

  hideAll();

  $('.album-cover').click(function() {

    hideAll();

    switch ($(this).attr("id")) {
      case "beetlejuice-cover":
        $('#display-img').attr('src', 'images/beetlejuice-cover.jpg');
        $('#attribution').hide();
        $('audio').each(function() {
          this.pause();
          this.currentTime = 0;
        });
        $('.beetlejuice').show();
        $('#text').slideUp(400);
        $('#learn-more').slideDown();
        break;
      case "batman-cover":
        $('#display-img').attr('src', 'images/batman-cover.jpg');
        $('#attribution').hide();
        $('audio').each(function() {
          this.pause();
          this.currentTime = 0;
        });
        $('.batman').show();
        $('#text').slideUp();
        $('#learn-more').slideDown();
        break;
      case "scissorhands-cover":
        $('#display-img').attr('src', 'images/edward-scissorhands-cover.jpg');
        $('#attribution').hide();
        $('audio').each(function() {
          this.pause();
          this.currentTime = 0;
        });
        $('.scissorhands').show();
        $('#text').slideUp();
        $('#learn-more').slideDown();
        break;
      case "nightmare-cover":
        $('#display-img').attr('src', 'images/the-nightmare-before-christmas-cover.jpg');
        $('#attribution').hide();
        $('audio').each(function() {
          this.pause();
          this.currentTime = 0;
        });
        $('.nightmare').show();
        $('#text').slideUp();
        $('#learn-more').slideDown();
        break;
    }
  });

  $('#learn-more').click(function() {
    $('#text').slideDown(400);
    $('audio').each(function() {
      this.pause();
      this.currentTime = 0;
    });
    hideAll();
    $('#display-img').attr('src', 'images/danny-elfman.jpg');
    $('#attribution').show();
    $('#learn-more').hide();
  });


});

/*$('#beetlejuice-cover').on('click', () => {
  $('#display-img').attr('src', 'images/beetlejuice-cover.jpg');
  $('#name').children().hide();
  $('#player').children().hide();
  $('audio').each(function() {
      this.pause();
      this.currentTime = 0;
  });
  $('.beetlejuice').show();
});

$('#batman-cover').on('click', () => {
  $('#display-img').attr('src', 'images/batman-cover.jpg');
  $('#name').children().hide();
  $('#player').children().hide();
  $('audio').each(function() {
    this.pause();
    this.currentTime = 0;
  });
  $('.batman').show();
});

$('#scissorhands-cover').on('click', () => {
  $('#display-img').attr('src', 'images/edward-scissorhands-cover.jpg');
  $('#name').children().hide();
  $('#player').children().hide();
  $('audio').each(function() {
    this.pause();
    this.currentTime = 0;
  });
  $('.scissorhands').show();
});

$('#nightmare-cover').on('click', () => {
  $('#display-img').attr('src', 'images/the-nightmare-before-christmas-cover.jpg');
  $('#name').children().hide();
  $('#player').children().hide();
  $('audio').each(function() {
    this.pause();
    this.currentTime = 0;
  });
  $('.nightmare').show();
});*/
