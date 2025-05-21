// lib/axios.ts
import axios from "axios"
import axiosRetry from "axios-retry"

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
})

export default axiosInstance

axiosInstance.interceptors.request.use(
  (config) => {
    console.log(
      `Request: ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`
    )
    return config
  },
  (error) => {
    console.error("Request error:", error)
    return Promise.reject(error)
  }
)

axiosRetry(axiosInstance, {
  retries: 3,
  retryDelay: (retryCount) => {
    return retryCount * 1000
  },
  retryCondition: (error) => {
    return !!(
      axiosRetry.isNetworkOrIdempotentRequestError(error) ||
      (error.response && error.response.status >= 500)
    )
  },
})
