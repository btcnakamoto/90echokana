import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Image,
  Progress,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Text,
  VStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Badge,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import {
  FaBookOpen,
  FaCalendarAlt,
  FaChartLine,
  FaCheckCircle,
  FaClock,
  FaEye,
  FaFire,
  FaGraduationCap,
  FaHeadphones,
  FaMicrophone,
  FaRegClock,
  FaStar,
  FaTrophy,
  FaUserFriends,
} from 'react-icons/fa';

import Layout from '../components/Layout';

// 模拟用户数据 - 实际应用中应该从API获取
const userData = {
  name: '张明',
  level: 'N3',
  streakDays: 28,
  completedLessons: 43,
  totalLessons: 90,
  totalPoints: 3750,
  weeklyPoints: 850,
  masteredWords: 752,
  totalWords: 2000,
  nextLesson: {
    day: 44,
    title: '在餐厅点餐',
    timeEstimate: 25,
    learningPoints: [
      '掌握餐厅用语',
      '学习食物相关词汇',
      '理解并使用礼貌表达式'
    ]
  },
  weeklyGoal: 7,
  weeklyProgress: 5,
  recentActivity: [
    { type: '听力练习', title: '购物对话', score: 92, date: '今天' },
    { type: '词汇复习', title: '时间表达', score: 88, date: '昨天' },
    { type: '口语练习', title: '自我介绍', score: 95, date: '2天前' },
    { type: '语法学习', title: '动词变形', score: 78, date: '3天前' },
  ],
  recommendedLessons: [
    { id: 1, title: '数字与计数', type: '词汇', level: '基础', duration: '15分钟' },
    { id: 2, title: '问路', type: '对话', level: '初级', duration: '20分钟' },
    { id: 3, title: '日常问候', type: '口语', level: '基础', duration: '10分钟' },
  ]
};

// 日语水平进度条的颜色映射
const levelColors = {
  N5: 'green',
  N4: 'teal',
  N3: 'blue',
  N2: 'purple',
  N1: 'red'
};

// 获取当前日期和问候语
const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return '早上好';
  if (hour < 18) return '下午好';
  return '晚上好';
};

