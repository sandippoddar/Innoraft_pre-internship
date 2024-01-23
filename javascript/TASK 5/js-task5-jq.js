

$("document").ready(function(){
     
    const active=$(".active");
    let overlay=$(".overlay");
    const close=$(".close");
    active.click(()=>{
        overlay.css("display","block");
    })
    close.click(()=>{
        overlay.css('display','none');
    })

    $(".touch").click(()=>{
        $(".touch").text('LEFT BAR');
    })

    $("header").click(()=>{
        $("header").css('background-color','red');
    })

    $(".extra h2").click(()=>{
         
        $(".main").fadeToggle(1000,"linear",()=>{
            alert("main-content faded");
        })
    })

})