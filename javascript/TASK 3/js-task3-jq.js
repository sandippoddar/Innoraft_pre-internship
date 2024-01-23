

$("document").ready(()=>{
     
   
    $("#btn").click((e)=>{
        
        let fname=$("#fname").val();
        let lname=$("#lname").val();
        if(fname=="" || lname==""){
            e.preventDefault();
            alert("please fill all the field");
        }
        else{
            alert("Form submitted!! Succesfuly");
        }
    });


})