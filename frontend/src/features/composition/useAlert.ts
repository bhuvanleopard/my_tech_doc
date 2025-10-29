import { useEffect, useState } from "react";
import type { Alert } from "./types";

const useAlert = ({duration=3000 , onClose}:Alert) => {
  
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(()=>{

        if(!visible)return;

        let timer = setTimeout(()=>{

            setVisible(()=>false);
            onClose?.();

        },duration);

        return(()=>{

            clearTimeout(timer)
        })
    },[visible, duration, onClose])

    return {

        visible,
        setIn:()=>setVisible(true),
        setOut:()=>setVisible(false)
    }
}

export default useAlert