let button = document.querySelector("#button");
let listOfArticles = document.querySelector(".notes");
let inputNote = document.querySelector("#note");
let count = document.querySelector(".counter");
let list = [];
let numberOfNotes;



button.addEventListener("click",addNote)


function addNote(note){
    note = inputNote.value;
    let article = `
    <article>
        <p>
            ${note}
        </p>
    </article>
    `;
    list.push(article);
    numberOfNotes = list.length + 2;
    
    let position = "afterbegin"
    listOfArticles.insertAdjacentHTML(position,article);
    count.innerHTML = `<p> You have ${numberOfNotes} notes</p>`
}