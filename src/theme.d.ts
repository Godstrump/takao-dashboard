import {
    Theme as MUITheme,
    ThemeOptions as MUIThemeOptions,
    PaletteOptions as MUIPaletteOptions,
} from "@mui/material/styles";

interface Options {
    palette: {
        primary: {
            [x:string|number]: string;
        };
        secondary: {
            [s:string|number]: string;
        },
        background: {
            [b:string|number]: string;
        },
        common: {
            [c:string|number]: string;
        },
        text: {
            [c:string|number]: string;
        },
        warning: {
            [c:string|number]: string;
        },
        info: {
            [c:string|number]: string;
        },
    };
}

declare module "@mui/material/styles" {
    interface Theme extends MUITheme {
        palette: {
            primary: {
                [x:string|number]: string;
            };
            secondary: {
                [s:string|number]: string;
            },
            background: {
                [b:string|number]: string;
            },
            common: {
                [c:string|number]: string;
            },
            text: {
                [c:string|number]: string;
            },
            warning: {
                [c:string|number]: string;
            },
            info: {
                [c:string|number]: string;
            },
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions extends MUIThemeOptions, Options {}

    interface PaletteOptions extends MUIPaletteOptions, Options {}

    export function createTheme(options?: CustomThemeOptions): Theme;
}
