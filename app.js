window.addEventListener('load', async () => {
    const subscribeBtn = document.getElementById('subscribe');

    let serviceWorker = await navigator.serviceWorker.register('./sw.js');
    console.log(serviceWorker);

    subscribeBtn.addEventListener('click', async () => {
        let sw = await navigator.serviceWorker.ready;
        let clientId = sw.pushManager.subscribe({
            userVisibleOnly:true,
            applicationServerKey:'BLRZQG9aYYcuQzxrdE8eelNPycd5ZhkDMptVABfec2MFNa7Wp8-n1CisyGpqecIqdvvsQO8kIUz-t-J0_XdZKhw'
        })
        console.log(clientId);
        console.log(JSON.stringify(clientId));

    })
});

