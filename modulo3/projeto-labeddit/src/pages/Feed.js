import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Textarea, Flex, Button, Divider, Heading, Text, Input, Image, Spinner, FormControl, FormErrorMessage, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { GlobalContext } from '../components/global/GlobalContext'
import UpVote from '../img/upvote.png'
import DownVote from '../img/downvote.png'
import Comment from '../img/comment.png'
import UpVoteActive from '../img/upvote-active.png'
import DownVoteActive from '../img/downvote-active.png'
import { useForm } from '../hooks/useForm'
import { baseURL } from '../constants/baseURL'
import axios from 'axios'
import useInfiniteScroll from '../hooks/useInfiniteScroll'
import { SearchIcon } from '@chakra-ui/icons'
import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";


export default function Feed() {
  const navigate = useNavigate()
  const { posts, isLoading, getPostComments, getPosts, nextPage } = useContext(GlobalContext)
  const [errors, setErrors] = useState({ title: false, body: false })
  const { form, onChange, cleanFields } = useForm({ title: '', body: '' })
  const [searchInput, setSearchInput] = useState('')
  const [isFetching] = useInfiniteScroll(nextPage);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
    getPosts()
  }, [])

  const createPost = (form) => {
    if (form.title === '') {
      setErrors({ title: true })
      return
    }
    if (form.body === '') {
      setErrors({ body: true })
      return
    }
    axios.post(baseURL + '/posts', form, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).then((res) => {
      cleanFields()
      getPosts()
      console.log(res.data)
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

  const filteredPosts = posts.filter((item) => {
    return (item.title.toLowerCase().includes(searchInput.toLowerCase()) || item.body.toLowerCase().includes(searchInput.toLowerCase()))
  })

  return (
    <Flex align={'center'} flexDir={'column'} h={'101vh'} fontFamily={'Noto Sans'}>
      <Flex w={{ base: '88%', lg: '30%' }}>
        <FormControl id='title' isRequired isInvalid={errors.title}>
          <Input
            placeholder={'Título'}
            background={'#EDEDED'}
            marginTop={'30px'}
            fontSize={'18px'}
            borderRadius={'12px'}
            onChange={onChange}
            name={'title'}
            value={form.title}
          ></Input>
          <FormErrorMessage>Título inválido.</FormErrorMessage>
        </FormControl>
      </Flex>
      <Flex w={{ base: '88%', lg: '30%' }}>
        <FormControl id='body' isRequired isInvalid={errors.body}>
          <Textarea
            placeholder={'Escreva seu post...'}

            h={'131px'}
            marginTop={'12px'}
            background={'#EDEDED'}
            fontSize={'18px'}
            color={'#6F6F6F'}
            borderRadius={'12px'}
            onChange={onChange}
            name={'body'}
            value={form.body}
          />
          <FormErrorMessage>Texto inválido.</FormErrorMessage>
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
        onClick={() => createPost(form)}
      >
        Postar</Button>
      <Divider background={'linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)'} h={'1px'} w={{ base: '88%', lg: '30%' }} marginBottom={'36px'} />
      <Flex align={'center'} flexDir={'column'} w={{ base: '88%', lg: '30%' }}>
        <InputGroup marginBottom={'10px'}>
          <InputLeftElement
            pointerEvents='none'
            children={<SearchIcon color='gray.300' />}
          />
          <Input type='text' placeholder='Procurar Post' onChange={(e) => setSearchInput(e.target.value)} />
        </InputGroup>
        {isLoading ? <Spinner /> :
          filteredPosts.map((item) => {
            return <Flex
              flexDir={'column'}
              w={{ base: '88%', lg: '30%' }}
              justify={{ base: 'flex-start', lg: 'space-between' }}
              minW={'100%'}
              border={'1px solid #E0E0E0'}
              borderRadius={'12px'}
              background={'#FBFBFB'}
              marginBottom={'10px'}
              paddingY={'9px'}
              paddingX={'10px'}
              h={{ lg: '18vh' }}
            >
              <Text
                fontSize={'12px'}
                lineHeight={'16px'}
                color={'#6F6F6F'}
                marginBottom={'18px'}
              >Enviado por: {item.username}</Text>
              <Heading
                _hover={{ cursor: 'pointer' }}
                marginBottom={'18px'}
                fontSize={'18px'}
                lineHeight={'23px'}
                fontWeight={'400'}
                w={'335px'}
                onClick={() => getPostComments(item.id)}
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
                  borderRadius={'28px'}
                  _hover={{ cursor: 'pointer' }}
                  onClick={() => getPostComments(item.id)}>
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
        <Flex>
          {isFetching && <Spinner />}
        </Flex>
      </Flex>

    </Flex>
  )
}
