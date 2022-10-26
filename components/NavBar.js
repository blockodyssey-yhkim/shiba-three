import Link from 'next/link';
import { useRouter } from 'next/router';
export default function NavBar() {
    const router = useRouter();
    return (
        <nav>
            <Link href={'/'}>
                <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
            </Link>
            <Link href={'/about'}>
                <a className={router.pathname === '/about' ? 'active' : ''}>About</a>
            </Link>
            <Link href={'/three'}>
                <a className={router.pathname === '/three' ? 'active' : ''}>Three</a>
            </Link>
            <style jsx>
                {`
                    nav {
                        display: flex;
                        gap: 10px;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        padding-top: 20px;
                        padding-bottom: 10px;
                        box-shadow: rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                    }
                    nav a {
                        font-weight: 600;
                        font-size: 18px;
                    }
                    .active {
                        color: tomato;
                    }
                    nav div {
                        display: flex;
                        gap: 10px;
                    }
                    img {
                        max-width: 100px;
                        margin-bottom: 5px;
                    }
                `}
            </style>
        </nav>
    );
}
