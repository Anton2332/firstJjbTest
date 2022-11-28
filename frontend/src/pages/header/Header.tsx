import {Link} from "react-router-dom";
import {routeNames} from "../../router/routes";
import React, {useState} from "react";
import {useAction} from "../../hooks/useAction";
import {useTypeSelector} from "../../hooks/useTypeSelector";


function Header(){

    const {isAuth} = useTypeSelector(i => i.loginUser)
    const {fetchLogoutUser} = useAction()

    return (
        <div className="container">
            <header
                className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <Link to={routeNames.MAIN} className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">LOGO</Link>

                <div className="col-md-3 text-end">
                    {
                        isAuth ?
                        <Link to={routeNames.LOGIN} onClick={e => {fetchLogoutUser()}} className="btn btn-outline-primary me-2">Log out</Link>
                            :
                            <div>
                                <Link to={routeNames.LOGIN} className="btn btn-outline-primary me-2">Login</Link>
                                <Link to={routeNames.REGISTER} className="btn btn-primary">Sign-up</Link>
                            </div>
                    }
                </div>
            </header>
        </div>
    )
}

export default Header;