/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Anderson Moroni"
let currentYear = new Date().getFullYear()
const profilePicture = 'images/me.jpg'


/* Step 3 - Element Variables */
let elementName = document.getElementById("name");
let elementFood = document.getElementById("food");
let elementYear = document.getElementById("year");
let elementImage = document.getElementsByTagName("img")[0];



/* Step 4 - Adding Content */
elementName.innerHTML = `<strong>${fullName}</strong>`
elementYear.textContent = currentYear
elementImage.setAttribute("src", profilePicture)
elementImage.setAttribute("alt", `Profile image of ${fullName}`)





/* Step 5 - Array */
let foods = ['Pizza', 'Hot dog', 'Sushi', 'Baberkiu']
let newFood = 'Rice';
foods.push(newFood)
elementFood.innerHTML += `${foods} <br/>`
foods.shift()
elementFood.innerHTML += `${foods} <br/>`
foods.pop()
elementFood.innerHTML += `${foods} <br/>`








