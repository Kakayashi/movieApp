import React, { useState, useEffect, useContext  } from "react";
import axios from "axios";
import {
	ListWrapper,
	ListTitle,
	ListItem,
	ListItemInfo,
	ListItemInfoNumber,
	ListItemInfoTitle,
	ListItemInfoImage,
	ListItemBackground,
	ListItemRatigContainer,
	StyledStatr,
	Review,
    SearchButton,
    
} from "../rankingList/RankingList.style"
import { useNavigate } from "react-router-dom";
import { CommentWrapper, CommentId,CommentDelete ,CommentEdit} from "./List.style";
import useDeleteComment from "../../../hooks/useDeleteComment";


function List() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
    const [commentErrors, setCommentErrors] = useState([]);
    const { isLoading3, error3, deleteComment } = useDeleteComment();
    const role = sessionStorage.getItem("role");
    const accessToken = sessionStorage.getItem("token");





	const handleItemClick = (movie) => {
		navigate(`/movies/${movie.id}`);
	};

    const handleCommentClick = (comment) => {
		navigate(`/comment/${comment.id}`);
	};

    const handleCommentEdit = (comment) => {
		navigate(`/commentEdit/${comment.id}`);
	};

    
	const handleDelete = (commentId) => {
		if (role == "2") {
			setCommentErrors(["Deleted"]);
            alert("Comment deleted!");
			deleteComment(commentId, accessToken);
		} else {
			setCommentErrors(["Only user can delete comments!"]);
            alert("Only user can delete comments!");
		}
	};

	useEffect(() => {
		const fetchMovies = async () => {
			setIsLoading(true);

			try {
				let url = "http://localhost:8000/api/movie?";
				const response = await axios.get(url);
                console.log("odp", response.data.data)
			
                let newMovies = []

                response.data.data.forEach(element => {
                    const comments = element.notes
                    newMovies.push({
                        "movie": element,
                        "comments": comments
                    })
                });
                console.log("newMovies", newMovies)
                setMovies(newMovies);


				setIsLoading(false);
				console.log("url", url);
				console.log("Response", response);
			} catch (error) {
				console.error(error);
				setIsLoading(false);
			}
		};

		fetchMovies();
	}, []);

	const fetchMovies2 = async () => {
		setIsLoading(true);

		try {
			let url = "http://localhost:8000/api/movie?";
			const response = await axios.get(url);
			setMovies(response.data.data);
			setIsLoading(false);
			console.log("url", url);
			console.log("Response", response);
		} catch (error) {
			console.error(error);
			setIsLoading(false);
		}
	};

	if (isLoading) {
		return <ListTitle>Loading...</ListTitle>;
	}
	let index = -1;
	const imgUrl = "https://image.tmdb.org/t/p/original/";

	return (
		<ListWrapper>
            {<ListItemInfoTitle>{commentErrors}</ListItemInfoTitle>}
			{movies.map((item) => {
				index++;
				return (
                    <>
					<ListItemBackground key={item.movie.id + Math.random()} index={index}>
						<ListItem onClick={() => handleItemClick(item.movie)}>
							<ListItemInfo>
								<ListItemInfoNumber>{index + 1 + "."}</ListItemInfoNumber>
								<ListItemInfoImage src={imgUrl + item.movie.imagePath} />
								<ListItemInfoTitle>{item.movie.title}</ListItemInfoTitle>
							</ListItemInfo>
							<ListItemRatigContainer>
								<StyledStatr size={24} />
								<Review reviewsnumber={item.movie.voteCount}>
									{item.movie.voteAverage.toFixed(1)}
								</Review>
							</ListItemRatigContainer>
						</ListItem>
					</ListItemBackground>
                    {item.comments.map((com, i)=>{
                        index++;
                        return (<CommentWrapper index={index} key={com.id + Math.random()}> 
                            <CommentId onClick={() => handleCommentClick(com)}> {i+1}. </CommentId>
                            <span onClick={() => handleCommentClick(com)}>{com.description}</span>
                            <CommentEdit onClick={() => handleCommentEdit(com)}/>
                                <CommentDelete onClick={() => handleDelete(com.id)}/>
                                
                            </CommentWrapper>)
                    })}
                    </>
				);
			})}
		</ListWrapper>
	);
}

export default List