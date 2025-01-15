import axios, { AxiosInstance } from "axios"

class ApiService {
    base: AxiosInstance
    token: string | null
    constructor() {
        this.token = null; // Initially, no token is set
        this.base = axios.create({
            baseURL: import.meta.env.VITE_BASE_URL,
        })

        this.base.interceptors.request.use(
            (config) => {
                const token = this.getToken(); // Ensures token is always up-to-date
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );
    }

    setToken(token: string) {
        this.token = token;
        localStorage.setItem("authToken", token); // Optionally store in localStorage
    }

    getToken() {
        if (!this.token) {
            this.token = localStorage.getItem("authToken");
        }
        return this.token;
    }


    signin(props: any) {
        return new Promise((resolve, reject) => {
            this.base
                .post("/api/auth/validate", props,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                )
                .then(({ data }) => {
                    if (data.token) {
                        this.setToken(data.token); // Store the token after successful login
                    }
                    resolve(data)
                })
                .catch((err) => reject(err))
        })
    }

    getActivity() {
        return new Promise((resolve, reject) => {
            this.base
                .get("/api/activity/all")
                .then(({ data }) => {
                    resolve(data.activities)
                })
                .catch((err) => reject(err))
        })
    }
}

export default new ApiService()