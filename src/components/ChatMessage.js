import React from 'react'
import styled from 'styled-components';

function ChatMessage() {
    return (
        <div>
            <Container>
                <UserAvatar>
                    <img src="https://randomuser.me/api/portraits/women/88.jpg" alt=""/>
                </UserAvatar>
                <MessageContent>
                    <Name>
                        Bukenya Lukman
                        <span>3/7/2021 09:07AM</span>
                    </Name>
                    <Text>
                        How is the react Challenge
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