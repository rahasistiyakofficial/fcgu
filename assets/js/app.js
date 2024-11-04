// Template Name: Drax
// Description: Drax HTML5 Template
// Version: 1.0.0

(function (window, document, $, undefined) {
  "use strict";
  var Init = {
    i: function (e) {
      Init.s();
      Init.methods();
    },
    s: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },
    methods: function (e) {
      Init.w();
      Init.hidepreloader();
      Init.hover();
      Init.curser();
      Init.odometer();
      Init.serviceShow();
      Init.scrolling();
      Init.salActivation();
      Init.formValidation();
      Init.contactForm();
      Init.intializeSlick();
      Init.navTouggle();
      Init.imgSlide();
      Init.workSlide();
      Init.workPortfolio();
      Init.animations();
      Init.draggable();
      Init.countdownInit(".countdown", "2024/12/01");
      Init.textAnimition();
      Init.curserGlow();
    },
    w: function (e) {
      this._window.on("load", Init.l).on("scroll", Init.res);
    },
    hidepreloader: function () {
      $("#preloader").hide();
    },
    salActivation: function () {
      sal({
        threshold: 0.1,
        once: true,
      });
    },
    curser: function () {
      const $links = $('.hover-this');
      const $cursor = $('.cursor');

      const animateit = function (e) {
        const $hoverAnim = $(this).find('.hover-anim');
        const { offsetX: x, offsetY: y } = e,
          { offsetWidth: width, offsetHeight: height } = this,
          move = 25,
          xMove = x / width * (move * 2) - move,
          yMove = y / height * (move * 2) - move;
        $hoverAnim.css('transform', `translate(${xMove}px, ${yMove}px)`);
        if (e.type === 'mouseleave') $hoverAnim.css('transform', '');
      };

      const editCursor = function (e) {
        const { clientX: x, clientY: y } = e;
        $cursor.css({ left: `${x}px`, top: `${y}px` });
      };

      $links.on('mousemove', animateit).on('mouseleave', animateit);
      $(window).on('mousemove', editCursor);

      $("a, .cursor-pointer").hover(
        function () {
          $(".cursor").addClass("cursor-active");
        }, function () {
          $(".cursor").removeClass("cursor-active");
        }
      );
    },
    // odometer
    odometer: function () {
      if ($(".count_one").length) {
        $(".count_one").appear(function (e) {
          var odo = $(".count_one");
          odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
          });
        });
      }
      if ($(".count_two").length) {
        $(".count_two").appear(function (e) {
          var odo = $(".count_two");
          odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
          });
        });
      }
    },
    textAnimition: function () {
      // Auto typewrite text on hero_1
      var TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };

      TxtType.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }

        setTimeout(function () {
          that.tick();
        }, delta);
      };

      window.onload = function () {
        var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i < elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-type');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
          }
        }
      };
    },
    curserGlow: function () {
      $('.hero_1').mousemove(function (e) {
        let mousex = e.clientX - 80;
        let mousey = e.clientY - 80;
        $('.cursor-glow').css({
          'left': mousex + 'px',
          'top': mousey + 'px'
        });
      })

    },
    navTouggle: function () {
      $('#slider-btn').on('click', function () {
        $('#sideBar').animate({ "left": "0px" }, "slow").addClass('visible');
      })
      $('#close-sideBar').on('click', function () {
        $('#sideBar').animate({ "left": "-100%" }, "slow").removeClass('visible')

      })
      $('.drax-triangleBtn').on('click',function(e){
        $('#sideBar-2').animate({ "top": "0px" }, "slow").addClass('visible');
      })
      $('#close-sideBar-2').on('click', function () {
        $('#sideBar-2').animate({ "top": "-150%" }, "slow").removeClass('visible')

      })
      $('#search-touggle').on('click', function () {
        if ($(window).width() >= 1440 && $(window).width() < 1920) {
          $('#search').animate({ "width": "250px" }, "slow").addClass('visible');
        }else if ($(window).width() >= 992 && $(window).width() < 1440) {
          $('#search').animate({ "width": "200px" }, "slow").addClass('visible');
        }else if ($(window).width() >= 400 && $(window).width() < 992) {
          $('#search').animate({ "width": "250px" }, "slow").addClass('visible');
        }else if ($(window).width() >= 300 && $(window).width() < 400) {
          $('#search').animate({ "width": "200px" }, "slow").addClass('visible');
        }
        $('.input-holder').addClass('active');

        $(this).hide();
        $('#touggle-btn').show();
        $('#close').css('display', 'block');
      })
      $('#close').on('click', function () {
        $(this).css('display', 'none');
        $('#search').animate({ "width": "0" }, "slow").removeClass('visible');
        $('.input-holder').removeClass('active');
        $('#touggle-btn').hide();
        $('#search-touggle').show();
      })
    },

    imgSlide: function () {
      let imageTl_8 = gsap.timeline({
        scrollTrigger: {
          trigger: ".catalog__open",
          start: "top top+=90",
          pin: true,
          markers: false,
          scrub: 1,
          pinSpacing: false,
          end: "bottom bottom+=150",
        }
      });
      imageTl_8.to(".img-left", {
        // position: "absolute",
        left: "-55%",
        transition: "all 0.2s ease-in",
      });
      imageTl_8.to(".img-right", {
        // position: "absolute",
        right: "-55%",
        transition: "all 0.2s ease-in",
      });
    },
    workSlide: function () {
      let imageTl_8 = gsap.timeline({
        scrollTrigger: {
          trigger: ".portfolio__big",
          start: "top top+=90",
          pin: true,
          markers: false,
          scrub: 1,
          pinSpacing: false,
          end: "bottom bottom+=150",
        }
      });
      imageTl_8.to(".portfolio__big-inner", {
        width: "100%",
      });
    },
    hover: function () {
      $('.dairy__1').mouseover(function () {
        $(this).addClass('show');
      });
      $('.card').mouseout(function () {
        $(this).removeClass('show');
      });
      $('#continue-email').on('click',function(){
        $('.email-content').hide('slow');
        $('.signUp-content').show("slow");
      })
      $('#animate2').mouseover(function (e) {
        e.preventDefault();
        e.stopPropagation();
        var id = $(this).attr('id');
      })
      $('.review-content').on('click', function () {
        //// remove
        $('.review-content').removeClass('visible')
        $('.review-content').find('img').css({
          'display': 'none',
        }).animate({ opacity: 0 }, 500);
        //// add
        $(this).addClass('visible')
        $('.visible').find('img').css({
          'display': 'block',
        }).animate({ opacity: 1 }, 500);
      })

      $('.card-btn').on('click', function () {
        var $this = $(this).attr('data-get');


        // $('.card').removeClass('active');
        if ($(window).width() >= 1199 && $(window).width() < 1920) {
          $('.card-active').animate({ "right": '-130%' }, '3000');
        } else if ($(window).width() >= 992 && $(window).width() < 1199) {
          $('.card-active').animate({ "right": '-200%' }, '3000');
        }else if ($(window).width() >= 768 && $(window).width() < 992) {
          $('.card-active').animate({ "right": '-400%' }, '8000');
        }else if ($(window).width() >= 580 && $(window).width() < 768) {
          $('.card-active').animate({ "right": '-530%' }, '20000');
        }else if ($(window).width() >= 490 && $(window).width() < 580) {
          $('.card-active').animate({ "right": '-850%' }, '30000');
        }else if ($(window).width() >= 400 && $(window).width() < 490) {
          $('.card-active').animate({ "right": '-1050%' }, '30000');
        }else if ($(window).width() >= 370 && $(window).width() < 400) {
          $('.card-active').animate({ "right": '-1125%' }, '30000');
        }else if ($(window).width() >= 340 && $(window).width() < 370) {
          $('.card-active').animate({ "right": '-1225%' }, '30000');
        }else if ($(window).width() >= 320 && $(window).width() < 340) {
          $('.card-active').animate({ "right": '-1425%' }, '30000');
        }
        $('.card-body').removeClass('card-active');

        $('.' + $this).animate({ "right": "2%" }, '7000')
        $('.' + $this).addClass('card-active');

      })

      $('.dairy__1').mouseover(function () {
        // $(this).addClass('show');
      });
      $('.dairy__2').mouseover(function () {
        $(this).prop('id', 'large').animate({}, 'slow');
        $('.dairy__1').prop('id', 'mediume').animate({}, 'slow');
        $('.dairy__3').prop('id', 'low').animate({}, 'slow');
      });
      $('.dairy__1').mouseover(function () {
        $(this).prop('id', 'large').animate({}, 'slow');
        $('.dairy__2').prop('id', 'mediume').animate({}, 'slow');
        $('.dairy__3').prop('id', 'low').animate({}, 'slow');
      });
      $('.dairy__3').mouseover(function () {
        $(this).prop('id', 'large2').animate({}, 'slow');
        $('.dairy__2').prop('id', 'mediume2').animate({}, 'slow');
        $('.dairy__1').prop('id', 'low2').animate({}, 'slow');
      });

      var $videoSrc;
      $('.play-button').click(function () {
        $videoSrc = $(this).data("src");
        $("#video").attr('src', $videoSrc);
      });
      $('.btn-close').click(function () {
        $("#video").attr('src',' ');
      });
      $('.drax-popupBtn').on('click',function(){
        $('#subcribe').animate({ "right": "0px" }, "slow").addClass('visible');
      })
      $('#close-subcribe').on('click', function () {
        $('#subcribe').animate({ "right": "-100%" }, "slow").removeClass('visible')

      })
    },

    serviceShow: function (e) {
      $('.service_title').on('click', function () {
        var id = $(this).attr("id");
        $('.service_title').removeClass('active');
        $(this).addClass('active');
        $('.about_service').animate({ "right": "110%" }, "slow").addClass('visible');
        $('.' + id).animate({"right": "0%" }, "slow").removeClass('visible')
      })
    },

    scrolling: function () {
      $(".content-rd").mCustomScrollbar({ theme: "rounded-dark" });
    },
    countdownInit: function (countdownSelector, countdownTime) {
      var eventCounter = $(countdownSelector);
      if (eventCounter.length) {
        eventCounter.countdown(countdownTime, function (e) {
          $(this).html(
            e.strftime(
              '<li class="top-1"><small>Days</small><p class="top">%d</p></li>\
              <li class="bottom-1"><p class="bottom">%H</p><small>Hours</small></li>\
              <li class="top-2"><small>Minutes</small><p class="top ">%M</p></li>\
              <li class="bottom-2"><p class="bottom">%S</p><small>Second</small></li>'
            )
          );
        });
      }
    },
    formValidation: function () {
      if ($(".contact-form").length) {
        $(".contact-form").validate();
      }
    },
    contactForm: function () {
      $(".contact-form").on("submit", function (e) {
        e.preventDefault();
        if ($(".contact-form").valid()) {
          var _self = $(this);
          _self
            .closest("div")
            .find('button[type="submit"]')
            .attr("disabled", "disabled");
          var data = $(this).serialize();
          $.ajax({
            url: "./assets/mail/contact.php",
            type: "post",
            dataType: "json",
            data: data,
            success: function (data) {
              $(".contact-form").trigger("reset");
              _self.find('button[type="submit"]').removeAttr("disabled");
              if (data.success) {
                document.getElementById("message").innerHTML =
                  "<h3 class='bg-success text-white p-3 mt-3'>Email Sent Successfully</h3>";
              } else {
                document.getElementById("message").innerHTML =
                  "<h3 class='bg-success text-white p-3 mt-3'>There is an error</h3>";
              }
              $("#message").show("slow");
              $("#message").slideDown("slow");
              setTimeout(function () {
                $("#message").slideUp("hide");
                $("#message").hide("slow");
              }, 3000);
            },
          });
        } else {
          return false;
        }
      });
    },
    intializeSlick: function (e) {
      if ($(".client-slider").length) {
        $(".client-slider").slick({
          infinite: true,
          slidesToShow: 7,
          slidesToScroll: 1,
          centerMode: true,
          arrows: false,
          centerMode: true,
          centerPadding: '0',
          autoplay: true,
          vertical: true,
          verticalSwiping: true,
          autoplaySpeed: 1500,
          responsive: [
            {
              breakpoint: 992,
              settings: {
                vertical: false,
                verticalSwiping: false,
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 768,
              settings: {
                vertical: false,
                verticalSwiping: false,
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 492,
              settings: {
                vertical: false,
                verticalSwiping: false,
                slidesToShow: 1,
              },
            },
          ],
        });
      }
      if ($(".roll__slider").length) {
        $('.roll__slider').slick({
          loop: true,
          freemode: true,
          slidesPerView: 1,
          spaceBetween: 60,
          arrows: false,
          centeredSlides: false,
          allowTouchMove: false,
          speed: 10000,
          autoplay: {
            delay: 0.2,
            disableOnInteraction: true,
          },
        });
      }
      if ($(".client-rightSlider").length) {
        $('.client-rightSlider').slick({
          autoplay: true,
          autoplaySpeed: 0,
          speed: 5000,
          arrows: false,
          swipe: false,
          slidesToShow: 5,
          cssEase: 'linear',
          pauseOnFocus: false,
          pauseOnHover: false,
          rtl: true
        });
      }
      if ($(".portfolio-sliders").length) {
        var slider = $(".portfolio-sliders");
        slider.slick({
          infinite: true,
          slidesToShow: 1,
          centerMode: true,
          arrows: false,
          dots:true,
          centerMode: true,
          centerPadding: '0',
          autoplay: true,
          loop: false,
        });
        slider.on('wheel', (function(e) {
          e.preventDefault();
        
          if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickPrev');
          } else {
            $(this).slick('slickNext');
          }
        }));
      }
      if ($(".client-leftSlider").length) {
        $('.client-leftSlider').slick({
          autoplay: true,
          autoplaySpeed: 0,
          speed: 5000,
          arrows: false,
          swipe: false,
          slidesToShow: 5,
          cssEase: 'linear',
          pauseOnFocus: false,
          pauseOnHover: false,
          ltr: true,
          responsive: [
            {
              breakpoint: 992,
              settings: {

                slidesToShow: 4,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 492,
              settings: {
                slidesToShow: 2,
              },
            },
          ],
        });
      }
      if ($(".clientSlider").length) {
        $('.clientSlider').slick({
          autoplay: true,
          autoplaySpeed: 0,
          speed: 5000,
          arrows: false,
          swipe: false,
          slidesToShow: 3,
          cssEase: 'linear',
          pauseOnFocus: false,
          pauseOnHover: false,
          ltr: true,
          responsive: [
            {
              breakpoint: 992,
              settings: {

                slidesToShow: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 492,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      }
      if ($(".work-slider").length) {
        var slider = $('.work-slider').slick({
              infinite: true,
              centerMode: true,
              arrows: false,
              centerPadding: '',
              slidesToShow: 5,
              responsive: [
            {
              breakpoint: 1299,
              settings: {

                slidesToShow: 3,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 580,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
        slider.on('wheel', (function (e) {
          e.preventDefault();

          if (e.originalEvent.deltax < 0) {
            $(this).slick('slickNext');
          }
          else {
            $(this).slick('slickPrev');
          }
        }));
      }
      if ($(".portfolio-1-slider").length) {
        var slider = $(".portfolio-1-slider").slick({
          variableWidth: true,
          variableHeight: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 5,
          centerPadding: '0',
          swipeToSlide: true,
          autoplay: false,
          cssEase: 'linear',
          autoplaySpeed: 300000,
          arrows: false,
          lazyLoad: 'ondemand',
          responsive: [
            {
              breakpoint: 580,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
        slider.on('wheel', (function (e) {
          e.preventDefault();

          if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickNext');
          }
          else {
            $(this).slick('slickPrev');
          }
        }));
      }
      if ($(".roboat-slider").length) {
        var slider = $(".roboat-slider").slick({
          infinite: true,
          slidesToShow: 1,
          centerMode: true,
          arrows: false,
          centerMode: true,
          centerPadding: '0',
          autoplay: false,
          vertical: true,
          verticalSwiping: true,
          loop: false,
        });
        slider.on('wheel', (function (e) {
          e.preventDefault();

          if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickPrev');
          }
          else {
            $(this).slick('slickNext');
          
          }
        }));
        
      }
      if ($(".team-slider").length) {
        var slider = $(".team-slider").slick({
          infinite: true,
          slidesToShow: 5,
          centerMode: true,
          arrows: false,
          centerMode: true,
          centerPadding: '0',
          autoplay: false,
          loop: false,
          responsive: [
            {
              breakpoint: 1299,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 580,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
        slider.on('wheel', (function (e) {
          e.preventDefault();

          if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickPrv');
          }
          else {
            $(this).slick('slickNext');
          }
        }));
        
      }

    },
    animations: function () {
      // Service Page hero Animation   
      let word_come = $(".anim_words_come")
      if (word_come.length) {

        word_come.forEach((word_come) => {
          let split_word_come = new SplitText(word_come, { type: "chars words", position: "absolute" })
          gsap.from(split_word_come.words, { duration: 2, x: 50, autoAlpha: 0, stagger: 0.05 });
        })
      }


      // Hero text animation hero_1
      let HeroText = gsap.timeline()
      let hero_1_text_anim = $(".hero_1_text_anim")
      if (hero_1_text_anim.length) {
        let split_text_animation = new SplitText(hero_1_text_anim, { type: "chars words" })
        HeroText.from(split_text_animation.words, { duration: 2, x: 100, autoAlpha: 0, stagger: 0.05 }, "-=1");
      }

      // Title Animation
      let splitTitleLines = gsap.utils.toArray(".title-animation");
      splitTitleLines.forEach(splitTextLine => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: splitTextLine,
            start: 'top 90%',
            end: 'bottom 60%',
            scrub: false,
            markers: false,
            toggleActions: 'play none none none'
          }
        });

        const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
        gsap.set(splitTextLine, { perspective: 400 });
        itemSplitted.split({ type: "lines" })
        tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
      });

      // Text Animation
      let splitTextLines = gsap.utils.toArray(".text-animation");

      splitTextLines.forEach(splitTextLine => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: splitTextLine,
            start: 'top 90%',
            duration: 2,
            end: 'bottom 60%',
            scrub: false,
            markers: false,
            toggleActions: 'play none none none'
          }
        });

        const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
        gsap.set(splitTextLine, { perspective: 400 });
        itemSplitted.split({ type: "lines" })
        tl.from(itemSplitted.lines, { duration: 1, delay: 0.5, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
      });


    },

    draggable: function () {
      if ($("#draggable").length) {
        $("#draggable").draggable();
      }
    },

    workPortfolio: function () {
      let portfolioline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-portfolio",
          start: "top center-=220",
          pin: ".work-text",
          end: "bottom bottom+=80",
          markers: false,
          pinSpacing: false,
          scrub: 1,
        }
      })
      portfolioline.to(".image", {
        scale: 1,
        duration: 1,
        width: '0%',
      })
      portfolioline.to(".work-text", {
        scale: 1.5,
        duration: 1
      })
      portfolioline.to(".work-text", {
        scale: 2,
        duration: 1
      })
      portfolioline.to(".work-text", {
        scale: 1,
        // opacity: 0,
        duration: 1
      }, "+=2")

      let portfolio_lists = gsap.utils.toArray(".work-portfolio-item")
      portfolio_lists.forEach((portfolio, i) => {
        gsap.set(portfolio, {
          opacity: 0.7,

        })
        let t1 = gsap.timeline()

        t1.set(portfolio, {
          position: "relative",
        })
        t1.to(portfolio, {
          scrollTrigger: {
            trigger: portfolio,
            scrub: 2,
            duration: 1.5,
            start: "top bottom+=100",
            end: "bottom center",
            markers: false
          },
          scale: 1,
          rotateY: 0,
          opacity: 1,
        })
      })
      let team = gsap.timeline({
        scrollTrigger: {
          trigger: ".team-content",
          start: "top center-=220",
          pin: ".team-text",
          end: "bottom bottom+=80",
          markers: false,
          pinSpacing: false,
          scrub: 1,
        }
      })
      team.to(".team-text", {
        scale: 2,
        opacity: 0.1,
        duration: 1
      })
      team.to(".team-text", {
        scale: 3,
        opacity: 0.04,
        duration: 1
      })
      portfolioline.to(".team-text", {
        scale: 3,
        opacity: 0.1,
        duration: 1
      })
      portfolioline.to(".team-text", {
        scale: 1,
        opacity: 1,
        duration: 1
      }, "+=2")
    }

  }
  Init.i();
})(window, document, jQuery);
