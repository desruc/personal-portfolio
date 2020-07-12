/** @jsx jsx */
import { jsx, Box, Heading, Text } from 'theme-ui';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const Contact = () => {
  const { contact } = useSiteMetadata();

  return (
    <Box id="contact" sx={{ pt: 5 }}>
      <Heading
        sx={{
          mb: 3,
          textTransform: 'uppercase',
          letterSpacing: 3,
          fontWeight: 400
        }}
      >
        Get in touch
      </Heading>
      <Text as="p" sx={{ mb: 4 }}>
        Although I'm not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I'll
        try my best to get back to you!
      </Text>
      <a
        href={`mailto:${contact}`}
        title="Send email"
        sx={{
          pt: 2,
          pb: 2,
          pl: 3,
          pr: 3,
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
          display: 'inline-block'
        }}
      >
        Say Hello
      </a>
    </Box>
  );
};

export default Contact;
