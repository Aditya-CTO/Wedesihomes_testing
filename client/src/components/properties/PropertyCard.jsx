import React from 'react';
import {
  Box,
  Image,
  Badge,
  Text,
  VStack,
  HStack,
  Button,
  Icon,
  Flex,
} from '@chakra-ui/react';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const MotionBox = motion(Box);

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    // Navigate to property detail page - using the correct route format
    navigate(`/property/${property.id || property._id}`);
  };

  return (
    <MotionBox
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Box
        borderRadius="2xl"
        overflow="hidden"
        bg="white"
        boxShadow="lg"
        _hover={{ boxShadow: 'xl' }}
        transition="all 0.3s"
      >
        <Box position="relative">
          <Image
            src={property.image || property.images?.[0]?.url}
            alt={property.name}
            h="200px"
            w="full"
            objectFit="cover"
            fallbackSrc="/assets/default-property.jpg"
          />
          <Badge
            position="absolute"
            top={4}
            right={4}
            bg="brand.parrotGreen"
            color="white"
            px={3}
            py={1}
            borderRadius="full"
            fontSize="sm"
          >
            Featured
          </Badge>
        </Box>

        <VStack align="stretch" p={6} spacing={4}>
          <VStack align="stretch" spacing={2}>
            <Text fontSize="xl" fontWeight="bold" color="brand.navyBlue">
              {property.name}
            </Text>
            <HStack color="gray.600">
              <Icon as={FaMapMarkerAlt} />
              <Text>
                {property.city && property.country 
                  ? `${property.city}, ${property.country}`
                  : property.location?.address || 'Location not specified'
                }
              </Text>
            </HStack>
          </VStack>

          <HStack justify="space-between">
            <Text fontSize="2xl" fontWeight="bold" color="brand.parrotGreen">
              {property.price || `$${property.price?.amount}/${property.price?.period}`}
            </Text>
            <HStack>
              <Icon as={FaStar} color="yellow.400" />
              <Text fontWeight="medium">
                {property.rating || property.rating?.average || '4.5'}
              </Text>
            </HStack>
          </HStack>

          <HStack spacing={2} flexWrap="wrap">
            {property.amenities?.slice(0, 3).map((amenity, index) => (
              <Badge
                key={index}
                colorScheme="green"
                variant="subtle"
                px={2}
                py={1}
                borderRadius="full"
              >
                {amenity}
              </Badge>
            ))}
            {property.amenities?.length > 3 && (
              <Badge
                colorScheme="gray"
                variant="subtle"
                px={2}
                py={1}
                borderRadius="full"
              >
                +{property.amenities.length - 3} more
              </Badge>
            )}
          </HStack>

          <Button 
            variant="primary" 
            size="md" 
            w="full"
            onClick={handleViewDetails}
            _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
          >
            View Details
          </Button>
        </VStack>
      </Box>
    </MotionBox>
  );
};

export default PropertyCard;
