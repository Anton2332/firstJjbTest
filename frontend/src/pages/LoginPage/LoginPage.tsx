import React, {FC, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {routeNames} from "../../router/routes";
import {IUserLoginRequest} from "../../models/IUserLoginRequest";
import userService from "../../API/userService";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import useFetching from "../../hooks/useFetching";
import {useAction} from "../../hooks/useAction";
import {fetchLoginUser} from "../../store/reducers/loginUser/loginUserActions";
import {Loader} from "../../utils/Loader";
import useCookies from "react-cookie";


const LoginPage:FC = () => {


    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const {fetchLoginUser} = useAction()

    const {loginResponse, isLoading, Error} = useTypeSelector(i => i.loginUser)

    const navigate = useNavigate();


    const OnClickEvent = () => {
        fetchLoginUser({
            username:username,
            password:password
        })
        while(true){
            if(!isLoading && Error == null){
                alert("Ok")
                navigate('/')
                break;
            }
            else if(Error != null){
                console.log(Error)
                alert("Bad")
                break;
            }
        }
    }


    return(
        <form>
            {/*UserName input */}
            <div className="form-outline mb-4">
                <input type="email" id="form2Example1" className="form-control"
                       onChange={e => setUsername(e.target.value)}/>
                <label className="form-label" htmlFor="form2Example1">Username</label>
            </div>

            {/*Password input */}
            <div className="form-outline mb-4">
                <input type="password" id="form2Example2" className="form-control"
                       onChange={e => setPassword(e.target.value)}/>
                <label className="form-label" htmlFor="form2Example2">Password</label>
            </div>

            {/*Submit button */}
            { !isLoading ?
                <button type="button" onClick={e => {
                    OnClickEvent()
                }} className="btn btn-primary btn-block mb-4">Sign in
                </button>
                : <Loader/>
            }

            {/*Register buttons */}
            <div className="text-center">
                <p>Not a member? <Link to={routeNames.REGISTER}>Register</Link></p>
            </div>
        </form>
    )
}

export default LoginPage;