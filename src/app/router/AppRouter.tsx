import { Routes, Route } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { SigninPage, SignupPage } from "@/modules/auth";


export const AppRouter = () => {
    return (
        <Routes>
            <Route path={ROUTES.ROOT} element={<h1>Home</h1>} />
            <Route path={ROUTES.SIGNIN} element={<SigninPage />} />
            <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
        </Routes>
    )
}