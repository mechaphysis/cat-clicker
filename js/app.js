let counters = [document.querySelector('.counter-origin'),document.querySelector('.counter-heidi')];
let count = 0;
let cats = [document.querySelector('.cat-origin'),document.querySelector('.cat-heidi')];


cats[0].prepend('Origin Cat');
cats[1].prepend('Heidi Cat');
//Define function for incrementing the counter of moves
function incremCounter(){
  count += 1;
  for (counter of counters) {
    counter.innerText = count +' clicks!';
  };
};


for (cat of cats) {
  cat.addEventListener('click', function() {
    incremCounter();
  });
};
