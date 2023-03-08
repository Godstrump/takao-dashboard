import { StyledComponentProps, SxProps } from "@mui/material";
import { CSSProperties } from "react";

interface Props {
    [x: string | number]: CSSProperties | StyledComponentProps | SxProps | JSX.Element[] | JSX.Element | string | number | unknown
}

export default Props