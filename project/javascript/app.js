import { Save, CleanModal, ReadGoals } from "./ManagerGoal.js";
import NewDate from "./CreateDate.js";

function init() {
    ReadGoals()
    document.getElementById("btn-create").addEventListener('click', Save);
    document.getElementById("dateCreated").value = NewDate()
    for(let element of document.getElementsByClassName('btnClose'))
    {
        element.addEventListener('click', CleanModal);
    }
}

init()