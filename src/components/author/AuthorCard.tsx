import type { VariantProps } from "class-variance-authority";
import type { Author } from "../../models/author.interface"
import { CardComponent, cardVariants } from "../common/card-component";
import { CardInfo } from "../common/card-info-component";


interface Props extends VariantProps<typeof cardVariants> { // It needs to extend VariantProps<typeof cardVariants> in order to be able to use the variant and size props. It is a generic type that takes the type of the cardVariants function, translating the type of the data the function returns into a usable type, which is passed to the interface by inheritance so it admits all posible props implicitly.
  author: Author; // variant, size, and other props defined in the cardVariants function are passed, but they also are optional per the very definition of the VariantProps type.
}

export const AuthorCard = ({ author, variant, size }: Props) => {
  return (
    
    <CardComponent variant={variant} size={size}>
      <CardInfo property="Nombre" value={author.name} />
      <CardInfo property="Apellidos" value={author.lastname} />
      <CardInfo property="Fec. Nacimiento" value={author.birthDate} />
      <CardInfo property="Nacionalidad" value={author.nationality} />
      <CardInfo property="Biografia" value={author.biography} />
    </CardComponent>
  )
}

