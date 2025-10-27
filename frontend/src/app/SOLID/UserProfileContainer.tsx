import type { User, UserService } from "./types"
import useUserProfile from "./useUserProfile"

const UserProfileContainer = ({id, View, service}:{id:string, View:React.FC<{user: User}>, service:UserService}) => {
  
    const {user, loading} = useUserProfile({id, service});

    if(loading){

        return <span>loading...</span>
    };

    if(!user){

        return <span>no user found</span>
    };
    
    return(

        <View user={user!}/>
    )
}

export default UserProfileContainer