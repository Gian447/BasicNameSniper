const fetch = require('node-fetch');
const payload = {
    'agent': {
        'name': 'Minecraft',
        'version': 1
    },
    'username': 'username',
    'password': 'password'
}
fetch('https://authserver.mojang.com/authenticate', { method: 'POST', body: JSON.stringify(payload), headers: {'content-type':'application/json'}})
.then(res => res.json())
.then(response => {
    const token = response.accessToken;
    fetch('https://api.minecraftservices.com/minecraft/profile/name/<name>', {method: 'PUT', headers: {'content-type': 'application/json', 'authorization': `Bearer ${token}`}})
    .then(res1 => res1.json())
    .then(response2 => console.log(response2));
});