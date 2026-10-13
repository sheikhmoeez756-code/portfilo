// Colours live as CSS variables in app/globals.css (switched by data-theme).
// This module holds the JS-side constants that motion code needs.

export const THEME_ATTRIBUTE = "data-theme";
export const DEFAULT_THEME = "dark";

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;

export const SPRING_SOFT = { stiffness: 150, damping: 20, mass: 0.4 } as const;
