

class TokenService{
    public setIsAuthenticated=(stat:string)=>{
        localStorage.setItem("isLogin",stat);
    }
    public isAuthenticated=()=>{
        const login=localStorage.getItem("isLogin");
        return login=="true"?true:false;
    }
}

export const tokenService = new TokenService();