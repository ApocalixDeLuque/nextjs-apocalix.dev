import React, { FC } from 'react';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

interface CustomTooltipProps extends TooltipProps {
  size?: number;
  className?: string;
}

const CustomTooltip: FC<CustomTooltipProps> = styled(({ size = 16, className, children, title, ...props }: CustomTooltipProps) => (
  <Tooltip className='' {...props} title={title} classes={{ popper: className }}>
    {children}
  </Tooltip>
))(({ size }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#FFFFFF',
    color: '#071013',
    width: '100%',
    maxWidth: 'fit-content',
    fontFamily: 'Poppins, sans-serif',
    fontSize: `${(size ?? 16)}px`,
    textAlign: 'center',
    border: '1px solid #E7E7E7',
    borderRadius: '24px',
    padding: '10px 20px',
  },
}));

export default CustomTooltip;
