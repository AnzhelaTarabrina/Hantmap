// Меню бургер
const iconMenu = document.querySelector(".header__burder");
const menuBody = document.querySelector(".header__menu");
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        menuBody.classList.toggle('open');
        document.body.classList.toggle('body--lock');
    })
}

window.onload = function () {
  document.addEventListener("click", documentActions);

  function documentActions(e) {
      const targetElement = e.target;
      if (!targetElement.closest('.header') && document.querySelector('.header__menu.open')) {
          document.querySelector('.header__menu').classList.remove('open');
      };
      if (targetElement.closest('.nav__item') && document.querySelector('.header__menu.open')) {
          document.querySelector('.header__menu').classList.remove('open');
          document.body.classList.remove('body--lock');
      };
  }
}


// popup
const $popups = document.querySelectorAll('.popup');
$popups.forEach($popup => {
  $popup.addEventListener('click', e => {
  if (e.target === $popup) {
    close($popup);
  }

  if (e.target.classList.contains('popup__btn')) {
    close($popup);
  }

  if (e.target.classList.contains('js-close-popup')) {
    close($popup);
  }
  });
});

const $openBtns = document.querySelectorAll('.js-open-popup');
$openBtns.forEach($btn => {
  const name = $btn.dataset.popupName;
  $btn.addEventListener('click', () => {
    const $popup = document.querySelector(`.popup[data-popup-name="${name}"]`);
    open($popup);
  });
});

function open($popup) {
  $popup?.classList.add('popup--show');
  document.body.classList.add('body--lock');
}

function close($popup) {
  $popup?.classList.remove('popup--show');
  document.body.classList.remove('body--lock');
}

// Карта 
(function() {
  var n, o;
  n = function() {
      var t, n, r;
      function e(e) {
          var o;
          r = this,
          e,
          n = $("#nav-rus-map"),
          t = $(window),
          o = JSON.parse($("#nav-map-regions").text()),
          this.label = {
              top: ko.observable(0),
              left: ko.observable(0),
              right: ko.observable(0),
              bottom: ko.observable(0),
              html: ko.observable("")
          },
          new RussianMap({
              viewPort: o.viewPort,
              mapId: "nav-rus-map",
              width: "100%",
              height: "536",
              defaultAttr: {
                  fill: "#B2B2B3",
                  stroke: "#FFFFFF",
                  "stroke-width": 1,
                  "stroke-linejoin": "round",
                  "stroke-opacity": "0.12"
              },
              mouseMoveAttr: {
                  fill: "#B2B2B3"
              },
              onMouseMove: function(e) {
                  this.region.desc ? r.label.html("<p><b>" + this.region.name + "</b></p><p>" + this.region.desc + "</p>") : r.label.html("")
              },
              onMouseOut: function(e) {
                  r.label.html("")
              }
          },o.regions)
      }
      return t = n = r = null,
      e.prototype.setLabelPosition = function(e, o) {
          return o.pageX < t.width() / 2 ? (r.label.left(o.clientX - n.offset().left + 40 + "px"),
          r.label.right("auto")) : (r.label.right(n.width() - (o.clientX - n.offset().left) + 40 + "px"),
          r.label.left("auto")),
          r.label.top(o.pageY - n.offset().top - 40 + "px")
      }
      ,
      e
  }(),
  o = new function() {
      var o, t;
      o = 0,
      (t = this).isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      this.modMap = new n(t),
      this.isMobile && $(".site").addClass("site--mobile")
  }
  ,
  ko.applyBindings(o)
}
).call(this);