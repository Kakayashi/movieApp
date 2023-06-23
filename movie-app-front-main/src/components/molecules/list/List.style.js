import styled from "styled-components";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";



export const CommentWrapper = styled.div`
    color: #fff;
    text-align: center;
    margin-left: 100px;
    border-bottom:2px solid ${({theme})=>theme.colors.black};
    border-left:2px solid ${({theme})=>theme.colors.black};
    background-color: ${(props) =>
		props.index % 2 === 0 ? props.theme.colors.black : "#000"};
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 100px;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    position: relative;

    &:hover{
        background-color: ${({theme})=>theme.colors.goldDisabled};
    }
`

export const CommentId = styled.div`
    color:  #fff;
    //color:  ${({theme})=>theme.colors.gold};
    margin: 20px;
`

export const CommentDelete = styled(RiDeleteBin7Fill)`
	position: absolute;
	width: 50px;
    padding: 5px;
	right: 15px;
	top: 7px;
	fill: ${({ theme }) => theme.colors.gold};
	transition: all 0.3s ease-in-out;
	cursor: pointer;

	&:hover {
       background-color: ${({ theme }) => theme.colors.blackHover};
       border-radius: 25px;
        z-index: 100;
		fill: ${({ theme }) => theme.colors.gold};
	}
`;

export const CommentEdit = styled(BiEdit)`
	position: absolute;
	width: 50px;
    padding: 5px;
	right: 60px;
	top: 7px;
	fill: ${({ theme }) => theme.colors.gold};
	transition: all 0.3s ease-in-out;
	cursor: pointer;

	&:hover {
       background-color: ${({ theme }) => theme.colors.blackHover};
       border-radius: 25px;
        z-index: 100;
		fill: ${({ theme }) => theme.colors.gold};
	}
`;