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