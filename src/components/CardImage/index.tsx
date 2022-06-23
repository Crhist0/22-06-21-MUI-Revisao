
type CardImageProps = {
    imageSrc: string
    imageAlt: string
}

function CardImage(props:CardImageProps) {
    
    return <img style={{width: '500px', height: '500px', objectFit: 'cover'}} src={props.imageSrc} alt={props.imageAlt} />
    
}

export default CardImage