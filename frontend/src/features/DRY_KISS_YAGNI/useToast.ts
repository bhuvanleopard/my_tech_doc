import { useEffect, useState } from "react";
import type { ToastOptions } from "./types";

function useToast({duration=3000, type="sucess"}:ToastOptions={}){

    const [message, setMessage] = useState<string | null>(null);

    useEffect(()=>{

        if(!message){

            const timer = setTimeout(()=> setMessage(null), duration);

            return(()=>clearTimeout(timer))
        }
    },[duration, message]);

    return {
        message, 
        type,
        show:(msg:string)=>setMessage(msg),
        hide:()=>setMessage(null)}
};

export default useToast