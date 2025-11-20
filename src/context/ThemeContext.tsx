import React, { createContext, useContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useSeason } from '../hooks/useSeason';
import { getSeasonalTheme, getSeasonalGradient } from '../config/seasonalThemes';
import type { Season } from '../config/seasonalThemes';

export type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
    mode: ThemeMode;
    season: Season;
    toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useLocalStorage<ThemeMode>('lwa-theme-mode', 'light');
    const season = useSeason();

    useEffect(() => {
        // Apply theme to document root
        const root = document.documentElement;

        // Add/remove dark class
        if (mode === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }

        // Apply seasonal theme colors as CSS variables
        const colors = getSeasonalTheme(season, mode);
        const gradient = getSeasonalGradient(season, mode);

        root.style.setProperty('--color-bg-primary', colors.bgPrimary);
        root.style.setProperty('--color-bg-secondary', colors.bgSecondary);
        root.style.setProperty('--color-text-primary', colors.textPrimary);
        root.style.setProperty('--color-text-secondary', colors.textSecondary);
        root.style.setProperty('--color-accent', colors.accent);
        root.style.setProperty('--color-accent-hover', colors.accentHover);
        root.style.setProperty('--color-secondary', colors.secondary);
        root.style.setProperty('--color-border', colors.border);
        root.style.setProperty('--glass-background', colors.glassBackground);
        root.style.setProperty('--glass-blur', colors.glassBlur);
        root.style.setProperty('--hero-gradient', gradient);

        // Add season class for CSS targeting
        root.classList.remove('spring', 'summer', 'autumn', 'winter');
        root.classList.add(season);
    }, [mode, season]);

    const toggleMode = () => {
        setMode(mode === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ mode, season, toggleMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
