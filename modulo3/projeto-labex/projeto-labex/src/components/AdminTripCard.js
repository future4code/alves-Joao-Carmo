import {
    Button,
    Center,
    Heading,
    Stack,
    Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'


export default function AdminTripCard({ name, description, duration, planet, date, id, deleteTrip }) {
    let navigate = useNavigate()

    return (
        <Center py={6}>
            <Stack
                borderWidth="1px"
                borderRadius="lg"
                w={{ sm: '100%', md: '540px' }}
                height={{ sm: '476px', md: '12rem' }}
                direction={{ base: 'column', md: 'row' }}
                b={'gray'}
                boxShadow={'md'}
                padding={4}>
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
                    <Stack
                        width={'100%'}
                        mt={'2rem'}
                        direction={'row'}
                        padding={2}
                        justifyContent={'center'}
                        alignItems={'center'}>
                        <Button
                            w={150}
                            fontSize={'md'}
                            rounded={'full'}
                            bg={'red.500'}
                            color={'white'}
                            _hover={{
                                bg: 'red.500',
                            }}
                            _focus={{
                                bg: 'red.500',
                            }}
                            onClick={() => deleteTrip(id)}>
                            Deletar
                        </Button>
                        <Button
                            w={150}
                            fontSize={'md'}
                            rounded={'full'}
                            bg={'purple.500'}
                            color={'white'}
                            _hover={{
                                bg: 'purple.600',
                            }}
                            _focus={{
                                bg: 'purple.600',
                            }}
                            onClick={() => navigate(`/admin/trips/${id}`)}>
                            Gerenciar
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Center>
    );
}