import { useEffect, useState } from "react"
import { type User, type UserService } from "./types"

function useUserProfile({id, service}:{id:string, service:UserService}){

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=>{

        let cancelled = false;
        setLoading(()=>true);

        service.getUser(id)
        .then(data=>{

            if(!cancelled){

                setUser(data);
                setLoading(status=>!status);
            }
        })
        
        return(()=>{

            cancelled = true;
        })

    },[id,service])

    return {user, loading};
}

export default useUserProfile