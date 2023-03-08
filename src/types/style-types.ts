import type { Theme } from "@mui/material/styles";

let theme: Theme;

type Index0 = keyof typeof theme.palette
type Index1 = keyof typeof theme.palette[Index0]

export type ExtendColorProps = [Index0, Index1] | string