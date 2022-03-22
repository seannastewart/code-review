import Question from "./Question";
import { useState } from 'react';


function QuestionList(props) {

    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQueston] = useState(0);


    const updateScore = function () {
        setScore(score + 1)

    }

    const updateQuestion = function () {
        if (currentQuestion < 9) {
            setCurrentQueston(currentQuestion + 1)
        } else {
            handleFinshedQuiz()

        }
    }


    const handleFinshedQuiz = function () {
        props.handleSubmit(score)
    }

    const questionArray =
        props.currentQuestions.map((q, index) => {
            return (
                <div className="questionContainer">
                    <div className="scoreContainer">
                        <h2>SCORE: {score}</h2>
                    </div>

                    <Question
                        questionText={q.question
                            .replace(/&[#039]*;/g, "'")
                            .replace(/&[amp]*;/g, '&')
                            .replace(/&[quot]*;/g, '"')
                            .replace(/&[rsquo]*;/g, '’')
                            .replace(/&[lsquo]*;/g, '‘')
                            .replace(/&[ldquo]*;/g, '“')
                            .replace(/&[rdquo]*;/g, '”')
                            .replace(/&[apos]*;/gd, "'")
                            .replace(/&[hellip]*;/g, "…")
                            .replace(/&[percnt]*;/g, '%')
                            .replace(/&[divide]*;/g, '÷')
                            .replace(/&[div]*;/g, '÷')
                            .replace(/&[lt]*;/g, '<')
                            .replace(/&[gt]*;/g, '>')
                            .replace(/&[sup2]*;/g, '²')
                            .replace(/&[deg]*;/g, '°')
                            .replace(/&[aacute]*;/g, 'á')
                            .replace(/&[aAring]*;/g, 'Å')
                            .replace(/&[eacute]*;/g, 'é')
                            .replace(/&[iacute]*;/g, 'í')
                            .replace(/&[ntilde]*;/g, 'ñ')
                            .replace(/&[oacirc]*;/g, 'ô')
                            .replace(/&[oacute]*;/g, 'ó')
                            .replace(/&[uacute]*;/g, 'ú')
                            .replace(/&[auml]*;/g, 'ä')
                            .replace(/&[euml]*;/g, 'ë')
                            .replace(/&[iuml]*;/g, 'ï')
                            .replace(/&[ouml]*;/g, 'ö')
                            .replace(/&[uuml]*;/g, 'ü')
                            .replace(/&[yuml]*;/g, 'ÿ')
                            .replace(/&[uuml]*;/g, 'ü')
                            .replace(/&[scaron]*;/g, 'š')
                            .replace(/&[epsilon]*;/g, 'ε')
                            .replace(/&[Phi]*;/g, 'φ')}
                        answer={q.correct_answer}
                        correct={updateScore}
                        next={updateQuestion}
                        key={index}
                        cancel={props.quit}
                    />

                </div>

            )
        })



    return (

        <section className="questions">
            {questionArray[currentQuestion]}
        </section>


    )
}

export default QuestionList
