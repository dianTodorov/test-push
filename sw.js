self.addEventListener('push', e => {

    let options = {
        body: 'Nqkakkuw tekst',
        icon: 'logomm.png'
    }
    e.waitUntil(self.registration.showNotification('New Order',options))
})