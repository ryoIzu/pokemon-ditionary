"use client";
//import styles from '../page.module.css';
import './dictionary.css';
import '../context/filter/filter.css';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { useAuth } from '../context/authContext';
import {useState, useEffect, useContext} from 'react';
import { PokemonContext } from '../context/pokemonContext';
import Link from 'next/link';
import { PokemonCard } from '../components/PokemonCard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';
import { Filter } from '../context/filter/filter';

export default function Dictionary() {
  const {pokemons, isLoading,targetPokemon,handleChangeTarget} = useContext(PokemonContext);
  const {currentUser} = useAuth();
  const [activePage, setActivePage] = useState(0);
  const [hoveredImg, setHoveredImg] = useState('');
  const cardItems = Array(12).fill(0);


  const handleActivePage = (num)=> {
    if(num < 146 && num >=0)  {
      setActivePage(num);
      setHoveredImg('');
    }
  };

  const handleMouseOver = (num)=> () => {
    setHoveredImg('100%')
  }
  const handleMouseOut = () => {
    setHoveredImg('');
  }



  if(isLoading) {
    return(
      <>
      <></>
      </>
    );
  }

  return(
    <>
    {currentUser ? (
      null
    ):(
      <h2 className='mosaicText'>表示するにはサインインしてください。</h2>
    )
    }
    
    <div className='mosaic' style={currentUser ? 
      ({filter: 'none'}):
      ({filter: 'blur(10px)', pointerEvents: 'none'})
    }>
      <div className='dictionary'>
        <p className='h2 mt-2 mb-4'>ポケモン図鑑</p>
        {isLoading ?(
          <p>Now Loading....</p>
        ):(
          <>
          <Container fluid>
          <Row style={{padding:'10px'}}>
            {cardItems.map((cardItem, index) => (
              index < 4 && activePage+index < 151 &&
                
                  <PokemonCard 
                    name={pokemons[activePage+index].pokemon.name}
                    activePage= {activePage+index}
                    image = {pokemons[activePage+index].pokemon.image_s} />
            ))}
          </Row>
          <Row style={{padding:'10px'}}>
            {cardItems.map((cardItem, index) => (
              index > 3 && index < 8 && activePage+index < 151 &&
                
                  <PokemonCard 
                    name={pokemons[activePage+index].pokemon.name}
                    activePage= {activePage+index}
                    image = {pokemons[activePage+index].pokemon.image_s} />
            ))}
          </Row>
          <Row style={{padding:'10px'}}>
            {cardItems.map((cardItem, index) => (
              index > 7 && index < 12 && activePage+index < 151 &&
                  <PokemonCard 
                    name={pokemons[activePage+index].pokemon.name}
                    activePage= {activePage+index}
                    image = {pokemons[activePage+index].pokemon.image_s} />
            ))}
          </Row>
          <Row style={{padding:'10px'}}>
            {cardItems.map((cardItem, index) => (
              index > 11 && activePage+index < 151 &&
                
                  <PokemonCard 
                    name={pokemons[activePage+index].pokemon.name}
                    activePage= {activePage+index}
                    image = {pokemons[activePage+index].pokemon.image_s} />
            ))}
          </Row>     
          </Container>
        
        
        <div className='d-flex justify-content-center my-3'>
          <Pagination>
            <Pagination.First onClick={() => {handleActivePage(0)}}/>
            <Pagination.Prev onClick={() => {handleActivePage(activePage-12)}}/>
            <Pagination.Item active={activePage === 0} onClick={() => {handleActivePage(0)}}>{1}</Pagination.Item>
            <Pagination.Item active={activePage === 12} onClick={() => {handleActivePage(12)}} >{2}</Pagination.Item>
            <Pagination.Item active={activePage === 24} onClick={() => {handleActivePage(24)}} >{3}</Pagination.Item>
            <Pagination.Item active={activePage === 36} onClick={() => {handleActivePage(36)}} >{4}</Pagination.Item>
            <Pagination.Item active={activePage === 48} onClick={() => {handleActivePage(48)}}>{5}</Pagination.Item>
            <Pagination.Item active={activePage === 60} onClick={() => {handleActivePage(60)}}>{6}</Pagination.Item>
            <Pagination.Item active={activePage === 72} onClick={() => {handleActivePage(72)}}>{7}</Pagination.Item>
            <Pagination.Item active={activePage === 84} onClick={() => {handleActivePage(84)}}>{8}</Pagination.Item>
            <Pagination.Item active={activePage === 96} onClick={() => {handleActivePage(96)}}>{9}</Pagination.Item>
            <Pagination.Item active={activePage === 108} onClick={() => {handleActivePage(108)}}>{10}</Pagination.Item>
            <Pagination.Item active={activePage === 120} onClick={() => {handleActivePage(120)}}>{11}</Pagination.Item>
            <Pagination.Item active={activePage === 132} onClick={() => {handleActivePage(132)}}>{12}</Pagination.Item>
            <Pagination.Item active={activePage === 144} onClick={() => {handleActivePage(144)}}>{13}</Pagination.Item>
            <Pagination.Next onClick={() => {handleActivePage(activePage+12)}}/>
            <Pagination.Last onClick={() => {handleActivePage(144)}}/>
          </Pagination>
        </div>


        </>
        )}
      </div>
      </div>
    </>
  );
}