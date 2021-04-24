$(function(){
    // Slick slider
    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrow slider-arrow__left" src="img/left-arrow.svg" alt="arrow right">',
        nextArrow: '<img class="slider-arrow slider-arrow__right" src="img/right-arrow.svg" alt="arrow right">',
        asNavFor: '.slider-dots',
    });

    $('.slider-dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
     
    });

    $('.surf__slider').slick({
        prevArrow: '<img class="slider-arrow slider-arrow__left" src="img/left-arrow.svg" alt="arrow right">',
        nextArrow: '<img class="slider-arrow slider-arrow__right" src="img/right-arrow.svg" alt="arrow right">',
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.surf__slider-map',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 810,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 530,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }
   
        ]

    });

    $('.surf__slider-map').slick({
        arrow: false,
        slidesToShow: 8,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.surf__slider',
        responsive: [
          {
            breakpoint: 1040,
            settings: {
              arrow: false,
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 810,
            settings: {
              arrow: false,
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 530,
            settings: {
              arrow: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }
   
        ]
    });

    $('.travel__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrow slider-arrow__left" src="img/left-arrow.svg" alt="arrow right">',
        nextArrow: '<img class="slider-arrow slider-arrow__right" src="img/right-arrow.svg" alt="arrow right">',
    });

    $('.sleep__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrow slider-arrow__left" src="img/left-arrow.svg" alt="arrow right">',
        nextArrow: '<img class="slider-arrow slider-arrow__right" src="img/right-arrow.svg" alt="arrow right">',
    });

    $('.shop__slider').slick({
      infinite: true,
      fade: true,
      prevArrow: '<img class="slider-arrow slider-arrow__left" src="img/left-arrow.svg" alt="arrow right">',
      nextArrow: '<img class="slider-arrow slider-arrow__right" src="img/right-arrow.svg" alt="arrow right">',
  });



    // Quantity script
    $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });
    // MAX lenght input
    $('.quantity').on('input', 'input[type="number"][maxlength]', function(){
        if (this.value.length > this.maxLength){
            this.value = this.value.slice(0, this.maxLength);
        }
    }); 


    // Calculate nights and guests

    let sum =  $('.nights').val() * $('.sum').data('nights') + ($('.guests').val() - 1) * $('.sum').data('guests');
    $('.sum').html('$' + sum);

    

        $('.quantity-nav .quantity-button').each(function() {

            $(this).on('click', function() {
               
                $('.sum').each(function(){
                    let sum;
                    sum =  $('.nights').val() * $('.sum').data('nights') + ($('.guests').val() - 1) * $('.sum').data('guests');
                    $('.sum').html('$' + sum);
                    console.log(1);
                });
            });
      });
            

//Info radio button in shop section
    
  $('.picture-circle').on('click',function() {
    $(this).toggleClass('minus');
  });
   
//Mobile menu hide/show

  $('.menu-btn').on('click', function() {
    $('.menu').toggleClass('active');
  });

//WOW.js init
  new WOW().init();
       
});