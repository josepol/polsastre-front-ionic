export interface PostModel {
    id: string;
    picture: string;
    title: string;
    subtitle: string;
    message: string;
    createdAt: Date;
    updatedAt: Date;
    creator: string;
    creatorName: string;
    category: string;
    comments: number;
}