// Creating dark or light mode toggle 

$( ".inner-switch" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
      $( "body" ).removeClass( "dark" );
      $( ".inner-switch" ).text( "OFF" );
    } else {
      $( "body" ).addClass( "dark" );
      $( ".inner-switch" ).text( "ON" );
    }
});

// Persisting dark or light mode

// dark mode switch
var setTheme = function (theme) {
if (theme === 'dark') {
// dark
$( "body" ).removeClass("standard");
$( "body" ).addClass( "dark" );
$(".inner-switch").text("ON");
setCookie('Theme', 'dark', 30);
} else {
$("body").removeClass("dark");
$("body").addClass("standard");
$(".inner-switch").text("OFF");
setCookie('Theme', 'standard', 30);
}
};

currentTheme = getCookie('Theme');
setTheme(currentTheme);
