const tituloInput = document.getElementById("tituloTarea");
const textarea = document.querySelector("textarea");
const urgent = document.getElementById("urgenteCheck")
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");


addBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    const titulo = tituloInput.value;
    const comentario = textarea.value;

    if(titulo !=='' && comentario !==''){
        const li = document.createElement("li");

        const h2 = document.createElement("h2");
        const p = document.createElement("p");

        h2.textContent = titulo;
        p.textContent = comentario;

        li.appendChild(addDeleteBtn());

        if(urgent.checked){
            const span = document.createElement("span")
            span.className = 'urgente'
            span.textContent = 'urgente'
            h2.appendChild(span);
        }

        li.appendChild(h2);
        li.appendChild(p);
        ul.appendChild(li);

        
        tituloInput.value = "";
        textarea.value = "";
        urgent.checked = false;
        empty.style.display = "none";
    }

})

function addDeleteBtn(){
        const button = document.createElement("button")
        button.textContent = 'x'
        button.classList.add("btn-delete")

        button.addEventListener("click",(e)=>{
            const elem = e.target.parentElement
            ul.removeChild(elem) 

            const countLi = document.querySelectorAll('li')

            if(countLi.length ===0){
                empty.style.display = "block"
            }


        })


        return button
}


