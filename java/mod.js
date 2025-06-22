// let box = document.querySelector(".box");
// box.innerHTML = "<strong>This is a bold description.</strong>";//Change HTML content

// let header = document.querySelector(".box");
// box.style.color='beige';
// box.style.fontsize = '24px'
// box.style.font = 'bold'

// let newParagraph = document.createElement("h1");
// newParagraph.textContent = "This is a new H1 paragraph.";


// document.body.appendChild(newParagraph);

// let p = document.querySelector('p');
// p.remove();

document.getElementById("btn").addEventListener("click", function(){
    alert("Button clicked!");
});

// document.getElementById("btn").addEventListener("dblclick", function(){
//     alert("Button clicked!");
// });

// document.getElementById("btn").addEventListener("mousedown", function(){
//     alert("Button clicked!");
// });

// document.getElementById("btn").addEventListener("mouseup", function(){
//     alert("Button clicked!");
// });

// document.getElementById("btn").addEventListener("mousemove", function(){
//     alert("Button clicked!");
// });

document.addEventListener("keydown", function(event) {
    console.log("Key pressed:", event.key);
    // console.log(event);
    
    document.querySelector('body').stylebackgroundcolor= 'green'
});




