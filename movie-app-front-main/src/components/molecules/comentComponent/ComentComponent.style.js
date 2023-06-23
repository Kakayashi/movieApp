import styled from "styled-components";

export const CommentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-inline: 100px;
    color: #fff;
`

export const CommentTitle = styled.h1`
    font-size: 52px;
    margin: 0;
`

export const Comment = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 100px;

`


export const CommentData = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 20px;
    border: 2px solid #fff;
    padding: 10px;

    span{
        color: gold;
        width: 120px;
    }
    
`