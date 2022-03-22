

function Results(props) {

    return (
        <section className="results">
            <div className="resultContainer">
                <p>You got {props.score} out of 10 answers correct!</p>
                <button onClick={props.reset}>Try again</button>
            </div>
        </section>
    )
}


export default Results;