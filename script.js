const tituloInput = document.getElementById("tituloTarea");
const textarea = document.querySelector("textarea");
const urgent = document.getElementById("urgenteCheck")
const addBtn = document.querySelector(".btn-add");
const addFavBtn = document.querySelector(".btn-add-fav");
const ul = document.getElementById("post");
const empty = document.querySelector(".empty");
const color =  document.getElementById("colorPick")
const categoria =  document.getElementById("categoria")
const favoritosSelect = document.getElementById("favoritos")
const favoritoBtn = document.getElementById("cargar-fav") 
const form = document.querySelector("form")

let favoritos = [
    {
        titulo: 'Perro 🐶',
        comentario: 'Sacar a pasear a Dogi para que haga sus necesidades',
        categoria: "hoy",
        colorPost: "#FF85A3",
        urgente: true
    },
    {
        titulo: 'Agua 💧',
        comentario: 'Tomar agua cada 15min para sentirse bien en el día.',
        categoria: "hoy",
        colorPost: "#B6FF85",
        urgente: true
    }
]

favoritoBtn.addEventListener("click",()=>{
    const favoritoSelec = favoritosSelect.value

    if(favoritoSelec !== 'default'){
        const buscaFav = favoritos.find(favorito => favorito.titulo === favoritoSelec)
        tituloInput.value = buscaFav.titulo
        textarea.value = buscaFav.comentario

        categoria.value = buscaFav.categoria
        color.value = buscaFav.colorPost
        urgent.checked = buscaFav.urgente

        favoritosSelect.value = "default"
    }
})

addFavBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    const tituloIn = tituloInput.value;
    const coment = textarea.value;

    if(tituloIn !=='' && coment !==''){

        favoritos.push({
            titulo: tituloIn,
            comentario: coment,
            categoria: categoria.value,
            colorPost: color.value,
            urgente: urgent.checked ? true : false
        })
        form.reset()
        alert("¡Tarea añadida a favoritos!")
        renderFavoritosSelect()
    }
})

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
        if(categoria.value === 'paraayer'){
            const span = document.createElement("span")
            span.className = 'claseUno'
            span.textContent = 'Como para ayer'
            h2.appendChild(span);
        }else if(categoria.value === 'hoy'){
            const span = document.createElement("span")
            span.className = 'claseDos'
            span.textContent = 'Hoy si o si'
            h2.appendChild(span);
        }else if(categoria.value === 'programar'){
            const span = document.createElement("span")
            span.className = 'claseTres'
            span.textContent = 'Programar'
            h2.appendChild(span);
        }

        li.appendChild(h2);
        li.appendChild(p);

        li.style.backgroundColor = `${color.value}`

        ul.appendChild(li);

        
        tituloInput.value = "";
        textarea.value = "";
        urgent.checked = false;
        empty.style.display = "none";
        color.value= "#FFDD83";
        categoria.value = "default"
    }

})

function addDeleteBtn(){
        const button = document.createElement("button")
        button.textContent = 'x'
        button.classList.add("btn-delete")

        button.addEventListener("click",(e)=>{
            const elem = e.target.parentElement
            ul.removeChild(elem) 

            const countLi = document.querySelectorAll('#post li')

            if(countLi.length ===0){
                empty.style.display = "block"
            }


        })


        return button
}

function renderFavoritosSelect(){

    favoritosSelect.innerHTML = `<option value="default">Seleccionar favorito</option>`

    favoritos.forEach(favorito=>{
        const option = document.createElement("option")
        option.setAttribute('value',favorito.titulo)
        option.textContent = favorito.titulo

        favoritosSelect.appendChild(option);
    })

}

renderFavoritosSelect()