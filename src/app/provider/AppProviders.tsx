import type { ReactNode } from "react";
import { TanstackProvider } from "@/app/provider/TanstackProvider";
import { LangsProvider } from "@/app/provider/LangsProvider";


export const AppProviders = ({ children }: { children: ReactNode }) => {
    return (
        <LangsProvider>
            <TanstackProvider>
                {children}
            </TanstackProvider>
        </LangsProvider>
    );
};
