import './GameOver.css'
const GamaOver = ({retry}) => {
    return (
        <div>
            <h1>Game Over</h1>
            <button onClick={retry}>Resetar jobo</button>
        </div>
    )
}

export default GamaOver
