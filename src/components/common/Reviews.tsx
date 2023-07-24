import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

import { IReview } from "../../interfaces/reviews";

import { getReviews } from "../../services/apiService";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    const { movieId } = useParams();

    const getReview = async (movieId: string) => {
        const data = await getReviews(movieId)

        setReviews(data)
    } 
  
    useEffect(() => {
        if (!movieId) return

        getReview(movieId)
    }, [movieId]);

    return (
        <>
            {reviews.length === 0 && (
                <Notification>We don't have any reviews for this movie.</Notification>
            )}

            {reviews.length > 0 && (
                <ul>
                    {reviews.map((review: IReview) => (
                        <ReviewItem key={review.id}>
                            <h3>Author: {review.author}</h3>
                            <p>{review.content}</p>
                        </ReviewItem>
                    ))}
              </ul>
            )}
        </>
    );
}

export default Reviews;

const Notification = styled.p`
    font-size: 22px;
    margin: 20px 0;
    color: #f05858;
`

const ReviewItem = styled.li`
    padding: 10px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
            0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    margin-bottom: 15px;
`