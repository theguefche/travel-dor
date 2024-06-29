
type BlobProps = {
    blob: string
    animate?: boolean 
}

const Blob = ({ blob, animate = false }: BlobProps) => {
    return (
        <div className={`${animate ? "animate-mouvement" : ""} blob bg-${blob}`} />
    )
}

export default Blob