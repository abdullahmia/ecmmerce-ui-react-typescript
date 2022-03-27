import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// axios configuration
const axiosConfig: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 15000
}

const instance: AxiosInstance = axios.create(axiosConfig);

class Request {
    // for get request
    async get(url: string): Promise<AxiosResponse> {
        return instance.get(url).then((res) => res.data);
    }

    // for post request
    async post(url: string, body: any): Promise<AxiosResponse> {
        return instance.post(url, body).then((res) => res.data);
    }

    // for update request
    async update(url: string, body: any): Promise<AxiosResponse> {
        return instance.patch(url, body).then((res) => res.data);
    }

    // for delete request
    async delete(url: string): Promise<AxiosResponse> {
        return instance.delete(url).then((res) => res.data);
    }
}
    
const httpReq = new Request();

export default httpReq;