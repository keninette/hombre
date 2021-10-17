function animateBody() {
  $(document).on('mousemove', (e) => {
   /* const viewer = { height: $(window).height(), width: $(window).width() };
    const currentMousePos = { x: e.pageX, y: e.pageY };
    const mousePosition = { x: (currentMousePos.x / viewer.width) * 100, y: 50 + (currentMousePos.y / viewer.height) * 10 };
    const transformation = {
      rotation: {
        x: -(currentMousePos.y * 100 / viewer.height * 0.2 - 10),
        y: currentMousePos.x * 100 / viewer.width * 0.2 - 10,
        z:0
      },
      translation: {
        x: currentMousePos.x * 100 / viewer.height * 0.3, //(currentMousePos.x * 100 / wHeight * 0.3 )
        y: currentMousePos.y * 100 / viewer.height * 0.3,
        z:0
      },
    };

    $('#animatedBody').css({
      '-webkit-transform': `translate3d(${transformation.translation.x}px, ${transformation.translation.x}px, 0) scale(1) rotatex(${transformation.rotation.x}deg) rotatey(${transformation.rotation.x}deg)`,
      'background-position': `${mousePosition.x}% ${(currentMousePos.y / viewer.height) * 50}%`,
    });*/

    const container       = { height: $(window).height(), width: $(window).width() };
    const viewer          = { height: $('#animatedBody').height(), width: $('#animatedBody').width() };
    const ratio           = { x: viewer.width/container.width, y: viewer.height/container.height };
    const currentMousePos = { x: e.pageX, y: e.pageY };

    $('body').css({
      'background-position': `left ${currentMousePos.x < viewer.width/2 ? -(1) : 1}`,
    });

    console.log(container.width - viewer.width)
  });
}

function toggleContact() {
  const $target = document.getElementById('contact');
  const currentState = $target.getAttribute('data-state');

  if (currentState === 'opened') {
    $target.setAttribute('data-state', 'closed');
  } else {
    $target.setAttribute('data-state', 'opened');
  }
}

function mountContact() {
  toggleContact();

  document.querySelectorAll('.show-contact').forEach(($element) => {
    const allowTouch = window.Touch || false;
    $element.addEventListener(allowTouch ? 'tap' : 'click', (e) => toggleContact());
  });
}

function mountHome() {
  mountContact();
}

export { mountHome };