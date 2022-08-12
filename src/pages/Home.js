import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImageSlider from '../components/ImageSlider'
import Viewers from '../components/Viewers'
import Movies from '../components/Movies'
import { db } from '../firebase.config'
import { collection, getDocs } from 'firebase/firestore'
import { useDispatch } from 'react-redux'
import { setMovies } from '../features/movie/movieSlice'

// Import Assets
import Bg from '../assets/images/home-background.png'

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const collectionRef = collection(db, 'movies')
    const getMovies = async () => {
      const response = await getDocs(collectionRef);
      let tempMovies = response.docs.map(item => {
        return {id: item.id, ...item.data()}
      })
      dispatch(setMovies(tempMovies));
    }
    getMovies();
  }, [])



  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
    </Container>
  )
}

export default Home

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before{
    background: url(${Bg}) center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`