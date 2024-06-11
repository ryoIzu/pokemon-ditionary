//カートに入れたり、出したり、計算したり
//ここで商品情報を諸々管理。

/*
quiitaの参考ページではshop.jsxで商品情報の取得をしていたが、
それでは動かないので、shop-context内で取得して、useContextで
一緒に管理させる方が良いと思う。
*/

"use client"
import {createContext, useState, useEffect} from 'react';
import Data from './kanto.json';
export const PokemonContext = createContext(null);

export const PokemonContextProvider = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(()=>{
      setPokemons(Data);
      console.log(pokemons);
      setIsLoading(false);
  },[]);

  return(
    <PokemonContext.Provider value={{pokemons, isLoading}}>
      {props.children}
    </PokemonContext.Provider>
  );
}