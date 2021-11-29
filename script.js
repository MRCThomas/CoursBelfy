let users = Array();
const afficher = document.getElementById("mainPage");


function fetchJSON(fetch) {

    fetch("https://jsonplaceholder.typicode.com/users").then(response => {
        response.json().then(data => {
            users = data;
            users.forEach((user, index) => {
                console.log(`user ${index} : `, user);
                var name = document.createElement('div');
                name.setAttribute('id', user.id)
                name.innerHTML = `<p> ${user.name})<p>`;
                afficher.appendChild(name);

            })
        })
    })

}
fetchJSON;
