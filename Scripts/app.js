// IIFE -Immediately Ivoked Function Expression
(function(){


    // named function
    function Start()
    {
        console.log('%cApp Started...', "color:white; font-size: 24px;");   

       let title = document.title;

       title = title.toLowerCase();

       console.log(`The title of the page is ${title}`);

       let navAnchors = document.querySelectorAll("li a");

       for (const anchor of navAnchors) 
       {

        let anchorString = anchor.getAttribute("href");
        anchorString = anchorString.substr(0,anchorString.length-5);

        if((title === "home") && (anchorString === "index") || (title === anchorString))
        {
            anchor.className = "nav-link active";
        }
       }
    } 
    
    document.getElementById("pro1").innerHTML = 
       "My first project was developing a website for a real state agent."+
       "Realtor's website is literally their face on the world wide web. So it needs to be attractive."+
       "There was the information about the houses for sale including their details pictures and price.";
    document.getElementById("pro3").innerHTML = 
        "Currently I'm working on SRS documentation in Software Engineering Metholody."+
        "A software requirements specification is the basis for the entire project."+
        "It used to provide critical information to multiple teams:development, quality assurance, operations, and maintenance."
    document.getElementById("pro2").innerHTML = 
        "I worked on pandas in a team. pandas is a fast, powerful, flexible and easy to use open source data analysis"+
        "and manipulation tool, built on top of the Python programming language.this semester I'm going to learn more about Python."

    window.addEventListener("load", Start);

})();

