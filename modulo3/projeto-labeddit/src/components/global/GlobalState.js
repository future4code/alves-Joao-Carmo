import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { GlobalContext } from './GlobalContext'
import { baseURL } from '../../constants/baseURL'
import { useForm } from '../../hooks/useForm'
import { goToFeedPage, goToPostPage } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'

export default function GlobalState(props) {
    const [errors, setErrors] = useState({ username: false, email: false, password: false, checked: false, title: false, body: false })
    const [signUpSuccess, setSignUpSuccess] = useState(false)
    const [checkedBox, setCheckedBox] = useState(false)
    const [loginError, setLoginError] = useState(false)
    const [posts, setPosts] = useState([])
    const [postComments, setPostComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isLoadingComments, setIsLoadingComments] = useState(false)
    const [selectedPostId, setSelectedPostId] = useState('')
    const navigate = useNavigate()

    const signUp = (form) => {
        if (form.username === '') {
            setErrors({ username: true })
            return
        }
        if (form.email === '' || !form.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            setErrors({ email: true })
            return
        }
        if (form.password === '' || (form.password.length < 8) || (form.password.length > 30)) {
            setErrors({ password: true })
            return
        }
        if (checkedBox === false) {
            setErrors({ checked: true })
            return
        }
        axios.post(baseURL + '/users/signup', form,)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                setErrors({ username: false, email: false, password: false, checked: false })
                setSignUpSuccess(true)
                goToFeedPage(navigate)
            })
            .catch((err) => {
                setErrors({ email: true })
                console.log(err)
            })
    }

    const userLogin = (form) => {
        if (form.email === '' || !form.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            setErrors({ email: true })
            return
        }
        if (form.password === '' || (form.password.length < 8) || (form.password.length > 30)) {
            setErrors({ password: true })
            return
        }
        axios.post(baseURL + '/users/login', form,)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                goToFeedPage(navigate)
            })
            .catch((err) => {
                setLoginError(true)
                console.log(err)
            })
    }

    const getPosts = () => {
        setIsLoading(true)
        axios.get(baseURL + '/posts', {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).then((res) => {
            console.log(res.data)
            setIsLoading(false)
            setPosts(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const getPostComments = (id) => {
        setIsLoadingComments(true)
        axios.get(baseURL + `/posts/${id}/comments`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).then((res) => {
            setIsLoadingComments(false)
            setPostComments(res.data)
            setSelectedPostId(id)
            goToPostPage(navigate)
        }).catch((err) => {
            console.log(err)
        })
    }


    const Provider = GlobalContext.Provider
    const values = {
        signUp,
        errors,
        setSignUpSuccess,
        signUpSuccess,
        checkedBox,
        setCheckedBox,
        userLogin,
        loginError,
        setLoginError,
        getPosts,
        posts,
        isLoading,
        getPostComments,
        selectedPostId,
        isLoadingComments,
        postComments,
    }

    return (<Provider value={values}>{props.children}</Provider>)
}
