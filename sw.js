self.addEventListener('push', e => {
    console.log(e.data.json());
    let options = {
        body: 'Nqkakkuw tekst',
        icon: 'logomm.png'
    }
    e.waitUntil(self.registration.showNotification('New Order',options))
})