import axiosInstance from "./axios"

export const getRequest = async (route: string, queryParams = {}) => {
  if (!route) {
    console.warn("No route provided.")
    return null
  }

  try {
    const requestOptions = {
      params: {
        ...queryParams,
      },
    }

    const res = await axiosInstance.get(route, requestOptions)
    return res.data
  } catch (error) {
    console.error(`Error fetching route ${route}:`, error)
    return null
  }
}
