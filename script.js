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

const switchButton = document.getElementById('inner-switch');
const workContainer = document.getElementById('work');
 
switchButton.addEventListener('click', () => {
    document.body.classList.toggle('dark'); //toggle the HTML body the class 'dark'
    switchButton.classList.toggle('active');//toggle the HTML button with the id='switch' with the class 'active''
    workContainer.classList.toggle('dark');
 
    if(document.body.classList.contains('dark')){ //when the body has the class 'dark' currently
        localStorage.setItem('darkMode', 'enabled'); //store this data if dark mode is on
    }else{
        localStorage.setItem('darkMode', 'disabled'); //store this data if dark mode is off
    }
});
 
if(localStorage.getItem('darkMode') == 'enabled'){
    document.body.classList.toggle('dark');
    switchButton.classList.toggle('active');
    workContainer.classList.toggle('dark');
}
