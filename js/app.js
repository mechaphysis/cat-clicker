//Clear HTML of website
document.body.innerHTML = '';

//Define array of CATS
let cats = ['http://placekitten.com/100/100', 'http://placekitten.com/100/200', 'http://placekitten.com/200/200', 'http://placekitten.com/200/300','http://placekitten.com/300/300','http://placekitten.com/300/400'];

//Loop through that array and create HTML for each cat
for (cat of cats) {
  var currentCat= cat;
  let catElem = document.createElement('div');
  var selectedCat = document.createElement('div');
  catElem.innerHTML=`<img src=${currentCat}>`;
  //Select an specific cat by clicking on its picture:
  catElem.addEventListener('click',(function(currentCatCopy) {
    return function() {
      //Create a new HTML element with counter for the selected Cat
      selectedCat.innerHTML =`
      <img src=${currentCatCopy}>
      <p class"counter">
      0 clicks!
      </p>`;
    };
  })(currentCat));

  //Append new elements to the DOM:
  document.body.appendChild(catElem);
  document.body.appendChild(selectedCat);
};


let count = 0;
//Define function for incrementing the counter of moves
function incremCounter(){
  count += 1;
  selectedCat.innerHTML =`
  <img src=${currentCat}>
  <p class"counter">
  ${count} clicks!
  </p>`;
};


selectedCat.addEventListener('click', function() {
  incremCounter();
});
