import { useState, useEffect } from 'react';
import axios from 'axios';


function Form(props) {

    const [selectedCategory, setSelectedCategory] = useState(9)
    const [newQuestions, setNewQuestions] = useState([])
    const [showStartButton, setShowStartButton] = useState(false)


    useEffect(() => {
        axios({
            url: 'https://opentdb.com/api.php',
            params: {
                amount: 10,
                type: 'boolean',
                category: selectedCategory,
            }

        }).then((apiData) => {
            setNewQuestions(apiData.data.results)
        })


    }, [selectedCategory])

    const handleCategoryChange = function (event) {
        let categoryNumber = parseInt(event.target.value)
        setSelectedCategory(categoryNumber)
        setShowStartButton(true)
    }

    const handleSelections = function (event) {
        props.handleFormCompletion(event, newQuestions)
    }

    return (
        <section className="categories">
            <p>Select a category and click start to begin the quiz</p>

            <form action="" onSubmit={handleSelections}>
                <fieldset>
                    <input type="radio" name="topic" value="9" id="general" onClick={handleCategoryChange} />

                    <label htmlFor="general">General</label>

                    <input type="radio" name="topic" value="27" id="animals" onClick={handleCategoryChange} />

                    <label htmlFor="animals">Animals</label>

                    <input type="radio" name="topic" value="31" id="anime" onClick={handleCategoryChange} />
                    <label htmlFor="anime">Anime and Manga</label>

                    <input type="radio" name="topic" value="32" id="cartoons" onClick={handleCategoryChange} />
                    <label htmlFor="cartoons">Cartoons</label>

                    <input type="radio" name="topic" value="18" id="computers" onClick={handleCategoryChange} />
                    <label htmlFor="computers">Computers</label>

                    <input type="radio" name="topic" value="11" id="film" onClick={handleCategoryChange} />
                    <label htmlFor="film">Film</label>

                    <input type="radio" name="topic" value="22" id="geography" onClick={handleCategoryChange} />
                    <label htmlFor="geography">Geography</label>

                    <input type="radio" name="topic" value="23" id="history" onClick={handleCategoryChange} />
                    <label htmlFor="history">History</label>

                    <input type="radio" name="topic" value="19" id="mathematics" onClick={handleCategoryChange} />
                    <label htmlFor="mathematics">Mathematics</label>

                    <input type="radio" name="topic" value="12" id="music" onClick={handleCategoryChange} />
                    <label htmlFor="music">Music</label>

                    <input type="radio" name="topic" value="17" id="science" onClick={handleCategoryChange} />
                    <label htmlFor="science">Science and Nature</label>

                    <input type="radio" name="topic" value="21" id="sports" onClick={handleCategoryChange} />
                    <label htmlFor="sports">Sports</label>

                    <input type="radio" name="topic" value="14" id="television" onClick={handleCategoryChange} />
                    <label htmlFor="television">Television</label>

                    <input type="radio" name="topic" value="28" id="vehicles" onClick={handleCategoryChange} />
                    <label htmlFor="vehicles">Cars</label>

                    <input type="radio" name="topic" value="15" id="videogames" onClick={handleCategoryChange} />
                    <label htmlFor="videogames">Video Games</label>
                </fieldset>
                <div className="buttonContainer">
                    {
                        showStartButton
                            ?
                            <button>START</button>
                            : null
                    }
                </div>

            </form>
        </section>
    )

}

export default Form