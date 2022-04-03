interface IProduct {
    _id?: string,
    name: string,
    category: string,
    description: string,
    image: string,
    price: number,
    store: string
}

// Auth
interface ILoginProps {
    email: string,
    password: string
}

interface ISignupProps {
    name: string,
    email: string,
    phone: string,
    password: string
}

interface IAuthUser {
    name: string,
    email: string,
    id: string,
    role: string,
    status: string,
    token: string
}

interface ISignupAuthUser {
    name: string,
    email: string,
    phone: string
    id: string,
    role: string,
    status: string,
}

