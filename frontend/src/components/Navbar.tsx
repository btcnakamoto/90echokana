import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Container,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { FaLanguage } from 'react-icons/fa';

const NAV_ITEMS = [
  { label: '首页', href: '/' },
  { label: '学习仪表盘', href: '/dashboard' },
  { label: '学习材料', href: '/learning-materials' },
  { label: '词汇学习', href: '/vocabulary' },
  { label: '口语练习', href: '/speaking' },
  { label: '听力训练', href: '/listening' },
  { label: '学习社区', href: '/community' },
];

const PUBLIC_PAGES = ['首页'];

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const location = useLocation();
  
  // 检查用户是否已登录
  const isAuthenticated = localStorage.getItem('token') !== null;

  // 处理登出
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <Box>
      <Flex
        bg="brand.500"
        color="white"
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}
        width="100%"
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            aria-label={'Toggle Navigation'}
            variant="ghost"
            icon={<HamburgerIcon />}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Box as={RouterLink} to="/" display="flex" alignItems="center">
            <Box as={FaLanguage} boxSize={6} />
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              fontWeight={600}
              fontSize="xl"
              color="white"
              ml={2}
            >
              90天日语通
            </Text>
          </Box>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav isAuthenticated={isAuthenticated} currentPath={location.pathname} />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={4}
        >
          {isAuthenticated ? (
            <Menu>
              <Avatar
                as={Button}
                size={'sm'}
                bg="white"
                color="brand.500"
                name="用户"
                cursor="pointer"
                onClick={onToggle}
              />
              <Box display={isOpen ? "block" : "none"} mt={2} position="absolute" right={0} zIndex={10}>
                <Stack
                  bg="white"
                  color="gray.800"
                  boxShadow="md"
                  borderRadius="md"
                  py={2}
                >
                  <Box as={RouterLink} to="/profile" px={4} py={2} _hover={{ bg: "gray.100" }}>
                    个人资料
                  </Box>
                  <Box as={RouterLink} to="/settings" px={4} py={2} _hover={{ bg: "gray.100" }}>
                    学习设置
                  </Box>
                  <Box as="button" onClick={handleLogout} px={4} py={2} textAlign="left" _hover={{ bg: "gray.100" }}>
                    退出登录
                  </Box>
                </Stack>
              </Box>
            </Menu>
          ) : (
            <>
              <Button
                as={RouterLink}
                fontSize={'sm'}
                fontWeight={400}
                variant={'ghost'}
                to={'/login'}
                _hover={{
                  bg: 'brand.400',
                }}
              >
                登录
              </Button>
              <Button
                as={RouterLink}
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                colorScheme="pink"
                to={'/register'}
              >
                注册
              </Button>
            </>
          )}
        </Stack>
      </Flex>

      {isOpen && (
        <Box bg={'white'} p={4} display={{ md: 'none' }} boxShadow="md">
          <MobileNav isAuthenticated={isAuthenticated} />
        </Box>
      )}
    </Box>
  );
}

interface NavProps {
  isAuthenticated: boolean;
  currentPath?: string;
}

const DesktopNav = ({ isAuthenticated, currentPath }: NavProps) => {
  return (
    <HStack spacing={4}>
      {NAV_ITEMS.map((navItem) => {
        // 如果用户未登录且不是公开页面，则不显示
        if (!isAuthenticated && !PUBLIC_PAGES.includes(navItem.label)) {
          return null;
        }
        
        const isActive = currentPath === navItem.href;
        return (
          <Box key={navItem.label}>
            <Box
              as={RouterLink}
              p={2}
              to={navItem.href}
              fontSize={'sm'}
              fontWeight={500}
              color={'white'}
              _hover={{
                textDecoration: 'none',
                bg: 'brand.400',
                borderRadius: 'md',
              }}
              bg={isActive ? 'brand.400' : 'transparent'}
              borderRadius={isActive ? 'md' : 'none'}
            >
              {navItem.label}
            </Box>
          </Box>
        );
      })}
    </HStack>
  );
};

const MobileNav = ({ isAuthenticated }: NavProps) => {
  return (
    <Stack>
      {NAV_ITEMS.map((navItem) => {
        // 如果用户未登录且不是公开页面，则不显示
        if (!isAuthenticated && !PUBLIC_PAGES.includes(navItem.label)) {
          return null;
        }
        
        return (
          <MobileNavItem key={navItem.label} {...navItem} />
        );
      })}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }: { label: string; href: string }) => {
  return (
    <Box py={2}>
      <Box
        as={RouterLink}
        to={href}
        display="block"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={'gray.600'}
          _hover={{ color: 'brand.500' }}
        >
          {label}
        </Text>
      </Box>
    </Box>
  );
}; 