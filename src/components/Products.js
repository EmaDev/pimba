import React from 'react';

import styled from 'styled-components';
import { CardNormalProduct } from './CardNormalProduct';
import { Searcher } from './Searcher';

import smir from '../assets/smir.png';
import bronca from '../assets/bronca.png';
import gancia from '../assets/gancia.png';
import chandon from '../assets/chandon.png';
import combo from '../assets/combo.png';
import { CardPromotionProduct } from './CardPromotionProduct';

const Section = styled.section`
  max-width: 600px;
  margin:auto;
`;
const NormalProductsContainer = styled.div`
   padding: 3rem 1rem;
   display: flex;
   align-items:center;
   overflow-x:auto;
`;
const Title = styled.h2`
  font-size: 2.6rem;
  font-weight: bold;
  color: #242424; 
  padding: 0 1rem;
  margin: 0;
`;

const OrderByButton = styled.p`
   margin:.5rem;
   font-weight: 500;
   font-size: ${({ active }) => active ? '1.8rem' : '1.7rem'};
   color: ${({ active }) => active ? '#242424' : '#717171'};
   border-bottom: ${({ active }) => active && '1px solid #242424'};
`;

const prods = [
    { price: 2050, img: smir },
    { price: 1900, img: chandon },
    { price: 1200, img: bronca },
    { price: 1400, img: gancia }
];
const prodsProm = [
    { price: 2490, img: combo , description: 'Combo  2 CocaCola 2.25L + Fernet Branca 750ml '},
    { price: 1900, img: chandon , description: 'Chandon 900ml'},
    { price: 1200, img: bronca , description: 'Fernet Branca 750ml'},
];
export const Products = () => {
    return (
        <Section>
            <Searcher />
            <Title>Productos</Title>
            <div style={{ display: 'flex', padding: '0 1rem' }}>
                <OrderByButton active>Todos</OrderByButton>
                <OrderByButton>Populares</OrderByButton>
                <OrderByButton>Favoritos</OrderByButton>
            </div>
            <NormalProductsContainer>
                {
                    prods.map((prod, i) => (
                        <CardNormalProduct
                            key={i}
                            img={prod.img}
                            price={prod.price}
                        />
                    ))
                }
            </NormalProductsContainer>
            <div>
            <Title>Promociones</Title>
                {
                    prodsProm.map((prod, i) => (
                        <CardPromotionProduct
                            key={i}
                            img={prod.img}
                            price={prod.price}
                            description={prod.description}
                        />
                    ))
                }
            </div>
        </Section>
    )
}
