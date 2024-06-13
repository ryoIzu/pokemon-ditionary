"use client";
//import styles from '../page.module.css';
import './info.css';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {CardBody, Col, Container, FormGroup, Input, Label, Row} from "reactstrap";
import {useState, useEffect, useContext} from 'react';
import { PokemonContext } from '../context/pokemonContext';
import { Ability } from '../components/Ability';

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import { PiArrowFatLinesRightFill } from "react-icons/pi";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";


export default function Info() {
  const {pokemons, isLoading,targetPokemon,handleChangeTarget} = useContext(PokemonContext);
  const srcType_0= 'https://zukan.pokemon.co.jp/img/icon_type_' + pokemons[targetPokemon].pokemon.type_1 + '.svg';
  const srcType_1= 'https://zukan.pokemon.co.jp/img/icon_type_' + pokemons[targetPokemon].pokemon.type_2 + '.svg';

  const handlePrev = () => {
    if(targetPokemon > 0) {
      handleChangeTarget(targetPokemon-1);
    }
  }
  const handleNext = () => {
    if(targetPokemon < pokemons.length-1) {
      handleChangeTarget(targetPokemon+1);
    }
  }

  return(
    <>
    <div className='infoArea'>
      <Container
        variant="secondary"
        >
        <Row className='custom-row'>
          <Col xs={1} className='custom-col-btn'>
            <PiArrowFatLinesLeftFill  size={30}variant='primary' onClick={handlePrev}/>
          </Col>
          <Col xs={3} className='custom-col'>
            <Image src={pokemons[targetPokemon].pokemon.image_s} />
          </Col>
          <Col xs={3} className='custom-col'>
            <Card className="shadow-lg" style={{width: '300px', height: '150px'}}>
              <Card.Body>
                <Card.Subtitle>{pokemons[targetPokemon].pokemon.no}</Card.Subtitle>
                <Card.Title>{pokemons[targetPokemon].pokemon.name}</Card.Title>
                <Card.Text>
                  {pokemons[targetPokemon].pokemon.sex === 0 ? (
                    null
                  ): pokemons[targetPokemon].pokemon.sex === 1 ? (
                    <>
                      <Image src='https://zukan.pokemon.co.jp/img/icon_male.svg' />
                      <Image src='https://zukan.pokemon.co.jp/img/icon_female.svg' />
                    </>
                  ): pokemons[targetPokemon+2].pokemon.sex === 2 ?(
                    <Image src='https://zukan.pokemon.co.jp/img/icon_male.svg' />
                  ): pokemons[targetPokemon+2].pokemon.sex === 3 ? (
                    <Image src='https://zukan.pokemon.co.jp/img/icon_female.svg' />
                  ):null}

                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={1} className='custom-col-btn'>
            <PiArrowFatLinesRightFill  size={30}variant='primary' onClick={handleNext} />
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="mb-2 p-3 border-3 h-100" style={{margin:'10px 0'}}>
              <Card.Body>
                <Card.Text className='fs-4 mt-4'>
                  分類：{pokemons[targetPokemon].pokemon.bunrui}
                </Card.Text>
                <Card.Text className='fs-4 mt-4'>
                  タイプ：{<Image src={srcType_0} style={{width: '35px', height: '35px'}} />}
                          {pokemons[targetPokemon].pokemon.type_2 === 0 ?(
                            null
                          ):(
                            <Image src={srcType_1} style={{width: '35px', height: '35px'}} />
                          )}
                </Card.Text>
                <Card.Text className='fs-4 mt-4'>
                  高さ：{pokemons[targetPokemon].pokemon.takasa}
                </Card.Text>
                <Card.Text className='fs-4 mt-4'>
                  重さ：{pokemons[targetPokemon].pokemon.omosa}<br/>
                </Card.Text>
                <Card.Text className='fs-4 mt-4'>
                特性：{pokemons[targetPokemon].abilities[0].name}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-2 p-3 border-3 h-100" style={{margin:'10px 0'}}>
              <Card.Body>
                <Ability abilityName='HP' abilityValue={pokemons[targetPokemon].pokemon.spec_hp} />
                <Ability abilityName='攻撃' abilityValue={pokemons[targetPokemon].pokemon.spec_kougeki} />
                <Ability abilityName='防御' abilityValue={pokemons[targetPokemon].pokemon.spec_bougyo} />
                <Ability abilityName='特攻' abilityValue={pokemons[targetPokemon].pokemon.spec_tokukou} />
                <Ability abilityName='特防' abilityValue={pokemons[targetPokemon].pokemon.spec_tokubou} />
                <Ability abilityName='素早さ' abilityValue={pokemons[targetPokemon].pokemon.spec_subayasa} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="mb-2 p-3 border-3 h-100" style={{margin:'30px 0px'}}>
              <Card.Body>
                <Card.Text className='fs-4 mt-4'>
                  {pokemons[targetPokemon].pokemon.text_1}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}