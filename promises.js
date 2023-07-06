let names= new Promise((resolve,reject)=>{
    let word="fifi"
    if(word==="fifi"){
        resolve("It is true");
    }
    else{
        reject("It is not true");
    }

})
names.then((message)=>{
  console.log("The word is in message" +message);
}).catch((message)=>{
    console.log("The error is in"&{message});
})

// let calculation=new Promise((resolve, reject) => {
//     let a=1+2;
//     if (a=3){
//         resolve("correct")
//     }
//     else{
//         reject('not correct')
//     }

// })
// calculation.then((messages)=>{
//     console.log("The operation is"+messages);
// }).catch("The operation is not correct"+messages)