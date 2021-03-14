import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';

import useApi from '../hooks/useApi';
import Slider from '../components/Slider';

const Container = styled.div`
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const HeroImgWrapper = styled.div`
    background: #1c002b;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
`;

const HeroImg = styled.img`
    width: 200px;
    z-index: 5;
    -webkit-box-shadow: 5px 5px 15px 5px #000000;
    box-shadow: 5px 5px 15px 5px #000000;
`;
const HeroImgShadow = styled.div`
    filter: brightness(60%);
    background: url(${(p) => p.background});
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    color: white;
    -webkit-box-shadow: inset 0px 0px 50px 80px rgba(0, 0, 0, 0.81);
    box-shadow: inset 0px 0px 50px 60px rgba(0, 0, 0, 0.6);
`;

const Title = styled.h2`
    width: 100%;
    text-align: center;
    margin-top: 1em;
    font-weight: 800;
    font-size: 26px;
    @media (min-width: 800px) {
        font-size: 50px;
    }
`;

const Description = styled.p`
    margin: 1em auto;
    text-align: justify;
    max-width: 600px;
    padding: 8px;
    @media (min-width: 800px) {
        max-width: 600px;
    }
`;

const Tags = styled.div`
    margin-top: 1em;
    display: flex;
    justify-content: center;
`;

const Tag = styled.h4`
    font-weight: 300px;
`;

const Movie = ({ user }) => {
    const posterPath = `https://image.tmdb.org/t/p/w500`;
    const router = useRouter();
    const { id } = router.query;

    const { data, error, requesting } = useApi('movie', { ext: `movie`, query: id });
    return (
        <Container>
            {!requesting && !error && (
                <>
                    <HeroImgWrapper background={`${posterPath}${data.backdrop_path}`}>
                        <HeroImg src={`${posterPath}${data.poster_path}`} />
                        <HeroImgShadow />
                    </HeroImgWrapper>
                    <Title>{data.title}</Title>
                    <Tags>
                        <Tag>{data.genres[0].name}</Tag> <Tag> &nbsp;|&nbsp;</Tag> <Tag>{data.release_date}</Tag>
                    </Tags>
                    <Description>{data.overview}</Description>
                    <Slider url={'movies'} ext={`movie/${id}/similar`} query={''} title={'More Like This'} />
                </>
            )}
        </Container>
    );
};

export default Movie;
