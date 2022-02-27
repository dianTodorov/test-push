window.addEventListener('load', async () => {
    const subscribeBtn = document.getElementById('subscribe');

    let serviceWorker = await navigator.serviceWorker.register('./sw.js');
    console.log(serviceWorker);

    subscribeBtn.addEventListener('click', async () => {
        let sw = await navigator.serviceWorker.ready;
        let clientId = await sw.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: 'BLRZQG9aYYcuQzxrdE8eelNPycd5ZhkDMptVABfec2MFNa7Wp8-n1CisyGpqecIqdvvsQO8kIUz-t-J0_XdZKhw'
        })
        console.log(clientId);
        let res = JSON.parse(JSON.stringify(clientId));
        await postData(res);
    })
});

async function postData(sub) {
    
    let subObjec = {
        endpoint: sub.endpoint,
        p256dh: sub.keys.p256dh,
        auth: sub.keys.auth
    }
    let respons = await fetch('https://parseapi.back4app.com/classes/clients', {
        method: 'POST',
        headers: {
            'X-Parse-Application-Id': 'jw9783aZYU2L8TiEIF4RfhK9SP9q3m4eiPXam3nY',
            'X-Parse-REST-API-Key': 'NjNWsnHJNXBF0UzdNbST2e14sU5AnYNHsh9WjO16'
        },
        body: JSON.stringify(subObjec)
    })

    let data = await respons.json();
    console.log(data);
}

