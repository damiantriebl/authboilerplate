'use server'

import { signInAction } from "@/actions/singin"

const LoginForm = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
              <form action={signInAction} className="flex flex-col gap-4">
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="mb-4"
                            />
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                className="mb-4"
                            />
                            <button type="submit">Login</button>
                        </form>
        </div>
    )
}

export default LoginForm