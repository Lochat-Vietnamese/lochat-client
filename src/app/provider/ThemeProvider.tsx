import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const getSystemTheme = (): Theme => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Theme>("light");

    const applyTheme = (themeToApply: Theme) => {
        const root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(themeToApply);
        localStorage.setItem("theme", themeToApply);
        setTheme(themeToApply);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as Theme | null;

        if (savedTheme) {
            applyTheme(savedTheme);
        } else {
            applyTheme(getSystemTheme());
        }
    }, []);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme: applyTheme,
                toggleTheme: () => applyTheme(theme === "light" ? "dark" : "light"),
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
    return ctx;
};