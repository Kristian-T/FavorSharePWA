if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/FavorSharePWA/public/sw.js')
        .then(function() { console.log('Service Worker Registered'); });
}
