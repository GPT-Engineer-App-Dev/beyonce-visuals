import { Box, Image, Text, VStack, Heading, Button } from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaSpotify } from 'react-icons/fa';

const Index = () => {
  return (
    <VStack minH="100vh" align="center" justify="center" bg="gray.900" color="white">
      <Box p={5} textAlign="center">
        <Image borderRadius="full" boxSize="150px" src="/images/beyonce.jpg" alt="Beyoncé" />
        <Heading as="h1" size="2xl" mt={4}>Beyoncé</Heading>
        <Text fontSize="xl" mt={2}>Singer, Songwriter, Actress</Text>
        <Text mt={2} maxW="lg">
          Explore the world of Beyoncé. Dive into her music, watch stunning performances, and stay updated with the latest news.
        </Text>
        <Box mt={4}>
          <Button leftIcon={<FaInstagram />} colorScheme="pink" variant="solid">
            Instagram
          </Button>
          <Button leftIcon={<FaTwitter />} colorScheme="twitter" variant="solid" ml={2}>
            Twitter
          </Button>
          <Button leftIcon={<FaSpotify />} colorScheme="green" variant="solid" ml={2}>
            Spotify
          </Button>
        </Box>
      </Box>
    </VStack>
  );
};

export default Index;