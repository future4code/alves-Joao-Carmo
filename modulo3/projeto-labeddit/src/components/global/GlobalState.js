import React, { useState } from 'react'
import axios from 'axios'
import { GlobalContext } from './GlobalContext'
import { baseURL } from '../../constants/baseURL'
import { useForm } from '../../hooks/useForm'
import { goToFeedPage } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'

export default function GlobalState(props) {
    const [errors, setErrors] = useState({ username: false, email: false, password: false, checked: false })
    const [signUpSuccess, setSignUpSuccess] = useState(false)
    const { cleanFields } = useForm({ username: '', email: '', password: '' })
    const [checkedBox, setCheckedBox] = useState(false)
    const [loginError, setLoginError] = useState(false)
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
                cleanFields()
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
            cleanFields()
            goToFeedPage(navigate)
        })
        .catch((err) => {
            console.log(err)
            setLoginError(true)
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
        setLoginError
    }

    return (<Provider value={values}>{props.children}</Provider>)
}
