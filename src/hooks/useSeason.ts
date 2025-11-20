import { useMemo } from 'react';

export type Season = 'spring' | 'summer' | 'autumn' | 'winter';

/**
 * Custom hook to detect the current season based on the date
 * 
 * Season boundaries (Northern Hemisphere):
 * - Spring: March 20 - June 20
 * - Summer: June 21 - September 22
 * - Autumn: September 23 - December 20
 * - Winter: December 21 - March 19
 */
export function useSeason(): Season {
    const season = useMemo(() => {
        const now = new Date();
        const month = now.getMonth(); // 0-11
        const day = now.getDate(); // 1-31

        // Spring: March 20 - June 20
        if ((month === 2 && day >= 20) || month === 3 || month === 4 || (month === 5 && day <= 20)) {
            return 'spring';
        }

        // Summer: June 21 - September 22
        if ((month === 5 && day >= 21) || month === 6 || month === 7 || (month === 8 && day <= 22)) {
            return 'summer';
        }

        // Autumn: September 23 - December 20
        if ((month === 8 && day >= 23) || month === 9 || month === 10 || (month === 11 && day <= 20)) {
            return 'autumn';
        }

        // Winter: December 21 - March 19
        return 'winter';
    }, []);

    return season;
}

/**
 * Get the current season without using a hook (for non-component contexts)
 */
export function getCurrentSeason(): Season {
    const now = new Date();
    const month = now.getMonth();
    const day = now.getDate();

    if ((month === 2 && day >= 20) || month === 3 || month === 4 || (month === 5 && day <= 20)) {
        return 'spring';
    }

    if ((month === 5 && day >= 21) || month === 6 || month === 7 || (month === 8 && day <= 22)) {
        return 'summer';
    }

    if ((month === 8 && day >= 23) || month === 9 || month === 10 || (month === 11 && day <= 20)) {
        return 'autumn';
    }

    return 'winter';
}
