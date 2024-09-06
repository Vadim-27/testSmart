
import * as React from 'react';

import Tooltip from '@mui/material/Tooltip';

interface TooltipOffsetProps {
    children: React.ReactElement;
    title: string;
}

export default function TooltipOffset({ children, title }: TooltipOffsetProps) {
    return (
        <Tooltip
            title={title}
            slotProps={{
                popper: {
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [0, -65],
                            },
                        },
                    ],
                },
            }}
        >
            {children}
        </Tooltip>
    );
}
