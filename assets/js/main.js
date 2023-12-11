console.log("Hello and welcome to TaskFocus Pro!")
console.log("To help you Organize. Prioritize and Achieve your goals!")

let addBtn = document.getElementById("add-btn");
let addTitle = document.getElementById("note-title");
let addBody = document.getElementById("note-body");

addBtn.addEventListener("click", (e) => {
    if (addTitle.value == "" || addBody.value == ""){
        return alert("Please Add Task Title And Content");
    }

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }  else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title: addTitle.value,
        body: addBody.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTitle.value = "";
    addBody.value = "";

    showNotes();
})

// Display Notes

function showNotes() {
    let notes = localStorage.getItems(notes);
    if (notes == null) {
        notesObj = [];
    }  else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function(elemennt, index) {
        html += `
        <div class="notes">
        <div class="task-box-row">
            <div class="task-box-col col-1" id="task-box-title"><h3>${eletement.title}</h3></div>
            <div class="task-box-col col-2" id="task-box-prio"><h4>PRI</h4></div>
        </div>
        <div class="task-content" id="task-box-body"><h4>${eletement.body}</h4></div>
        <div class="task-box-row">
            <div class="task-box-col col-3" id="task-box-date"><h5>DATE</h5></div>
            <div><button id="${index}" onclick="deleteNote(this.id)" class="note-btn">Delete</button><button id="${index}" onclick="EditNote(this.id)" class="note-btn edit-btn">Edit</button></div>
        </div>
    </div>
        `;
    });

    let noteElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        noteElm.innerHTML = html;
    } else {
        noteElm.innerHTML = "No Notes Yet! Add a note using the form to the right";
    }
    }

    showNotes();