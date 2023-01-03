import styled from "styled-components";

const Button = styled.button`
    padding: 5px;
    width: 130px;
    height: 40px;
    background: none;
    color: #f9f9f9;
    font-size: 16px;
    font-family: Poppins;
    border: #f9f9f9 solid 0.5px;
    border-radius: 10px;
    cursor: pointer;
    transition: 600ms;

    &:hover {
        background-color: #4e4e4e;
    }
`;

export default Button;
