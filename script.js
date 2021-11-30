let users = Array();
let posts = Array();
const afficherUser = document.getElementById('mainPage');
const afficherPost = document.getElementById('secondPage');
console.log(afficherUser);
console.log(afficherPost);

function fetchUser(fetch) {

    fetch("https://jsonplaceholder.typicode.com/users").then(response => {
        response.json().then(data => {

            users = data;
            users.forEach((user, index) => {
                console.log(`user ${index} : `, user);
                var name = document.createElement('div');
                name.setAttribute('id', user.id)
                name.innerHTML = `<p> ${user.name}</p>`;
                afficherUser.appendChild(name);

            })
        })
    })
}

function fetchPost(fetch) {

    fetch("https://jsonplaceholder.typicode.com/posts").then(response => {
        response.json().then(data => {

            posts = data;
            posts.forEach((post, index) => {
                console.log(`post ${index} : `, post);
                var title = document.createElement('div');
                title.setAttribute('id', post.id)
                title.innerHTML = `<p> ${post.title}</p>`;
                afficherUser.appendChild(title);


            })
        }).catch(error => {console.error(error)} )
    })
}

fetchUser(fetch);
fetchPost(fetch);
