window.addEventListener('load', async e => {
    if ('serviceWorker' in navigator) {
        try {
            navigator.serviceWorker.register('sw.js');
            console.log('service worker registerd');
            
        } catch (error) {
            console.log('service worker registeration failed');            
        }
    }
})