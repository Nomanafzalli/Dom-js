                          // DOM Manipulation 
//   Selecting with id 
// Document.getElementById("myId")    

// Selecting with class 

// Document.getElementByClassName("myClass")    

// Selecting with Tag 

// Document.getElementByTagName("p")    

// let heading=document.getElementById("heading");

// console.log(heading);
// console.dir(heading);

// let paragraph=document.getElementsByClassName("paragraph")
// console.log(paragraph)
// console.dir(paragraph)

                                //   Query selector 
//  document.querySelector(ID/TAG/CLASS)
//  is mn hm ya 3no pass kr skty hn ya khud detact kr la ga hamin kis trha k data chya  

// let paragraph=document.querySelector('p')   // return first element 
// console.dir(paragraph)

// let paragraphAll=document.querySelectorAll('p')  // for getting all element 

// console.dir(paragraphAll)

// id k liya #id lgya jta 
// let para = document.querySelector('.paragraph')
// console.dir(para)

                                                //   Dom Properties 

// tagName : return tags for element Node 
// innerHtml : return the plan text and inner content in the element 
// innerText : return the text content of the element and its childern 
// textContent : return texttual content even for hidden element 

// kis b element k tag name print krwana k liya tagName krty hn 
// console.log(para.tagName ) it give me P 

// let heading = document.getElementsByTagName('h2')
// console.log(heading[0].innerText);

//  heading[0].innerText = heading[0].innerText + "Apna college";

// let boxing = document.getElementsByClassName("box");
// console.log(boxing);
// boxing[0].innerText="tHIS IS DIV 1"
// boxing[1].innerText="This is div 2"
// boxing[2].innerText="THis is div 3 "

// let idx = 1
// for(box of boxing){
//     box.innerText = `new unique value of ${idx}`;
//     idx++;
// }

                                                // Attributes 

    // Get attributes :  getting the value of the attribute    it give us the value of id like in html id ="box"  so it return box  
//     Set Attribute : seting the value of attribute  e.g 
//     let classs = document.querySelector('div')
// console.log(classs.setAttribute('class' , 'newClass'))                                    

//   let div = document.querySelector('div')
//   console.log(div)      
//   getting the value of the attribute    it give us the value of id like in html id ="box"  so it return box 
// let id =div.getAttribute("id")     
// console.log(id) 

// let name =div.getAttribute("name")     
// console.log(name) 

// let classs =div.getAttribute("class")     
// console.log(classs) 

let classs = document.querySelector('div')
console.log(classs.setAttribute('class' , 'newClass'))

                                                      // STYLE ATTRIBUTE 
// node.style 

let div = document.querySelector('div')
console.log(div.style)

div.style.backgroundColor = "green";
div.style.fontSize = "20px";
div.innerText = "SYSTEM";
// div.style.visibility = "hidden"






