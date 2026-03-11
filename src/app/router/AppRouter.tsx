import { Routes, Route } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { SigninPage, SignupPage } from "@/modules/auth";
import { HomeLayout } from "@/components/layout/HomeLayout";
import { HomePage } from "@/modules/home";
import { ChatPage } from "@/modules/chat";
import { ChatLayout } from "@/components/layout/ChatLayout";


export const AppRouter = () => {
    return (
        <Routes>
            <Route element={<HomeLayout />}>
                <Route path={ROUTES.ROOT} element={<HomePage />} />
            </Route>
            <Route path={ROUTES.SIGNIN} element={<SigninPage />} />
            <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
            <Route element={<ChatLayout />}>
                <Route path={ROUTES.CHAT} element={<ChatPage />} />
            </Route>
        </Routes>
    )
}