import {
    Center,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
  } from '@chakra-ui/react';
import ImageHome from '../img/image-home.jpg'
  
  export default function TripDetails({name, description, duration, planet, date}) {
    return (
      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '740px' }}
          height={{ sm: '476px', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
          b={'gray'}
          boxShadow={'md'}
          padding={4}>
          <Flex flex={1}>
            <Image
              objectFit="cover"
              boxSize="100%"
              src={
                ImageHome
              }
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              {name}
            </Heading>
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              {date}
            </Text>
            <Text fontWeight={600} color={'gray.600'} fontSize='large' mb={4}>
              {duration} dias em <strong>{planet}</strong>
            </Text>
            <Text
              textAlign={'center'}
              color={'gray.500'}
              px={3}
              overflow={"hidden"}
              textOverflow={'ellipsis'}
              fontSize='large'>
              {description}
            </Text>
          </Stack>
        </Stack>
      </Center>
    );
  }
