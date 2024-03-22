import useFetch from "../helpers/useFetch"

export const getAllProjects = async (params) => (
    await useFetch('/api/projects', {
        params
    })
)

export const showProjects = async (params) => (
    await useFetch('/api/projects/show', {
        params
    })
)

export const getDetailProject = async (id) => (
    await useFetch(`/api/projects/${id}`)
)

export const syncProjects = async () => (
    await useFetch('/api/projects/sync', {
        method: 'POST'
    })
)

export const updateProject = async (id, body) => (
    await useFetch(`/api/projects/${id}/update`, {
        method: 'PATCH',
        contentType: 'multipart/form-data',
        body
    })
)

export const syncOneProject = async (id, body) => (
    await useFetch(`/api/projects/${id}/sync`, {
        method: 'PATCH',
        body
    })
)