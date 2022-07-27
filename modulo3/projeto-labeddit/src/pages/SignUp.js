import React, { useContext } from 'react'
import { Input, Heading, Button, Flex, Text, Checkbox, FormControl, FormErrorMessage, Link } from '@chakra-ui/react'
import { useForm } from '../hooks/useForm'
import { GlobalContext } from '../components/global/GlobalContext'
import SignUpSucces from '../components/SignUpSuccess'

export default function SignUp() {
  const { form, onChange, } = useForm({ username: '', email: '', password: '' })

  const { signUpSuccess, signUp, errors, checkedBox, setCheckedBox } = useContext(GlobalContext)

  return (
    <Flex align={'center'} flexDir={'column'} h={'100vh-50px'} fontFamily={'Noto Sans'}>
      <Flex marginBottom={'197px'} w={'88%'} marginTop={'79px'}>
        <Heading alignSelf={'center'} fontFamily={'Noto Sans'}>Olá, boas vindas ao LabEddit ;)</Heading>
      </Flex>
      <Flex align={'center'} flexDir={'column'} w={'88%'}>
        <FormControl id='username' isRequired isInvalid={errors.username} marginBottom={'8px'}>
          <Input placeholder={'Nome de usuário'} h={'60px'} onChange={onChange} name='username' type='text' />
          <FormErrorMessage>Usuário inválido</FormErrorMessage>
        </FormControl>
        <FormControl id='email' isRequired isInvalid={errors.email} marginBottom={'8px'}>
          <Input placeholder={'E-mail'} h={'60px'} onChange={onChange} name='email' type='email' />
          <FormErrorMessage>Email inválido ou já cadastrado</FormErrorMessage>
        </FormControl>
        <FormControl id='password' isRequired isInvalid={errors.password} marginBottom={'65px'}>
          <Input placeholder={'Senha'} h={'60px'} onChange={onChange} name='password' type='password' />
          <FormErrorMessage>Senha inválida</FormErrorMessage>
        </FormControl>
      </Flex>
      <Flex w={'88%'} flexDir={'column'} fontSize={'14px'} align={'center'} marginBottom={'28px'}>
        <Text marginBottom={'17px'}>Ao continuar, você concorda com o nosso <Link color={'blue'}>Contrato de usuário</Link> e nossa <Link color={'blue'}>Política de Privacidade</Link></Text>
        <FormControl id='checkbox' isRequired isInvalid={errors.checked}>
          <Checkbox fontSize={'14px'} size={'sm'} onChange={() => setCheckedBox(!checkedBox)}>Eu concordo em receber emails sobre coisas legais no Labeddit</Checkbox>
          <FormErrorMessage>Campo obrigatório</FormErrorMessage>
        </FormControl>
      </Flex>
      <Button
        background={'linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)'}
        w={'88%'}
        color={'white'}
        borderRadius={'27px'}
        fontWeight={'700'}
        fontSize={'18px'}
        marginBottom={'18px'}
        paddingY={'25px'}
        onClick={() => signUp(form)}>
        Cadastrar</Button>
      {/* {signUpSuccess && <SignUpSucces></SignUpSucces>} */}
    </Flex>
  )
}
