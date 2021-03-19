import React from 'react'
import styled from 'styled-components';

function ChatMessage({ text, name, image, timestamp }) {
    return (
        <div>
            <Container>
                <UserAvatar>
                    <img src={image} alt=""/>
                </UserAvatar>
                <MessageContent>
                    <Name>
                        {name}
                        <span>{new Date(timestamp.toDate()).toUTCString()}</span>
                    </Name>
                    <Text>
                        {text}
                    </Text>
                </MessageContent>
            </Container>
        </div>
    )
}

export default ChatMessage

const Container = styled.div`
    padding: 8px 20px;
    display: flex;
    align-items:center;

`
const UserAvatar = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    overflow: hidden;
    margin-right: 8px;

    img{
        width: 100%;
    }
`
const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
`
const Name = styled.span`
    font-weight: 900;
    font-size: 15px;
    line-height: 1.4;
    margin-right: 8px;

    span{
        font-weight: 400;
        color: rgba(97,96,97);
        font-size: 13px;
    }
`

const Text = styled.span`

`