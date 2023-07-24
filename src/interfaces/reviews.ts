interface IAuthorDetails {
    avatar_path: string;
    name: string;
    rating: number;
    username: string;
}

export interface IReview {
    author: string;
    author_details: IAuthorDetails;
    content: string;
    created_at: string;
    id: string;
    updated_at: string;
    url: string;
}