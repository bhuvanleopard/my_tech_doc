export interface User {

    id: string;
    name: string;
    avatarUrl?:string;
    bio:string;
};

export interface UserService {

    getUser(id:string): Promise<User>;
};
