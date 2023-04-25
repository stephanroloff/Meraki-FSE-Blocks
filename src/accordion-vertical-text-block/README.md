In order to add a new slide in the accordion, you need to go to:

1 - accordion-vertical.js and add a new line in MY_TEMPLATE

['core/group', { className: 'slide-4 slide slide-extra' }, [['core/group', { className: 'content' }]]]

2- accordion-vertical.scss and add:

.slide-4 {
    background-color: rgb(64, 61, 8);
    position: absolute;
    top: 0;
    width: 75%;
    height: 100%;
    border: 1px solid black;
    transition: 1s;
}
