import React, {useState} from 'react'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth} from '../utils/fiberbase-config';
import {  useNavigate } from 'react-router-dom';
import  styled  from 'styled-components';
import Header from '../components/Header';
import BackgroundImage from '../components/BackgroundImage';

const LoginPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLoginIn = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password)
    } catch (error) {
      console.log(error);
    }
  }

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if(currentUser) navigate('/')
  })

  return (
    <Wrapper>
      <BackgroundImage/>
      <div className='loginContent'>
        <Header/>
        <div className='form-wrapper'>
          <div className='form'>
            <div className='title'>
              <h1>Login</h1>
            </div>
            <div className='container'>
              <input type='text' placeholder='email'
              onChange={(e) => setEmail(e.target.value)}
              value = {email}
              />
              <input type='password' placeholder='password'
              onChange={(e) => setPassword(e.target.value)}
              value = {password}
              />
              <button onClick={ handleLoginIn}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
position:relative;
.loginContent {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    height: 100vh;
    width: 100vw;
    grid-template-columns: 15vh 85vh;
    .form-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      height: 85vh;
    }
    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      background-color: rgba(0, 0, 0, 0.83);
      height: 70vh;
      padding: 2rem;
      color: white;
      border-radius: 0.4rem;

      .container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        input {
          border-radius: 0.4rem;
          padding: 0.5rem 1rem;
          width: 25rem;
          height: 2.9rem;
          outline: none;
        }
        button {
          padding: 0.5rem;
          background-color: red;
          border: none;
          cursor: pointer;
          border-radius: 0.4rem;
          height: 3.4rem;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
        }
      }
    }
  }
`
export default LoginPage