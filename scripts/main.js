

document.getElementById('tabs').innerText='Loading..';
let tabs = [];
chrome.tabs.query({}, (data) => {
    tabs = data;
    let html = '<ol>';
tabs.forEach(function (tab) {
    html = html + '<li>' + tab.url + '</li>';
});

html = html + '</ol>';
    document.getElementById('tabs').innerHTML = html;
});

/// -------------------------------
// Encryption - Decryption section
/// -------------------------------
//
// window.crypto.subtle.generateKey(
//     {
//         name: "RSA-OAEP",
//         // Consider using a 4096-bit key for systems that require long-term security
//         modulusLength: 2048,
//         publicExponent: new Uint8Array([1, 0, 1]),
//         hash: "SHA-256",
//     },
//     true,
//     ["encrypt", "decrypt"]
// ).then((keyPair) => {
//     const encryptButton = document.getElementsByName("encrypt");
//     encryptButton.addEventListener("click", () => {
//         encryptMessage(keyPair.publicKey);
//     });
//
