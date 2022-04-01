import httpReq from "./http.service";


class AuthService {
    async login(payload: ILoginProps): Promise<IAuthUser> {
        const { data } = await httpReq.post('/auth/login', payload);
        return data;
    }

}

export default new AuthService();