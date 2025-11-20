// Seasonal Theme Configuration
// Automatically applies themes based on the current season

export type Season = 'spring' | 'summer' | 'autumn' | 'winter';
export type ThemeMode = 'light' | 'dark';

export interface ThemeColors {
    bgPrimary: string;
    bgSecondary: string;
    textPrimary: string;
    textSecondary: string;
    accent: string;
    accentHover: string;
    secondary: string;
    border: string;
    glassBackground: string;
    glassBlur: string;
}

export interface SeasonalTheme {
    light: ThemeColors;
    dark: ThemeColors;
    gradient: {
        light: string;
        dark: string;
    };
}

export const seasonalThemes: Record<Season, SeasonalTheme> = {
    spring: {
        light: {
            bgPrimary: '255 250 250',      // #FFFAFA - snow white
            bgSecondary: '255 255 255',    // #FFFFFF - white
            textPrimary: '26 26 26',       // #1A1A1A - near black
            textSecondary: '115 115 115',  // #737373 - gray
            accent: '236 72 153',          // #EC4899 - pink
            accentHover: '219 39 119',     // #DB2777 - darker pink
            secondary: '167 139 250',      // #A78BFA - lavender
            border: '244 224 255',         // #F4E0FF - light lavender
            glassBackground: 'rgba(255, 255, 255, 0.7)',
            glassBlur: '12px',
        },
        dark: {
            bgPrimary: '24 24 27',         // #18181B - dark zinc
            bgSecondary: '39 39 42',       // #27272A - zinc
            textPrimary: '250 250 250',    // #FAFAFA - off white
            textSecondary: '161 161 170',  // #A1A1AA - zinc gray
            accent: '244 114 182',         // #F472B6 - lighter pink
            accentHover: '251 146 200',    // #FB92C8 - even lighter
            secondary: '196 181 253',      // #C4B5FD - light lavender
            border: '63 63 70',            // #3F3F46 - dark zinc
            glassBackground: 'rgba(39, 39, 42, 0.7)',
            glassBlur: '12px',
        },
        gradient: {
            light: 'linear-gradient(135deg, #fce7f3 0%, #ddd6fe 50%, #bfdbfe 100%)',
            dark: 'linear-gradient(135deg, #1e1b4b 0%, #581c87 50%, #1e293b 100%)',
        },
    },
    summer: {
        light: {
            bgPrimary: '254 252 232',      // #FEFCE8 - yellow-50
            bgSecondary: '255 255 255',    // #FFFFFF - white
            textPrimary: '26 26 26',       // #1A1A1A - near black
            textSecondary: '115 115 115',  // #737373 - gray
            accent: '249 115 22',          // #F97316 - orange
            accentHover: '234 88 12',      // #EA580C - darker orange
            secondary: '14 165 233',       // #0EA5E9 - sky blue
            border: '254 243 199',         // #FEF3C7 - amber-100
            glassBackground: 'rgba(255, 255, 255, 0.65)',
            glassBlur: '14px',
        },
        dark: {
            bgPrimary: '12 10 9',          // #0C0A09 - stone-950
            bgSecondary: '28 25 23',       // #1C1917 - stone-900
            textPrimary: '250 250 249',    // #FAFAF9 - stone-50
            textSecondary: '168 162 158',  // #A8A29E - stone-400
            accent: '251 146 60',          // #FB923C - lighter orange
            accentHover: '253 186 116',    // #FDBA74 - even lighter
            secondary: '56 189 248',       // #38BDF8 - lighter sky
            border: '41 37 36',            // #292524 - stone-800
            glassBackground: 'rgba(28, 25, 23, 0.7)',
            glassBlur: '14px',
        },
        gradient: {
            light: 'linear-gradient(135deg, #fef3c7 0%, #fed7aa 50%, #bfdbfe 100%)',
            dark: 'linear-gradient(135deg, #1e3a8a 0%, #7c2d12 50%, #0c4a6e 100%)',
        },
    },
    autumn: {
        light: {
            bgPrimary: '255 251 235',      // #FFFBEB - amber-50
            bgSecondary: '255 255 255',    // #FFFFFF - white
            textPrimary: '26 26 26',       // #1A1A1A - near black
            textSecondary: '115 115 115',  // #737373 - gray
            accent: '217 119 6',           // #D97706 - amber-600
            accentHover: '180 83 9',       // #B45309 - amber-700
            secondary: '220 38 38',        // #DC2626 - red-600
            border: '254 243 199',         // #FEF3C7 - amber-100
            glassBackground: 'rgba(255, 255, 255, 0.7)',
            glassBlur: '10px',
        },
        dark: {
            bgPrimary: '23 23 23',         // #171717 - neutral-900
            bgSecondary: '38 38 38',       // #262626 - neutral-800
            textPrimary: '245 245 245',    // #F5F5F5 - neutral-100
            textSecondary: '163 163 163',  // #A3A3A3 - neutral-400
            accent: '251 191 36',          // #FBBF24 - amber-400
            accentHover: '252 211 77',     // #FCD34D - amber-300
            secondary: '248 113 113',      // #F87171 - red-400
            border: '64 64 64',            // #404040 - neutral-700
            glassBackground: 'rgba(38, 38, 38, 0.7)',
            glassBlur: '10px',
        },
        gradient: {
            light: 'linear-gradient(135deg, #fef3c7 0%, #fed7aa 50%, #fca5a5 100%)',
            dark: 'linear-gradient(135deg, #451a03 0%, #7c2d12 50%, #450a0a 100%)',
        },
    },
    winter: {
        light: {
            bgPrimary: '248 250 252',      // #F8FAFC - slate-50
            bgSecondary: '255 255 255',    // #FFFFFF - white
            textPrimary: '15 23 42',       // #0F172A - slate-900
            textSecondary: '100 116 139',  // #64748B - slate-500
            accent: '59 130 246',          // #3B82F6 - blue-500
            accentHover: '37 99 235',      // #2563EB - blue-600
            secondary: '139 92 246',       // #8B5CF6 - violet-500
            border: '226 232 240',         // #E2E8F0 - slate-200
            glassBackground: 'rgba(255, 255, 255, 0.75)',
            glassBlur: '16px',
        },
        dark: {
            bgPrimary: '15 23 42',         // #0F172A - slate-900
            bgSecondary: '30 41 59',       // #1E293B - slate-800
            textPrimary: '248 250 252',    // #F8FAFC - slate-50
            textSecondary: '148 163 184',  // #94A3B8 - slate-400
            accent: '96 165 250',          // #60A5FA - blue-400
            accentHover: '147 197 253',    // #93C5FD - blue-300
            secondary: '167 139 250',      // #A78BFA - violet-400
            border: '51 65 85',            // #334155 - slate-700
            glassBackground: 'rgba(30, 41, 59, 0.75)',
            glassBlur: '16px',
        },
        gradient: {
            light: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 50%, #f3e8ff 100%)',
            dark: 'linear-gradient(135deg, #1e3a8a 0%, #312e81 50%, #4c1d95 100%)',
        },
    },
};

export function getSeasonalTheme(season: Season, mode: ThemeMode): ThemeColors {
    return seasonalThemes[season][mode];
}

export function getSeasonalGradient(season: Season, mode: ThemeMode): string {
    return seasonalThemes[season].gradient[mode];
}
