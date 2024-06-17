const ul = document.querySelector('#counting-list');

ul.addEventListener('click', (e) => {
  // check if the target was an li in the counting list
  if (e.target.matches('#counting-list>li')) { 
    const clickedNum = Number(e.target.innerText);
    const li = document.createElement('li');
    li.innerText = clickedNum + 1
    e.currentTarget.append(li);
  }
});

// the alternative way to write the above code
// const ul = document.querySelector('#counting-list');

// const handleListItemClick = (e) => {
//   const clickedNum = Number(e.target.innerText);
//   const li = document.createElement('li');
//   li.innerText = clickedNum + 1;
//   const ul = document.querySelector('#counting-list');
//   ul.appendChild(li);

//   // Add event listener to the new list item
//   li.addEventListener('click', handleListItemClick);
// };

// const ul = document.querySelector('#counting-list');
// const listItems = ul.querySelectorAll('li');

// // Add individual event listeners to each list item
// listItems.forEach((li) => {
//   li.addEventListener('click', handleListItemClick);
// });


// const handleDelegation = (e) => {
//   if (e.target.matches('#counting-list>li')) { 
//     const clickedNum = Number(e.target.innerText);
//     const li = document.createElement('li');
//     li.innerText = clickedNum + 1
//     e.currentTarget.append(li);
//   }
// };

// ul.addEventListener('click', handleDelegation);
