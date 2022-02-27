self.addEventListener('push', e => {
    let data = e.data.json();
    let options = {
        body: data.message,
        icon: 'logomm.png'
    }
    e.waitUntil(self.registration.showNotification(data.title, options))
})

self.addEventListener('notificationclick', (e) => {
    e.notification.close();
    clients.openWindow('https://mail.bg');
});