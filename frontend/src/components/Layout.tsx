import { type ReactNode } from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex 
      direction="column" 
      minH="100vh"
      width="100%"
      overflow="hidden"
    >
      <Navbar />
      <Box as="main" flexGrow={1} width="100%">
        {children}
      </Box>
      <Box
        as="footer"
        py={6}
        bg="gray.100"
        textAlign="center"
        width="100%"
        mt="auto"
      >
        版权所有 © 2023-2025 90天日语通
      </Box>
    </Flex>
  );
};

export default Layout; 