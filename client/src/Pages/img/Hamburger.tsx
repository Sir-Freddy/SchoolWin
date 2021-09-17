import { Icon } from '@chakra-ui/react';
import React from 'react';

export function Hamburger() {
  return (
    <Icon viewBox="0 0 18 18" width="18px" height="18px">
      <path
        d="M0 10H18V8H0V10ZM0 14H18V12H0V14ZM0 6H18V4H0V6ZM0 0V2H18V0H0Z"
        fill="currentColor"
      />
    </Icon>
  );
}
