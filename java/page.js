const quotes = [
    { 
       quote: "Programs must be written for people to read, and only incidentally for machines to execute." ,
       author: "Harold Abelson"
    },
    {
       quote:"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." ,
       author:" Martin Fowler"
    },
    {
       quote:"First, solve the problem. Then, write the code."  ,
       author: "John Johnson"
    },
    {
       quote:"Programming isn't about what you know; it's about what you can figure out." ,
       author:"Chris Pine"
    }, 
    {
       quote:"The best way to get a project done faster is to start sooner.",
       author:   "Jim Highsmith"
    },
    {
       quote:"The only way to learn a new programming language is by writing programs in it." ,
       author: "Dennis Ritchie"
    },
    { 
       quote:"Good code is its own best documentation." ,
       author: "Steve McConnell"
    },
    {
       quote:"The most important property of a program is whether it accomplishes the intention of its user.", 
       author: "C.A.R. Hoare"
    },
    {
       quote:"Simplicity is the soul of efficiency." ,
       author:"Austin Freeman"
    }
];

function generateQuote() {
    let randomIndex =
    Math.floor(Math.random () * quotes.length);
    let quoteText =
    quotes[randomIndex].quote;
    let authorText =
    quotes[randomIndex].author;
    
    console.log(randomIndex)

    document.getElementById("quote").textContent
    = `"${quotetext}"`;
    document.getElementById("author").textContent
     = `-${authortext}`;
}

generateQuote();






   




































