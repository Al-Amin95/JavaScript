 
 //increment for loop
 for (let i=0; i<=10; i++){
    console.log(i);
 }
 console.log("\n");
 
 //decrement for loop
 for (let i=10;i>=0;i--){
     console.log(i);
}
console.log("\n");

//array
let footballPlayer="Alamin";
console.log(footballPlayer);

// let footballPlayers="Alamin","Imran"; //invalid

let teamPlayer=["Yasin","Imran","Al-Amin"];
console.log(teamPlayer);
console.log(teamPlayer.length);
console.log(teamPlayer.indexOf("Imran"));
console.log(teamPlayer[0], teamPlayer[1],teamPlayer[2]);


teamPlayer.push("Shamim"); //add array element at last
console.log(teamPlayer);
teamPlayer.unshift("Bablu"); //add array element at first
console.log(teamPlayer);


teamPlayer.shift(); //remove from first
console.log(teamPlayer);
teamPlayer.pop(); //remove array element from last
console.log(teamPlayer);

teamPlayer[0]="Rakib", teamPlayer[1]="Sakib", teamPlayer[2]="Akib"; //replace array element
console.log(teamPlayer);
console.log("\n");


//print with for loop
for(let i=0; i<=teamPlayer.length-1; i++){ 
   console.log(teamPlayer[i]);
}
console.log("\n");


let product={
   brandName: "Al-Amin",
   price: 1000,
   quantity: 50,
   color: ["red", "green","yellow"],
   branch:{
      Bangladesh: "Dhaka",
      India: "Delhi",
      Pakistan: "Lahore"
   }
}
let product1={
   brandName: "Shamim",
   price: 1000,
   quantity: 50,
   color: ["red", "green","yellow"],
   branch:{
      Bangladesh: "Dhaka",
      India: "Delhi",
      Pakistan: "Lahore"
   }
}
console.log(product.brandName+"\n"+ product.price+ "\n"+ product.quantity+ "\n"+ product.color+"\n"+ product.branch.Bangladesh+"\n" +product.branch.India+"\n"+product.branch.Pakistan);

let allProduct=[product,product1];
// console.log(allProduct);

for(let i=0; i<allProduct.length; i++){
   console.log(allProduct[i]);
   console.log(allProduct[i].brandName);
}