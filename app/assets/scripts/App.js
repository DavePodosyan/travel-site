import '../styles/styles.css';
import 'lazysizes';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import CLientArea from './modules/ClientArea';

//React realted code goes here
import React from 'react'
import ReactDOM from 'react-dom'

//Import React components
import MyAmazingComponent from './modules/MyAmazingComponent'

ReactDOM.render(<MyAmazingComponent/>, document.querySelector('#my-react-example'))

if (module.hot) {
    module.hot.accept();
}


new MobileMenu();
new StickyHeader();
new CLientArea();
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60);

let modal;


document.querySelectorAll('.open-modal').forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();
        if(typeof modal == "undefined"){
            import ( /* webpackChunkName: "modal" */'./modules/Modal').then(x => {
                modal = new x.default();
                setTimeout(() => modal.openTheModal(), 20)
            }).catch(() => console.log('Modal not loaded due to error.'))
        } else {
            modal.openTheModal();
        }
    })
})