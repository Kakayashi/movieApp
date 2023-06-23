import styled from "styled-components";

export const EditWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 300px;
    margin-inline: auto;
    border-radius: 10px;
    margin-top: 60px;
    background-color: ${({theme})=>theme.colors.black };
    padding: 100px;
    gap: 40px
`