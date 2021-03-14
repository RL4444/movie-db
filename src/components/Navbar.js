import styled from 'styled-components';
import Link from 'next/link';

import Button from './Button';

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 30px 10px;
`;

const NavLogo = styled.div`
    & a {
        font-family: ${(p) => p.theme.fonts.title};
        font-size: 20px;
        color: ${(p) => p.theme.colors.purple};
        font-weight: 700;
        @media (min-width: 800px) {
            font-size: 30px;
        }
    }
`;

const LoginSection = styled.div`
    display: flex;
    margin-left: auto;
`;

export default function AppNavbar({ user }) {
    const navbarStyle = { marginBottom: '25px' };
    return (
        <NavContainer>
            <NavLogo>
                <Link href='/'>
                    <a>Movie Search</a>
                </Link>
            </NavLogo>
            <div className='ml-auto mr-1'>
                {user && (
                    <>
                        <Link href='/profile'>
                            <a>
                                <Button buttonText={'profile'} color='purple'></Button>
                            </a>
                        </Link>

                        <Link href='/logout'>
                            <a className='ml-1'>
                                <Button className='ml-1' buttonText={'log out'} color='red'></Button>
                            </a>
                        </Link>
                    </>
                )}
                {!user && (
                    <Link href='/login'>
                        <a>
                            <Button buttonText={'login'}></Button>
                        </a>
                    </Link>
                )}
            </div>
        </NavContainer>
    );
}
