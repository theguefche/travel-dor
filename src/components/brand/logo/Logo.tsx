import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <Link className='no-underline hover:scale-110 transition-all duration-300' to={'/'}>
            <span className='flex items-center'>
                <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
                    <path
                        clipRule="evenodd"
                        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                        fill="currentColor"
                        fillRule="evenodd" />
                </svg>
                <p className="font-bold text-inherit ">ACME</p>
            </span>
        </Link>
    )
}

export default Logo