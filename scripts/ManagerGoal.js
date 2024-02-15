import guidGenerator from "./GuildGenerator.js";
import LocalStorageService from "./LocalStorageService.js";

const Save = () => {
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const type = document.getElementById("type").value;
    const CreatedDate = document.getElementById("dateCreated").value;
    let times = document.getElementById("timesChecklist").value;
    const newGoal = {
        id: guidGenerator(),
        name,
        description,
        type,
        CreatedDate,
        times,
        timesCompleted: 0,
        isCompleted: false
    }

    if(name == '' || description == '' || type == '0') {
        ErrorMessage(true)
        return false;
    }

    if(type != 103)
    {
        times = 0;
    }

    if(type == 103 && times == '')
    {
        ErrorMessage(true);
        return false;
    }
    

    LocalStorageService.SetItem("goals", newGoal)
    SuccessMessage();
    ReadGoals();
}
const ReadGoals = () => {
    const goals = LocalStorageService.GetItem('goals')
    document.querySelector("#listGoals").innerHTML = '';
    for(const item of goals)
    {
        let porcentagem;
        let message;
        let type;

        switch(item.type)
        {
            case "101":
                porcentagem = item.isCompleted ? 100 : 0;
                message = "completed";
                type = "Simple"
                break;
            case "102":
                porcentagem = 100;
                message = "Eternal Goal";
                type = "Eternal"
                break;
            case "103":
                porcentagem = (parseInt(item.timesCompleted) / parseInt(item.times)) * 100 ;
                message = `${item.timesCompleted}/${item.times}`;
                type = "Checklist"
        }

        const html = `
            <li class="list-group-item  p-4" aria-disabled="true">
                <p>
                    ${item.name}
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                        ${type}
                        <span class="visually-hidden">unread messages</span>
                    </span>
                </p>
                <p>${item.description}</p>

                <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25"
                    aria-valuemin="0" aria-valuemax="100">
                    
                    <div class="progress-bar" style="width: ${porcentagem}%">${message}</div>
                </div>
                <div class="d-grid gap-2 mt-4">
                    ${
                        item.isCompleted ? `<button disabled class="btn btn-light btn-record" data-id="${item.id}" type="button">Completed</button>` : `<button class="btn btn-light btn-record" data-id="${item.id}" type="button">Record</button>`
                    }
                    
                </div>
            </li>
        `
        
        document.querySelector("#listGoals").innerHTML += html;
    }
    
    createEventList();
}
const UpdateGoal = (guid) => {
    const goals = LocalStorageService.GetItem('goals');
    const rowToChange = goals.findIndex(item => {
        return item.id == guid;
    })

    switch(goals[rowToChange].type)
    {
        case "101":
            goals[rowToChange].isCompleted = true;
            break;
        case "102":
            goals[rowToChange].times += 1;
            break;
        case "103":
            if(parseInt(goals[rowToChange].timesCompleted) != parseInt(goals[rowToChange].times))
            {
                goals[rowToChange].timesCompleted = parseInt(goals[rowToChange].timesCompleted) + 1;
            }
            else
            {
                goals[rowToChange].isCompleted = true;
            }
    }
    localStorage.setItem('goals', JSON.stringify(goals));
    ReadGoals();
}
const ErrorMessage = (isShow = false) => {
    const html = `
        <div class="alert alert-danger alert-dismissible fade show" id="msg-error" role="alert">
            <strong>Error:</strong> All field are required!
        </div>
    `
    isShow ? document.querySelector("#message").innerHTML = html : document.querySelector("#message").innerHTML = '';
}
const SuccessMessage = () => {
    const html = `
        <div class="alert alert-success alert-dismissible fade show" id="msg-error" role="alert">
            <strong>Success:</strong> Goal Created!
        </div>
    `
    document.querySelector("#message").innerHTML = html;
}
const CleanModal = () => {
    document.getElementById("name").value = '';
    document.getElementById("description").value = '';
    document.getElementById("type").value = '';
    document.getElementById("dateCreated").value = '';
    document.querySelector("#message").innerHTML = ''
}

function createEventList()
{
    for(let element of document.getElementsByClassName('btn-record'))
    {
        element.addEventListener('click', (e) => Record(e));
    } 
}
function Record(e)
{
    const ID = e.target.dataset.id;
    UpdateGoal(ID);
}


export { Save, CleanModal, ReadGoals, UpdateGoal }