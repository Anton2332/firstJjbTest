import React, {FC, useState} from "react";
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routes";
import {useTypeSelector} from "../hooks/useTypeSelector";
import Cookies from "universal-cookie";

const AppRoutes: FC = () => {

    const {isAuth} = useTypeSelector(i => i.loginUser)


    return(
        <Routes>
            {
                isAuth ?
                    privateRoutes.map(item => {
                        return <Route key={item.path}
                                      path={item.path}
                                      element={item.element}
                                      />
                    }):
                    publicRoutes.map(item => {
                        return <Route key={item.path}
                                      path={item.path}
                                      element={item.element}
                        />
                    })
            }
        </Routes>
    )
}

export default AppRoutes;