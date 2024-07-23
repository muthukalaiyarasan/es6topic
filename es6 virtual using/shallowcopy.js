// object in spread operator
let x={a:22,b:13}
let y={...x}
y.c=30
console.log(x,y)
//array in spread operator
 let a=[11,33,5,10]
 let b=[...a]
 b.x=20
 console.log(a,b)

 //object in json stringify
 let s={name:"kalai",age:21,course:"cse"}
 let t=JSON.parse(JSON.stringify(s))
 t.native="tenkasi"
 console.log(t)
 //array in json stringify
 let q=["fruit","vegitable","animals"]
 let w=JSON.parse(JSON.stringify(q))
  w.push("birds")
  console.log(w)

  //object in objectassign

  let d={aaa:"res",
          sss:22,
        district:"tenkasi"}
        let z=Object.assign({},d)
        z.d="www"
        console.log(z)

        //array in object assign
     let c=[1,3,6,44]
     let aa=Object.assign([],c)
       aa.push(50)
       console.log(aa)

