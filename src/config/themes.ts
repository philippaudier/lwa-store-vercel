// Theme configuration - Single Indigo theme
export const theme = {
    light: {
        bgPrimary: '250 250 250',      // #FAFAFA - near white
        bgSecondary: '255 255 255',    // #FFFFFF - white
        textPrimary: '26 26 26',       // #1A1A1A - near black
        textSecondary: '115 115 115',  // #737373 - gray
        accent: '99 102 241',          // #6366F1 - indigo
        accentHover: '79 70 229',      // #4F46E5 - darker indigo
        secondary: '139 92 246',       // #8B5CF6 - violet
        border: '229 229 229',         // #E5E5E5 - light gray
    },
    dark: {
        bgPrimary: '15 15 15',         // #0F0F0F - near black
        bgSecondary: '23 23 23',       // #171717 - dark gray
        textPrimary: '229 229 229',    // #E5E5E5 - light gray
        textSecondary: '163 163 163',  // #A3A3A3 - medium gray
        accent: '129 140 248',         // #818CF8 - lighter indigo
        accentHover: '165 180 252',    // #A5B4FC - even lighter
        secondary: '167 139 250',      // #A78BFA - lighter violet
        border: '38 38 38',            // #262626 - dark border
    },
} as const;

export type ThemeMode = 'light' | 'dark';

export function getThemeColors(mode: ThemeMode) {
    return theme[mode];
}
