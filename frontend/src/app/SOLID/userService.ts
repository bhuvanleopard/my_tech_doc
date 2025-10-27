import type { UserService } from "./types"

const apiUserService: UserService = {
  
    async getUser(id){

        const res = await fetch(id);
        return res.json();

    }
}

export const localUserService: UserService = {

    async getUser(id) {
        
        return JSON.parse(localStorage.getItem(id) || "{}")
    },
}

export default apiUserService