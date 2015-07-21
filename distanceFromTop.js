// distanceFromTop.js ----- https://github.com/stevetwitte/distanceFromTop.js 
// Function to return the distance in pixels of a page element from the top of the browser viewport
// This requires jQuery 1.x be loaded before loading distanceFromTop.js
// Written by Stephen Witte. MIT License. stephenwitte.co

function distanceFromTop(pageElement) {

  // find the elements distance in pixels from the top of the document
  var elementTop = $(pageElement).offset().top;

  // then subtract the amount the window has scrolled from the top of the page and return that value
  return elementTop - $(window).scrollTop();

}
