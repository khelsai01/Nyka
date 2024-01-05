import { URL } from "../AuthReducer/action";
import { PRODUCT_FAILED, PRODUCT_LODING, PRODUCT_SUCCESS } from "./actionTypes"


export const  getProduct = ()=>(dispatch)=>{

    dispatch({type:PRODUCT_LODING})
    fetch(`${URL+"/products"}`).then((res)=>res.json).then((data)=>{
        dispatch({type:PRODUCT_SUCCESS,payload:data})
        console.log(data)
    }).catch(err=>{
    dispatch({type:PRODUCT_FAILED})
    })
};
