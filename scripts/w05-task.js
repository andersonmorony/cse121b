/* W05: Programming Tasks */

/* Declare and initialize global variables */
const  templeElement = document.querySelector("#temples");
const templeList = [];

/* async displayTemples Function */
const displayTemples = async (temples) => {
    temples.forEach(item => {
        let article = document.createElement('article');
        const h3 = document.createElement('h3')
        h3.innerText = item.templeName
        const img = document.createElement('img')
        img.setAttribute('src', item.imageUrl)
        img.setAttribute('atl', item.location)
        article.appendChild(h3)
        article.appendChild(img)
        templeElement.appendChild(article)
    });
}
/* async getTemples Function using fetch()*/
async function getTemples() {
    const resp = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json')
    const data = await resp.json();
    data.forEach(temple => templeList.push(temple))
    displayTemples(templeList)
}

/* reset Function */
const reset = () => {
    templeElement.innerHTML = ''
}


/* filterTemples Function */
const filterTemples = (temples) =>{
    reset();
    const filter = document.getElementById("filtered").value 
    let templesFilted;
    switch(filter)
    {
        case 'utah':
            templesFilted = temples.filter(item => item.location.indexOf("Utah") >= 0)
            displayTemples(templesFilted)
            break;
        case 'notutah':
            templesFilted = temples.filter((item) => {
                return !item.location.includes('Utah')
            })
            displayTemples(templesFilted)
            break;
        case 'older':
            templesFilted = temples.filter((item) => {
                var date = converDate(item.dedicated);
                return date <  new Date(1950, 0, 1);
            })
            displayTemples(templesFilted)
            break;
        case 'all':
            displayTemples(temples)
            break;
    }
}

function converDate(dateString)
{
    const parts = dateString.split(', ');

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const monthIndex = monthNames.indexOf(parts[1]);
    return new Date(parts[0], monthIndex, parts[2]);
}


getTemples();

/* Event Listener */
document.querySelector('#filtered').addEventListener('change', () => {filterTemples(templeList)});