import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../components/global/GlobalContext'
import { Textarea, Flex, Button, Divider, Heading, Text, Image, FormControl, FormErrorMessage } from '@chakra-ui/react'
import UpVote from '../img/upvote.png'
import DownVote from '../img/downvote.png'
import Comment from '../img/comment.png'
import { useForm } from '../hooks/useForm'
import axios from 'axios'
import { baseURL } from '../constants/baseURL'
import UpVoteActive from '../img/upvote-active.png'
import DownVoteActive from '../img/downvote-active.png'
import { useNavigate, } from 'react-router-dom'
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon
} from "react-share";

export default function Post() {
  const { posts, selectedPostId, postComments, getPostComments, getPosts } = useContext(GlobalContext)
  const [errors, setErrors] = useState({ body: false })
  const { form, onChange, cleanFields } = useForm({ body: '' })
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
  }, [])

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
      setErrors({ body: false })
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  const createCommentVote = (id, vote) => {
    const body = {
      direction: vote
    }

    axios.post(baseURL + `/comments/${id}/votes`, body, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).then((res) => {
      console.log(res.data)
      getPostComments(selectedPostId)
    }).catch((err) => {
      console.log(err)
    })
  }

  const deleteCommentVote = (id) => {
    axios.delete(baseURL + `/comments/${id}/votes`, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).then((res) => {
      console.log(res.data)
      getPostComments(selectedPostId)
    }).catch((err) => {
      console.log(err)
    })
  }

  const createPostVote = (id, vote) => {
    const body = {
      direction: vote
    }

    axios.post(baseURL + `/posts/${id}/votes`, body, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).then((res) => {
      console.log(res.data)
      getPosts()
    }).catch((err) => {
      console.log(err)
    })
  }

  const deletePostVote = (id) => {
    axios.delete(baseURL + `/posts/${id}/votes`, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).then((res) => {
      console.log(res.data)
      getPosts()
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <Flex align={'center'} flexDir={'column'} h={'100vh-50px'} fontFamily={'Noto Sans'} justify={'center'}>
      <Flex align={'center'} flexDir={'column'} w={{ base: '88%', lg: '30%' }}>
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
             <Text
              fontSize={'15px'}
              lineHeight={'16px'}
              marginBottom={'18px'}
            >{item.body}</Text>
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
                {(item.userVote === 1) ?
                  <Image
                    _hover={{ cursor: 'pointer' }}
                    src={UpVoteActive}
                    h={'14px'}
                    w={'14px'}
                    onClick={() => deletePostVote(item.id)}
                  />
                  :
                  <Image
                    _hover={{ cursor: 'pointer' }}
                    src={UpVote}
                    h={'14px'}
                    w={'14px'}
                    onClick={() => createPostVote(item.id, 1)}
                  />
                }
                <Text
                  fontSize={'9.56098px'}
                  lineHeight={'12px'}
                  textAlign={'center'}
                  color={'#6F6F6F'}
                >{(item.voteSum === null) ? 0 : item.voteSum}</Text>
                {(item.userVote === -1) ?
                  <Image
                    _hover={{ cursor: 'pointer' }}
                    src={DownVoteActive}
                    h={'14px'}
                    w={'14px'}
                    onClick={() => deletePostVote(item.id)}
                  />
                  :
                  <Image
                    _hover={{ cursor: 'pointer' }}
                    src={DownVote}
                    h={'14px'}
                    w={'14px'}
                    onClick={() => createPostVote(item.id, -1)}
                  />
                }
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
              <Flex marginLeft={'10px'} gap={'5px'}>
                <FacebookShareButton url={window.location.href}>
                  <FacebookIcon size={24} round />
                </FacebookShareButton>
                <TwitterShareButton url={window.location.href}>
                  <TwitterIcon size={24} round />
                </TwitterShareButton>
                <WhatsappShareButton url={window.location.href}>
                  <WhatsappIcon size={24} round />
                </WhatsappShareButton>
              </Flex>
            </Flex>
          </Flex>
        })}
      </Flex>
      <Flex w={{ base: '88%', lg: '30%' }}>
        <FormControl id='body' isRequired isInvalid={errors.body} align='center'>
          <Textarea
            placeholder={'Adicionar comentário'}
            h={'131px'}
            background={'#EDEDED'}
            fontSize={'18px'}
            color={'#6F6F6F'}
            borderRadius={'12px'}
            marginTop={'12px'}
            onChange={onChange}
            name={'body'}
            value={form.body}
          />
          <FormErrorMessage>Comentário vazio.</FormErrorMessage>
        </FormControl>
      </Flex>
      <Button
        background={'linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)'}
        opacity={'0.9'}
        _hover={{ opacity: '1' }}
        w={{ base: '88%', lg: '30%' }}
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
      <Divider background={'linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)'} h={'1px'} w={{ base: '88%', lg: '30%' }} marginBottom={'18px'} />
      <Flex align={'center'} flexDir={'column'} w={{ base: '88%', lg: '30%' }} marginTop={'36px'}>
        {postComments.map((item) => {
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
                {(item.userVote === 1) ?
                  <Image
                    _hover={{ cursor: 'pointer' }}
                    src={UpVoteActive}
                    h={'14px'}
                    w={'14px'}
                    onClick={() => deleteCommentVote(item.id)}
                  />
                  :
                  <Image
                    _hover={{ cursor: 'pointer' }}
                    src={UpVote}
                    h={'14px'}
                    w={'14px'}
                    onClick={() => createCommentVote(item.id, 1)}
                  />
                }
                <Text
                  fontSize={'9.56098px'}
                  lineHeight={'12px'}
                  textAlign={'center'}
                  color={'#6F6F6F'}
                >{(item.voteSum === null) ? 0 : item.voteSum}</Text>
                {(item.userVote === -1) ?
                  <Image
                    _hover={{ cursor: 'pointer' }}
                    src={DownVoteActive}
                    h={'14px'}
                    w={'14px'}
                    onClick={() => deleteCommentVote(item.id)}
                  />
                  :
                  <Image
                    _hover={{ cursor: 'pointer' }}
                    src={DownVote}
                    h={'14px'}
                    w={'14px'}
                    onClick={() => createCommentVote(item.id, -1)}
                  />
                }
              </Flex>
            </Flex>
          </Flex>
        })}
      </Flex>
    </Flex >
  )
}
