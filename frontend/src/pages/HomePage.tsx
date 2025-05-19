import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  HStack,
  Icon,
  Badge,
  Divider,
  useBreakpointValue,
  useColorModeValue,
  keyframes,
} from '@chakra-ui/react';
import { FaHeadphones, FaMicrophone, FaBook, FaUsers, FaCheckCircle, FaChevronRight } from 'react-icons/fa';
import Layout from '../components/Layout';
// 导入本地图片
import japanStudyImg from '../assets/images/pexels-photo-4050315.jpeg';
import japanLanguageImg from '../assets/images/pexels-photo-6238068.jpeg';
import japanBgImg from '../assets/images/pexels-photo-5746242.jpeg';

// 定义动画
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const HomePage = () => {
  const [animateHero, setAnimateHero] = useState(false);
  
  // 检查用户是否已登录
  const isLoggedIn = localStorage.getItem('token') !== null;
  
  useEffect(() => {
    setAnimateHero(true);
  }, []);

  // 特色功能数据
  const features = [
    {
      title: '听力训练',
      description: '90个真实场景的听力材料，提升日语听力能力',
      icon: FaHeadphones,
      link: '/listening',
      accentColor: 'teal.500'
    },
    {
      title: '口语练习',
      description: 'AI对话伙伴模拟各种场景对话，实时发音评分',
      icon: FaMicrophone,
      link: '/speaking',
      accentColor: 'green.500'
    },
    {
      title: '词汇学习',
      description: '每天10个核心词汇，配合情境例句和发音',
      icon: FaBook,
      link: '/vocabulary',
      accentColor: 'purple.500'
    },
    {
      title: '学习社区',
      description: '与其他学习者交流经验，分享资源，一起进步',
      icon: FaUsers,
      link: '/community',
      accentColor: 'orange.500'
    }
  ];

  // 学习成果
  const outcomes = [
    '能够自信地进行日常生活交流',
    '掌握2000个核心日语词汇',
    '理解日本文化和礼仪知识',
    '能够在职场环境中进行基本沟通',
    '具备JLPT N3-N2水平的语言能力',
    '建立持续学习日语的良好习惯'
  ];

  // 阶段信息
  const stages = [
    { stage: '第一阶段', days: '1-20天', focus: '生活必备沟通', color: 'green.400' },
    { stage: '第二阶段', days: '21-45天', focus: '职场基础交流', color: 'blue.400' },
    { stage: '第三阶段', days: '46-70天', focus: '深度沟通', color: 'purple.400' },
    { stage: '第四阶段', days: '71-90天', focus: '自如表达', color: 'orange.400' }
  ];

  // 学习者故事
  const testimonials = [
    {
      name: "张明",
      role: "商务人士",
      content: "90天日语通帮我实现了在东京工作的梦想。系统化的学习让我能够快速适应日本职场环境。",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
    {
      name: "李娜",
      role: "留学生",
      content: "我原本对日语一窍不通，通过90天的学习，现在能够轻松与日本同学交流，融入校园生活。",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    },
    {
      name: "王浩",
      role: "动漫爱好者",
      content: "终于可以不看字幕直接理解日本动漫了！学习过程既有趣又高效，强烈推荐！",
      avatar: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg",
    },
  ];

  const boxBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const cardBg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.100', 'gray.700');

  // 动画计算
  const animationDelay = useBreakpointValue({ base: '0s', md: '0.3s' });
  const animationDuration = useBreakpointValue({ base: '0.4s', md: '0.6s' });

  return (
    <Layout>
      {/* 英雄区 */}
      <Box 
        bg="brand.500" 
        color="white"
        position="relative"
        overflow="hidden"
        pt={{ base: 20, md: 32 }}
        pb={{ base: 32, md: 40 }}
      >
        {/* 背景模式 */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          opacity={0.1}
          bgImage={`url(${japanBgImg})`}
          bgSize="cover"
          bgPosition="center"
          filter="blur(8px)"
        />
        
        {/* 背景装饰 */}
        <Box
          position="absolute"
          top="-15%"
          right="-15%"
          width="500px"
          height="500px"
          bg="accent.400"
          opacity="0.1"
          borderRadius="full"
          zIndex={0}
        />
        <Box
          position="absolute"
          bottom="-10%"
          left="-10%"
          width="400px"
          height="400px"
          bg="accent.300"
          opacity="0.1"
          borderRadius="full"
          zIndex={0}
        />

        <Container maxW="container.xl" position="relative" zIndex={1}>
          <Flex 
            direction={{ base: 'column', md: 'row' }} 
            align="center" 
            justify="space-between"
            gap={{ base: 16, md: 8 }}
          >
            <VStack 
              align="flex-start" 
              spacing={8} 
              maxW={{ base: '100%', md: '50%' }}
              opacity={animateHero ? 1 : 0}
              transform={animateHero ? 'translateY(0)' : 'translateY(20px)'}
              transition={`all 0.6s ease-out`}
              animation={`${fadeIn} ${animationDuration} ease-out`}
            >
              <Box>
                <Badge 
                  colorScheme="teal" 
                  fontSize="sm" 
                  px={3} 
                  py={1} 
                  rounded="full" 
                  textTransform="none"
                  fontWeight="bold"
                  mb={4}
                >
                  全新日语学习体验
                </Badge>
                <Heading 
                  as="h1" 
                  fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
                  fontWeight="extrabold"
                  lineHeight={{ base: 1.3, md: 1.1 }}
                  letterSpacing="tight"
                  bgGradient="linear(to-r, white, teal.100)"
                  bgClip="text"
                >
                  90天掌握<br />
                  日语实用沟通能力
                </Heading>
              </Box>
              
              <Text 
                fontSize={{ base: 'md', md: 'xl' }} 
                opacity={0.9} 
                lineHeight="taller"
                maxW="90%"
              >
                科学的学习方法、交互式练习、智能进度跟踪与社区互动，全方位提升您的日语能力。
              </Text>
              
              <HStack spacing={6} pt={4} flexWrap={{ base: 'wrap', md: 'nowrap' }}>
                <Button 
                  as={RouterLink} 
                  to={isLoggedIn ? '/dashboard' : '/register'} 
                  size="lg" 
                  colorScheme="accent"
                  rounded="full"
                  px={10}
                  py={7}
                  fontSize="lg"
                  fontWeight="bold"
                  _hover={{
                    transform: 'translateY(-3px)',
                    boxShadow: 'xl',
                  }}
                  rightIcon={<FaChevronRight />}
                >
                  {isLoggedIn ? '继续学习' : '立即开始'}
                </Button>
                <Button 
                  as={RouterLink} 
                  to="/login" 
                  size="lg" 
                  variant="outline"
                  rounded="full"
                  px={8}
                  py={7}
                  borderColor="whiteAlpha.500"
                  borderWidth="2px"
                  fontSize="md"
                  _hover={{
                    bg: 'whiteAlpha.200',
                    borderColor: 'white',
                  }}
                >
                  {isLoggedIn ? '查看仪表盘' : '了解更多'}
                </Button>
              </HStack>
              
              {/* 学习者数据 */}
              <HStack 
                spacing={{ base: 4, md: 8 }} 
                pt={6} 
                opacity={0.9}
                wrap="wrap"
              >
                <VStack align="flex-start">
                  <Text fontSize="3xl" fontWeight="bold">10,000+</Text>
                  <Text fontSize="sm">活跃学习者</Text>
                </VStack>
                <Divider orientation="vertical" height="50px" />
                <VStack align="flex-start">
                  <Text fontSize="3xl" fontWeight="bold">94%</Text>
                  <Text fontSize="sm">完成率</Text>
                </VStack>
                <Divider orientation="vertical" height="50px" display={{ base: 'none', md: 'block' }} />
                <VStack align="flex-start">
                  <Text fontSize="3xl" fontWeight="bold">4.9/5</Text>
                  <Text fontSize="sm">学员评分</Text>
                </VStack>
              </HStack>
            </VStack>

            <Box 
              display={{ base: 'none', md: 'block' }}
              w={{ md: '45%' }}
              opacity={animateHero ? 1 : 0}
              transform={animateHero ? 'translateX(0)' : 'translateX(40px)'}
              transition="all 0.8s ease-out 0.3s"
              position="relative"
              animation={`${floatAnimation} 6s ease-in-out infinite`}
            >
              <Box 
                position="absolute" 
                top="-10%" 
                right="-15%" 
                bg="accent.500" 
                rounded="2xl"
                p={1}
                boxShadow="lg"
                transform="rotate(15deg)"
              >
                <Text fontSize="md" fontWeight="bold" px={3} py={1}>日本語</Text>
              </Box>
              <Box 
                position="absolute" 
                bottom="-8%" 
                left="-5%" 
                bg="brand.200" 
                color="brand.700"
                rounded="2xl"
                boxShadow="lg"
                p={3}
                transform="rotate(-10deg)"
              >
                <Icon as={FaCheckCircle} mr={2} />
                <Text as="span" fontSize="md" fontWeight="bold">90天学会!</Text>
              </Box>
              <Image 
                src={japanStudyImg} 
                alt="日语学习" 
                rounded="2xl"
                shadow="2xl"
                border="6px solid"
                borderColor="white"
                objectFit="cover"
                width="100%"
                height="auto"
                maxH="450px"
              />
            </Box>
          </Flex>
        </Container>
        
        {/* 底部曲线装饰 */}
        <Box 
          position="absolute" 
          bottom="-2px" 
          left={0} 
          right={0}
          height="150px"
          overflow="hidden"
        >
          <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M0,288L48,288C96,288,192,288,288,266.7C384,245,480,203,576,208C672,213,768,267,864,272C960,277,1056,235,1152,224C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
              fill="white"
            />
          </svg>
        </Box>
      </Box>

      {/* 特色功能 */}
      <Box py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <VStack mb={{ base: 12, md: 20 }} spacing={4}>
            <Heading 
              as="h2" 
              fontSize={{ base: '2xl', md: '4xl' }}
              fontWeight="bold"
              textAlign="center"
              bgGradient="linear(to-r, brand.500, accent.500)"
              bgClip="text"
            >
              特色功能
            </Heading>
            <Text 
              fontSize={{ base: 'md', md: 'lg' }} 
              color={textColor} 
              maxW="2xl" 
              textAlign="center"
              opacity={0.8}
            >
              科学的方法，高效的学习体验
            </Text>
            <Box 
              w="40px" 
              h="4px" 
              bg="brand.500" 
              rounded="full" 
              mt="2"
            />
          </VStack>
          
          <SimpleGrid 
            columns={{ base: 1, md: 2, lg: 4 }} 
            spacing={{ base: 8, lg: 10 }}
          >
            {features.map((feature, index) => (
              <Box
                key={feature.title}
                p={8}
                bg={cardBg}
                rounded="xl"
                boxShadow="lg"
                borderWidth="1px"
                borderColor={borderColor}
                position="relative"
                transition="all 0.3s ease"
                _hover={{
                  transform: 'translateY(-12px)',
                  boxShadow: 'xl',
                  borderColor: feature.accentColor,
                }}
                animation={`${fadeIn} ${animationDuration} ease-out ${index * 0.1}s`}
                overflow="hidden"
              >
                <Box 
                  position="absolute" 
                  top={0} 
                  left={0} 
                  right={0}
                  h="4px"
                  bg={feature.accentColor} 
                />
                
                <Flex 
                  w={16} 
                  h={16} 
                  align="center"
                  justify="center"
                  rounded="full" 
                  bg={`${feature.accentColor}15`}
                  color={feature.accentColor}
                  mb={6}
                >
                  <Icon as={feature.icon} boxSize={7} />
                </Flex>
                
                <Heading as="h3" fontSize="xl" mb={4} fontWeight="bold">
                  {feature.title}
                </Heading>
                
                <Text color={textColor} fontSize="md" mb={6} lineHeight="tall">
                  {feature.description}
                </Text>
                
                <Button 
                  as={RouterLink} 
                  to={isLoggedIn ? feature.link : '/register'}
                  variant="ghost"
                  colorScheme={feature.accentColor.split('.')[0]}
                  size="sm"
                  rightIcon={<Icon as={FaChevronRight} />}
                  _hover={{
                    bg: `${feature.accentColor}15`,
                  }}
                  pos="absolute"
                  bottom="4"
                  left="8"
                >
                  {isLoggedIn ? '立即体验' : '注册后体验'}
                </Button>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* 学习阶段 */}
      <Box bg="gray.50" py={{ base: 16, md: 24 }} position="relative" overflow="hidden">
        {/* 装饰元素 */}
        <Box
          position="absolute"
          top="-10%"
          right="-5%"
          width="300px"
          height="300px"
          bg="teal.50"
          opacity="0.6"
          borderRadius="full"
          zIndex={0}
        />
        <Box
          position="absolute"
          bottom="-15%"
          left="-10%"
          width="350px"
          height="350px"
          bg="purple.50"
          opacity="0.4"
          borderRadius="full"
          zIndex={0}
        />
        
        <Container maxW="container.xl" position="relative" zIndex={1}>
          <VStack mb={{ base: 12, md: 16 }} spacing={4}>
            <Heading 
              as="h2" 
              fontSize={{ base: '2xl', md: '4xl' }}
              fontWeight="bold"
              textAlign="center"
              bgGradient="linear(to-r, teal.500, purple.600)"
              bgClip="text"
            >
              学习路径
            </Heading>
            <Text 
              fontSize={{ base: 'md', md: 'lg' }} 
              color={textColor} 
              maxW="2xl" 
              textAlign="center"
              opacity={0.8}
            >
              四大学习阶段，90天系统提升
            </Text>
            <Box 
              w="40px" 
              h="4px" 
              bgGradient="linear(to-r, teal.500, purple.500)" 
              rounded="full" 
              mt="2"
            />
          </VStack>
          
          <SimpleGrid 
            columns={{ base: 1, md: 2, lg: 4 }} 
            spacing={{ base: 6, md: 10 }}
            pt={4}
          >
            {stages.map((item, index) => (
              <Box
                key={item.stage}
                bg={cardBg}
                rounded="2xl"
                boxShadow="xl"
                overflow="hidden"
                transition="all 0.3s"
                animation={`${fadeIn} ${animationDuration} ease-out ${index * 0.1}s`}
                _hover={{
                  transform: 'translateY(-8px)',
                  boxShadow: '2xl'
                }}
                borderWidth="1px"
                borderColor={borderColor}
                height="100%"
              >
                <Flex 
                  bg={item.color} 
                  color="white" 
                  p={4} 
                  align="center" 
                  justify="space-between"
                >
                  <Heading as="h3" fontSize="xl" fontWeight="bold">
                    {item.stage}
                  </Heading>
                  <Badge 
                    colorScheme={item.color.split('.')[0]} 
                    variant="solid" 
                    py={1} 
                    px={3} 
                    fontWeight="bold"
                    rounded="full"
                    bg="whiteAlpha.300"
                  >
                    {item.days}
                  </Badge>
                </Flex>
                <Box p={6}>
                  <Text fontSize="lg" fontWeight="medium" mb={5}>
                    {item.focus}
                  </Text>
                  <Flex align="center" mt={6}>
                    <Box 
                      w="100%" 
                      h={3} 
                      bg="gray.100" 
                      rounded="full" 
                      overflow="hidden"
                    >
                      <Box 
                        h="100%"
                        w={`${25 * (index + 1)}%`}
                        bg={item.color}
                        rounded="full"
                      />
                    </Box>
                    <Text fontWeight="bold" fontSize="sm" ml={3} color={item.color}>
                      {25 * (index + 1)}%
                    </Text>
                  </Flex>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* 学习成果 */}
      <Box py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <Flex 
            direction={{ base: 'column', lg: 'row' }} 
            align="center" 
            justify="space-between"
            gap={{ base: 12, lg: 16 }}
          >
            <Box 
              w={{ base: '100%', lg: '45%' }}
              position="relative"
              animation={`${fadeIn} 0.8s ease-out`}
            >
              <Box
                position="absolute"
                top="-8%"
                right="-8%"
                zIndex={2}
                bg="white"
                px={4}
                py={2}
                rounded="lg"
                shadow="md"
                border="1px solid"
                borderColor="gray.100"
                fontWeight="bold"
                color="brand.500"
                transform="rotate(3deg)"
              >
                JLPT N2 达成!
              </Box>
              <Image 
                src={japanLanguageImg} 
                alt="日语学习成果" 
                rounded="2xl"
                shadow="2xl"
                border="1px solid"
                borderColor="gray.200"
              />
            </Box>
            
            <VStack 
              align="flex-start" 
              spacing={6} 
              w={{ base: '100%', lg: '50%' }} 
              pr={{ lg: 8 }}
              animation={`${fadeIn} 0.8s ease-out 0.2s`}
            >
              <Heading 
                as="h2" 
                fontSize={{ base: '2xl', md: '4xl' }}
                fontWeight="bold"
                bgGradient="linear(to-r, brand.500, accent.500)"
                bgClip="text"
                position="relative"
              >
                学习成果
              </Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor} maxW="lg" lineHeight="tall">
                完成90天课程后，您将能够：
              </Text>
              
              <VStack align="stretch" spacing={4} w="100%">
                {outcomes.map((outcome, index) => (
                  <Flex 
                    key={index} 
                    p={4} 
                    bg="gray.50" 
                    rounded="lg" 
                    align="center"
                    _hover={{
                      bg: 'gray.100',
                      transform: 'translateX(5px)',
                    }}
                    transition="all 0.3s"
                    animation={`${fadeIn} 0.5s ease-out ${0.1 * index}s`}
                    border="1px solid"
                    borderColor="gray.100"
                    shadow="sm"
                  >
                    <Icon as={FaCheckCircle} color="green.500" boxSize={5} mr={4} />
                    <Text fontSize="md" fontWeight="medium">{outcome}</Text>
                  </Flex>
                ))}
              </VStack>
              
              <Button 
                as={RouterLink} 
                to={isLoggedIn ? '/dashboard' : '/register'} 
                size="lg" 
                colorScheme="accent"
                rounded="full"
                px={12}
                py={8}
                mt={8}
                fontSize="xl"
                fontWeight="bold"
                _hover={{
                  transform: 'translateY(-3px) scale(1.05)',
                  boxShadow: '0 15px 30px -5px rgba(213, 63, 140, 0.5)',
                }}
                boxShadow="0 10px 20px -5px rgba(213, 63, 140, 0.3)"
                transition="all 0.3s ease"
                rightIcon={<FaChevronRight />}
              >
                {isLoggedIn ? '继续我的学习' : '立即注册体验'}
              </Button>
            </VStack>
          </Flex>
        </Container>
      </Box>
      
      {/* 学员反馈 */}
      <Box 
        bg={useColorModeValue('gray.50', 'gray.900')} 
        py={{ base: 16, md: 24 }}
        position="relative"
        overflow="hidden"
      >
        {/* 装饰元素 */}
        <Box
          position="absolute"
          top="0"
          right="0"
          width="250px"
          height="250px"
          bg="brand.50"
          opacity="0.5"
          clipPath="polygon(0 0, 100% 0, 100% 100%)"
        />
        
        <Container maxW="container.xl" position="relative" zIndex={1}>
          <VStack mb={{ base: 10, md: 16 }} spacing={4}>
            <Heading 
              as="h2" 
              fontSize={{ base: '2xl', md: '4xl' }}
              fontWeight="bold"
              textAlign="center"
              bgGradient="linear(to-r, brand.400, accent.500)"
              bgClip="text"
            >
              学员反馈
            </Heading>
            <Text 
              fontSize={{ base: 'md', md: 'lg' }} 
              color={textColor} 
              maxW="2xl" 
              textAlign="center"
              opacity={0.8}
            >
              看看其他学习者是如何通过我们的课程实现日语目标的
            </Text>
            <Box 
              w="40px" 
              h="4px" 
              bgGradient="linear(to-r, brand.400, accent.500)" 
              rounded="full" 
            />
          </VStack>
          
          <SimpleGrid 
            columns={{ base: 1, md: 3 }} 
            spacing={10}
            pt={6}
            animation={`${fadeIn} 1s ease-out`}
          >
            {testimonials.map((testimonial, index) => (
              <Box
                key={index}
                bg={cardBg}
                p={8}
                rounded="xl"
                shadow="lg"
                borderWidth="1px"
                borderColor={borderColor}
                position="relative"
                _hover={{
                  transform: 'translateY(-8px)',
                  shadow: 'xl',
                }}
                transition="all 0.3s ease"
                animation={`${fadeIn} 0.8s ease-out ${0.2 * index}s`}
                height="100%"
              >
                <Flex 
                  direction="column" 
                  justify="space-between" 
                  h="100%"
                >
                  <Text 
                    fontSize="md" 
                    fontStyle="italic" 
                    mb={6} 
                    color={textColor}
                    lineHeight="tall"
                  >
                    "{testimonial.content}"
                  </Text>
                  
                  <Flex align="center">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      boxSize="50px"
                      rounded="full"
                      objectFit="cover"
                      mr={4}
                    />
                    <Box>
                      <Text fontWeight="bold">{testimonial.name}</Text>
                      <Text fontSize="sm" color={textColor}>
                        {testimonial.role}
                      </Text>
                    </Box>
                  </Flex>
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* 行动号召 */}
      <Box 
        bgGradient="linear(to-r, brand.600, brand.800)" 
        color="white" 
        py={{ base: 16, md: 24 }} 
        position="relative" 
        overflow="hidden"
      >
        {/* 背景装饰 */}
        <Box
          position="absolute"
          top="-80px"
          right="-80px"
          width="250px"
          height="250px"
          rounded="full"
          bg="whiteAlpha.200"
          filter="blur(5px)"
        />
        <Box
          position="absolute"
          bottom="-60px"
          left="-60px"
          width="200px"
          height="200px"
          rounded="full"
          bg="whiteAlpha.200"
          filter="blur(5px)"
        />
        <Box
          position="absolute"
          top="30%"
          left="15%"
          width="12px"
          height="12px"
          rounded="full"
          bg="whiteAlpha.600"
        />
        <Box
          position="absolute"
          bottom="25%"
          right="20%"
          width="8px"
          height="8px"
          rounded="full"
          bg="whiteAlpha.600"
        />
        
        <Container maxW="container.lg" position="relative" zIndex={1}>
          <VStack 
            spacing={8} 
            textAlign="center"
            animation={`${fadeIn} 0.8s ease-out`}
          >
            <Heading 
              as="h2" 
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="extrabold"
              bgGradient="linear(to-r, white, teal.100)"
              bgClip="text"
              lineHeight={1.2}
              maxW="800px"
            >
              准备好开始您的日语学习之旅了吗？
            </Heading>
            <Text 
              fontSize={{ base: "md", md: "xl" }} 
              opacity={0.9} 
              maxW="2xl"
              lineHeight="taller"
            >
              加入我们，用90天时间打造实用的日语沟通能力，开启全新的人生可能
            </Text>
            <Button 
              as={RouterLink} 
              to={isLoggedIn ? '/dashboard' : '/register'} 
              size="lg" 
              colorScheme="accent"
              rounded="full"
              px={12}
              py={8}
              mt={8}
              fontSize="xl"
              fontWeight="bold"
              _hover={{
                transform: 'translateY(-3px) scale(1.05)',
                boxShadow: '0 15px 30px -5px rgba(213, 63, 140, 0.5)',
              }}
              boxShadow="0 10px 20px -5px rgba(213, 63, 140, 0.3)"
              transition="all 0.3s ease"
              rightIcon={<FaChevronRight />}
            >
              {isLoggedIn ? '继续我的学习' : '立即注册体验'}
            </Button>
            
            {/* 简短特性列表 */}
            <SimpleGrid 
              columns={{ base: 1, md: 3 }} 
              spacing={8}
              w="full"
              mt={8}
              pt={8}
              borderTop="1px solid"
              borderColor="whiteAlpha.300"
            >
              <HStack spacing={3} justify={{ base: 'center', md: 'flex-start' }}>
                <Icon as={FaCheckCircle} color="green.300" boxSize={5} />
                <Text>科学学习方法</Text>
              </HStack>
              <HStack spacing={3} justify={{ base: 'center', md: 'center' }}>
                <Icon as={FaCheckCircle} color="green.300" boxSize={5} />
                <Text>高效记忆技巧</Text>
              </HStack>
              <HStack spacing={3} justify={{ base: 'center', md: 'flex-end' }}>
                <Icon as={FaCheckCircle} color="green.300" boxSize={5} />
                <Text>实时学习反馈</Text>
              </HStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </Layout>
  );
};

export default HomePage; 