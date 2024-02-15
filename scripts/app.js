import { Save, CleanModal, ReadGoals, UpdateGoal} from "./ManagerGoal.js";
import NewDate from "./CreateDate.js";
import GetTypes from "./GetGoalType.js";

async function init() {
    ReadGoals()
    document.getElementById("btn-create").addEventListener('click', Save);
    document.getElementById("dateCreated").value = NewDate()
    for(let element of document.getElementsByClassName('btnClose'))
    {
        element.addEventListener('click', CleanModal);
    }
    document.querySelector("#type").addEventListener('change', isCheckList)  
    InsertTypes()
}



async function InsertTypes()
{
    var types = await GetTypes();
    console.log(types);
    types.forEach(type => {
        var option = document.createElement('option')
        option.innerText = type.Value
        option.setAttribute('value', type.id)
        document.getElementById('type').appendChild(option)
    });
}

function isCheckList()
{
    const type = document.querySelector("#type").value;
    if(type == 103)
    {
        document.querySelector("#times").classList.add('show');
        document.querySelector("#times").classList.remove('hiden');
    }
    else
    {
        document.querySelector("#times").classList.add('hiden');
        document.querySelector("#times").classList.remove('show');
    }
}


init()