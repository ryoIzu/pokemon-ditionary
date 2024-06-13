"use client";
//import styles from '../page.module.css';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {CardBody, Col, Container, FormGroup, Input, Label, Row} from "reactstrap";
import {useState, useEffect, useContext} from 'react';
import { PokemonContext } from '../context/pokemonContext';

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';


export const Ability = (props) => {
  const [liItems,setLiItems] = useState(new Array(10).fill('white'));

  return(
    <>
    <div className='parameter'>
      <span className='fs-4' style={{margin: 'auto 0px'}}>
        {props.abilityName}
      </span>
      <ul className='parameter'>
        {liItems.map((liItem,index) => (
          <li
            key={index}
            style={{backgroundColor: index < props.abilityValue ? `rgb(${230 - 40 * index},${230 - 40 * index},256)` : 'white',
              transitionDelay: `${index*0.1}s`
            }}
          ></li>

        ))}
      </ul>
    </div>
    </>
  );
}