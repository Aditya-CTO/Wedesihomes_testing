import React from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const MotionBox = motion(Box);

const stats = [
  { label: 'Cities', value: 50, suffix: '+', emoji: '🌍' },
  { label: 'Properties', value: 1000, suffix: '+', emoji: '🏠' },
  { label: 'Happy Students', value: 5000, suffix: '+', emoji: '😊' },
  { label: 'Support', value: 24, suffix: '/7', emoji: '💬' },
];

const StatsSection = () => {
  // ✅ ALL HOOKS AT TOP LEVEL
  const sectionBg = useColorModeValue('brand.navyBlue', 'brand.dark.bg.navy');
  const cardBg = useColorModeValue('white', 'brand.dark.bg.card');
  const numberColor = useColorModeValue('brand.parrotGreen', 'brand.parrotGreen');
  const labelColor = useColorModeValue('brand.navyBlue', 'white');
  const shadowNormal = useColorModeValue('lg', 'dark-lg');
  const shadowHover = useColorModeValue('xl', '2xl');
  const borderColor = useColorModeValue('transparent', 'brand.dark.border');

  return (
    <Box py={20} bg={sectionBg}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
          {stats.map((stat, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Stat
                bg={cardBg}
                p={6}
                borderRadius="2xl"
                textAlign="center"
                boxShadow={shadowNormal}
                border="1px solid"
                borderColor={borderColor}
                transition="all 0.3s"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: shadowHover, // ✅ Use pre-defined value
                }}
              >
                <StatLabel fontSize="3xl" mb={2}>
                  {stat.emoji}
                </StatLabel>
                <StatNumber
                  fontSize="4xl"
                  color={numberColor}
                  fontWeight="bold"
                >
                  <CountUp end={stat.value} duration={2} />
                  {stat.suffix}
                </StatNumber>
                <StatHelpText
                  fontSize="lg"
                  color={labelColor}
                  fontWeight="medium"
                >
                  {stat.label}
                </StatHelpText>
              </Stat>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default StatsSection;
