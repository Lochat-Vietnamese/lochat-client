import { Routes, Route } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import { SigninPage } from "@/features/auth/pages/SigninPage";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path={ROUTES.ROOT} element={<h1>Home</h1>} />
            <Route path={ROUTES.SIGNIN} element={<SigninPage />} />
        </Routes>
    )
}