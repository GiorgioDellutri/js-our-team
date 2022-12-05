/* 
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!


/* Wayne Barnett  Founder & CEO     wayne-barnett-founder-ceo.jpg
Angela Caroll  Chief Editor      angela-caroll-chief-editor.jpg
Walter Gordon  Office Manager    walter-gordon-office-manager.jpg
Angela Lopez   Social Media Manager  angela-lopez-social-media-manager.jpg
Scott Estrada  Developer         scott-estrada-developer.jpg
 Barbara Ramos  Graphic Designer  barbara-ramos-graphic-designer.jpg? */


let namesContainer = document.getElementById('name-container');
let surnamesContainer = document.getElementById('surnames-container');
let roleContainer = document.getElementById('role-container');
let photoContainer = document.getElementById('photo-container');
// Creo l'array di oggetti
const data = [
    {
        name : 'Wayne', 
        lastname : 'Barnett',
        role : 'Founder & CEO',
        photo : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name : 'Angela', 
        lastname : 'Caroll',
        role : 'Chief Editor',
        photo : 'angela-caroll-chief-editor.jpg'
    },
    {
        name : 'Walter', 
        lastname : 'Gordon',
        role : 'Office Manager',
        photo : 'walter-gordon-office-manager.jpg'
    },
    {
        name : 'Angela', 
        lastname : 'Lopez',
        role : 'Social Media Manager',
        photo : 'angela-lopez-social-media-manager.jpg'
    },
    {
        name : 'Scott', 
        lastname : 'Estrada',
        role : 'Developer',
        photo : 'scott-estrada-developer.jpg'
    },
    {
        name : 'Barbara', 
        lastname : 'Ramos',
        role : 'Graphic Designer',
        photo : 'barbara-ramos-graphic-designer.jpg'
    },
]

// Stampo su console le info di ogni membro 

for (let key in data){
    console.log(data[key])
}

// Stampo le info dei singoli membri del team sul DOM

for (let i = 0; i < data.length; i++){
    const pElement = document.createElement('p');
    pElement.innerHTML = data[i].name;
    namesContainer.appendChild(pElement);
}

for (let i = 0; i < data.length; i++){
    const pElement = document.createElement('p');
    pElement.innerHTML = data[i].lastname;
    surnamesContainer.appendChild(pElement);
}

for (let i = 0; i < data.length; i++){
    const pElement = document.createElement('p');
    pElement.innerHTML = data[i].role;
    roleContainer.appendChild(pElement);
}

for (let i = 0; i < data.length; i++){
    const pElement = document.createElement('p');
    pElement.innerHTML = data[i].photo;
    photoContainer.appendChild(pElement);
}



// const cardContainer = document.querySelector('div.card-container')
// cardContainer.classList.add('d-flex', 'flex-wrap');

// document.getElementById("").innerHTML = `<img src="wayne-barnett-founder-ceo.jpg" />`;



//     // CREO IL DIV
//     for (let i =0; i < 6; i++){
//         const card = document.createElement('div');
//         card.classList.add('size', 'm-3');
//         cardContainer.appendChild(card)
//     }




