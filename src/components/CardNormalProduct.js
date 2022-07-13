import React from 'react';
import styled from 'styled-components';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import {BsHandbag} from 'react-icons/bs';

const Card = styled.div`
   min-width: 150px;
   background-color: #F4F4F4;
   box-shadow: 2px 2px 4px #adadad;
   position:relative;
   margin-right: 1rem;
   border-radius: 10px;
   cursor: pointer;

   &:hover{
    background-color: #e9e9e9;
    box-shadow: 0 0 15px #adadad;
    transition: .3s;
   }
`;

const Image = styled.div`
   
   height: 150px;
   img{
    position: absolute;
    left: 0; right: 0; top: -2rem;
    margin:auto;
    height: 170px;
    -webkit-filter: drop-shadow(5px 5px 5px #222);
    filter: drop-shadow(2px 2px 4px #222);
   }
`;

const PriceContainer = styled.div`
   display:flex;
   align-items:center;
   justify-content: space-between;
   padding: 1rem;
   font-size: 2rem;
   font-weight: bold;
   color: #242424;
   p{
    margin: 0 .5rem;
   }
`;
export const CardNormalProduct = ({img, price}) => {
  return (
    <Card>
        <Image>
            <img src={img}/>
        </Image>
        <PriceContainer>
            <p className='price'>{`$ ${price}`}</p>
            <HiOutlineShoppingCart size="2.5rem"/>
        </PriceContainer>
    </Card>
  )
}
