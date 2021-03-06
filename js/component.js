// 프로세스바
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  
  if (scrolled === 100){
    console.log(scrolled);
    document.getElementById("down-arrow").style.transform = 'rotate( 180deg )';
  } else {
    document.getElementById("down-arrow").style.transform = 'rotate( 0deg )';
  }
}

//프로세스바 끝

$(document).ready(function(){

  const mq = window.matchMedia( "(min-width: 991px)" );
  const funFacts = [
    "I have an insatiable desire to learn new things.",
    "I love learning about all the latest technologies and exploring design possibilities.",
    "I love thinking on an abstract level.",
    "I play guitar and electronic piano.",
    "I'm setting up a home recording studio to record songs and upload them to Youtube. Stay tuned!",
    "I'm a huge fan of broadway musicals. My favorites include Dear Evan Hansen, RENT, and Hamilton.",
    "I played the role of a drug dealer, a homeless man, an AIDS patient, and a business man in a college production of the musical RENT.",
    "I performed with my college choir in Germany, Czech Republic, and Austria.",
    "I've sung songs in English, Chinese, French, Spanish, German, Czech, Hebrew, Italian, Russian, Ukrainian, Japanese, Arabic, Finnish, and Latin. Czech was the hardest!",
    "I am a amateur <a href='https://photos.google.com/share/AF1QipNq88AUSSS3t5j1EPqC-zObzEAT9gjVjWI4KVkKX8vOpXrOnOZpPkMFpoZfmn6okg?key=LVR5MUNEbUI3ZDhqZ1Uzckt3Njl1ZXc1dk9MSXp3' target='_blank'>photographer</a>.",
    "I love darkroom photography.",
    "I do <a href='https://youtu.be/hhN3uhVHzvg?t=15m42s' target='_blank'>Swing Dance!</a>",
    "Check out my <a href='https://youtu.be/4zHSYzWrSJI?t=55m55s' target='_blank'>K-Pop performance</a>!",
    "My college application essay was published on <a href='https://cn.nytimes.com/education/20151216/t16essaycontest-tonyjin/en-us/' target='_blank'>The New York Times Chinese website</a>.",
    "I moved from an 8 million people city in China to a small town with 8,000 people in rural Vermont. And I loved it!",
    "I lived in Paris for six months.",
    "I speak fluent Chinese and French!",
    "I was an Oratory Coach during my freshman year in college.",
    "My favorite directors include Richard Linklater and Christopher Nolan.",
    "I am interested in Daoism and Buddhism."
  ];

  var randomFactIndex = Math.floor(Math.random() * funFacts.length);
  $('#preloader-title').text("Tony's Fun Fact #"+(randomFactIndex+1));
  $('#preloader-content').html(funFacts[randomFactIndex]);

  // $('#template-to-top').setAttribute("data-aos","fade-up");
  // $('#template-to-top').setAttribute("data-aos-duration","600");


  var jumboHeight = $('.jumbotron').outerHeight();

  $(window).scroll(function(){

    // var scrolled = $(window).scrollTop();
    // console.log("Scrolled: "+scrolled);
    // $('.bg').css('height', (jumboHeight-scrolled) + 'px');

    $(".highlight").each(function(){
    	    if ( $(this).isOnScreenHighlight() ) {
            $(this).addClass('shown');
    	        } else {
                  $(this).removeClass('shown');
    	    }
    });

  });


//버튼 링크를 누르면 해당 타깃으로 이동하는 코드.
  $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 700, 'swing', function () {
	        window.location.hash = target;
	    });
	});

  //Click event to scroll to top
    $('#template-to-top').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 600);
      return false;
    });

    // $('.').addClass('load');

    //see와 hide 보이고 안보이게 하는 코드 ㄴ
    $(".p-center-wrapper button[data-toggle='collapse']").click (function () {
      $(this).text(function(i,old){
        var newString = "";
        if (old.startsWith("See")) {
          newString = old.replace("See","Hide");
        } else if (old.startsWith("Hide")){
          newString = old.replace ("Hide","See");
        } else {
          newString = old;
        }
        return newString;
      });
    })
});



$.fn.isOnScreenHighlight = function(){

  // var fix = parseInt($(".navbar").css("height"));
  var win = $(window);

  var viewport = {
      top : win.scrollTop(),
      left : win.scrollLeft()
  };
  viewport.right = viewport.left + win.width();
  viewport.bottom = viewport.top + win.height();

  var bounds = this.offset();
  bounds.right = bounds.left + this.outerWidth();
  bounds.bottom = bounds.top + this.outerHeight();

  return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.bottom || viewport.top > bounds.bottom));

};
