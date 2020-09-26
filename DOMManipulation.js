console.log('script loaded')
window.onload = () => {
    console.log('window onload called')
    let pTag = document.createElement('p');

    pTag.innerText = 'hello there';
    pTag.style.textAlign = 'center';
    pTag.style.background = '#dfa160';

    document.body.appendChild(pTag);
}