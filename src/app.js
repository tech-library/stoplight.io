/* eslint-disable */
import './assets/scss/app.scss';

const header = document.querySelector( '.js-header' );
const headerClassName = 'l-header--with-background';

function amountScrolled() {
    if ( window.pageYOffset > 20 ) {
        header.classList.add(headerClassName);
    } else {
        header.classList.remove(headerClassName);
    }
}

window.addEventListener('scroll', amountScrolled, false);
