import LocalStorageService from "./LocalStorageService.js";

const Save = () => {
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const type = document.getElementById("type").value;
    const CreatedDate = document.getElementById("dateCreated").value
    let times = document.getElementById("times").value
    const newGoal = {
        name,
        description,
        type,
        CreatedDate
    }

    if(name == '' || description == '' || type == '') {
        ErrorMessage(true)
        return false;
    }

    if(type != 103)
    {
        times = 0;
    }

    console.log(type)
    console.log(times)

    if(type == 103 && times == '')
    {
        ErrorMessage(true);
        return false;
    }

    LocalStorageService.SetItem("goals", newGoal)
    SuccessMessage();
}
const ReadGoals = () => {
    const goals = LocalStorageService.GetItem('goals')

    for(const item of goals)
    {
        const html = `
            <li class="list-group-item  p-4" aria-disabled="true">
                <p>
                    ${item.name}
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                        Simple goal
                        <span class="visually-hidden">unread messages</span>
                    </span>
                </p>
                <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25"
                    aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar" style="width: 25%">25%</div>
                </div>
                <div class="d-grid gap-2 mt-4">
                    <button class="btn btn-light" type="button">Record</button>
                </div>
            </li>
        `
        document.querySelector("#listGoals").innerHTML += html
    }
    

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

export { Save, CleanModal, ReadGoals }