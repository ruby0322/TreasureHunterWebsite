$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

$(document).scroll(
  () => {
    let swap_class = document.getElementById("change_class");
    if ($(window).scrollTop() === 0) {
      swap_class.classList.remove("menu_color_change");
    } else {
      swap_class.classList.add("menu_color_change");
    }
  }
);

const rotationInterval = 10;
let loadingDeg = 0;
let emoDeg = 0;
let clickCnt = 0;
let rotationRate = 0;

const changeEmoji = () => {
  const emojis = ['🗺️', '⚔️', '💰', '🏴‍☠️', '⚓', '🏝️', '🛟', '🪙', '☠️', '🔱', '🆘', '🏆', '🎯', '💎', '💵', '💴', '🩸', '🗡', '🔪', '👑'];
  const curr = $('#emoji').context.outerText;
  let next = curr;
  while (next === curr) {
    next = emojis[Math.floor(Math.random()*emojis.length)];
  }
  $('#emoji').text(next);
  $('#emoji').addClass("button-click");
};

const rotateEmoji = () => {
  emoDeg += rotationRate;
  $('#emoji').rotate(emoDeg);
  emoDeg %= 360;
  if (Math.abs(rotationRate) > 0.02) {
    rotationRate *= 0.99;
  } else {
    rotationRate = 0;
  }
};

$("#emoji").on("click", function() {
  rotationRate += 3;
});

$("#emoji").on("webkitAnimationEnd", function() { $(this).removeClass("button-click"); });

jQuery.fn.rotate = function(degrees) {
  $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
               '-moz-transform' : 'rotate('+ degrees +'deg)',
               '-ms-transform' : 'rotate('+ degrees +'deg)',
               'transform' : 'rotate('+ degrees +'deg)'});
  return $(this);
};

setInterval(() => {
  loadingDeg += 1;
  $('#emo').rotate(loadingDeg);
  $('#cd1').rotate(loadingDeg);
  $('#construction').rotate(loadingDeg);
  loadingDeg %= 360;
}, 10);

$(window).load(
  () => {
    setTimeout(() => { $('#loading').hide(); $('#change_class').show(); }, 1000);  
    setInterval(rotateEmoji, rotationInterval);
    setInterval(changeEmoji, 2500);
    setInterval(timer, 1000);
  }
);

const today = new Date();
const target = new Date('08/21/2022');
let count = Math.ceil((target-today) / 1000);
function timer() {
  count -= 1;
  if (count <= 0) {
    clearInterval(timer);
    $("#timer").text('Party Time!!!');
    return;
  }
  const day  = Math.floor(count / 86400)
  const hour = Math.floor(count / 3600) % 24
  const min = Math.floor(count / 60) % 60
  const sec = count % 60

  const d = day;
  const h = hour >= 10 ? hour : '0' + hour;
  const m = min >= 10 ? min : '0' + min;
  const s = sec >= 10 ? sec : '0' + sec;
  $("#timer").text(`${d} d ${h} h ${m} m ${s} s`);
}