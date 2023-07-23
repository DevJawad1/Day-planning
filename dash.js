let getUser=JSON.parse(localStorage.getItem('allTodoUsers'))
let userId=localStorage.getItem('userId')
let allNote=getUser[userId].allNote

const note=()=>{
    document.querySelector('.note-code').style.display="block"
    document.querySelector('.todo-code').style.display="none"
}
const todo=()=>{
    document.querySelector('.todo-code').style.display="block"
    document.querySelector('.note-code').style.display="none"
}
note()
let delet
function displayallnote(){
    if(getUser[userId].allNote==""){
        displayNote.innerHTML="You haven't add note, click the add button to start "
    }
    else{
        displayNote.innerHTML=""
        allNote.map((note, i)=>{
            delet=i
            displayNote.innerHTML+=`
            <div class="d-flex w-100" style="gap:20px; cursor:pointer">
                <p class="pt-3">${i}</p>
                <div style="background:rgba(128, 128, 128, 0.218); border-radius:10px " id="" class=" pt-4 p-2 mt-2  w-100" onclick="showFullNote(${i})">
                    <p>${note.noteTitle}</p>
                </div>
            </div>`
        }) 
    }
}
console.log(delet);

displayallnote()
// button displaying addNoteBox
const displayAddNoteBox=()=>{
    document.querySelector('.addNoteBox').style.display="block"
}

const displayeEditNoteBox=(dispEdit)=>{
    editingdiv.innerHTML=`   
    <div class="editNoteBox shadow p-2">
    <input type="text" name="" id="titedit" placeholder="Title" class="form-control"> <br>
    <textarea name="" id="ctnedit" cols="30" rows="10" placeholder="Write your note" class="form-control"></textarea>
    <button class="btn btn-success mt-3 w-100" onclick="editNoteBtn(${dispEdit})" style="cursor: pointer;">Done</button>
    </div>    `
    document.querySelector('.editNoteBox').style.display="block"
    titedit.value= getUser[userId].allNote[dispEdit].noteTitle
    ctnedit.value=getUser[userId].allNote[dispEdit].noteContent
}
// button adding note to getUser[userId].allNote
const addNoteBtn=()=>{
    if(tit.value=="" || ctn.value==""){
        alert("You must fill in the title and your story")
    }
    else{
        let eachNote={
            noteTitle:tit.value,
            noteContent:ctn.value,
            noteDate: new Date().toLocaleString()
        }
        getUser[userId].allNote.push(eachNote)
        localStorage.setItem('allTodoUsers', JSON.stringify(getUser))
        console.log(getUser[userId].allNote);
        displayallnote()
        document.querySelector('.addNoteBox').style.display="none"
    }
}

// button editing note from getUser[userId].allNote
const editNoteBtn=(editNote)=>{

        let eachNote={
            noteTitle:titedit.value,
            noteContent:ctnedit.value,
            noteDate: new Date().toLocaleString()
        }
        getUser[userId].allNote.splice(editNote,1,eachNote)
        localStorage.setItem('allTodoUsers', JSON.stringify(getUser))
        displayallnote()
        displayaNote.innerHTML=`
        <div class="d-flex" style="justify-content:space-between">
            <button class="btn btn-success addNoteBtn" onclick="displayeEditNoteBox(${editNote})">Edit Note</button> <button class="btn btn-danger addNoteBtn" onclick="deleteNoteBox(${editNote})">Delete Note</button>
        </div>
        <h3 class="mt-3">${allNote[editNote].noteTitle}</h3>
        <p style="overflow-y:scroll; height:75vh" class="bordfer">${allNote[editNote].noteContent}</p>
        ` 
        document.querySelector('.editNoteBox').style.display="none"
}


