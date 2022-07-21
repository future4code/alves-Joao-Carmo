import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';
import HomeImage from '../img/image-home.jpg'
import AvatarImage from '../img/purple-avatar.jpg'

export default function CandidatesCard({ name, profession, country, applicationText, age, id, candidateId, onClickHandle }) {
    return (
        <Center py={4}>
            <Box
                w={'500px'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Image
                    h={'120px'}
                    w={'full'}
                    src={
                        HomeImage
                    }
                    objectFit={'cover'}
                />
                <Flex justify={'center'} mt={-12}>
                    <Avatar
                        size={'xl'}
                        src={
                            AvatarImage
                        }
                        alt={'Author'}
                        css={{
                            border: '2px solid purple',
                        }}
                    />
                </Flex>

                <Box p={6}>
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                            {name}
                        </Heading>
                        <Text color={'gray.500'}>{profession}</Text>
                    </Stack>

                    <Stack direction={'row'} justify={'center'} spacing={6}>
                        <Stack spacing={0} align={'center'}>
                            <Text fontWeight={600}>{age}</Text>
                            <Text fontSize={'sm'} color={'gray.500'}>
                                Idade
                            </Text>
                        </Stack>
                        <Stack spacing={0} align={'center'}>
                            <Text fontWeight={600}>{country}</Text>
                            <Text fontSize={'sm'} color={'gray.500'}>
                                País
                            </Text>
                        </Stack>
                    </Stack>
                    <Text justify={'center'} py={2} align={'center'}>{applicationText}</Text>
                    <Flex gap={8}>
                        <Button
                            w={'full'}
                            mt={8}
                            bg={'red.500'}
                            color={'white'}
                            rounded={'md'}
                            _hover={{
                                transform: 'translateY(-2px)',
                                boxShadow: 'lg',
                            }}
                            onClick={() => onClickHandle(false, id, candidateId)}>
                            Reprovar
                        </Button>
                        <Button
                            w={'full'}
                            mt={8}
                            bg={'purple.500'}
                            color={'white'}
                            rounded={'md'}
                            _hover={{
                                transform: 'translateY(-2px)',
                                boxShadow: 'lg',
                            }}
                            onClick={() => onClickHandle(true, id, candidateId)}>
                            Aprovar
                        </Button>
                    </Flex>
                </Box>
            </Box>
        </Center>
    );
}