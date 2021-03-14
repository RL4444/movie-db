import { useState, useEffect } from 'react';
import styled from 'styled-components';

import useApi from '../hooks/useApi';

import { FilmPosterImg } from './Img';

const Container = styled.div`
    margin-top: 1em;
    position: relative;
    width: 100vw;
    height: 250px;
`;

const SliderInnerContent = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    align-items: center;
    overflow-x: scroll;
    z-index: 3;
    &::-webkit-scrollbar {
        width: 0; /* Remove scrollbar space */
        background: transparent; /* Optional: just make scrollbar invisible */
    }
`;

const SliderTitle = styled.h2`
    margin-left: 10px;
    font-size: 20px;
    font-weight: 700;
`;

const Slider = ({ url, ext, query, title }) => {
    const { data, error, requesting } = useApi(url, { ext, query });

    return (
        <>
            <SliderTitle>{title}</SliderTitle>
            <Container>
                <SliderInnerContent>
                    {data &&
                        data.length &&
                        data.map((film) => {
                            return (
                                <FilmPosterImg
                                    src={film.backdrop_path}
                                    id={film.id}
                                    key={film.id}
                                    title={film.title}
                                    filmData={film}
                                />
                            );
                        })}
                </SliderInnerContent>
            </Container>
        </>
    );
};

export default Slider;
