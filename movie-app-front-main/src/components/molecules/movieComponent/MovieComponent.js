import React, { useState } from "react";
import {
	MovieWrapper,
	MovieTitle,
	RowContainer,
	GenereContainer,
	RowInfo,
	MoviePoster,
	Column,
	CustomTitle,
	CarouselWrapper,
	CarouselImage,
	Desctiption,
	StyledStatr,
	Review,
	CarouselImageSmall,
	CarouselItem,
	ReviewItem,
	ReviewContainer,
	CommentWrapper,
	CommentInfo,
	CommentNote,
	StyledStatr2,
} from "./MovieComponent.style";
import Player from "../../atoms/player/Player";
import useMovieVideos from "../../../hooks/useMovieVideos";
import CustomButton from "../../atoms/button/CustomButton";
import useMovieImages from "../../../hooks/useMovieImage";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import useMovieCredits from "../../../hooks/useMovieCredits";
import CustomInputComponent from "../../atoms/input/CustomInput";
import axios from "axios"; // Dodajemy import biblioteki Axios
import CustomSlider from "../../atoms/customSlider/CustomSlider";
import useComments from "../../../hooks/useComments";

function MovieComponent({ movie }) {
	const clips = useMovieVideos(movie.id);
	const { credits, isLoadingCredits } = useMovieCredits(movie.id);
	const { comments, isLoadingComments } = useComments(movie.id);
	const { images, isLoading, error } = useMovieImages(movie.id);
	const [actualClip, setActualClip] = useState(clips[0]);
	const [clipIndex, setClipIndex] = useState(0);
	const [name, setName] = useState("");
	const [comment, setComment] = useState("");
	const [commentErrors, setCommentErrors] = useState([]);
	const [isLoading2, setIsLoading2] = useState([]);
	const [ratting, setRating] = useState([]);
	const accessToken = sessionStorage.getItem("token");

	const posterUrl = "https://image.tmdb.org/t/p/original/" + movie.poster_path;

	const handleNextClip = () => {
		const nextIndex = (clipIndex + 1) % clips.length;
		setClipIndex(nextIndex);
		setActualClip(clips[nextIndex]);
	};

	const handlePrevClip = () => {
		const prevIndex = clipIndex === 0 ? clips.length - 1 : clipIndex - 1;
		setClipIndex(prevIndex);
		setActualClip(clips[prevIndex]);
	};

	const handleRatingChange = (value) => {
		setRating(value);
	};

	const addComment = () => {
		console.log("dzia;a", ratting, comment, accessToken);
		console.log(comments);
		if (!setIsLoading2(true)) {
			if (accessToken) {
				setIsLoading2(true);
				setCommentErrors(["Adding..."]);
				let bodyFormData = new FormData();
				bodyFormData.append("amount", ratting);
				bodyFormData.append("description", comment);
				bodyFormData.append("movie_id", movie.id);

				axios({
					method: "post",
					url: "http://localhost:8000/api/note/add",
					data: bodyFormData,
					headers: {
						"Content-Type": "multipart/form-data",
						Authorization: `Bearer ${accessToken}`,
					},
				})
					.then(function (response) {
						setIsLoading2(false); // Ustawiamy isLoading na false po zakończeniu żądania
						if (response.data.error) {
							console.log("error");
							setCommentErrors(["Error"]);
							console.log(response.data);
						} else {
							console.log("succes");
							console.log(response.data);
							setCommentErrors(["Added comment!"]);
						}

						return;
					})
					.catch(function (response) {
						setIsLoading2(false); // Ustawiamy isLoading na false po zakończeniu żądania
						console.log("error2");
						console.log(response);
						setCommentErrors(["Error"]);
						return;
					});
			} else {
				setCommentErrors(["Please log in to add a comment"]);
			}
		}
	};

	return (
		<MovieWrapper>
			<MovieTitle>{movie.title}</MovieTitle>
			<RowContainer>
				Generes:
				{movie.genres.map((genere) => (
					<GenereContainer>{genere.name}</GenereContainer>
				))}
			</RowContainer>
			<RowContainer>
				<RowInfo>Relese: {movie.release_date}</RowInfo>
				<RowInfo>For adults: {movie.adult ? "yes" : "no"}</RowInfo>
			</RowContainer>
			<RowContainer gap={"140px"}>
				<Column>
					<CustomTitle>Poster:</CustomTitle>
					<MoviePoster src={posterUrl} />
				</Column>
				<Column>
					<CustomTitle>
						Trailer {clipIndex + 1} of {clips.length + 1}
						<CustomButton text={"Prev"} func={handlePrevClip} />
						<CustomButton text={"Next"} func={handleNextClip} />
					</CustomTitle>
					{clips.length > 0 && <Player videoId={clips[clipIndex].key} />}
				</Column>
			</RowContainer>
			<RowContainer>
				<Column>
					<CustomTitle>Gallery:</CustomTitle>
					{isLoading ? (
						<CustomTitle>Loading...</CustomTitle>
					) : (
						<CarouselWrapper>
							<div className="splide__progress">
								<div className="splide__progress__bar" />
							</div>
							<Splide
								options={{
									rewind: true,
									gap: "20px",
									perPage: 3,
									perMove: 1,
									pagination: true,
									autoWidth: true,
									autoplay: true,
								}}
							>
								{/* <SplideTrack> */}
								{images.map((el) => {
									return (
										<SplideSlide>
											<CarouselImage
												src={
													"https://image.tmdb.org/t/p/original/" + el.file_path
												}
											/>
										</SplideSlide>
									);
								})}
								{/* </SplideTrack> */}
							</Splide>
						</CarouselWrapper>
					)}
				</Column>
			</RowContainer>
			<RowContainer>
				<CustomTitle>Rating:</CustomTitle>
				<StyledStatr size={"50"} />
				<Review reviewsnumber={movie.vote_count}>
					{movie.vote_average.toFixed(1)}
				</Review>
			</RowContainer>
			<RowContainer>
				<CustomTitle>Description</CustomTitle>
				<Desctiption>{movie.overview}</Desctiption>
			</RowContainer>
			<RowContainer>
				<CustomTitle>Credits:</CustomTitle>
				{credits == null ? (
					<CustomTitle>Loading...</CustomTitle>
				) : (
					<CarouselWrapper>
						<div className="splide__progress">
							<div className="splide__progress__bar" />
						</div>
						<Splide
							options={{
								rewind: true,
								gap: "20px",
								perPage: 3,
								perMove: 1,
								pagination: true,
								autoWidth: true,
								autoplay: true,
							}}
						>
							{credits.map((el) => {
								return (
									<SplideSlide>
										<CarouselItem>
											<CarouselImageSmall
												src={
													"https://image.tmdb.org/t/p/original/" +
													el.profile_path
												}
											/>

											<span>{el.original_name}</span>
											<span>{el.character}</span>
										</CarouselItem>
									</SplideSlide>
								);
							})}
						</Splide>
					</CarouselWrapper>
				)}
			</RowContainer>
			<Column>
				<CustomTitle>Add review</CustomTitle>
				<ReviewContainer>
					{/* <CustomInputComponent
						label={"Name"}
						rows={1}
						value={name}
						setValue={setName}
					/> */}
					<CustomSlider onSwitchChange={handleRatingChange} />
				</ReviewContainer>
				<ReviewItem>
					<CustomInputComponent
						label={"Text"}
						rows={4}
						value={comment}
						setValue={setComment}
					/>
				</ReviewItem>
				<ReviewItem>
					{commentErrors.map((el) => (
						<span>{el}</span>
					))}
				</ReviewItem>
				<ReviewItem>
					<CustomButton text={"Add"} func={addComment} />
				</ReviewItem>
			</Column>
			{/* comments */}
			<Column>
				<CustomTitle>Comments:</CustomTitle>

				{isLoadingComments ? (
					<span>Loading...</span>
				) : (
					comments.map((el) => (
						<CommentWrapper>
							<CommentInfo>
								<span>User: {el.user}</span>
								<span>
									<StyledStatr2 size={"30"} /> {el.amount}
								</span>
							</CommentInfo>
							<CommentNote>Comment:{el.description}</CommentNote>
						</CommentWrapper>
					))
				)}
			</Column>
		</MovieWrapper>
	);
}

export default MovieComponent;
