function Question(props) {



    function handleClick(event) {
        props.next()
        const selectedAnswer = event.target.value;
        if (selectedAnswer === props.answer) {
            props.correct()
        }

    }

    return (

        <fieldset>
            <button className="quit" onClick={props.cancel}>x</button>
            <p>{props.questionText}</p>
            <div className="buttonContainer">
                <label htmlFor="true">TRUE</label>
                <input type="radio" name="question" value="True" id="true" onClick={handleClick} />

                <label htmlFor="false">FALSE</label>
                <input type="radio" name={props.name} value="False" id="false" onClick={handleClick} />
            </div>
        </fieldset>

    )
}

export default Question