async function fetchUsers() {
    try {
        let data = await fetch("https://jsonplaceholder.typicode.com/users")
        let response = await data.json();
        let user = response.forEach(a => {
            console.log("ID:"+a.id);
            console.log("Name:"+a.name);
            console.log("UserName:"+a.username);
            console.log("Email:"+a.email);
            console.log("----------------------------------------------");
        });
        
    } catch (error) {
        console.log("No Data Found");
    }
}
fetchUsers()