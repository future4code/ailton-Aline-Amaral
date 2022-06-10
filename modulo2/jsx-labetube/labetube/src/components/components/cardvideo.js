import React from 'react'

const CardVideo = () => {
    
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
}

  return (
    <div className="box-pagina-principal media1" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=1 " alt="" />
              <h4>{titulo}</h4>
            </div> 
    )
}

export default CardVideo 