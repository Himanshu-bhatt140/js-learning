// attachEvent()
// jQuery - on event

// document.getElementById('owl').onClick=function(){
//     alert("owl"),
//     false
// }

// types of event, timestamp event, defaultPrevented
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY, position related
// altKey, ctrlKey, shiftKey, keyCode

// event Object

// document.getElementById('images').addEventListener('click', function (e) {
//     console.log("Clicked Inside the ul");

// }, false) // here the false parameter is default we have true is also
// document.getElementById('owl').addEventListener('click', function (e) {
//     console.log("This is Owl");
//     e.stopPropagation() // normally what heppens if the value is false then it will bubble to top and it is known as event bubbling
//     // but if we make it true then what happens is that event will be captured means it will run at perdefined
//     // also if prventPropagation is used than it will not bubble up means not goes to the parent one
// }, false)


// event Propagation

// document.getElementById('google').addEventListener('click', function (e) {
//     e.preventDefault(); // it will stop the redirect means it will not allow to redirect any other than the page
//     e.stopPropagation(); // it will restrict to bubble up the event
//     console.log('Google Clicked');
// })

document.querySelector('#images').addEventListener('click', function (e) {
    e.stopPropagation();
    console.log(e.target.parentNode);
    if (e.target.tagName === 'IMG') {
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove() // if i click on li then it will remove the complete ul
        // console.log(removeIt.tagName);
    }

    // removeIt.parentNode.removeChild(removeIt)

})