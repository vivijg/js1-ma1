console.dir (document.querySelector);


//task 1
const cat = {
    complain: "Meow!",
    
    sound: function() {
        console.log("Meow!");

    }
}

cat.sound();



//task 2
const heading = document.querySelector("h3");
console.dir(document.querySelector("h3"));


//task 3
const subheading = document.querySelector("h3")
subheading.style.fontSize="2em";


//task 4
subheading.classList.add("subheading")


//Task 5 
const paragraph = document.querySelectorAll("p");
console.dir(paragraph)




//Task6
const resultContainer = document.querySelector("div");
console.dir(resultContainer);

resultContainer.innerHTML = "<p>New paragraph</p>";





//task 7
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",

    },
    {
        name: "Blurt",
        age: 21
    }
]; 


function catName(catArray) {
    for (let i = 0; i < catArray.length; i++) {
        console.dir(catArray[i].name);
    }
}

catName(cats);



//task 8

function catNameWrap(catArray) {
    
    let h5Tagged = ""; 

    for (let i = 0; i < catArray.length; i++) {
        h5Tagged += "<h5>"+ catArray[i].name +"</h5>\n"
    }
    return h5Tagged
}


console.dir(catNameWrap(cats));

//task 9


resultContainer.innerHTML +=  catNameWrap(cats);

// task 10
function catNameWrapP(catArray) {
    
    let html = ""; 

    for (let i = 0; i < catArray.length; i++) {
        html += "<div>\n";
        html += "<h5>"+ catArray[i].name +"</h5>\n";
        
        if (catArray[i].hasOwnProperty("age")){
            html += "<p>" + catArray[i].age + "</p>";
        } else {
            html += "<p>" + "Age Unknown" + "</p>";
        }
        
        html += "</div>";
    }
    return html
}
 
resultContainer.innerHTML +=  catNameWrapP(cats);
