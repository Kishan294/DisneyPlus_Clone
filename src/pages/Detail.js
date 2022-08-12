import React from 'react'
import styled from 'styled-components'
import PlayIcon from '../assets/images/play-icon-black.png'
import TrailerIcon from '../assets/images/play-icon-white.png'
import GroupIcon from '../assets/images/group-icon.png'

const Detail = () => {
    return (
        <Container>
            <Background>
                <img src="https://images.unsplash.com/photo-1659702206825-9a12c348902e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80" alt="" />
            </Background>
            <ImageTitle>
                <img src="https://images.unsplash.com/photo-1659702206825-9a12c348902e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80" alt="" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src={PlayIcon} alt="" srcset="" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src={TrailerIcon} alt="" srcset="" />
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src={GroupIcon} alt="" />
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, temporibus.
            </SubTitle>
            <Description>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, libero velit molestias magni aperiam adipisci, expedita laborum tempora iste mollitia ipsum, vitae illo nulla labore id quos ab quae sed animi et repellat aspernatur facilis. Totam adipisci amet hic, qui dicta voluptatum animi maxime earum?
            </Description>
        </Container>

    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    margin-top: 60px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    outline: none;
    padding: 0px 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;
    
    &:hover{
        background: rgb(198, 198, 198);
    }

    span{
        color: black;
    }

    
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
   
    
    span{
        color: rgb(249, 249, 249);
    }
`

const AddButton = styled.button`
    width: 44px;
    height: 44px;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
    background: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    margin-right: 16px;
    span{
        font-size: 26px;
    }
`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description= styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    max-width: 500px;
`