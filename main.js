const genin = document.getElementsByClassName('.btn1')
const chunin = document.getElementsByClassName('.btn2')
const jonin = document.getElementsByClassName('rank3')
const img = document.getElementById('#img')

 function genin_show(){
    this.genin.classList.add("flex")
    this.img.classList.add("hide")
    this.chunin.classList.remove('flex')
    this.jonin.classList.remove('flex')
 }

 function chunin_show(){
    this.chunin.classList.add("flex")
    this.img.classList.add("hide")
    this.genin.classList.remove('flex')
    this.jonin.classList.remove('flex')
 }

 function jonin_show(){
    this.jonin.classList.add("flex")
    this.img.classList.add("hide")
    this.genin.classList.remove("flex")
    this.chunin.classList.remove("flex")
 }