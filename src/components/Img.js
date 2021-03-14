import styled from 'styled-components';
import Link from 'next/link';

const PosterImgInner = styled.div`
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    color: white;
    -webkit-box-shadow: inset 0px -20px 35px 17px rgba(0, 0, 0, 0.51);
    box-shadow: inset 0px -20px 35px 17px rgba(0, 0, 0, 0.51);
`;

const PosterImgWrapper = styled.div`
    min-width: 300px;
    max-width: 300px;
    position: relative;
    margin-left: 8px;
    &:nth-child(1) {
        margin-left: 0;
    }
    transition-duration: 0.2s;
    @media (min-width: 800px) {
        &:hover {
            cursor: pointer;
            z-index: 8;
            ${PosterImgInner} {
                display: block;
            }
            transition-duration: 0.4s;
            transform: scale(1.2);
        }
    }
`;

const PosterImg = styled.img`
    width: 100%;
    object-fit: cover;
`;

const FilmTitle = styled.h4`
    color: white;
    position: absolute;
    right: 4px;
    bottom: 4px;
`;

export const FilmPosterImg = ({ src, id, title }) => {
    const posterPath = `https://image.tmdb.org/t/p/w500${src}`;

    return (
        <Link href={`/movie/${encodeURIComponent(id)}`}>
            <PosterImgWrapper>
                <PosterImgInner>
                    <FilmTitle>{title}</FilmTitle>
                </PosterImgInner>
                <PosterImg src={posterPath}></PosterImg>
            </PosterImgWrapper>
        </Link>
    );
};
