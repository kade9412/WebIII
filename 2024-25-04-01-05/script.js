const fetchButton = document.querySelector('button');
const unorderdList = document.querySelector('ul');
const pokediv = document.querySelector('div');

fetchButton.addEventListener('click', (e)=>{
    
        /* fetch("https://jsonplaceholder.typicode.com/albums/4/photos")
        .then(response => response.json())
        .then(json => {
            json.forEach((n) => {
                const newListItem = document.createElement('li');
                newListItem.textContent = n.title;
                unorderdList.appendChild(newListItem)
                
            });
            console.log(json.find(e => e["id"] ==10));
        }); */

  

        fetch("https://pokeapi.co/api/v2/pokemon/throh")
        .then(response => response.json())
        .then(json => {
                let name = document.createElement('h2')
                name.textContent= json.name
                pokediv.appendChild(name)

                let typeheader = document.createElement("h3")
                typeheader.textContent = "Type"
                pokediv.appendChild(typeheader)
                let type = document.createElement('p')
                type.textContent= json.types[0].type.name
                pokediv.appendChild(type)

                let abilities = document.createElement('ul')
                let ablility;
                let x = 0;
                json.abilities.forEach(element => {
                    ablility = document.createElement("li")
                    ablility.textContent = json.abilities[x].ability.name
                    abilities.appendChild(ablility)
                    x++;
                });
                let abilityHeader = document.createElement("h3")
                abilityHeader.textContent = "Abilities"
                pokediv.appendChild(abilityHeader)
                pokediv.appendChild(abilities)
            
        });

    
});

