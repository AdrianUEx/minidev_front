import type { VariantProps } from "class-variance-authority";
import type { Book } from "../../models/book.interface"
import { CardComponent, cardVariants } from "../common/card-component";
import { CardInfo } from "../common/card-info-component";

interface Prop extends VariantProps<typeof cardVariants> {
  book: Book;
}


export const BookCard = ({ book, variant, size }: Prop) => {
  return (
    <CardComponent variant={variant} size={size}>
      <CardInfo property="Titulo" value={book.title} />
      <CardInfo property="Descripcion" value={book.description} />
      <CardInfo property="Genero" value={book.genre} />
      <CardInfo property="Fecha de Publicacion" value={book.publishDate} />
      <CardInfo property="Stock" value={book.stock} />
    </CardComponent>
  )
}
