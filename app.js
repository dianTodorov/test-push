window.addEventListener('load', main);

async function main() {
    let subscribeBtn = document.getElementById('subscribe');
    let notifiBtn = document.getElementById('notification-btn');

    subscribeBtn.addEventListener('click', () => {
        Notification.requestPermission();
        console.log(Notification.permission);
        if (Notification.permission == 'granted') {
            let sw = await navigator.serviceWorker.getRegistration();
            let subOject = await sw.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: 'BLRZQG9aYYcuQzxrdE8eelNPycd5ZhkDMptVABfec2MFNa7Wp8-n1CisyGpqecIqdvvsQO8kIUz-t-J0_XdZKhw'
            });
            console.log(JSON.stringify(subOject));
        }
    });

    notifiBtn.addEventListener('click', () => {
        if (Notification.permission == 'granted') {
            let message = new Notification('New message from dian', {
                body: 'Nqkakkuw tekst',
                icon: 'logomm.png'
            })
        }
    });

    let sw = await navigator.serviceWorker.register('./sw.js');
    console.log(sw);

}

