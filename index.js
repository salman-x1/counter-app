const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

// Increase Button Function
increaseBtn.onclick = function () {
  count = count + 1;
  countLabel.textContent = count;
};

// Decrease Button Function
decreaseBtn.onclick = function () {
  if (count == 0) {
    decreaseBtn.disabled = true;
  } else {
    count--;
    countLabel.textContent = count;
  }
};

// decreaseBtn.onclick = function () {

//   count = count - 1;
//   countLabel.textContent = count;
// };

// Reset Button Function
resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};
