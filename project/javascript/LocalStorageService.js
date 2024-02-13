const GetItem = (name) => {
    const items =  localStorage.getItem(name);
    return items !== null ? JSON.parse(items) : []
}

const SetItem = (name, object) => {
    const items = GetItem(name);
    
    items.push(object);
    localStorage.setItem(name, JSON.stringify(items))
}

export default { GetItem, SetItem }