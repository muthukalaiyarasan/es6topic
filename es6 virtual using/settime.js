//normal function

function call(){
    console.log("iam kalai")
}
setTimeout(call,2000)


function add(){
    console.log("iam developer")
}
let e=setInterval(add,2000)
clearInterval(e)

//arrow function

  setTimeout(()=>{
     console.log("iam a frond end developer")
  },3000)

  let d=setInterval(()=>{
     console.log("iam fullstack developer")
  },2000)
  clearInterval(d)