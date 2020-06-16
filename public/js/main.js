function toggleMobileNav() {
  if ($("#MobMenu").hasClass("mob-nav--closed")) {
    $("#MobMenu").removeClass("mob-nav--closed")
    $("#MobMenu").addClass("mob-nav--open")
    if ($(window).scrollTop() < 40) {
      console.log($(window).scrollTop())
      $( ".site-header" ).css('background-color', 'rgba(39, 116, 174, 1)');
    }
  }
  else{
    $("#MobMenu").removeClass('mob-nav--open')
    $("#MobMenu").addClass('mob-nav--closed')
    if ($(window).scrollTop() < 40) {
      console.log($(window).scrollTop())
      $( ".site-header" ).css('background-color', 'rgba(39, 116, 174, 0.2)');
    }
  }
}

function toggleMenu(childMenu) {
  parentMenu = document.getElementById(childMenu).dataset.parent
  console.log(parentMenu)
  document.getElementById(parentMenu).classList.toggle('mob-nav__menu--closed')
  document.getElementById(parentMenu).classList.toggle('mob-nav__menu--open')
  $("#"+childMenu).toggleClass('mob-nav__menu--closed').toggleClass('mob-nav__menu--open')
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (event.target.matches('#burger') || !$("#MobMenu").hasClass('mob-nav--open') || $.contains(document.getElementById("MobMenu") , event.target) ) {
    return
  }
  else {
    $("#MobMenu").addClass('mob-nav--closed').removeClass('mob-nav--open')
    if ($(window).scrollTop() < 40) {
      $( ".site-header" ).css('background-color', 'rgba(39, 116, 174, 0.2)');
    }
  }
}

// $(window).scroll(function() {
//   if ($(this).scrollTop() > 40) {
//     $( ".site-header" ).css('background-color', 'rgba(39, 116, 174, 1)');
//   } else {
//     $( ".site-header" ).css('background-color', 'rgba(39, 116, 174, 0.2)');  }
// });