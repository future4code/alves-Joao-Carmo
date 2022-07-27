import React, { useContext, useState } from 'react'
import { GlobalContext } from '../components/global/GlobalContext'
import { Textarea, Flex, Button, Divider, Heading, Text, IconButton, Icon, Image } from '@chakra-ui/react'
import UpVote from '../img/upvote.png'
import DownVote from '../img/downvote.png'
import Comment from '../img/comment.png'
import { useForm } from '../hooks/useForm'
import axios from 'axios'
import { baseURL } from '../constants/baseURL'




export default function Post() {
  const { posts, selectedPostId, isLoadingComments, postComments, getPostComments } = useContext(GlobalContext)
  const [errors, setErrors] = useState({ body: false })
  const { form, onChange, cleanFields } = useForm({ body: '' })

  const selectedPost = posts.filter((item) => {
    return item.id === selectedPostId
  })

  const createComment = (id, form) => {
    if (form.body === '') {
      setErrors({ body: true })
      return
    }
    axios.post(baseURL + `/posts/${id}/comments`, form, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).then((res) => {
      cleanFields()
      getPostComments(id)
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <Flex align={'center'} flexDir={'column'} h={'100vh-50px'} fontFamily={'Noto Sans'}>
      <Flex align={'center'} flexDir={'column'} w={'88%'}>
        {selectedPost.map((item) => {
            return <Flex
              flexDir={'column'}
              justify={'flex-start'}
              minW={'100%'}
              border={'1px solid #E0E0E0'}
              borderRadius={'12px'}
              background={'#FBFBFB'}
              paddingY={'9px'}
              paddingX={'10px'}
              marginTop={'28px'}
            >
              <Text
                fontSize={'12px'}
                lineHeight={'16px'}
                color={'#6F6F6F'}
                marginBottom={'18px'}
              >Enviado por: {item.username}</Text>
              <Heading
                marginBottom={'18px'}
                fontSize={'18px'}
                lineHeight={'23px'}
                fontWeight={'400'}
                w={'335px'}
              >{item.title}</Heading>
              <Flex>
                <Flex
                  w={'98px'}
                  h={'27.89px'}
                  justify={'space-between'}
                  align={'center'}
                  marginRight={'10px'}
                  border={'0.796748px solid #ECECEC'}
                  padding={'4.66667px'}
                  borderRadius={'28px'}>
                  <Image
                    src={UpVote}
                    h={'14px'}
                    w={'14px'}
                  />
                  <Text
                    fontSize={'9.56098px'}
                    lineHeight={'12px'}
                    textAlign={'center'}
                    color={'#6F6F6F'}
                  >{item.voteSum}</Text>
                  <Image
                    src={DownVote}
                    h={'14px'}
                    w={'14px'}
                  />
                </Flex>
                <Flex
                  w={'65.33px'}
                  h={'28px'}
                  justify={'center'}
                  align={'center'}
                  padding={'4.66667px'}
                  gap={'8px'}
                  border={'0.796748px solid #ECECEC'}
                  borderRadius={'28px'}>
                  <Image
                    src={Comment}
                    h={'14px'}
                    w={'14px'}
                  />
                  <Text
                    fontSize={'9.56098px'}
                    lineHeight={'12px'}
                    textAlign={'center'}
                    color={'#6F6F6F'}
                  >{item.commentCount}</Text>
                </Flex>
              </Flex>
            </Flex>
          })}
      </Flex>
      <Textarea
        placeholder={'Adicionar comentário'}
        h={'131px'}
        w={'88%'}
        background={'#EDEDED'}
        fontSize={'18px'}
        color={'#6F6F6F'}
        borderRadius={'12px'}
        marginTop={'12px'}
        onChange={onChange}
        name={'body'}
        value={form.body}
      />
      <Button
        background={'linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)'}
        w={'88%'}
        color={'white'}
        borderRadius={'12px'}
        fontWeight={'700'}
        fontSize={'18px'}
        marginTop={'12px'}
        marginBottom={'12px'}
        paddingY={'25px'}
        onClick={() => createComment(selectedPostId, form)}
      >
        Responder</Button>
      <Divider background={'linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)'} h={'1px'} w={'88%'} marginBottom={'18px'} />
      <Flex align={'center'} flexDir={'column'} w={'88%'} marginTop={'36px'}>
        {isLoadingComments ? <Heading>Loading...</Heading> :
          postComments.map((item) => {
            return <Flex
              flexDir={'column'}
              justify={'flex-start'}
              minW={'100%'}
              border={'1px solid #E0E0E0'}
              borderRadius={'12px'}
              background={'#FBFBFB'}
              marginBottom={'12px'}
              paddingY={'9px'}
              paddingX={'10px'}
            >
              <Text
                fontSize={'12px'}
                lineHeight={'16px'}
                color={'#6F6F6F'}
                marginBottom={'18px'}
              >Enviado por: {item.username}</Text>
              <Heading
                marginBottom={'18px'}
                fontSize={'18px'}
                lineHeight={'23px'}
                fontWeight={'400'}
                w={'335px'}
              >{item.body}</Heading>
              <Flex>
                <Flex
                  w={'98px'}
                  h={'27.89px'}
                  justify={'space-between'}
                  align={'center'}
                  marginRight={'10px'}
                  border={'0.796748px solid #ECECEC'}
                  padding={'4.66667px'}
                  borderRadius={'28px'}>
                  <Image
                    src={UpVote}
                    h={'14px'}
                    w={'14px'}
                  />
                  <Text
                    fontSize={'9.56098px'}
                    lineHeight={'12px'}
                    textAlign={'center'}
                    color={'#6F6F6F'}
                  >{item.voteSum}</Text>
                  <Image
                    src={DownVote}
                    h={'14px'}
                    w={'14px'}
                  />
                </Flex>
              </Flex>
            </Flex>
          })}
      </Flex>
    </Flex >
  )
}
