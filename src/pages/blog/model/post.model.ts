export interface PostModel {
    title: string;
    subtitle: string;
    message: string;
    createdAt: Date;
    updatedAt: Date;
    creator: string;
    category: string;
    comments: number
}