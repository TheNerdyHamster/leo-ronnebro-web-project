import './style.scss';

export default function () {
    window.addEventListener('load', () => {
        const header = document.createElement('h1');
        header.innerText = 'Parcel ❤️ TS & SCSS';

        const body = document.querySelector('body');
        body.appendChild(header);
    });
}
