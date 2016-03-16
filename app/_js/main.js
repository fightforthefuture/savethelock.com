var $c  = document.createElement.bind(document);

(function (doc, win) {
  "use strict";

  function triggerComponents() {
    win.components = win.components || {};
    var
      i = 0,
      components = doc.getElementsByTagName('body')[0].dataset.components;

    if (components !== undefined) {
      components = components.split(' ');
      i = components.length;

      while (i--) {
        if (components[i] !== '' && win.components[components[i]] !== undefined) {
          win.components[components[i]](doc, win);
        }
      }
    }
  }

  triggerComponents();

  var listenerFn = function() {
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    if (top > 300) {
      window.removeEventListener('scroll', listenerFn);
      document.querySelector('ul.share').classList.add('visible');
    }
  }

  window.addEventListener('scroll', listenerFn);

  var gl = document.querySelectorAll('button.google');
    for (var i = 0; i < gl.length; i++) {
        gl[i].addEventListener('click', function(e) {
            e.preventDefault();
            var url = window.location.protocol + '//' + window.location.host;
            window.open('https://plus.google.com/share?url='+url, 'share_gl', 'width=500, height=300, toolbar=no, status=no, menubar=no');
        }, false);
    }

  if (window.location.href.indexOf('ALWAYS_SHOW_SC_BANNER') !== -1) {
    var script = document.createElement('script');
    script.src = '/banner.js';
    document.head.appendChild(script);
  }


})(document, window);
