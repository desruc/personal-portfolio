const theme = {
  useCustomProperties: true,
  colors: {
    text: '#949495',
    background: '#151515',
    heading: '#ffffff',
    primary: '#eca400'
  },
  fonts: {
    body: 'Arial',
    heading: 'Rubik',
    monospace: 'Rubik'
  },
  layout: {
    container: {
      maxWidth: '1440px'
    }
  },
  text: {
    heading: {
      color: 'heading'
    }
  },
  heading: {
    skills: {
      letterSpacing: 2,
      fontWeight: 400,
      textTransform: 'uppercase',
      mb: 2
    }
  },
  flex: {
    skills: {
      flexWrap: 'wrap',
      width: 'fit-content',
      mb: 3
      // '&:hover': { '.tech-icon': { opacity: 0.5 } }
    }
  },
  links: {
    social: {
      textDecoration: 'none',
      color: 'inherit',
      fontSize: 14,
      display: 'flex',
      alignItems: 'center'
    },
    button: {
      borderRadius: 3,
      color: 'text',
      textDecoration: 'none',
      background: 'transparent',
      cursor: 'pointer',
      borderColor: 'text',
      border: '1px solid',
      lineHeight: 2,
      textTransform: 'uppercase',
      fontSize: 14,
      letterSpacing: 3,
      fontWeight: 600,
      display: 'inline-block',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        color: 'primary'
      }
    }
  },
  styles: {
    root: {
      fontFamily: 'body'
    }
  }
};

export default theme;
