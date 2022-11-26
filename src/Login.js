import React from 'react';
import {useDispatch} from 'react-redux';
import {login} from './Features/user'
function Login() {
    const dispatch = useDispatch();
    return (
        <div>
            <button 
            onClick={()=>dispatch(login({ nom : "thamer", prenom: "hamdi", email: "hamdithamer99@gmail.com", adress: "Om somaa /Souk lahad /Kebili"}))}
            >se connecter !</button>
        </div>
    );
}

export default Login;