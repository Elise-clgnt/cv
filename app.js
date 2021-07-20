const allRonds = document.querySelectorAll('.rond');
const allBoxes = document.querySelectorAll('.box');

const controller = new ScrollMagic.Controller()

allBoxes.forEach(box => {

    for(i = 0; i < allRonds.length; i++){

        if(allRonds[i].getAttribute('data-anim') === box.getAttribute('data-anim')){

            let tween = gsap.from(box, {y: -50, opacity: 0, duration: 1.5})

            let scene = new ScrollMagic.Scene({
                triggerElement: allRonds[i],
                reverse: false
            })
            .setTween(tween)
            // .addIndicators()
            .addTo(controller)

        }

    }

})

document.addEventListener('DOMContentLoaded', () => {
  const triggers = document.querySelectorAll('[aria-haspopup="dialog"]');
  const doc = document.querySelector('.js-document');

  const open = function (dialog) {
    dialog.setAttribute('aria-hidden', false);
    doc.setAttribute('aria-hidden', true);
  };

  const close = function (dialog) {
    dialog.setAttribute('aria-hidden', true);
    doc.setAttribute('aria-hidden', false);
  };

  triggers.forEach((trigger) => {
    const dialog = document.getElementById(trigger.getAttribute('aria-controls'));
    const dismissTriggers = dialog.querySelectorAll('[data-dismiss]');

    // open dialog
  trigger.addEventListener('click', (event) => {
      event.preventDefault();

      open(dialog);
  });

    // close dialog
  dismissTriggers.forEach((dismissTrigger) => {
      const dismissDialog = document.getElementById(dismissTrigger.dataset.dismiss);

      dismissTrigger.addEventListener('click', (event) => {
        event.preventDefault();

        close(dismissDialog);
      });
    });

    window.addEventListener('click', (event) => {
      if (event.target === dialog) {
        close(dialog);
      }
    });
  });
});
