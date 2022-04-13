const winMessages = [
  "Yay, perfect!",
  "Correct!",
  "Yasss GeoQueen!",
  "You got this!",
  "You rock!",
  "Awesome!",
  "Eureka!",
  "I knew you could do it!",
  "I'm so happy that you knew that one!",
  "That's right!",
  "Congratulations!",
  "Mucho, mucho amor!"
  
];

const looseMessages = [
  "Aw, snap.",
  "Almost! But still missed.",
  "WRONG!",
  "Better luck next time honey.",
  "Don't give up!",
  "Believe in yourself!",
  "Don't let go, you can do it!",
  "Failure is instructive.",
  "Next time you'll know this one.",
  "Making mistakes is better than faking perfection."
  
];

const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

const win = shuffleArray(winMessages);
const loose = shuffleArray(looseMessages);

export { win, loose };
