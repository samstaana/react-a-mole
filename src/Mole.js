import { useEffect } from 'react';
import moleImg from './images/mole.png'

function Mole(props) {
    useEffect(() => {
        // Feel fress to adjust this number
        let randSeconds = Math.ceil(Math.random() * 5500)
        let timer = setTimeout(() => {
            props.setDisplayMode(false)
        }, randSeconds)
        return() => clearTimeout(timer)
    })

    return (
        <div>
            <img 
            style = {{ 'width': '30vw' }}
            src = { moleImg }
            onClick = { props.handleClick } />
        </div>
    )
}

export default Mole;