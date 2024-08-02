let target = document.getElementById("text");
target.innerHTML = "wahoo";

// changing the background colour by selecting through the class

const selectClass = document.querySelector('.list');

if(selectClass){
    selectClass.style.backgroundColor = 'red';
}

//Creating and appending the elements

// create a new div element with some text content and append it to the body
const createDiv = document.createElement('div');

createDiv.innerHTML ='hi How are you? I think you are fine because I am not fine';

selectClass.append(createDiv);

// creating a new list and adding it to the existing ul
const createLi = document.createElement('li');
createLi.innerHTML = 'Banana-Big';


document.querySelector('.subjects').append(createLi);


// removing the elements from the DOM
target.remove()

// removing the specific child elements from the html elements
const element = document.querySelector('.in-order');

element.removeChild(element.children[0]);

// changing one of the attributes of the HTML
const change = document.getElementById('image1');
change.setAttribute('src', 'https://www.hola.com/us/horizon/square/aeb699a08c72-jim-carrey.jpg');


// add and remove the css class from an html element
target.classList.add('hukoom');
console.log(target.classList);


target.classList.remove('hukoom');
console.log(target.classList);

// Activity 5 
//  => Event handling : button that changes the content in the paragragh


const change1 = document.getElementById('content');
const button  = document.getElementById('btn');

button.addEventListener('click',()=>{
    change1.innerHTML = "Oh I see what happened here !";
})

button.addEventListener('mouseover',()=>{
    button.style.borderColor='red';
})