const DashboardPage = () => {
  const [greeting, setGreeting] = useState('');
  
  useEffect(() => {
    setGreeting(getGreeting());
  }, []);

  // 颜色模式
  const cardBg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const accentColor = useColorModeValue('brand.500', 'brand.300');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const statBg = useColorModeValue('gray.50', 'gray.800');
  
  // 计算进度百分比
  const progressPercentage = Math.round((userData.completedLessons / userData.totalLessons) * 100);
  const wordProgressPercentage = Math.round((userData.masteredWords / userData.totalWords) * 100);
  const weeklyProgressPercentage = Math.round((userData.weeklyProgress / userData.weeklyGoal) * 100);

  return (
    <Layout>
      <Box py={8} px={{ base: 4, md: 0 }}>
        <Container maxW="container.xl">
          {/* 欢迎区域 */}
          <Flex 
            direction={{ base: 'column', md: 'row' }}
            align={{ base: 'flex-start', md: 'center' }}
            justify="space-between"
            mb={8}
          >
            <Box>
              <Heading
                as="h1"
                fontSize={{ base: '2xl', md: '3xl' }}
                mb={2}
              >
                {greeting}，{userData.name}！
              </Heading>
              <Text color={textColor} fontSize="lg">
                继续你的日语学习之旅，今天又是充满可能的一天。
              </Text>
            </Box>
            <HStack 
              spacing={4} 
              mt={{ base: 4, md: 0 }}
              bg={statBg}
              p={3}
              rounded="lg"
              border="1px"
              borderColor={borderColor}
            >
              <Icon as={FaFire} color="orange.400" boxSize={6} />
              <Box>
                <Text fontWeight="bold" fontSize="xl">
                  {userData.streakDays} 天连续学习
                </Text>
                <Text fontSize="sm" color={textColor}>
                  学习习惯正在形成！
                </Text>
              </Box>
            </HStack>
          </Flex>

          {/* 进度概览 */}
          <Grid 
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
            gap={6}
            mb={8}
          >
            {/* 学习进度 */}
            <GridItem colSpan={1}>
              <Card bg={cardBg} shadow="md" borderRadius="lg" overflow="hidden">
                <CardHeader bg="brand.500" py={4}>
                  <Flex align="center">
                    <Icon as={FaChartLine} color="white" boxSize={5} mr={3} />
                    <Heading size="md" color="white">学习进度</Heading>
                  </Flex>
                </CardHeader>
                <CardBody p={5}>
                  <VStack align="start" spacing={4}>
                    <Flex w="100%" justify="space-between" align="center">
                      <Text fontWeight="bold">总体进度</Text>
                      <Text fontWeight="bold" color={accentColor}>{progressPercentage}%</Text>
                    </Flex>
                    <Progress 
                      colorScheme="brand" 
                      value={progressPercentage} 
                      w="100%" 
                      borderRadius="full" 
                      size="md"
                    />
                    <Flex w="100%" justify="space-between" align="center" fontSize="sm">
                      <Text>{userData.completedLessons} 课已完成</Text>
                      <Text>总共 {userData.totalLessons} 课</Text>
                    </Flex>
                  </VStack>
                </CardBody>
                <CardFooter 
                  bg="gray.50" 
                  py={3} 
                  borderTop="1px" 
                  borderColor={borderColor}
                  justify="center"
                >
                  <HStack>
                    <Icon as={FaTrophy} color="yellow.500" />
                    <Text fontWeight="medium">当前等级: <Badge colorScheme={levelColors[userData.level] as any}>{userData.level}</Badge></Text>
                  </HStack>
                </CardFooter>
              </Card>
            </GridItem>

            {/* 本周目标 */}
            <GridItem colSpan={1}>
              <Card bg={cardBg} shadow="md" borderRadius="lg" overflow="hidden">
                <CardHeader bg="accent.500" py={4}>
                  <Flex align="center">
                    <Icon as={FaCalendarAlt} color="white" boxSize={5} mr={3} />
                    <Heading size="md" color="white">本周目标</Heading>
                  </Flex>
                </CardHeader>
                <CardBody p={5}>
                  <VStack align="start" spacing={4}>
                    <Flex w="100%" justify="space-between" align="center">
                      <Text fontWeight="bold">本周完成课程</Text>
                      <Text fontWeight="bold" color={accentColor}>{userData.weeklyProgress}/{userData.weeklyGoal} 课</Text>
                    </Flex>
                    <Progress 
                      colorScheme="accent" 
                      value={weeklyProgressPercentage} 
                      w="100%" 
                      borderRadius="full" 
                      size="md"
                    />
                    <HStack w="100%" justify="space-evenly" spacing={3} py={2}>
                      {[...Array(7)].map((_, i) => (
                        <Flex 
                          key={i} 
                          w="30px" 
                          h="30px" 
                          rounded="full" 
                          bg={i < userData.weeklyProgress ? 'accent.500' : 'gray.100'} 
                          justify="center" 
                          align="center"
                          fontSize="xs"
                          fontWeight="bold"
                          color={i < userData.weeklyProgress ? 'white' : 'gray.500'}
                        >
                          {i < userData.weeklyProgress && <Icon as={FaCheckCircle} />}
                        </Flex>
                      ))}
                    </HStack>
                  </VStack>
                </CardBody>
                <CardFooter 
                  bg="gray.50" 
                  py={3} 
                  borderTop="1px" 
                  borderColor={borderColor}
                  justify="center"
                >
                  <HStack>
                    <Icon as={FaFire} color="orange.500" />
                    <Text fontWeight="medium">已获得 {userData.weeklyPoints} 积分</Text>
                  </HStack>
                </CardFooter>
              </Card>
            </GridItem>

            {/* 词汇掌握 */}
            <GridItem colSpan={1}>
              <Card bg={cardBg} shadow="md" borderRadius="lg" overflow="hidden">
                <CardHeader bg="purple.500" py={4}>
                  <Flex align="center">
                    <Icon as={FaBookOpen} color="white" boxSize={5} mr={3} />
                    <Heading size="md" color="white">词汇掌握</Heading>
                  </Flex>
                </CardHeader>
                <CardBody p={5}>
                  <VStack align="start" spacing={4}>
                    <Flex w="100%" justify="space-between" align="center">
                      <Text fontWeight="bold">已掌握词汇</Text>
                      <Text fontWeight="bold" color="purple.500">{wordProgressPercentage}%</Text>
                    </Flex>
                    <Progress 
                      colorScheme="purple" 
                      value={wordProgressPercentage} 
                      w="100%" 
                      borderRadius="full" 
                      size="md"
                    />
                    <Flex w="100%" justify="space-between" align="center" fontSize="sm">
                      <Text>{userData.masteredWords} 个词汇</Text>
                      <Text>目标 {userData.totalWords} 个</Text>
                    </Flex>
                  </VStack>
                </CardBody>
                <CardFooter 
                  bg="gray.50" 
                  py={3} 
                  borderTop="1px" 
                  borderColor={borderColor}
                  justify="center"
                >
                  <HStack>
                    <Icon as={FaStar} color="yellow.500" />
                    <Text fontWeight="medium">每天学习10个新词汇</Text>
                  </HStack>
                </CardFooter>
              </Card>
            </GridItem>
          </Grid>

          {/* 下一课程和活动记录 */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6} mb={8}>
            {/* 下一课程 */}
            <Card bg={cardBg} shadow="md" borderRadius="lg" overflow="hidden" height="100%">
              <CardHeader bg="green.500" py={4}>
                <Flex align="center">
                  <Icon as={FaGraduationCap} color="white" boxSize={5} mr={3} />
                  <Heading size="md" color="white">下一课程</Heading>
                </Flex>
              </CardHeader>
              <CardBody p={5}>
                <VStack align="start" spacing={5}>
                  <Flex align="center" w="100%">
                    <Flex 
                      bg="green.100" 
                      color="green.800" 
                      p={3} 
                      mr={4} 
                      rounded="lg"
                      direction="column"
                      align="center"
                      justify="center"
                    >
                      <Text fontWeight="bold" fontSize="xl">第{userData.nextLesson.day}</Text>
                      <Text fontSize="sm">天</Text>
                    </Flex>
                    <Box>
                      <Heading size="md" mb={1}>{userData.nextLesson.title}</Heading>
                      <HStack spacing={4} color={textColor}>
                        <Flex align="center">
                          <Icon as={FaRegClock} mr={1} />
                          <Text fontSize="sm">{userData.nextLesson.timeEstimate}分钟</Text>
                        </Flex>
                        <Flex align="center">
                          <Icon as={FaStar} mr={1} />
                          <Text fontSize="sm">+50积分</Text>
                        </Flex>
                      </HStack>
                    </Box>
                  </Flex>
                  
                  <Divider />
                  
                  <Box w="100%">
                    <Text fontWeight="medium" mb={3}>您将学习：</Text>
                    <VStack align="start" spacing={2}>
                      {userData.nextLesson.learningPoints.map((point, index) => (
                        <Flex key={index} align="center">
                          <Icon as={FaCheckCircle} color="green.500" mr={2} />
                          <Text>{point}</Text>
                        </Flex>
                      ))}
                    </VStack>
                  </Box>
                </VStack>
              </CardBody>
              <CardFooter py={3} borderTop="1px" borderColor={borderColor} justify="center">
                <Button 
                  as={RouterLink} 
                  to="/learning-materials" 
                  colorScheme="green" 
                  leftIcon={<FaBookOpen />}
                  size="md"
                  width="100%"
                >
                  开始学习
                </Button>
              </CardFooter>
            </Card>

            {/* 最近活动 */}
            <Card bg={cardBg} shadow="md" borderRadius="lg" overflow="hidden" height="100%">
              <CardHeader bg="blue.500" py={4}>
                <Flex align="center">
                  <Icon as={FaClock} color="white" boxSize={5} mr={3} />
                  <Heading size="md" color="white">最近活动</Heading>
                </Flex>
              </CardHeader>
              <CardBody p={0}>
                <VStack align="start" w="100%" divider={<Divider />} spacing={0}>
                  {userData.recentActivity.map((activity, index) => (
                    <Flex 
                      key={index} 
                      w="100%" 
                      p={4} 
                      justify="space-between" 
                      align="center"
                      _hover={{ bg: 'gray.50' }}
                      transition="background 0.2s"
                    >
                      <Flex align="center">
                        <Icon 
                          as={
                            activity.type.includes('听力') ? FaHeadphones : 
                            activity.type.includes('口语') ? FaMicrophone :
                            activity.type.includes('词汇') ? FaBookOpen : 
                            FaGraduationCap
                          } 
                          color={
                            activity.type.includes('听力') ? 'blue.500' : 
                            activity.type.includes('口语') ? 'green.500' :
                            activity.type.includes('词汇') ? 'purple.500' : 
                            'orange.500'
                          } 
                          boxSize={5}
                          mr={3}
                        />
                        <Box>
                          <Text fontWeight="medium">{activity.title}</Text>
                          <Text fontSize="sm" color={textColor}>{activity.type} · {activity.date}</Text>
                        </Box>
                      </Flex>
                      <Badge 
                        colorScheme={activity.score >= 90 ? 'green' : activity.score >= 80 ? 'blue' : 'orange'} 
                        fontSize="md" 
                        py={1} 
                        px={2} 
                        borderRadius="md"
                      >
                        {activity.score}分
                      </Badge>
                    </Flex>
                  ))}
                </VStack>
              </CardBody>
              <CardFooter py={3} borderTop="1px" borderColor={borderColor} justify="center">
                <Link as={RouterLink} to="/profile" color="blue.500" fontWeight="medium">
                  查看所有学习记录
                </Link>
              </CardFooter>
            </Card>
          </SimpleGrid>

          {/* 推荐学习 */}
          <Box mb={8}>
            <Flex align="center" mb={4}>
              <Heading size="lg" mr={2}>推荐学习</Heading>
              <Badge colorScheme="green" fontSize="sm">个性化推荐</Badge>
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
              {userData.recommendedLessons.map((lesson) => (
                <Card 
                  key={lesson.id} 
                  bg={cardBg} 
                  shadow="md" 
                  borderRadius="lg" 
                  overflow="hidden"
                  _hover={{ transform: 'translateY(-5px)', shadow: 'lg' }}
                  transition="all 0.3s"
                  cursor="pointer"
                >
                  <CardBody p={5}>
                    <Flex justify="space-between" mb={3}>
                      <Badge 
                        colorScheme={
                          lesson.type === '词汇' ? 'purple' : 
                          lesson.type === '对话' ? 'blue' : 
                          'green'
                        }
                      >
                        {lesson.type}
                      </Badge>
                      <Badge 
                        variant="outline" 
                        colorScheme={
                          lesson.level === '基础' ? 'green' : 
                          lesson.level === '初级' ? 'blue' : 
                          lesson.level === '中级' ? 'purple' : 
                          'red'
                        }
                      >
                        {lesson.level}
                      </Badge>
                    </Flex>
                    <Heading size="md" mb={4}>{lesson.title}</Heading>
                    <Flex align="center" fontSize="sm" color={textColor}>
                      <Icon as={FaRegClock} mr={1} />
                      <Text>{lesson.duration}</Text>
                    </Flex>
                  </CardBody>
                  <CardFooter 
                    py={3} 
                    borderTop="1px" 
                    borderColor={borderColor} 
                    bg="gray.50"
                    justify="center"
                  >
                    <Button 
                      leftIcon={<FaEye />} 
                      colorScheme="brand" 
                      variant="ghost" 
                      size="sm"
                    >
                      查看课程
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </SimpleGrid>
          </Box>

          {/* 统计数据 */}
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={5}>
            <Stat bg={cardBg} p={5} borderRadius="lg" shadow="sm" border="1px" borderColor={borderColor}>
              <StatLabel color={textColor}>总积分</StatLabel>
              <Flex align="center">
                <Icon as={FaStar} color="yellow.400" mr={2} />
                <StatNumber>{userData.totalPoints}</StatNumber>
              </Flex>
              <StatHelpText>继续保持！</StatHelpText>
            </Stat>
            <Stat bg={cardBg} p={5} borderRadius="lg" shadow="sm" border="1px" borderColor={borderColor}>
              <StatLabel color={textColor}>学习时长</StatLabel>
              <Flex align="center">
                <Icon as={FaClock} color="blue.400" mr={2} />
                <StatNumber>32小时</StatNumber>
              </Flex>
              <StatHelpText>本月总计</StatHelpText>
            </Stat>
            <Stat bg={cardBg} p={5} borderRadius="lg" shadow="sm" border="1px" borderColor={borderColor}>
              <StatLabel color={textColor}>平均分数</StatLabel>
              <Flex align="center">
                <Icon as={FaTrophy} color="green.400" mr={2} />
                <StatNumber>87%</StatNumber>
              </Flex>
              <StatHelpText>优秀水平</StatHelpText>
            </Stat>
            <Stat bg={cardBg} p={5} borderRadius="lg" shadow="sm" border="1px" borderColor={borderColor}>
              <StatLabel color={textColor}>学习伙伴</StatLabel>
              <Flex align="center">
                <Icon as={FaUserFriends} color="purple.400" mr={2} />
                <StatNumber>3</StatNumber>
              </Flex>
              <StatHelpText>一起学习更有动力</StatHelpText>
            </Stat>
          </SimpleGrid>
        </Container>
      </Box>
    </Layout>
  );
};

export default DashboardPage; 