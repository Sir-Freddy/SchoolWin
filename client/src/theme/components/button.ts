const commonButtonStyle = {
  borderRadius: 0,
  textTransform: 'none',
  fontWeight: 400,
  _focus: { boxShadow: 'none', outlineColor: 'none' },
  _focusVisible: { boxShadow: '0 0 0 3px #2A7FFE', outlineColor: '#2A7FFE' }
};

const Button = {
  variants: {
    unstyled: {
      ...commonButtonStyle
    },
    secondary: {
      ...commonButtonStyle,
      bg: 'white',
      color: 'bluefrance',
      border: '1px solid',
      borderColor: 'bluefrance',
      _hover: { bg: '#ffa51e' }
    },
    school: {
      ...commonButtonStyle,
      bg: '#FF9900',
      borderRadius: '5px',
      boxShadow: '0px 5px 0px 0px #ec7309',
      color: 'white',
      _hover: { bg: '#c45b05' }
    },
    primary: {
      ...commonButtonStyle,
      bg: '#5294E2',
      color: 'white',
      borderRadius: '5px',
      boxShadow: '0px 5px 0px 0px #4988d1',
      _hover: { bg: '#5294E2' }
    },
    success: {
      ...commonButtonStyle,
      bg: '#3AAC19',
      color: 'white',
      borderRadius: '5px',
      boxShadow: '0px 5px 0px 0px #3EB61B',
      _hover: { bg: '#44C31E' }
    },
    pill: {
      ...commonButtonStyle,
      borderRadius: 24,
      height: 'auto',
      fontSize: 'zeta',
      color: 'bluefrance',
      px: 3,
      py: 1,
      _hover: { bg: 'grey.200', textDecoration: 'none' }
    }
  }
};

export { Button };
