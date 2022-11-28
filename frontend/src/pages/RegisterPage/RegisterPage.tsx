import React, {FC, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {routeNames} from "../../router/routes";
import userService from "../../API/userService";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const RegisterPage:FC = () => {

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [password2, setPassword2] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")

    const navigate = useNavigate();

    const OnClickEvent = () => {
        let Error = null
        let result = null
        try {
            result = userService.registerUser({
                username: username,
                password: password,
                password2: password2,
                email: email,
                first_name: firstName,
                last_name: lastName
            })
        }
        catch(e : any) {
            Error = e.toString()
        }
        if(result != null && Error == null){
            alert("Ok")
            navigate('/login/')
        }else if(Error != null){
            alert("Bad")
            console.log(Error)
        }
    }

    return (
        <form>
            {/*UserName input */}
            <div className="form-outline mb-4">
                <input type="username" id="register_form2Example1" className="form-control"
                       onChange={e => setUsername(e.target.value)}/>
                <label className="form-label" htmlFor="register_form2Example1">Username</label>
            </div>

            {/*Password input */}
            <div className="form-outline mb-4">
                <input type="password" id="register_form2Example2" className="form-control"
                       onChange={e => setPassword(e.target.value)}/>
                <label className="form-label" htmlFor="register_form2Example2">Password</label>
            </div>

            {/*Password input */}
            <div className="form-outline mb-4">
                <input type="password" id="register_form2Example3" className="form-control"
                       onChange={e => setPassword2(e.target.value)}/>
                <label className="form-label" htmlFor="register_form2Example3">Repeat password</label>
            </div>

            {/*Email input */}
            <div className="form-outline mb-4">
                <input type="email" id="register_form2Example4" className="form-control"
                       onChange={e => setEmail(e.target.value)}/>
                <label className="form-label" htmlFor="register_form2Example4">Email</label>
            </div>

            {/*First name input */}
            <div className="form-outline mb-4">
                <input type="firstname" id="register_form2Example5" className="form-control"
                       onChange={e => setFirstName(e.target.value)}/>
                <label className="form-label" htmlFor="register_form2Example5">First name</label>
            </div>

            {/*Last name input */}
            <div className="form-outline mb-4">
                <input type="lastname" id="register_form2Example6" className="form-control"
                       onChange={e => setLastName(e.target.value)}/>
                <label className="form-label" htmlFor="register_form2Example6">Last name</label>
            </div>

            {/*Submit button */}

                <button type="button" onClick={e => {
                    OnClickEvent()
                }} className="btn btn-primary btn-block mb-4">Sign up
                </button>


            {/*Register buttons */}
            <div className="text-center">
                <p>Not a member? <Link to={routeNames.REGISTER}>Register</Link></p>
            </div>
        </form>
    )
}

export default RegisterPage;