const GetTypes = async () => {
    const response = await fetch("https://run.mocky.io/v3/e4fa6ed9-2e32-4e8e-ad48-8978d88c3f9a");
    const types = await response.json();
    return types;
}

export default GetTypes