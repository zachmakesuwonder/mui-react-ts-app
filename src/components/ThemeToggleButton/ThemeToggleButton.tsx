/*
 * ---------------------------------------------
 * Author: Isaac Mirabueno
 * Date: Thursday January 25th 2024
 * Last Modified by: Isaac Mirabueno - <imirabueno@yondu.com>
 * Last Modified time: January 25th 2024, 4:41:04 pm
 * ---------------------------------------------
 */


import IconButton from "@mui/material/IconButton";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import React from "react";
import {useTheme} from "@mui/system";
import Typography from "@mui/material/Typography";
import {useMediaQuery} from "@mui/material";

export type ThemeToggleButtonProps = {
    ColorModeContext: React.Context<{ toggleColorMode: () => void; }>,
}

const ThemeToggleButton = (props: ThemeToggleButtonProps) => {
    const mobileCheck = useMediaQuery('(min-width: 500px)');
    const {  ColorModeContext = React.createContext({ toggleColorMode: () => {} })} = props;
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return (
        <>
            {mobileCheck && (
                <Typography>{theme.palette.mode}</Typography>)
            }
            <IconButton sx={{mr: 2}} title={theme.palette.mode + ' mode'} aria-label={theme.palette.mode + ' mode button'} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}
            </IconButton>
        </>)
}

export default ThemeToggleButton;