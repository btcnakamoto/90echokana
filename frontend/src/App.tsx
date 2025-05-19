import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import AppRoutes from './routes';

// 扩展Chakra UI主题
const theme = extendTheme({
  colors: {
    brand: {
      50: '#E6FFFA',
      100: '#B2F5EA',
      200: '#81E6D9',
      300: '#4FD1C5',
      400: '#38B2AC',
      500: '#319795', // 主色 - Chakra UI 的 teal.500
      600: '#2C7A7B',
      700: '#285E61',
      800: '#234E52',
      900: '#1D4044',
    },
    accent: {
      50: '#FFF5F7',
      100: '#FED7E2',
      200: '#FBB6CE',
      300: '#F687B3',
      400: '#ED64A6',
      500: '#D53F8C', // 强调色 - Chakra UI 的 pink.500
      600: '#B83280',
      700: '#97266D',
      800: '#702459',
      900: '#521B41',
    },
  },
  fonts: {
    heading: `'Noto Sans SC', 'Roboto', 'Helvetica Neue', sans-serif`,
    body: `'Noto Sans SC', 'Roboto', 'Helvetica Neue', sans-serif`,
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'xl',
        fontWeight: '500',
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
          _active: {
            bg: 'brand.700',
          },
        },
        outline: {
          borderColor: 'brand.500',
          color: 'brand.500',
          _hover: {
            bg: 'brand.50',
            transform: 'translateY(-2px)',
          },
        },
        accent: {
          bg: 'accent.500',
          color: 'white',
          _hover: {
            bg: 'accent.600',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
          _active: {
            bg: 'accent.700',
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: '600',
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.800',
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppRoutes />
    </ChakraProvider>
  );
}

export default App;
