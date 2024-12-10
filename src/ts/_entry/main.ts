import Scroll from '@ts/components/Scroll';
import gsap from 'gsap';

document.addEventListener('DOMContentLoaded', async () => {
  const scroll = new Scroll();
  await animation();
});

const animation = async () => {
  const turbVal = { val: 0.000001 };
  const turb = document.querySelectorAll('svg feTurbulence')[0];

  const glitchTl = gsap.timeline({
    repeatDelay: 1.0,
    repeat: -1,
    yoyo: true,
    onUpdate: function () {
      turb.setAttribute('baseFrequency', '0 ' + turbVal.val);
    },
  });

  glitchTl
    .to(turbVal, { duration: 0.2, val: 0.8 })
    .to(turbVal, { duration: 0.2, val: 0.00001 });
};
