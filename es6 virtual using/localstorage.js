localStorage.setItem("kalai",5)
localStorage.setItem("muthu","frond end developer")
localStorage.setItem("s",[33,6,7,4])
localStorage.setItem("kal",JSON.stringify({a:3,b:45}))
JSON.parse(localStorage.getItem(kal))
localStorage.removeItem("kalai")
localStorage.clear()

//session storage

sessionStorage.setItem("k",34)
sessionStorage.setItem("mmm","kalai")
sessionStorage.setItem("sm",[2,44,33])
sessionStorage.setItem("kalai",JSON.stringify({a:3,b:45}))
JSON.parse(sessionStorage.getItem(mmm))
sessionStorage.removeItem("sm")
sessionStorage.clear()