// button displaying complete note
const showFullNote=(editNote)=>{
    displayaNote.innerHTML=`
    <div class="d-flex" style="justify-content:space-between">
     <button class="btn btn-success addNoteBtn" onclick="displayeEditNoteBox(${editNote})">Edit Note</button> <button class="btn btn-danger addNoteBtn" onclick="deleteNoteBox(${editNote})">Delete Note</button>
    </div>
    <h3 class="mt-3">${allNote[editNote].noteTitle}</h3>
    <p style="overflow-y:scroll; height:60vh" class="bordfer">${allNote[editNote].noteContent}</p>
    ` 
}

const deleteNoteBox=(editNote)=>{
    allNote.splice(editNote,1)
    displayallnote()
    localStorage.setItem('allTodoUsers', JSON.stringify(getUser))
    displayaNote.innerHTML=`
  
    ` 
}

// todo code
let allTodo=getUser[userId].allTodo

const displaytodo=()=>{
    console.log(allTodo);
    if(getUser[userId].allTodo==""){
        displayTodo.innerHTML="You have not add any todo click the add button to start"
    }
    else{
        displayTodo.innerHTML=""
        allTodo.map((tod, i)=>{
            displayTodo.innerHTML+=`
            <div class="d-flex w-100" style="gap:20px; cursor:pointer">
                <p class="pt-3">${i+1}</p>
                <div style="background:rgba(128, 128, 128, 0.218); border-radius:10px; justify-content:space-between " id="" class="d-flex pt-4 p-2 mt-2  w-100"">
                    <p class="w-50">${tod.todoContent}</p>
                    <p class="w-50" style="text-align:center !important">Time: ${tod.todoTime}</p>
                    <div class="w-50 text-center">
                        <button class="btn btn-danger" onclick="deletTodo(${i})"><i class="ri-delete-bin-2-line"></i></button>
                        <button class="btn btn-success" onclick="displayeditTodo(${i})"><i class="ri-edit-2-fill"></i></button>
                    </div>
                </div>
            </div>`
        }) 
    }
}
displaytodo()
const displayAddTodoBox=()=>{
    document.querySelector('.addTodoBox').style.display="block"
}

const addTodoBtn=()=>{
    if(todoCtn.value==""){
        alert("Your todo can't be empty")
    }
    else{
        
        if(todoTm.value==""){
            let eachTodoOne={
                todoContent:todoCtn.value,
                todoTime:"No time set for todo",
            }
            allTodo.push(eachTodoOne)
            localStorage.setItem('allTodoUsers', JSON.stringify(getUser))
            displaytodo()
            document.querySelector('.addTodoBox').style.display="none"}
        else{
            let eachTodoTwo={
                todoContent:todoCtn.value,
                todoTime:todoTm.value,
            }
            allTodo.push(eachTodoTwo)
            localStorage.setItem('allTodoUsers', JSON.stringify(getUser))
            displaytodo()
            document.querySelector('.addTodoBox').style.display="none"
        }
    }
}

const deletTodo=(takeaway)=>{
    allTodo.splice(takeaway,1)
    displaytodo()
    localStorage.setItem('allTodoUsers', JSON.stringify(getUser))
}

const displayeditTodo=(rep)=>{
    todoeditingdiv.innerHTML=`
    <div class="editTodoBox shadow">
        <input type="text" name="" id="todoeditCtn" placeholder="Todo content" class="form-control"> <br>
        <input type="time" name="" id="todoeditTm" placeholder="Set Time" class="form-control"> <br>
        <button class="btn btn-success mt-3 w-100" onclick="editTodoBtn(${rep})" style="cursor: pointer;">Done</button>
    </div>
    `
    document.querySelector('.editTodoBox').style.display="block"
    todoeditCtn.value=allTodo[rep].todoContent
    todoeditTm.value=allTodo[rep].todoTime
}

const editTodoBtn=(replace)=>{
    let replaceObj={
        todoContent:todoeditCtn.value,
        todoTime:todoeditTm.value
    }
    getUser[userId].allTodo.splice(replace,1,replaceObj)
    localStorage.setItem('allTodoUsers', JSON.stringify(getUser))
    displaytodo()
    document.querySelector('.editTodoBox').style.display="none"
}