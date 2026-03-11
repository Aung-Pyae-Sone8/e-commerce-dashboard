import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type LoginLayoutProps = {
    children: React.ReactNode;
}

const LoginLayout = ({children}: LoginLayoutProps) => {
    const token = cookies().get('token')?.value

    if(!!token) {
        return redirect('/dashboard')
    }
    return <div>{children}</div>
}

export default LoginLayout