import { Button } from "@/components/ui/button";
import { LangsEnum } from "@/enums/langs.enum";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import {
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuItem,
    DropdownMenu
} from "@/components/ui/dropdown-menu";

type LangDropdownProps = React.ComponentProps<typeof Button> & {
    buttonIconProps?: React.ComponentProps<typeof Globe>;
    dropdownMenuContentProps?: React.ComponentProps<typeof DropdownMenuContent>;
    dropdownMenuGroupProps?: React.ComponentProps<typeof DropdownMenuGroup>;
    dropdownMenuLabelProps?: React.ComponentProps<typeof DropdownMenuLabel>;
    dropdownMenuItemProps?: React.ComponentProps<typeof DropdownMenuItem>;
}

export const LangDropdown = ({
    buttonIconProps,
    dropdownMenuContentProps,
    dropdownMenuGroupProps,
    dropdownMenuLabelProps,
    dropdownMenuItemProps,
    ...buttonProps
}: LangDropdownProps) => {
    const { i18n } = useTranslation();
    const { t } = useTranslation(["home"]);

    const ChangeLang = (lang: LangsEnum) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button {...buttonProps} >
                    <Globe {...buttonIconProps} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent {...dropdownMenuContentProps}>
                <DropdownMenuGroup {...dropdownMenuGroupProps}>
                    <DropdownMenuLabel {...dropdownMenuLabelProps}>{t("home:menu.navigator.langs_dropdown_label")}</DropdownMenuLabel>
                    {Object.values(LangsEnum).map((lang) => (
                        <DropdownMenuItem {...dropdownMenuItemProps} 
                            key={lang} 
                            onClick={(e) => {
                                dropdownMenuItemProps?.onClick?.(e);
                                ChangeLang(lang);
                            }}>
                            <span className="text-inherit">{lang.toLocaleUpperCase()}</span>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};