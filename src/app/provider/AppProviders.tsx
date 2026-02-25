import type { ReactNode } from "react";
import { TanstackProvider } from "@/app/provider/TanstackProvider";
import { LangsProvider } from "@/app/provider/LangsProvider";
import { ThemeProvider } from "@/app/provider/ThemeProvider";


export const AppProviders = ({ children }: { children: ReactNode }) => {
    return (
        <LangsProvider>
            <TanstackProvider>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </TanstackProvider>
        </LangsProvider>
    );
};
