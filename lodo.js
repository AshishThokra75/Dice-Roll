let imgs=["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"]
let i=0
document.getElementById("image").src=imgs[i]
const roll=()=>{
    let i=Math.floor(Math.random()*imgs.length)
    document.getElementById("image").src=imgs[i]
    document.getElementById("h1").innerHTML=i+1
}
// setInterval(()=>{
//     roll()
// },3000)