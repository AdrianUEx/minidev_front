// * Book DTO for operations with DB
export interface Book {
    id: number,
    title: string,
    publishDate: string,
    genre: string,
    description: string,
    stock: number,
    authorId: number // ? Esto sería Author?
}