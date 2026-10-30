interface Props {
    property: string;
    value?: string | number;
}


export const CardInfo = ({ property, value }: Props) => {
    return (
        <p className="ml-4"><span className="font-bold cursor-pointer">{property}: </span>{value}</p>
    )
}