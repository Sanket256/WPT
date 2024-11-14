function Register() {
    CheckEmpty(
        "txtName",
        "divForErrorRelatedToName",
        "Name is Required"
    )

    CheckEmpty(
        "txtAddress",
        "divForErrorRelatedToAddress",
        "Address is Required"
    )
}

function CheckEmpty(id, errorId, errotMsg){
    var ref1=document.getElementById(id);
    var ref2=document.getElementById(errorId);

    if(ref1.value == ""){
     ref2.innerText = errotMsg;
    }else{
     console.log("Hi " + ref1.value);
     ref2.innerText = "";
    }
 }