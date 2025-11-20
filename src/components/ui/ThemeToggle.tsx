import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export function ThemeToggle() {
    const { mode, toggleMode } = useTheme();

    return (
        <button
            onClick={toggleMode}
            className="p-2 rounded-lg bg-secondary hover:bg-opacity-80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
        >
            {mode === 'light' ? (
                <Moon className="w-5 h-5 text-primary" />
            ) : (
                <Sun className="w-5 h-5 text-primary" />
            )}
        </button>
    );
}
