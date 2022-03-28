import { useState, useEffect } from 'react'

type StatusType = "idle" | "pending" | "success" | "error";

const useAPI = <T>(asyncService:() => Promise<T>) => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [status, setStatus] = useState<StatusType>("idle")

    useEffect(() => {
        setStatus("pending");
        setError(null);
        asyncService()
            .then((data) => {
                setData(data);
                setStatus("success");
            })
            .catch((error) => {
                console.log(error);
                setError(error.message);
            })
    }, [asyncService])

  return {
    data,
    isLoading: status === "pending",
    isSuccess: status === "success",
    error
  }
}

export default useAPI