import {
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
  } from '@chakra-ui/react';
import ImageHome from '../img/image-home.jpg'
import { useNavigate } from 'react-router-dom';
  
  export default function TripCard({name, description, duration, planet, date, id}) {
    const navigate = useNavigate()
    const onClickHandle = (id) => {
      navigate('/trips/application')
    }

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
          padding={4}
          >
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
            justifyContent="space-between"
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
            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Button
                flex={1}
                fontSize={'md'}
                rounded={'full'}
                bg={'purple.400'}
                color={'white'}
                _hover={{
                  bg: 'purple.500',
                }}
                _focus={{
                  bg: 'purple.500',
                }}
                onClick={() => onClickHandle(id)}>
                Inscrever-se
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    );
  }