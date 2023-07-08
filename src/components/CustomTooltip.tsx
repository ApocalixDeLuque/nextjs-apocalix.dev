import React, { FC } from 'react';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

interface CustomTooltipProps extends TooltipProps {
  size?: number;
  className?: string;
}

const CustomTooltip: FC<CustomTooltipProps> = styled(({ size = 1.5, className, children, title, ...props }: CustomTooltipProps) => (
  <Tooltip className='' {...props} title={title} classes={{ popper: className }}>
    {children}
  </Tooltip>
))(({ size }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#FFFFFF',
    color: '#071013',
    width: '100%',
    fontFamily: 'Poppins, sans-serif',
    fontSize: `${(size ?? 1.5) * 0.5}rem`,
    textAlign: 'center',
    border: '1px solid #E7E7E7',
    borderRadius: '24px',
    padding: '0.5rem 1rem',
  },
}));

export default CustomTooltip;
