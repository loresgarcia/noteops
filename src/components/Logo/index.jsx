export default function Logo({src, width, height}){
    return(
        <img 
            src={src} 
            alt="logotipo do NoteOps"
            style={{ width: width, height: height }}
        />
    )
}