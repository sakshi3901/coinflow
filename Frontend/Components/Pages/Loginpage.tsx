import { GoogleLogin, type CredentialResponse } from '@react-oauth/google';
import { toast } from '@heroui/react';
import Cookies from "js-cookie"

export default function Loginpage() {
    const root_url = process.env.NEXT_PUBLIC_ROOT_URL

    const handleSuccess = async (credentials: CredentialResponse) => {
        const token = credentials.credential
        try {
            const response = await fetch(root_url + "/auth",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ token }),
                }
            );

            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }

            const data = await response.json();
            Cookies.set('lt', data)
            window.location.href = '/home'
        } catch (error) {
            console.error("Google authentication failed:", error);
            throw error; // Re-throw so the caller can handle it
        }
    }

    return (
        <div>
            <GoogleLogin
                onSuccess={handleSuccess}
                onError={() => {
                    toast.danger('Login Failed');
                }}
            />
        </div>
    )
}