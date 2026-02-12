const a = ()=>{
     setTimeout(()=>{
        console.log("async function 1 : ")
     }, 0);
        // setTimeout(()=>{
        // console.log("async function 2 :")
        // }, 0);
     b();
     console.log("a");
};

const b = ()=>{
     setTimeout(()=>{
        console.log("async function 2 :")
     }, 0);
     console.log("b");
     Promise.resolve().then(()=>{
         console.log("asyn function 3 : ");
     });
     Promise.resolve().then(()=>{
         console.log("asyn function 4 : ");
     });

    //  c();
};

// const c = ()=>{
//      console.log("c");
// };

a();
console.log("TEST CHANGE");

