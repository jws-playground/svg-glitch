import Scroll from '@ts/components/Scroll';

document.addEventListener('DOMContentLoaded', async () => {
  const scroll = new Scroll();
  await commonFunc();
  await topFunc();
});

const commonFunc = async () => {
  console.log('commonFunc');
};

const topFunc = async () => {
  console.log('topFunc');
};
