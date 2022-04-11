import React, {createContext, useState, useContext} from "react";
import axios from "axios";

export const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

const fakeAuth = {
    isAuthenticated: false,

    async signin(email, password, cb) {

        try{
            const response = await axios.post("https://reqres.in/api/login", {email, password})
            fakeAuth.isAuthenticated = true;
            const token = response.data.token;
            return token;    
        }
        catch (err) {
            console.log(err);
            alert("Incorrect user or password")
        }
    },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    }
};

function useProvideAuth() {
    const [user, setUser] = useState(null);

    const signin = async (username, password, cb) => {
        const token = await fakeAuth.signin( username, password);
        
        setUser(token);
        console.log(user);
        cb();
        return null;
    };

    const signout = cb => {
        return fakeAuth.signout(() => {
        setUser(null);
        cb();
        });
    };

    return {
        user,
        signin,
        signout
    };
}



export function useAuth() {
    return useContext(authContext);
}
