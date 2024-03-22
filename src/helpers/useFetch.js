import fetchInstance from "./fetchInstance"

const useFetch = async (endpoint, { method, body, params, contentType = 'application/json' } = {}) => {
    const result = {
        data: null,
        error: null
    }

    try {
        const res = await fetchInstance(endpoint, {
            method,
            data: body,
            params,
            headers: {
                "Content-Type": contentType
            }
        })

        result.data = res.data
    } catch (error) {
        result.error = error.response?.data?.msg || error.message
    }

    return result
}

export default useFetch