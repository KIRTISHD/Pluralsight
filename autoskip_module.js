
(function () {

  if ( !window.jQuery ) {
    var dollarInUse = !!window.$;
    var s = document.createElement('script');
    s.setAttribute('src', '//cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js');
    s.addEventListener('load', function(){
      console.log('jQuery loaded!');

      if(dollarInUse) {
        jQuery.noConflict();
        console.log('`$` already in use; use `jQuery`');
      }
    });

    document.body.appendChild(s);
  }

})();
setInterval(function () {jQuery("button[data-css-el86ax]:visible").click();}, 5000);
