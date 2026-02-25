import { Outlet } from "react-router-dom";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"

import { UserRound, UserRoundCheck, UserRoundPen } from "lucide-react";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { useTranslation } from "react-i18next";
import { LangDropdown } from "../common/LangDropdown";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";

export const HomeLayout = () => {
    const { t } = useTranslation(["home"]);

    return (
        <div className="min-h-screen bg-background">
            <header className="sticky top-0 z-50 w-full backdrop-blur bg-popover/50 border-b border-border dark:shadow-none shadow-sm shadow-border">
                <div className="hidden md:flex w-full items-center justify-between px-4 py-4">
                    <NavigationMenu className="flex gap-4 items-center">
                        <NavigationMenuList>
                            <NavigationMenuItem className="mr-4">
                                <NavigationMenuLink className="bg-transparent! font-semibold! text-foreground! text-xl" href="/">
                                    {t("home:menu.name")}
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink className="bg-transparent! hover:text-primary! text-foreground! text-md" href="#">
                                    {t("home:menu.navigator.introduction")}
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink className="bg-transparent! hover:text-primary! text-foreground! text-md" href="#">
                                    {t("home:menu.navigator.projects")}
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                        </NavigationMenuList>
                    </NavigationMenu>

                    <NavigationMenu viewport={false} className="flex items-center">
                        <NavigationMenuList className="gap-4">
                            <NavigationMenuItem className="flex items-center justify-center">
                                <LangDropdown
                                    className="p-0! rounded-full! aspect-square outline-none! text-foreground bg-background! border-foreground! hover:border-primary! hover:text-primary! data-[state=open]:border-primary! data-[state=open]:text-primary! focus:ring-0!"
                                    buttonIconProps={{ size: "100%" }}
                                    dropdownMenuLabelProps={{ className: "text-xs" }}
                                    dropdownMenuItemProps={{ className: "hover:bg-muted! hover:text-accent! text-foreground!" }}
                                    dropdownMenuContentProps={{ className: "bg-popover" }}
                                />
                            </NavigationMenuItem>
                            <NavigationMenuItem className="flex items-center justify-center">
                                <ThemeToggle className="p-0! rounded-full! aspect-square outline-none! text-foreground bg-background! border-foreground! hover:border-primary! hover:text-primary!" buttonIconProps={{ size: "100%" }} />
                            </NavigationMenuItem>
                            <NavigationMenuItem className="flex items-center justify-center">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button className="p-0! rounded-full! text-foreground! data-[state=open]:text-primary! bg-background! outline-none! border-foreground! data-[state=open]:border-primary! hover:border-primary! hover:text-primary! aspect-square">
                                            <UserRound size="100%" className="text-inherit" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="bg-popover">
                                        <DropdownMenuGroup>
                                            <DropdownMenuItem className="hover:bg-muted! hover:text-accent! text-foreground!">
                                                <a className="text-inherit! flex items-center gap-2 w-full h-full" href="/signin">
                                                    <UserRoundCheck size="100%" className="text-inherit" />
                                                    <span>
                                                        {t("home:menu.navigator.auth_actions.signin")}
                                                    </span>
                                                </a>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="hover:bg-muted! hover:text-accent! text-foreground!">
                                                <a className="text-inherit! flex items-center gap-2 w-full h-full" href="/signup">
                                                    <UserRoundPen size="100%" className="text-inherit" />
                                                    <span>
                                                        {t("home:menu.navigator.auth_actions.signup")}
                                                    </span>
                                                </a>
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};
