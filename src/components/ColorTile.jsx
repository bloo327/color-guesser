import React, {useState, useEffect} from 'react'

const ColorTile = () => {
    const [color, setColor] = useState('blue')
    const [answers, setAnswers] = useState([])
    const [guess, setGuess] = useState(undefined)
    const [stats, setStats] = useState(1)
    const [streak, setStreak] = useState(0)

    const getColor = () => {
        let hexVal = 0xFFFFFF
        let randomInt = Math.floor(Math.random() * hexVal)
        let randomColor = randomInt.toString(16).padStart(6, 0)
        return `#${randomColor}`
    }

    const pickColor = () => {
        setStats((prev) => prev + 1)
        setGuess(undefined)
        let correctColor = getColor()
        setColor(correctColor)
        setAnswers([correctColor, getColor(), getColor(), getColor()].sort(() => 0.5 - Math.random()))
    }

    useEffect(() => {
        const pickColor = () => {
            setGuess(undefined)
            let correctColor = getColor()
            setColor(correctColor)
            setAnswers([correctColor, getColor(), getColor(), getColor()].sort(() => 0.5 - Math.random()))
        }
        pickColor()
    }, [])

    const handleAnswerClick = (clickedAnswer) => {
        if (clickedAnswer === color) {
            setStreak((prev) => prev + 1)
            setGuess(true)
            setTimeout(pickColor, 500);
        } else if (clickedAnswer !== color) {
            setGuess(false)
            setStreak(0)
        }
    }

    return (
        <div className='color-wrapper'>
            <h1 className='title'> GUESS THE COLOR!</h1>
            <h2>PROBLEM: #{stats}  |  STREAK: {streak}</h2>
            <div className='colortile' style={{ backgroundColor: color }}></div>
            <div className='answers-wrapper'>
            {answers.map(answer => {
                return <button onClick={() => handleAnswerClick(answer)} key={answer}>{answer}</button>
            })}
            </div>
            {guess === true ? <div className='guess-result correct'>CORRECT!</div> : ''}
            {guess === false ? <div className='guess-result incorrect'>TRY AGAIN!</div> : ''}
        </div>
    )
}

export default ColorTile