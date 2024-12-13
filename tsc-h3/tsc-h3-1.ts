interface Isom {
    firstNum:number
    secNum:number

}
function area(item:Isom):number{
    let result:number = item.firstNum * item.secNum
    return result
}
let rectangle:number = area({firstNum:5,secNum:10})
console.log(rectangle)