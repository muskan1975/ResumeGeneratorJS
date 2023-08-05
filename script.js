function addNewWEField() {



    //firstly we created a one new variable newNode and use document.createElement method and called textarea

    let newNode = document.createElement("textarea");
    //here we  added classlist names

    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    //here we set attributes

    //here we set attributes
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder", "Enter your qulification here");

    //again create a new variable WeOb and use method socument.getElementById and called class form-group id

    let WeOb = document.getElementById("we");
    //again create a new variable weAddButtonOb and use document.getElementById and called container class id

    let weAddButtonOb = document.getElementById("weAddButton");

    //and lastly we write a condition WeOb insert before weAddButtonOb
    //so firstly print the newNode
    WeOb.insertBefore(newNode, weAddButtonOb);

}



function addNewQField() {

    let NewNode = document.createElement("textarea");

    NewNode.classList.add("form-control");
    NewNode.classList.add("qField");
    NewNode.classList.add("mt-2");
    NewNode.setAttribute("rows", 2);
    NewNode.setAttribute("placeholder", "Enter your qualification here");


    let QOb = document.getElementById("q");

    let qAddButtonOb = document.getElementById("qAddButton");

    QOb.insertBefore(NewNode, qAddButtonOb);

}





function addNewPField(){

    let NewNode=document.createElement("textarea");

    NewNode.classList.add("form-control");
    NewNode.classList.add("PField");
    NewNode.classList.add("mt-2");
    NewNode.setAttribute("rows",2);
    NewNode.setAttribute("placeholder","Enter your qualification here");


    let POb=document.getElementById("p");

    let pAddButtonOb=document.getElementById("pAddButton");

    POb.insertBefore(NewNode,pAddButtonOb);

}



//generating cv


function generateCV() {

    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");

    
    //name
    document.getElementById("nameT2").innerHTML = nameField;

    //Contact
    document.getElementById("contactT").innerHTML = document.getElementById("nField").value;


    //email id
    document.getElementById("emailT").innerHTML = document.getElementById("emailField").value;


    //address
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    //Linkden
    document.getElementById("lkT").innerHTML = document.getElementById("lkField").value;

    //naukari.com
    document.getElementById("nkT").innerHTML = document.getElementById("nkField").value;


    //languages
    document.getElementById("langT").innerHTML = document.getElementById("langField").value;


    //Skill
    document.getElementById("skT").innerHTML = document.getElementById("skillField").value;


    //objective
    document.getElementById("objectiveT").innerHTML = document.getElementById("objField").value;


    //Qualification
    let q = document.getElementsByClassName("qField");
    let str1 = "";
    for (let e of q) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById("qT").innerHTML = str1;



    //work exprience
    let wes = document.getElementsByClassName("weField");

    let str = "";

    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML = str;


    //code for setting image


    let file=document.getElementById("imgField").files[0];
    console.log(file);

    //we are declaire a variable reader beacuse we want read the data
    let reader=new FileReader();

    //read data as data url
    reader.readAsDataURL(file);
    console.log(reader.result);

    //set the image to template

    //reader.onloadend is a listner ....when reader load end then  litstner is called function
    reader.onloadend=function(){

        //and finally put the reader.result file into src
        document.getElementById("imgT").src=reader.result;
    };
    
     document.getElementById("cv-form").style.display = "none"
     document.getElementById("cv-temp").style.display = "block";

}



//printing cv
function printCV() {
    window.print();
}




