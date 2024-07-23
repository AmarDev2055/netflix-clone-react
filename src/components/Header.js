import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Header = (props) => {
    const navigate = useNavigate()
  return (
    <HeaderContainer>
        <div className='logo'>
            <img src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png'
            alt='No Internet Connection'/>
        </div>
        <button onClick={() => navigate(props.login ? '/login' : '/signup')}>
            {props.login ? 'Log In' : 'Sign In'}
        </button>
    </HeaderContainer>
)
}

const HeaderContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 4rem;
        .logo{
            img{
            padding:.5rem 1rem;
            height:3rem;
            cursor:pointer;
            }
        }
        button{
            padding:.5rem 1rem;
            background-color:#d91921;
            border:none;
            border-radius:5px;
            cursor:pointer;
            color:white;
            font-weight:bolder;
            font-size: 1.05rem;
        }
`

export default Header