const URL="https://official-joke-api.appspot.com/random_joke";
let btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    debugger;
    fetch(URL)
    .then(data=>{
        return data.json();
    })
    .then(joke=>{
        const element = document.querySelector("#innerdiv");
        element.innText=joke.setup+"\n"+joke.punchline;
    })
    .catch(err=>{
        console.log("some error");
    })
});