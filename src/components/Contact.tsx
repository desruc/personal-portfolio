/** @jsx jsx */
import { jsx, Box, Heading, Text } from 'theme-ui';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const Contact = () => {
  const { contact } = useSiteMetadata();

  return (
    <Box
      id="contact"
      sx={{ pt: 40, pb: 56, '@media (min-width: 992px)': { pb: 0, pt: 88 } }}
    >
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
      <Text as="p" sx={{ mb: 4, fontSize: 14 }}>
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
          variant: 'links.button'
        }}
      >
        Say Hello
      </a>
    </Box>
  );
};

export default Contact;
