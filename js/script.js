const arrIcons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    }
];

let container = document.querySelector(".container");
let cardIcon = document.querySelector(".card_icon");
let icon = document.querySelector("i");
let filtro = document.querySelector(".filtro");
let vai = document.querySelector(".vai")

// for (i = 0; i < arrIcons.length; i++) {
//     container.innerHTML += `
//     <div class="card_icon">
//       <i class=" ${arrIcons[i].prefix + "solid"} ${arrIcons[i].prefix}${arrIcons[i].name}" style= "color:${arrIcons[i].color};"></i>
//      <div class="name">${arrIcons[i].name}</div>
//     </div>`
// }
const arrAnimal = [], arrVegetable = [], arrUser = [];
for (i = 0; i < arrIcons.length; i++) {
    if (arrIcons[i].type === "animal") {
        arrAnimal.push(arrIcons[i])

    } else if (arrIcons[i].type === "vegetable") {
        arrVegetable.push(arrIcons[i])
    } else {
        arrUser.push(arrIcons[i])
    }
}

vai.addEventListener("click", function () {
    container.replaceChildren()
    if (filtro.value == "Animal") {
        for (i = 0; i < arrAnimal.length; i++) {
            container.innerHTML += `
            <div class="card_icon">
              <i class=" ${arrAnimal[i].prefix + "solid"} ${arrAnimal[i].prefix}${arrAnimal[i].name}" style= "color:${arrAnimal[i].color};"></i>
             <div class="name">${arrAnimal[i].name}</div>
            </div>`

        }

    } else if (filtro.value == "All") {
        for (i = 0; i < arrIcons.length; i++) {
            container.innerHTML += `
                <div class="card_icon">
                  <i class=" ${arrIcons[i].prefix + "solid"} ${arrIcons[i].prefix}${arrIcons[i].name}" style= "color:${arrIcons[i].color};"></i>
                 <div class="name">${arrIcons[i].name}</div>
                </div>`
        }
    } else if (filtro.value == "Vegetable") {
        for (i = 0; i < arrVegetable.length; i++) {
            container.innerHTML += `
                <div class="card_icon">
                  <i class=" ${arrVegetable[i].prefix + "solid"} ${arrVegetable[i].prefix}${arrVegetable[i].name}" style= "color:${arrVegetable[i].color};"></i>
                 <div class="name">${arrVegetable[i].name}</div>
                </div>`
        }
    }else if (filtro.value == "User"){
        for (i = 0; i < arrUser.length; i++) {
            container.innerHTML += `
                <div class="card_icon">
                  <i class=" ${arrUser[i].prefix + "solid"} ${arrUser[i].prefix}${arrUser[i].name}" style= "color:${arrUser[i].color};"></i>
                 <div class="name">${arrUser[i].name}</div>
                </div>`
        }
    }else{
        vai.removeEventListener
    }
});