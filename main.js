const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 8000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

console.log(alice1); 
console.log(alice2); 
console.log(alice3); 

const animateImageChain = (element) => {
  if (element) {
    return element.animate(aliceTumbling, aliceTiming).finished;
  } else {
    console.error('Element not found');
    return Promise.resolve(); 
  }
};

const runSequentialAnimations = async () => {
  await animateImageChain(alice1);
  await animateImageChain(alice2);
  await animateImageChain(alice3);
};

runSequentialAnimations();
