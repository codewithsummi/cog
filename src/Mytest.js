let Chef=function(){
    this.dishes=["A","B","C","D"];
}
Chef.prototype.checkMenu=function(){
    let dish=this.dishes[Math.floor(Math.random()*this.dishes.length)];
    console.log("I like : "+dish)
    return dish;
}
let chef=new Chef();
export default chef;