import type { User } from "./types"

const FullProfile = ({user}:{user:User}) => {
  return (
    <div>
        <svg>
            <image href={user.avatarUrl}/>
        </svg>
        <span>{user.name}</span>
        <span>{user.id}</span>
        <p>{user.bio}</p>

    </div>
  )
}

export const CompactProfile = (  
  {user}:{user:User}

)=>{

  return(

    <div>

      <svg>
        <image href={user.avatarUrl}/>
      </svg>
      <span>{user.name}</span>
    </div>
  )
}


export default FullProfile