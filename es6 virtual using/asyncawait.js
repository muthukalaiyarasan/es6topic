let aa=153;
let b=aa;

let sum=0;
function xx(){
    return new Promise((r,s)=>{
      while(aa!=0){
         let rem=aa%10;
          aa=(aa-rem)/10;
          sum=sum+(rem*rem*rem);
          
      }
      r(sum)
    })
}

function y(sum){
    return new Promise((r,s)=>{
      if(b==sum){
         r("this is armstrong")
         }
      else{
         s("not a armstrong")
        }
    })
}
async function check(){
     try{
       let sum=await xx()
       let b=await y(sum)
       console.log(b)
     }
     catch{
       console.log("error")
     }
}
check()