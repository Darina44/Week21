document.addEventListener("DOMContentLoaded", function (event) {
    fetch("https://api.github.com/users/Darina44"
    {
            headers: {
                "Content-Type": 'application/json;'
            }
        }
    )
        .then(response => response.json())
        .then(user => {
            document.getElementById("avatar").src = user.avatar_url;
            document.getElementById("userName").innerText = user.name;
        })
        .catch(error) => console.log(error);
});