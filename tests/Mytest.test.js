import chef from "../src/Mytest.js";
import { assert } from "chai";
describe('Chef test',function(){
   
    it('Dish have valid name or not',function(){
        assert.isString(chef.checkMenu(),'string')
    })
     it('Check for a dish in a menu',function(){
        let dish=chef.checkMenu();
        assert.oneOf(dish,chef.dishes)
    })
})