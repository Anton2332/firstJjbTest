import MainPage from "../pages/MainPage/MainPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import UserNotLoginPage from "../pages/NotAuthorizeUserPage/UserNotLoginPage";

interface IRoute {
    path: routeNames,
    element: React.ReactNode
}

export enum routeNames {
    REGISTER = '/register',
    LOGIN = '/login',
    MAIN = '',
    USER_NOT_LOGIN = '',
}

export const publicRoutes: IRoute[] = [
    {
        path:routeNames.REGISTER,
        element:<RegisterPage/>
    },
    {
        path:routeNames.LOGIN,
        element:<LoginPage/>
    },
    {
        path:routeNames.USER_NOT_LOGIN,
        element: <UserNotLoginPage/>
    }
]

export const privateRoutes: IRoute[] = [
    {
        path: routeNames.MAIN,
        element: <MainPage/>
    },
]
