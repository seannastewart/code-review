import './App.css';
import { useState } from 'react';
import Form from './Form'
import QuestionList from './QuestionList';
import Results from './Results';


function App() {

  const [questions, setQuestions] = useState([]);
  const [showForm, setShowForm] = useState(true);
  const [showQuestions, setShowQuestions] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [finalScore, setFinalScore] = useState(0);


  function handleStart(event, questionArray) {
    event.preventDefault()

    setQuestions(questionArray)
    setShowForm(false)
    setShowQuestions(true);

  }

  function clear() {
    setShowResults(false);
    setShowForm(true)
    setShowQuestions(false)
  }


  const handleResults = function (score) {
    setFinalScore(score)
    setShowResults(true);
    setShowQuestions(false);

  }


  return (
    <div className="App">
      <header>
        <h1>TRUE OR FALSE?</h1>

      </header>
      <main className="wrapper">
        {
          showForm
            ? <Form handleFormCompletion={handleStart} />
            : null
        }

        {
          showQuestions
            ? <QuestionList currentQuestions={questions} handleSubmit={handleResults} quit={clear} />
            : null
        }
        {
          showResults
            ? <Results score={finalScore} reset={clear} />
            : null
        }


      </main>
      <footer> <p>Created by <a href="https://github.com/seannastewart">Seanna Stewart</a> at <a href="https://junocollege.com/" target="_blank" rel="noreferrer"> Juno College of Technology</a></p></footer>
    </div>
  )
}

export default App;
