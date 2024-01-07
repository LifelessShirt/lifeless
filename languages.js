// Function to set languages.
function setLanguage(locale) {
    // Get data from "languages.json".
    $.getJSON( "languages.json", function( data ) {
            // Changing block HTML with data from "languages.json".
            // Variable (locale) is get from "language detection" or "button click" functions below.
            $(".uppertitle").html(data[0][locale][0].uppertitle);
            $(".title").html(data[0][locale][0].title);
            $(".undertitle").html(data[0][locale][0].undertitle);
            console.log( "Language changed succesfully" );
    });
}

// Detection user device language and set it by default.
//
// Better use (navigator.userLanguage or navigator.language) checking,
// because some old browsers/devices will not support (navigator.language)
var userLanguage = (navigator.language || navigator.userLanguage).split("-", 1); 
switch (userLanguage) {
  // Ukrainian language
  case 'uk':
    setLanguage("uk");
  // Polish language
  case 'pl':
    setLanguage("pl");
  // English language for other
  default:
    setLanguage("en");
}

// Changing language by clicking a (.lang-button) buttons.
// Also this function include animations
$(".lang-button").click(function() {
    // removeClass will hide all element on site
    $('.content').removeClass('loaded');
    $('.logo').removeClass('loaded');
    // Get attribute (lang) from buttons
    var selectedLang = $(this).attr("lang");
    // Timeout function is needed to wait for all elements will be hidden.
    setTimeout(function() {
        setLanguage(selectedLang);
        // addClass will show all elements again after language change.
        $('.content').addClass('loaded');
        $('.logo').addClass('loaded');
    }, 1000);
});