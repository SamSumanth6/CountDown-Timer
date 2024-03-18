import './card.css'

const Card = ()=>{
    return(
        <div className='box'>
            <div className='card'>
                <div className='card-body'>
                    <h1 className='number'>0</h1>
                    <h2 className='format'>Days</h2>
                </div>
            </div>
            <div className='card'>
                <div className='card-body'>
                    <h1 className='number'>0</h1>
                    <h2 className='format'>Hours</h2>
                </div>
            </div>
            <div className='card'>
                <div className='card-body'>
                    <h1 className='number'>0</h1>
                    <h2 className='format'>Minutes</h2>
                </div>
            </div>
            <div className='card'>
                <div className='card-body'>
                    <h1 className='number'>0</h1>
                    <h2 className='format'>Seconds</h2>
                </div>
            </div>
        </div>
    )
}

export default Card;