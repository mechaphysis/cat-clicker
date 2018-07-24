let counter = document.querySelector('.counter');
let count = 0;
let cat = document.querySelector('.cat');

//Define function for incrementing the counter of moves
function incremCounter(){
  count += 1;
  counter.innerText = count +' clicks!';
};

cat.addEventListener('click', function(evt) {
  incremCounter();
})
