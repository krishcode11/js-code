# Project Related to DOM

## project link
[Click here]https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html

# solution code 

## project 1

``` javascript
console.log("krish")
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(superman){ console.log(superman)
    console.log(superman.target)
    if(superman.target.id === 'grey'){
      body.style.backgroundColor = superman.target.id;
    }
    if(superman.target.id === 'white'){
      body.style.backgroundColor = superman.target.id;
    }
    if(superman.target.id === 'blue'){
      body.style.backgroundColor = superman.target.id;
    }
    if(superman.target.id === 'yellow'){
      body.style.backgroundColor = superman.target.id;
    }
  })
  });

```

### project 2 
project 2  solution

```javascript
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');


  if(height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;

  } else if(weight === '' || height < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;

  }  else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    
    results.innerHTML = `<span>${bmi}</span>`
    
  }

})