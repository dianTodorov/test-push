self.addEventListener('push', e => {
    console.log(e.data);
    let options = {
        body: 'Nqkakkuw tekst',
        icon: 'logomm.png'
    }
    e.waitUntil(self.registration.showNotification('New Order',options))
})