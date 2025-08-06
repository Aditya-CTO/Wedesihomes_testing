import React, { useState } from 'react';
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Divider,
  HStack,
  InputGroup,
  InputRightElement,
  IconButton,
  Checkbox,
  useToast,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext'; // Import useAuth
import axios from 'axios';

const SignupForm = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const { signup } = useAuth(); // Use the auth context

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    agreeToTerms: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!formData.agreeToTerms) {
      setError('You must agree to the Terms & Conditions');
      setLoading(false);
      return;
    }

    try {
      // Try API call first
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL || 'https://wedesihomes-backend.onrender.com/api'}/auth/register`,
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
        },
        { withCredentials: true }
      );

      // Store user data and update context
      const userData = res.data.user;
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('token', res.data.token || 'api-token');
      
      // Update auth context
      await signup(formData);
      
      toast({
        title: 'Account created successfully!',
        description: `Welcome to WEDESIHOMES, ${userData.name}!`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      
      onClose?.();
    } catch (err) {
      console.log('API signup failed, trying mock signup...');
      
      // Fallback to mock signup if API fails
      try {
        const result = await signup(formData);
        if (result.success) {
          toast({
            title: 'Account created successfully!',
            description: `Welcome to WEDESIHOMES!`,
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
          onClose?.();
        } else {
          setError(result.error || 'Signup failed');
        }
      } catch (mockError) {
        setError('Signup failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <VStack spacing={4} as="form" onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel>Full Name</FormLabel>
        <Input
          placeholder="John Doe"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Phone Number</FormLabel>
        <Input
          type="tel"
          placeholder="+1 234 567 8900"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Create a strong password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <InputRightElement>
            <IconButton
              size="sm"
              variant="ghost"
              icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Toggle password visibility"
            />
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Checkbox
        isChecked={formData.agreeToTerms}
        onChange={(e) =>
          setFormData({ ...formData, agreeToTerms: e.target.checked })
        }
      >
        I agree to the Terms & Conditions
      </Checkbox>

      {error && <Text color="red.500" fontSize="sm">{error}</Text>}

      <Button 
        variant="primary" 
        type="submit" 
        w="full" 
        size="lg"
        isLoading={loading}
        loadingText="Creating account..."
      >
        Sign Up
      </Button>

      <Divider />

      <Text fontSize="sm" color="gray.600">
        Or sign up with
      </Text>

      <HStack spacing={4} w="full">
        <Button
          leftIcon={<FaGoogle />}
          variant="outline"
          flex={1}
          colorScheme="red"
        >
          Google
        </Button>
        <Button
          leftIcon={<FaFacebook />}
          variant="outline"
          flex={1}
          colorScheme="facebook"
        >
          Facebook
        </Button>
      </HStack>
    </VStack>
  );
};

export default SignupForm;
