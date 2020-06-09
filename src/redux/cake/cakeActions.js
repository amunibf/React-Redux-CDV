import { BUY_CAKE } from "./cakeTypes";

export const buyCake = (number=1)=>({
    type : BUY_CAKE,
    payload : number
})

