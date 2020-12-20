onmessage = (e) => {
    console.log('worker get data:', e.data);
    postMessage('data transfered');
}