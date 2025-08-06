import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Switch,
  FormControl,
  FormLabel,
  Select,
  Button,
  useColorModeValue,
  useColorMode,
  useToast,
  Divider,
  Icon,
  Badge,
} from '@chakra-ui/react';
import { FaCog, FaBell, FaShieldAlt, FaMoon, FaSun, FaGlobe, FaLock } from 'react-icons/fa';

const Settings = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    marketingEmails: true,
    language: 'en',
    currency: 'USD',
    twoFactorAuth: false,
  });
  const toast = useToast();

  // Dynamic colors
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'brand.dark.cardBg');
  const textColor = useColorModeValue('brand.navyBlue', 'white');
  const subtextColor = useColorModeValue('gray.600', 'gray.300');
  const borderColor = useColorModeValue('gray.200', 'brand.dark.borderColor');

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    toast({
      title: 'Settings Saved',
      description: 'Your preferences have been updated successfully!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const SettingCard = ({ icon, title, description, children }) => (
    <Box
      bg={cardBg}
      p={6}
      borderRadius="xl"
      boxShadow="md"
      border="1px solid"
      borderColor={borderColor}
    >
      <VStack spacing={4} align="stretch">
        <HStack>
          <Icon as={icon} color={useColorModeValue('brand.parrotGreen', 'brand.dark.parrotGreen')} />
          <VStack align="start" spacing={1} flex={1}>
            <Text fontWeight="bold" color={textColor}>
              {title}
            </Text>
            <Text fontSize="sm" color={subtextColor}>
              {description}
            </Text>
          </VStack>
        </HStack>
        <Divider />
        {children}
      </VStack>
    </Box>
  );

  return (
    <Box minH="100vh" bg={bgColor}>
      <Container maxW="container.lg" py={12}>
        <VStack spacing={8}>
          {/* Header */}
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl" color={textColor}>
              Settings ⚙️
            </Heading>
            <Text fontSize="lg" color={subtextColor}>
              Customize your WEDESIHOMES experience
            </Text>
          </VStack>

          {/* Settings Sections */}
          <VStack spacing={6} w="full">
            {/* Theme Settings */}
            <SettingCard
              icon={colorMode === 'light' ? FaMoon : FaSun}
              title="Appearance"
              description="Choose between light and dark themes"
            >
              <FormControl display="flex" alignItems="center" justifyContent="space-between">
                <FormLabel htmlFor="dark-mode" mb="0" color={textColor}>
                  Dark Mode
                  <Badge ml={2} colorScheme={colorMode === 'dark' ? 'green' : 'gray'} variant="subtle">
                    {colorMode === 'dark' ? 'ON' : 'OFF'}
                  </Badge>
                </FormLabel>
                                <Switch
                  id="dark-mode"
                  isChecked={colorMode === 'dark'}
                  onChange={toggleColorMode}
                  colorScheme="green"
                />
              </FormControl>
            </SettingCard>

            {/* Notification Settings */}
            <SettingCard
              icon={FaBell}
              title="Notifications"
              description="Manage how you receive updates and alerts"
            >
              <VStack spacing={4}>
                <FormControl display="flex" alignItems="center" justifyContent="space-between">
                  <FormLabel htmlFor="email-notifications" mb="0" color={textColor}>
                    Email Notifications
                  </FormLabel>
                  <Switch
                    id="email-notifications"
                    isChecked={settings.emailNotifications}
                    onChange={(e) => handleSettingChange('emailNotifications', e.target.checked)}
                    colorScheme="green"
                  />
                </FormControl>

                <FormControl display="flex" alignItems="center" justifyContent="space-between">
                  <FormLabel htmlFor="push-notifications" mb="0" color={textColor}>
                    Push Notifications
                  </FormLabel>
                  <Switch
                    id="push-notifications"
                    isChecked={settings.pushNotifications}
                    onChange={(e) => handleSettingChange('pushNotifications', e.target.checked)}
                    colorScheme="green"
                  />
                </FormControl>

                <FormControl display="flex" alignItems="center" justifyContent="space-between">
                  <FormLabel htmlFor="marketing-emails" mb="0" color={textColor}>
                    Marketing Emails
                  </FormLabel>
                  <Switch
                    id="marketing-emails"
                    isChecked={settings.marketingEmails}
                    onChange={(e) => handleSettingChange('marketingEmails', e.target.checked)}
                    colorScheme="green"
                  />
                </FormControl>
              </VStack>
            </SettingCard>

            {/* Language & Region */}
            <SettingCard
              icon={FaGlobe}
              title="Language & Region"
              description="Set your preferred language and currency"
            >
              <VStack spacing={4}>
                <FormControl>
                  <FormLabel color={textColor}>Language</FormLabel>
                  <Select
                    value={settings.language}
                    onChange={(e) => handleSettingChange('language', e.target.value)}
                  >
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                    <option value="de">Deutsch</option>
                    <option value="zh">中文</option>
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel color={textColor}>Currency</FormLabel>
                  <Select
                    value={settings.currency}
                    onChange={(e) => handleSettingChange('currency', e.target.value)}
                  >
                    <option value="USD">USD - US Dollar</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP - British Pound</option>
                    <option value="CAD">CAD - Canadian Dollar</option>
                    <option value="AUD">AUD - Australian Dollar</option>
                  </Select>
                </FormControl>
              </VStack>
            </SettingCard>

            {/* Security Settings */}
            <SettingCard
              icon={FaShieldAlt}
              title="Security & Privacy"
              description="Protect your account with additional security measures"
            >
              <VStack spacing={4}>
                <FormControl display="flex" alignItems="center" justifyContent="space-between">
                  <VStack align="start" spacing={1} flex={1}>
                    <FormLabel htmlFor="two-factor-auth" mb="0" color={textColor}>
                      Two-Factor Authentication
                    </FormLabel>
                    <Text fontSize="sm" color={subtextColor}>
                      Add an extra layer of security to your account
                    </Text>
                  </VStack>
                  <Switch
                    id="two-factor-auth"
                    isChecked={settings.twoFactorAuth}
                    onChange={(e) => handleSettingChange('twoFactorAuth', e.target.checked)}
                    colorScheme="green"
                  />
                </FormControl>

                <Divider />

                <VStack spacing={3} w="full">
                  <Button
                    variant="outline"
                    leftIcon={<FaLock />}
                    w="full"
                    justifyContent="flex-start"
                  >
                    Change Password
                  </Button>
                  
                  <Button
                    variant="outline"
                    leftIcon={<FaShieldAlt />}
                    w="full"
                    justifyContent="flex-start"
                  >
                    Privacy Settings
                  </Button>
                </VStack>
              </VStack>
            </SettingCard>

            {/* Account Management */}
            <SettingCard
              icon={FaCog}
              title="Account Management"
              description="Manage your account settings and data"
            >
              <VStack spacing={3}>
                <Button variant="outline" w="full" justifyContent="flex-start">
                  Download My Data
                </Button>
                
                <Button variant="outline" w="full" justifyContent="flex-start">
                  Export Booking History
                </Button>
                
                <Divider />
                
                <Button 
                  variant="outline" 
                  colorScheme="red" 
                  w="full" 
                  justifyContent="flex-start"
                >
                  Deactivate Account
                </Button>
              </VStack>
            </SettingCard>

            {/* Save Button */}
            <Button
              variant="primary"
              size="lg"
              onClick={handleSave}
              leftIcon={<Icon as={FaCog} />}
              w="full"
              maxW="300px"
            >
              Save All Settings
            </Button>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Settings;
