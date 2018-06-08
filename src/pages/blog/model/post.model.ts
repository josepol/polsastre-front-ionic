export interface PostModel {
    _id: string;
    picture: string;
    title: string;
    subtitle: string;
    text: string;
    createdAt: Date;
    updatedAt: Date;
    creator: string;
    creatorName: string;
    category: string;
    comments: number;
    checked: boolean;
}