import styled from 'styled-components';

const ButtonWrapper = styled.button`
    background: ${(p) => p.theme.colors.purple};
    color: ${(p) => p.theme.colors.whiteOne};
    outline: none;
    border: 1px solid ${(p) => p.theme.colors.purple};
    border-radius: 8px;
    text-decoration: none;
    font-size: 14px;
    text-transform: capitalize;
    font-family: ${(p) => p.theme.fonts.main};
    padding: 8px 20px;
    & a {
        width: 100%;
        height: 100%;
    }
    &.red {
        background: ${(p) => p.theme.colors.red};
        color: ${(p) => p.theme.colors.whiteOne};
        outline: none;
        border: 1px solid ${(p) => p.theme.colors.red};
    }
    &.green {
        background: ${(p) => p.theme.colors.green};
        color: ${(p) => p.theme.colors.whiteOne};
        outline: none;
        border: 1px solid ${(p) => p.theme.colors.green};
    }
    &.blue {
        background: ${(p) => p.theme.colors.blue};
        color: ${(p) => p.theme.colors.whiteOne};
        outline: none;
        border: 1px solid ${(p) => p.theme.colors.blue};
    }
    &:hover {
        cursor: pointer;
        filter: brightness(110%);
    }
`;

const Button = ({ buttonText, click = () => null, color = 'blue' }) => {
    return (
        <ButtonWrapper className={color} onClick={click}>
            {buttonText}
        </ButtonWrapper>
    );
};

export default Button;
