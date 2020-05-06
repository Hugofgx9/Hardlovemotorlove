if (window.matchMedia("(min-width: 600px)").matches) {
  var movementConstant = .02;
  $(document).mousemove(function(e) {
    var valueX = e.pageX * movementConstant;
    var valueY = e.pageY * movementConstant;
    $('h1').css('transform', 'translate3d('+ valueX + 'px,'+ valueY +'px,0)');

  });
}