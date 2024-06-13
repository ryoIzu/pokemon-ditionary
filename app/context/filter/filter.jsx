"use client";
//import styles from '../page.module.css';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {CardBody, Col, Container, FormGroup, Input, Label, Row} from "reactstrap";
import {useState, useEffect, useContext} from 'react';
import { PokemonContext } from '../pokemonContext';
import './filter.css';

export const Filter = () => {

  return(
    <>
    <h1 className="text">表示するにはサインインしてください。</h1>
    <div className='mosaic'>
    
    </div>
    </>
  );
}