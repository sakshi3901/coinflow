'use client'

import { GoogleOAuthProvider } from '@react-oauth/google';
import Loginpage from '@/Components/Pages/Loginpage';

const client_id: any = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex items-center justify-between">
        <div>
          <GoogleOAuthProvider clientId={client_id}>
            <Loginpage />
          </GoogleOAuthProvider>
        </div>
      </main>
    </div>
  );
}
