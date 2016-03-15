(function(){ // :)
var css = 'body { transition: transform .5s ease-in; } body._sc_banner_active { transform: translateY(100px);} #_sc_banner { position: absolute; left: 0px; top: -100px; width: 100%; height: 75px; background: #171717 url(https://s3.amazonaws.com/s3.fightforthefuture.org/images/justbanner.jpg) center top no-repeat; box-shadow: 0px 1px 20px rgba(0, 0, 0, .3); cursor: pointer; } #_sc_banner button { position: absolute; right: 15px; top: 0px; border: 0px; background: 0px; color: white; font-size: 30px; padding: 0px; width: auto; height: auto; cursor: pointer; opacity: .7; } #_sc_banner button:hover { opacity: 1; }';

var setCookie = function(name,val,exdays)
{
  var d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = name + "=" + val + "; " + expires;
}

var getCookie = function(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++)
    {
      var c = ca[i].trim();
      if (c.indexOf(name)==0)
        return c.substring(name.length,c.length);
    }
  return "";
}

if (window.location.href.indexOf('ALWAYS_SHOW_SC_BANNER') === -1) {
  // Only show once.
  if (getCookie('_SC_BANNER_SHOWN_YAY')) {
    return;
  }
}

var style = document.createElement('style');
style.type = 'text/css';
style.id = '_savecrypto_css';
if (style.styleSheet) style.styleSheet.cssText = css;
else style.appendChild(document.createTextNode(css));
document.head.appendChild(style);

setTimeout(function() {
  document.body.classList.add('_sc_banner_active');
}, 50);

var banner = document.createElement('div');
banner.id = '_sc_banner';
var button = document.createElement('button');
button.textContent = '×';
banner.appendChild(button);
banner.onclick = function(e) {
  if (e)
    e.preventDefault();

  if (e.target == button) {
    document.body.classList.remove('_sc_banner_active');
    setTimeout(function() {
      document.body.removeChild(banner);
    }, 500);
  } else {
    window.open('https://savesecurity.org');
  }
}
document.body.appendChild(banner);

setCookie('_SC_BANNER_SHOWN_YAY', 'true', 365);

})(); // :)
