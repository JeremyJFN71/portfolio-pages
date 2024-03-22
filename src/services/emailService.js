import useFetch from "../helpers/useFetch";

export const sendEmail = async (body) => (
    await useFetch('/api/emails', {
        method: 'POST',
        body
    })
)

export const getAllEmails = async (params) => (
    await useFetch('/api/emails', {
        params
    })
)

export const getDetailEmail = async (id) => (
    await useFetch(`/api/emails/${id}`)
)

export const deleteEmail = async (id) => (
    await useFetch(`/api/emails/${id}`, {
        method: 'DELETE'
    })
)

export const deleteAllEmails = async () => (
    await useFetch('/api/emails', {
        method: 'DELETE'
    })
)