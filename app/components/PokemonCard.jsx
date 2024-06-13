"use client";
//import styles from '../page.module.css';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {useState,useContext} from 'react';
import { PokemonContext } from '../context/pokemonContext';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Col  from "react-bootstrap/Col";


export const PokemonCard = (props) => {
  /*
  props:name, activePage, image
  */
  const {pokemons, isLoading,targetPokemon,handleChangeTarget} = useContext(PokemonContext);
  const [hoveredImg, setHoveredImg] = useState(false);
  
  const handleMouseOver = () => {
    setHoveredImg(true);
    handleChangeTarget(props.activePage)
  }
  const handleMouseOut = () => {
    setHoveredImg(false);
  }

  return(
    <>
    <Col　className="col-3">
      <Card className='card' border="sencondary" bg='light'>
        <Card.Title className='mb-2 text-muted' style={{padding: '5px'}}>{props.name}</Card.Title>
          <Link href="./info">
          <Card.Img 
            className='card-img-top'
            variant='top'
            style={{padding: hoveredImg ? '0px' : '20px', transition: 'padding 0.2s ease'}}
            src={props.image}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            /></Link>
      </Card>
    </Col>
    </>
  );
}