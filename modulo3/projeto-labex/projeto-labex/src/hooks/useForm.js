import React, { useState } from 'react'

export function useForm(initialState) {
    const [form, setForm] = useState(initialState)

    const onChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const cleanFields = () => {
        setForm(initialState)
    }

    return { form, onChange, cleanFields }
}
