const URL="https://official-joke-api.appspot.com/random_joke";
let btn=document.querySelector("button");
btn.addEventListener("click",(e)=>{
    fetch(URL)
    .then(data=>{
        return data.json();
    })
    .then(joke=>{
        const element = document.querySelector("#innerdiv");
        element.innerText=joke.setup+"\n"+joke.punchline;
    })
    .catch(err=>{
        console.log("some error");
    })
});