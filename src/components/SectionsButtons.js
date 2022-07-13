import React from 'react';
import styled from 'styled-components';
import {CgGames} from 'react-icons/cg';
import {FcLike} from 'react-icons/fc';
import {BsTools} from 'react-icons/bs';

const Container = styled.div`
   width: 100%;
   padding: 1rem;
   display:flex;
   align-items:center;
   overflow-x: auto;
`;

const Card = styled.div`
   min-width: 90px;
   padding: 1rem;
   margin-right: 1rem;
   box-shadow: 2px 2px 1px #252629;
   border-radius: 8px;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   font-size: 2rem;
   font-weight: bold;
   color:#fff;

   p{
    margin:0;
    font-size: 1.2rem
   }
`;


export const SectionsButtons = () => {
  return (
    <Container>
        <Card><CgGames size="3.5rem"/><p>Juegos</p></Card>
        <Card><BsTools size="3.5rem"/><p>Tools</p></Card>
        <Card><BsTools size="3.5rem"/><p>Herramientas</p></Card>
        <Card><FcLike size="3.5rem"/><p>Favoritos</p></Card>
    </Container>
  )
}
