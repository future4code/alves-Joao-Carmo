import React, { useContext } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    useDisclosure,
    Button,
    useOutsideClick
} from '@chakra-ui/react'
import { GlobalContext } from './global/GlobalContext';

export default function SignUpSucces() {
    const { setSignUpSuccess } = useContext(GlobalContext)
    const { isOpen, onClose, onOpen } = useDisclosure()
    const ref = React.useRef()
    useOutsideClick({
        ref: ref,
        handler: () => setSignUpSuccess(false),
    })

    return (
        <>
            <Modal isOpen={onOpen} autoFocus isCentered={true} size={'sm'} ref={ref} >
                <ModalOverlay />
                <ModalContent alignItems={'center'} fontFamily={'Poppins'} justifyContent={'center'} background={'linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)'}>
                    <ModalHeader fontSize={'48px'} fontWeight={700} paddingY={'20px'} fontFamily={'Noto Sans'} color={'white'}>Conta criada !</ModalHeader>
                </ModalContent>
            </Modal>
        </>
    )
}