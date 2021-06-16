//ls let objBooks = JSON.parse(localStorage.getItem("myBooks")) || [];
let objBooks = [];
//console.log(objBooks);
cid = 1;
let myTitle = document.querySelector("#myTitle");
let myAuthor = document.querySelector("#myAuthor");
let myDesc = document.querySelector("#myDesc");

const mySave = () => {
  //ls cid = objBooks.length == 0 ? cid++ : objBooks[objBooks.length - 1].id + 1;
  //console.log(cid);

  let newData = {
    id: cid++,
    title: myTitle.value,
    author: myAuthor.value,
    desc: myDesc.value,
  };

  objBooks.push(newData);
  //let newBook = JSON.stringify(objBooks);

  console.log(objBooks);
  // localStorage.setItem("myBooks", newBook);
  myTitle.value = "";
  myAuthor.value = "";
  myDesc.value = "";
};
document.querySelector("#btnSave").addEventListener("click", mySave);

const myLoad = () => {
  //ls let lsBooks = JSON.parse(localStorage.getItem("myBooks"));

  document.querySelector("#list_books").innerHTML = "";
  let loadDisplay = "";
  objBooks.forEach((book) => {
    loadDisplay += `<div>${book.id}</div>
    <div>${book.title}</div>
      <div>${book.author}</div>
      <div>${book.desc}</div>`;
  });
  document.querySelector("#list_books").innerHTML += loadDisplay;
};

document.querySelector("#btnLoad").addEventListener("click", myLoad);
