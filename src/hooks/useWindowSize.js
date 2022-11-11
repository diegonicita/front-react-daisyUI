import { useLayoutEffect, useState } from 'react'

export default function useWindowSize () {
  const [size, setSize] = useState({
    width: 0,
    height: 0
  })

  useLayoutEffect(() => {
    function updateSize () {
      setSize({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])
  // Escuchamos el evento "resize" que nos avisa cuando hubo un cambio en las dimensiones de la pantalla y le pasamos una funcion manejadora del estado "size" que se va activar la primera vez que se renderice y cada vez que haya un nuevo mensaje del evento "resize"
  // Usamos layoutEffect porque queremos las dimensiones al terminar de renderizar todo y al terminar removemos el evento para no tener duplicidades

  return size
}
