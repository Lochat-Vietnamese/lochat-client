import { Routes, Route } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path={ROUTES.ROOT} element={<h1>Home</h1>} />
            <Route path={ROUTES.SIGNIN} element={<h1>Signin</h1>} />
        </Routes>
    )
}