"use client";
import { useTheme } from "next-themes";
import { Check, Moon, Power, Sun } from "@gravity-ui/icons";
import { Switch } from "@heroui/react";

export function ThemeSwitch() {
    const { theme, setTheme } = useTheme();

    return (
        <>
            <Switch onChange={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {({ isSelected }) => (
                    <>
                        <Switch.Control
                            className={`h-[25px] w-[42px] bg-blue-500 ${isSelected ? "bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.5)]" : ""}`}
                        >
                            <Switch.Thumb
                                className={`size-[20px] bg-white shadow-sm ${isSelected ? "ms-[15   px] shadow-lg" : ""}`}
                            >
                                <Switch.Icon>
                                    {isSelected ? (
                                        <Sun className="size-4 text-cyan-600" />
                                    ) : (
                                        <Moon className="size-4 text-blue-600" />
                                    )}
                                </Switch.Icon>
                            </Switch.Thumb>
                        </Switch.Control>
                    </>
                )}
            </Switch>
        </>
    );
}