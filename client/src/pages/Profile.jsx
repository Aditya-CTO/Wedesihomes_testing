import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Avatar,
  Button,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  useColorModeValue,
  useToast,
  Divider,
  Badge,
  Icon,
} from '@chakra-ui/react';
import { FaUser, FaEdit, FaSave, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    bio: user?.bio || '',
    location: user?.location || '',
  });
  const toast = useToast();

  // Dynamic colors
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'brand.dark.cardBg');
  const textColor = useColorModeValue('brand.navyBlue', 'white');
  const subtextColor = useColorModeValue('gray.600', 'gray.300');
  const borderColor = useColorModeValue('gray.200', 'brand.dark.borderColor');

  const handleSave = async () => {
    try {
      // Here you would make an API call to update the user profile
      console.log('Updating profile:', formData);
      
      toast({
        title: 'Profile Updated',
        description: 'Your profile has been updated successfully!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      
      setIsEditing(false);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update profile. Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box minH="100vh" bg={bgColor}>
      <Container maxW="container.lg" py={12}>
        <VStack spacing={8}>
          {/* Header */}
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl" color={textColor}>
              My Profile 👤
            </Heading>
            <Text fontSize="lg" color={subtextColor}>
              Manage your personal information and preferences
            </Text>
          </VStack>

          {/* Profile Card */}
          <Box
            bg={cardBg}
            p={8}
            borderRadius="2xl"
            boxShadow="lg"
            border="1px solid"
            borderColor={borderColor}
            w="full"
          >
            <VStack spacing={6}>
              {/* Avatar Section */}
              <VStack spacing={4}>
                <Avatar
                  size="2xl"
                  name={user?.name}
                  src={user?.avatar}
                  border="4px solid"
                  borderColor={useColorModeValue('brand.parrotGreen', 'brand.dark.parrotGreen')}
                />
                <VStack spacing={1}>
                  <Heading size="lg" color={textColor}>
                    {user?.name || 'User'}
                  </Heading>
                  <Badge
                    colorScheme="green"
                    variant="subtle"
                    px={3}
                    py={1}
                    borderRadius="full"
                  >
                    Verified Student
                  </Badge>
                </VStack>
              </VStack>

              <Divider />

              {/* Profile Form */}
              <VStack spacing={6} w="full" maxW="2xl">
                <HStack justify="space-between" w="full">
                  <Heading size="md" color={textColor}>
                    Personal Information
                  </Heading>
                  <Button
                    leftIcon={<Icon as={isEditing ? FaSave : FaEdit} />}
                    variant={isEditing ? "primary" : "outline"}
                    size="sm"
                    onClick={isEditing ? handleSave : () => setIsEditing(true)}
                  >
                    {isEditing ? 'Save Changes' : 'Edit Profile'}
                  </Button>
                </HStack>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
                  <FormControl>
                    <FormLabel color={textColor}>
                      <Icon as={FaUser} mr={2} />
                      Full Name
                    </FormLabel>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      isReadOnly={!isEditing}
                      variant={isEditing ? "outline" : "filled"}
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel color={textColor}>
                      <Icon as={FaEnvelope} mr={2} />
                      Email Address
                    </FormLabel>
                    <Input
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      isReadOnly={!isEditing}
                      variant={isEditing ? "outline" : "filled"}
                      type="email"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel color={textColor}>
                      <Icon as={FaPhone} mr={2} />
                      Phone Number
                    </FormLabel>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      isReadOnly={!isEditing}
                      variant={isEditing ? "outline" : "filled"}
                      placeholder="Add your phone number"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel color={textColor}>
                      <Icon as={FaMapMarkerAlt} mr={2} />
                      Location
                    </FormLabel>
                    <Input
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      isReadOnly={!isEditing}
                      variant={isEditing ? "outline" : "filled"}
                      placeholder="Add your location"
                    />
                  </FormControl>
                </SimpleGrid>

                <FormControl>
                  <FormLabel color={textColor}>About Me</FormLabel>
                  <Textarea
                    value={formData.bio}
                    onChange={(e) => setFormData({...formData, bio: e.target.value})}
                    isReadOnly={!isEditing}
                    variant={isEditing ? "outline" : "filled"}
                    placeholder="Tell us about yourself..."
                    rows={4}
                  />
                </FormControl>
              </VStack>

              {/* Quick Stats */}
              <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6} w="full" pt={6}>
                <VStack>
                  <Text fontSize="2xl" fontWeight="bold" color={useColorModeValue('brand.parrotGreen', 'brand.dark.parrotGreen')}>
                    3
                  </Text>
                  <Text fontSize="sm" color={subtextColor} textAlign="center">
                    Properties Viewed
                  </Text>
                </VStack>
                <VStack>
                  <Text fontSize="2xl" fontWeight="bold" color={useColorModeValue('brand.parrotGreen', 'brand.dark.parrotGreen')}>
                    1
                  </Text>
                  <Text fontSize="sm" color={subtextColor} textAlign="center">
                    Current Booking
                  </Text>
                </VStack>
                <VStack>
                  <Text fontSize="2xl" fontWeight="bold" color={useColorModeValue('brand.parrotGreen', 'brand.dark.parrotGreen')}>
                    5
                  </Text>
                  <Text fontSize="sm" color={subtextColor} textAlign="center">
                    Saved Properties
                  </Text>
                </VStack>
                <VStack>
                  <Text fontSize="2xl" fontWeight="bold" color={useColorModeValue('brand.parrotGreen', 'brand.dark.parrotGreen')}>
                    2
                  </Text>
                  <Text fontSize="sm" color={subtextColor} textAlign="center">
                    Reviews Written
                  </Text>
                </VStack>
              </SimpleGrid>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Profile;
