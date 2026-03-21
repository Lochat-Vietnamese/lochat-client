import { Routes, Route } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { SigninPage, SignupPage } from "@/modules/auth";
import { HomeLayout } from "@/components/layout/HomeLayout";
import { HomePage, NotFound } from "@/modules/home";
import { ChatPage, EmptyChat } from "@/modules/chat";
import { ChatLayout } from "@/components/layout/ChatLayout";
import { AddFriendPage } from "@/modules/user";


export const AppRouter = () => {
    return (
        <Routes>
            <Route element={<HomeLayout />}>
                <Route path={ROUTES.ROOT} element={<HomePage />} />
                <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
            </Route>

            <Route path={ROUTES.SIGNIN} element={<SigninPage />} />
            <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
            <Route path={ROUTES.USER} element={<AddFriendPage />} />
            <Route path={ROUTES.CHAT} element={<ChatLayout />}>
                <Route index element={<EmptyChat />} />
                <Route path=":conversationId" element={<ChatPage />} />
            </Route>
        </Routes>
    )
}