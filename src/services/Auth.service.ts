import httpReq from "./http.service";


class AuthService {
    // User Login Request
    async login(payload: ILoginProps): Promise<IAuthUser> {
        const { data } = await httpReq.post('/auth/login', payload);
        return data;
    }

    // Register Account Request
    async signup(payload: ISignupProps): Promise<ISignupAuthUser> {
        const { data } = await httpReq.post('/auth/signup', payload);
        return data; 
    }
}

export default new AuthService();