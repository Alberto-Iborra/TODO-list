const input$$ = document.querySelector('input')
const addbtn$$ = document.querySelector('.btn-add')
const ul$$ = document.querySelector('ul')
const emptyDiv = document.querySelector('.empty')
addbtn$$.addEventListener("click",(e) => {
    e.preventDefault();
    const text = input$$.value;
        if(text !== ''){
            const li$$ = document.createElement('li');
            const liP$$ = document.createElement('p');
            liP$$.textContent=text;
            li$$.appendChild(liP$$);
            li$$.appendChild(deleteButton());
            ul$$.appendChild(li$$) ;
            input$$.value='';
            emptyDiv.style.display='none'
        }  
    
})
function deleteButton () {
    const deleteBtn$$ = document.createElement('button')
    deleteBtn$$.classList.add('btn-delete')
    deleteBtn$$.textContent="X"
    deleteBtn$$.addEventListener('click',(e)=>{
        const li = e.target.parentElement;
        ul$$.removeChild(li);
    const elementlist=document.querySelectorAll('li')
    if (elementlist.length === 0) {
    emptyDiv.style.display='block'}})
    return deleteBtn$$;
}

