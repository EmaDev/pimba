import React from 'react';
import styled from 'styled-components';
import {BsSearch} from 'react-icons/bs';

const Container = styled.div`
   width: 90%;
   margin: 1rem auto; 
   display:flex;
   align-items:center;
   padding: 1rem;
   border-radius: 6px;
   box-shadow: 2px 2px 4px #adadad;
   color: #242424;
   font-size: 2.5rem;
   input{
    border:none;
    margin:0;
    margin-left: 1rem; 
    width:100%;
    background: none;
    font-size: 1.8rem;
    color: #242424;
   }
`;
export const Searcher = () => {
  return (
    <Container>
        <BsSearch/>
        <input type={'text'} placeholder="Busca una bebida"/>
    </Container>
  )
}
