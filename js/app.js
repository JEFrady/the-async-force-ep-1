///// Person 4 Details
let personFour = new XMLHttpRequest();

personFour.addEventListener('load', function(res) {
    // console.log('response', res);
    document.getElementById("person4Name").innerHTML = JSON.parse(res.currentTarget.response).name;

    let personFourWorld = new XMLHttpRequest();
    personFourWorld.addEventListener('load', function(res) {
        document.getElementById("person4HomeWorld").innerHTML = JSON.parse(res.currentTarget.response).name;
    })
    personFourWorld.open('Get', 'https://swapi.co/api/planets/1/');
    personFourWorld.send();
    
})
personFour.open('Get', 'https://swapi.co/api/people/1');
personFour.send();

//// Person 14 Details
let personFourteen = new XMLHttpRequest();

personFourteen.addEventListener('load', function(res) {
    // console.log('response', res);
    document.getElementById("person14Name").innerHTML = JSON.parse(res.currentTarget.response).name;

    let personFourteenSpecies = new XMLHttpRequest();
    personFourteenSpecies.addEventListener('load', function(res) {
        // console.log('response', res);
        document.getElementById("person14Species").innerHTML = JSON.parse(res.currentTarget.response).name;
    })
    personFourteenSpecies.open('Get', 'https://swapi.co/api/species/1/');
    personFourteenSpecies.send();
    
})
personFourteen.open('Get', 'https://swapi.co/api/people/14/');
personFourteen.send();

//// List of all films

let films = new XMLHttpRequest();

films.addEventListener('load', function(res) {
    let listName = document.getElementById("filmList");
    let films = JSON.parse(res.currentTarget.response).results;
    for (let i=0; i<films.length; i++) {
        let listElement = document.createElement('li');
        listElement.setAttribute('id', 'filmDetails')
        listName.appendChild(listElement);
            let hTwo = document.createElement('h2');
            hTwo.innerHTML = films[i].title;
            listElement.appendChild(hTwo);

            let planets = films[i].planets;
            let orList = document.createElement('ul');
            orList.innerHTML = 'Films Planets:';
            listElement.appendChild(orList);

            for (let j=0; j<planets.length; j++){
                let planetItem = document.createElement('li');
                let pURL = planets[j];
                function getplanetinfo() {
                    let getPlanet = new XMLHttpRequest();
                    getPlanet.addEventListener('load', function(res) {
                    console.log('response', res);
                    planetItem.innerHTML = JSON.parse(res.currentTarget.response).name;
                    })
                    getPlanet.open('Get', pURL);
                    getPlanet.send();
                }
                getplanetinfo();
                orList.appendChild(planetItem);




            }

    }  
})
films.open('Get', 'https://swapi.co/api/films/');
films.send();