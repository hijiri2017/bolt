$( ".menu__icon" ).click(function(e) {
  e.preventDefault();
  console.log('test');
  $( ".header__right").slideToggle("slow");
});
