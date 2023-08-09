console.log('Hello World');

//click me
let btnClickMe = document.getElementById('btnClickMe');
let count = 0;
let showCount = document.getElementById('showCount');

function btnClickMe_click() {
  console.log('btnClickMe was clicked');
  count++;
  showCount.innerHTML = count;
}

btnClickMe.addEventListener('click', btnClickMe_click);

//set title
let title = document.getElementById('title');

function btnSetTitle_click() {
  let newTitle = document.getElementById('inputTitle').value;
  if (newTitle) {
    console.log({ newTitle });
    title.innerHTML = newTitle;
  } else {
    console.error('newTitle is blank');
  }
}

btnSetTitle.addEventListener('click', btnSetTitle_click);
