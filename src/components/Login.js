import React from 'react'
import styled from 'styled-components';
import { auth, provider } from '../firebase';

function Login(props) {

    const SignIn = () => {
        auth.signInWithPopup(provider)
            .then((result)=>{
                const newUser = {
                    name: result.user.displayName,
                    photo: result.user.photoURL,
                }
                //console.log(result.user)
                localStorage.setItem('user',JSON.stringify(newUser));
                props.setUser(newUser);
            })
            .catch((error) => {
                console.log(error.message)
            })
    }
    return (
        <div>
            <Container>
                <Content>
                    <SlackImg src="http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png"/>
                    <h1>Sign in Slack</h1>
                    <SignInButton onClick={() => SignIn()}>
                        Sign In With Google
                    </SignInButton>
                </Content>
            </Container>
        </div>
    )
}

export default Login;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Content = styled.div`
    background-color: white;
    padding: 100px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow:0 1px 3px rgba(0 0 0 / 12%), 0 1px 2px rgba(0 0 0 / 25%);

`

const SlackImg = styled.img`
    height: 100px;

`

const SignInButton = styled.button`
    margin-top: 50px;
    background-color: #0a8d48;
    color: white;
    border:none;
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;

`
