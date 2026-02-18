const form = document.querySelector('form')
// This is used here to get the empty value at the start time
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
    e.preventDefault() // used to prevent the default method of form like get or post
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height === "" || height <= 0 || isNaN(height)){
        result.innerHTML='Please Give a valid Height' ;
    } else if(weight === "" || weight <= 0 || isNaN(weight)){
        result.innerHTML='Please Give a valid Weight' ;
    }else{
       const bmi= (weight/((height*height)/10000)).toFixed(2)
        // Show the result
        result.innerHTML=`<span>${bmi}</span>`
    }
    
})

// value is used to get the value and parseInt is used to convert that returnd string into integer