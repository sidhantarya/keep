const addButton = document.querySelector('#add');

const updateLSDate= ()=>{
    const textAreaData=document.querySelectorAll('textarea'); //here data is stored in the form of array beacuse here we use queryselector all
    const notes=[];
    console.log(textAreaData);
    
    textAreaData.forEach((note)=>{
        return notes.push(note.value);

    })
     console.log(notes);

     localStorage.setItem('notes',JSON.stringify(notes))

}




const addNewNote = (text = '') => {


    const note = document.createElement('div');
    note.classList.add('note');
    const htmlData = `
        <div class=operation>
            <button class="edit"> <i class="fas fa-edit"></i></button>
            <button class="delete"> <i class="fas fa-trash-alt"></i> </button>
        </div>

        <div class="main ${text ? "":"hidden"}"> </div>
        <textarea class="${text ? "hidden":""}"></textarea> `;

     console.log( note.insertAdjacentHTML('afterbegin',htmlData ));
    // console.log(note);
    //getting the refernces

    const editButton=note.querySelector('.edit');
    const delButton=note.querySelector('.delete');
    const mainDiv=note.querySelector('.main');
    const textArea=note.querySelector('textarea');


    //deleting the node
    delButton.addEventListener('click',()=>
    {
        note.remove();
        updateLSDate();
    })

    //toggle using edit button
textArea.value=text;
mainDiv.innerHTML=text;




    editButton.addEventListener('click',()=>{
        mainDiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })

    textArea.addEventListener('change',(event)=>{
       const value = event.target.value;
       mainDiv.innerHTML=value;

       updateLSDate();
       
    })


     
     document.body.appendChild(note);

}

//getting data back from localStorage

const notes=JSON.parse(localStorage.getItem('notes'));

if(notes){ notes.forEach((note) => addNewNote(note)) };


addButton.addEventListener('click', () => addNewNote());