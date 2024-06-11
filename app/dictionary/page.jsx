"use client";
//import styles from '../page.module.css';
import './dictionary.css';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {useState, useEffect, useContext} from 'react';
import { PokemonContext } from '../context/pokemonContext';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';


export default function Dictionary() {
  const {pokemons, isLoading} = useContext(PokemonContext);
  const [activePage, setActivePage] = useState(1);
  const [active, setActive] = useState([false,false,false,false,false,false,false,false,false,false,false,false,false,])

  const handleActivePage = (num)=> {
    if(num < 146 && num >0)  {
      setActivePage(num);
    }
  };



  if(isLoading) {
    return(
      <>
      <></>
      </>
    );
  }

  return(
    <div className='dictionary'>
      <p className='h2 mt-2 mb-4'>ポケモン図鑑</p>
      {isLoading ?(
        <p>Now Loading....</p>
      ):(
        <>
        <Container fluid>
        <Row padding='10px'>
          <Col>
            <Card style={{width: '100%' ,height: '400px', padding: '10px'}} border="sencondary" bg='light' >
            <Card.Title className='mb-2 text-muted' style={{padding: '5px'}}>{pokemons[activePage-1].pokemon.name}</Card.Title>
              <Card.Img className='card-img-top' variant='top' src={pokemons[activePage-1].pokemon.image_s}/>
            </Card>
          </Col>
          <Col>
            <Card style={{width: '100%' ,height: '400px', padding: '10px'}} border="sencondary" bg='light' >
            <Card.Title className='mb-2 text-muted' style={{padding: '5px'}}>{pokemons[activePage].pokemon.name}</Card.Title>
              <Card.Img className='card-img-top' variant='top' src={pokemons[activePage].pokemon.image_s}/>
            </Card>
          </Col>
          <Col>
            <Card style={{width: '100%' ,height: '400px', padding: '10px'}} border="sencondary" bg='light' >
            <Card.Title className='mb-2 text-muted' style={{padding: '5px'}}>{pokemons[activePage+1].pokemon.name}</Card.Title>
              <Card.Img className='card-img-top' variant='top' src={pokemons[activePage+1].pokemon.image_s}/>
            </Card>
          </Col>
          <Col>
            <Card style={{width: '100%' ,height: '400px', padding: '10px'}} border="sencondary" bg='light' >
            <Card.Title className='mb-2 text-muted' style={{padding: '5px'}}>{pokemons[activePage+2].pokemon.name}</Card.Title>
              <Card.Img className='card-img-top' variant='top' src={pokemons[activePage+2].pokemon.image_s}/>
            </Card>
          </Col>
        </Row>

        <Row style={{paddingTop:'10px'}}>
          <Col>
            <Card style={{width: '100%' ,height: '400px', padding: '10px'}} border="sencondary" bg='light' >
            <Card.Title className='mb-2 text-muted' style={{padding: '5px'}}>{pokemons[activePage+3].pokemon.name}</Card.Title>
              <Card.Img className='card-img-top' variant='top' src={pokemons[activePage+3].pokemon.image_s}/>
            </Card>
          </Col>
          <Col>
            <Card style={{width: '100%' ,height: '400px', padding: '10px'}} border="sencondary" bg='light' >
            <Card.Title className='mb-2 text-muted' style={{padding: '5px'}}>{pokemons[activePage+4].pokemon.name}</Card.Title>
              <Card.Img className='card-img-top' variant='top' src={pokemons[activePage+4].pokemon.image_s}/>
            </Card>
          </Col>
          <Col>
            <Card style={{width: '100%' ,height: '400px', padding: '10px'}} border="sencondary" bg='light' >
            <Card.Title className='mb-2 text-muted' style={{padding: '5px'}}>{pokemons[activePage+5].pokemon.name}</Card.Title>
              <Card.Img className='card-img-top' variant='top' src={pokemons[activePage+5].pokemon.image_s}/>
            </Card>
          </Col>
          {(activePage < 145) ? (
            <Col>
            <Card style={{width: '100%' ,height: '400px', padding: '10px'}} border="sencondary" bg='light' >
            <Card.Title className='mb-2 text-muted' style={{padding: '5px'}}>{pokemons[activePage+6].pokemon.name}</Card.Title>
              <Card.Img className='card-img-top' variant='top' src={pokemons[activePage+6].pokemon.image_s}/>
            </Card>
          </Col>
          ):(
            <></>
          ) 
            
          }
          
        </Row>
        {(activePage < 145) ? (
          <Row style={{paddingTop:'10px'}}>
          <Col>
            <Card style={{width: '100%' ,height: '400px', padding: '10px'}} border="sencondary" bg='light' >
            <Card.Title className='mb-2 text-muted' style={{padding: '5px'}}>{pokemons[activePage+7].pokemon.name}</Card.Title>
              <Card.Img className='card-img-top' variant='top' src={pokemons[activePage+7].pokemon.image_s}/>
            </Card>
          </Col>
          <Col>
            <Card style={{width: '100%' ,height: '400px', padding: '10px'}} border="sencondary" bg='light' >
            <Card.Title className='mb-2 text-muted' style={{padding: '5px'}}>{pokemons[activePage+8].pokemon.name}</Card.Title>
              <Card.Img className='card-img-top' variant='top' src={pokemons[activePage+8].pokemon.image_s}/>
            </Card>
          </Col>
          <Col>
            <Card style={{width: '100%' ,height: '400px', padding: '10px'}} border="sencondary" bg='light' >
            <Card.Title className='mb-2 text-muted' style={{padding: '5px'}}>{pokemons[activePage+9].pokemon.name}</Card.Title>
              <Card.Img className='card-img-top' variant='top' src={pokemons[activePage+9].pokemon.image_s}/>
            </Card>
          </Col>
          <Col>
            <Card style={{width: '100%' ,height: '400px', padding: '10px'}} border="sencondary" bg='light' >
            <Card.Title className='mb-2 text-muted' style={{padding: '5px'}}>{pokemons[activePage+10].pokemon.name}</Card.Title>
              <Card.Img className='card-img-top' variant='top' src={pokemons[activePage+10].pokemon.image_s}/>
            </Card>
          </Col>
        </Row>
        ):(
          <>
          </>
        )}
      </Container>
      <div className='d-flex justify-content-center my-3'>
        <Pagination>
          <Pagination.First active={activePage === 1} onClick={() => {handleActivePage(1)}}/>
          <Pagination.Prev onClick={() => {handleActivePage(activePage-12)}}/>
          <Pagination.Item active={activePage === 1} onClick={() => {handleActivePage(1)}}>{1}</Pagination.Item>
          <Pagination.Item active={activePage === 13} onClick={() => {handleActivePage(13)}} >{2}</Pagination.Item>
          <Pagination.Item active={activePage === 25} onClick={() => {handleActivePage(25)}} >{3}</Pagination.Item>
          <Pagination.Item active={activePage === 37} onClick={() => {handleActivePage(37)}} >{4}</Pagination.Item>
          <Pagination.Item active={activePage === 49} onClick={() => {handleActivePage(49)}}>{5}</Pagination.Item>
          <Pagination.Item active={activePage === 61} onClick={() => {handleActivePage(61)}}>{6}</Pagination.Item>
          <Pagination.Item active={activePage === 73} onClick={() => {handleActivePage(73)}}>{7}</Pagination.Item>
          <Pagination.Item active={activePage === 85} onClick={() => {handleActivePage(85)}}>{8}</Pagination.Item>
          <Pagination.Item active={activePage === 97} onClick={() => {handleActivePage(97)}}>{9}</Pagination.Item>
          <Pagination.Item active={activePage === 109} onClick={() => {handleActivePage(109)}}>{10}</Pagination.Item>
          <Pagination.Item active={activePage === 121} onClick={() => {handleActivePage(121)}}>{11}</Pagination.Item>
          <Pagination.Item active={activePage === 133} onClick={() => {handleActivePage(133)}}>{12}</Pagination.Item>
          <Pagination.Item active={activePage === 145} onClick={() => {handleActivePage(145)}}>{13}</Pagination.Item>
          <Pagination.Next onClick={() => {handleActivePage(activePage+12)}}/>
          <Pagination.Last active={activePage === 145} onClick={() => {handleActivePage(145)}}/>
        </Pagination>
      </div>
      </>
      )}
    </div>
  );
}