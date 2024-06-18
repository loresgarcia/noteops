/* eslint-disable react/prop-types */

const Logo = ({src, width, height}) => {
    return(
        <img 
            src={src} 
            alt="logotipo do NoteOps"
            style={{ width: width, height: height }}
        />
    )
}

export default Logo;