const theme = {
  useCustomProperties: true,
  colors: {
    text: '#949495',
    background: '#151515',
    heading: '#ffffff'
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
    }
  },
  styles: {
    root: {
      fontFamily: 'body'
    }
  }
};

export default theme;
