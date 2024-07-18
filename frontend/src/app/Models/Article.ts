import { Comment } from './Comment';
export class Article{
    id!: number;
    title!: string;
    content!: string;
    category!: string;
    noOfComments!: number;
    noOfSaves!:number;
    slug!: string;
    comments!: Comment[]; 
    timestamp!:string
     
}

