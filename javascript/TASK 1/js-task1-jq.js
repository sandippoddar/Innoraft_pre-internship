// document.querySelector("button").addEventListener("click",()=>{
//     document.querySelector(".red").style.display="none";
// })


$(document).ready(()=>{
     
    $("button").click(()=>{
        
        $(".red").toggle(1000,()=>{
            alert("Toggle method called");
        })

    })



})