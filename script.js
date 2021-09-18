// Set a cookie

function togglePageContentLightDark() {
  var body = document.getElementById('body')
  var currentClass = body.className
  var newClass = body.className == 'dark-mode' ? 'light-mode' : 'dark-mode'
  body.className = newClass

  // Save the theme preference for 10 years.
  var endDate = new Date();
  endDate.setFullYear(endDate.getFullYear() + 10);

  document.cookie = 'theme=' + (newClass == 'light-mode' ? 'light' : 'dark') +
                    '; Expires=' + endDate + ';'
  console.log('Cookies are now: ' + document.cookie)
}

// Determines if dark mode is currently selected 
function isDarkThemeSelected() {
  return document.cookie.match(/theme=dark/i) != null
}

function setThemeFromCookie() {
  var body = document.getElementById('body')
  body.className = isDarkThemeSelected() ? 'dark-mode' : 'light-mode'
}

(function() {
  setThemeFromCookie()
})();
