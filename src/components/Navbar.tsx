import React from 'react'
import { Switch, SwitchIndicator, SwitchWrapper } from '@/components/ui/switch';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from "@/components/theme-provider"

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    return (
        <nav className='w-full bg-gray-800 text-white p-4 flex justify-between items-center'>
            <h1 className="text-2xl font-bold">Quick Quezzer</h1>
            <SwitchWrapper permanent={true} onClick={() => { setTheme(theme === 'light' ? 'dark' : 'light') }} className="cursor-pointer">
                <Switch size="lg" />
                <SwitchIndicator state="on">
                    <Sun className="size-4 text-muted-foreground" />
                </SwitchIndicator>
                <SwitchIndicator state="off">
                    <Moon className="size-4 text-muted-foreground" />
                </SwitchIndicator>
            </SwitchWrapper>
        </nav>
    )
}

export default Navbar