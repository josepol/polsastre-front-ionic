export interface CommentsModel {
    _id: string;
    text: string;
    date: Date;
    userName: string;
    blogId: string;
    isAdmin: boolean;
}