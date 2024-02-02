/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {
    name: "Anderson Moroni Ramos",
    photo: '../images/me.jpg',
    favoriteFoods: [
        'Rice',
        'Pizza',
        'Hot Dog',
        'Brazilian Popular Foods'
    ],
    hobbies: [
        'Study',
        'Baskteball',
        'Football',
        'Play games'
    ],
    placesLived: []
}


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Jaboatao dos guararapes, PE',
        length: '19 year'
    },
    {
        place: 'Brazilian, DF',
        length: '1 year'
    },
    {
        place: 'Palmas, TO',
        length: '1 year'
    },
    {
        place: 'Recife, PE',
        length: '6 year'
    },
    {
        place: 'Sao Jose dos Pinhais, PR',
        length: '3 year'
    }
);



/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name

/* Photo with attributes */
document.querySelector("#photo").setAttribute('src', myProfile.photo)


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    const li = document.createElement('li');
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
})


/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    const li = document.createElement('li');
    li.textContent = hobbie;
    document.querySelector("#hobbies").appendChild(li);
})


/* Places Lived DataList */
for(let place of myProfile.placesLived)
{
    const dt = document.createElement('dt');
    dt.textContent = place.place;
    const dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
}

