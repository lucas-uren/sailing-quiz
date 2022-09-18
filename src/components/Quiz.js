import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";
import Question from "./Question";

const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    console.log('quizState', quizState);

    console.log(quizState.currentQuestionIndex);
    
    return (
        <div className = "quiz">
            {quizState.showResults && <div>Showing result</div>}
            {!quizState.showResults && (
                <div>
                    <div className="score">
                    Questions {quizState.currentQuestionIndex + 1} / {quizState.questions.length}
                    </div>
                    <Question />
                    <div className="next-button" onClick={() => dispatch({type: 'NEXT_QUESTION'})}>
                    Next question
                    </div>
                </div>
            )}
           
        </div>
    )

};

export default Quiz;