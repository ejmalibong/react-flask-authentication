import React from 'react';
import { useTheme } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

//-----------------------|| LOGO ||-----------------------//

const Logo = () => {
    const theme = useTheme();

    return (
        <Typography
            variant="h3"
            component="span"
            sx={{ fontWeight: 800, letterSpacing: '-0.04em', color: theme.palette.primary.main }}
        >
            Stello
        </Typography>
    );
};

export default Logo;
