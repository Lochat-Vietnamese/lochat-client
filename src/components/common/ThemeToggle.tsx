import { useTheme } from "@/app/provider/ThemeProvider";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

type ThemeToggleProps = React.ComponentProps<typeof Button> & {
    buttonIconProps?: React.ComponentProps<typeof Sun>;
}

export const ThemeToggle = ({
    buttonIconProps,
    ...buttonProps
}: ThemeToggleProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button {...buttonProps} onClick={toggleTheme}>
            {theme === "light"
                ? <Sun {...buttonIconProps}/>
                : <Moon {...buttonIconProps}/>
            }
        </Button>
    );
};