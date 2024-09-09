import { Button } from '@mui/material';
import { ReactNode } from 'react';
import './MyButton.css';

type MyButtonProps = {
  children: ReactNode;
  fullwidth?: boolean;
  variant?: 'outlined' | 'contained' | 'text';
};

const MyButton = ({
  children,
  fullwidth,
  variant = 'contained',
}: MyButtonProps) => {
  return (
    <Button variant={variant} fullWidth={fullwidth} size='large'>
      {children}
    </Button>
  );
};

export default MyButton;
