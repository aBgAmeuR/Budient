'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from 'next-themes';

export function UserNav() {
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex flex-row gap-[10px] select-none cursor-pointer">
          <Avatar className="h-[40px] w-[40px]">
            <AvatarImage src="/img/default-profile-picture.png" alt="@shadcn" />
            <AvatarFallback>AJ</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start w-[180px]">
            <h2 className="text-sm font-semibold">Antoine JOSSET</h2>
            <p className="text-sm font-normal">Full Stack Web Developer</p>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleThemeToggle}>
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            <DropdownMenuShortcut>B</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>S</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
