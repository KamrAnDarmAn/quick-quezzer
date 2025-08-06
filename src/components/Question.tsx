import React, { useEffect } from 'react'
import { Label } from "@/components/ui/label"
import {
    RadioGroup,
    RadioGroupItem,
} from "@/components/ui/radio-group"
import { Button } from './ui/button'
import { toast } from "sonner"
import { Navigate } from 'react-router-dom'
// {category:"General Knowledge",
// correct_answer: ""Wax sculptures",
// difficulty:"easy",
// incorrect_answers:"Array(3)",
// question:"What is on display in the Madame Tussaud&#039;s museum in London?",
// type:"multiple"
// }
const Question = ({ questions, reset }) => {
    const [currentQuestion, setCurrentQuestion] = React.useState(0)
    const [shuffledAnswers, setShuffledAnswers] = React.useState<any[]>([])
    useEffect(() => {
        if (questions.length > 0) {
            const questionList = [questions[currentQuestion].correct_answer, ...questions[currentQuestion].incorrect_answers];
            setShuffledAnswers(questionList.sort(() => Math.random() - 0.5));
        }
    }, [currentQuestion, questions]);

    const [answer, setAnswer] = React.useState<string | null>(null);
    const [marks, setMarks] = React.useState(0);
    const [finished, setFinished] = React.useState(false);
    return (

        <section className='w-full p-4 flex flex-col gap-4 justify-center items-center'>
            {
                finished ? <>
                    <h1 className='text-2xl mx-auto font-semibold'>Total Solve Question: {marks}</h1>
                    <Button onClick={reset}>Play Again!</Button>
                </> :
                    <div className='flex flex-col gap-4 w-full max-w-2xl'>
                        <h1 className={`font-semibold ${questions[currentQuestion].difficulty === 'hard' ? 'text-red-500' : (questions[currentQuestion].difficulty === 'medium' ? 'text-green-500' : 'text-slate-900 dark:text-slate-50')}`}>Difficulty: {questions[currentQuestion].difficulty}</h1><h2 className='font-semibold' dangerouslySetInnerHTML={{ __html: questions[currentQuestion].question }}></h2><RadioGroup value={answer} onValueChange={setAnswer}>
                            <div className="flex items-center gap-3">
                                <RadioGroupItem value={shuffledAnswers[0]} id="r1" />
                                <Label htmlFor="r1" dangerouslySetInnerHTML={{ __html: shuffledAnswers[0] }}></Label>
                            </div>
                            <div className="flex items-center gap-3">
                                <RadioGroupItem value={shuffledAnswers[1]} id="r2" />
                                <Label htmlFor="r2" dangerouslySetInnerHTML={{ __html: shuffledAnswers[1] }}></Label>
                            </div>

                            <div className="flex items-center gap-3">
                                <RadioGroupItem value={shuffledAnswers[2]} id="r3" />
                                <Label htmlFor="r3" dangerouslySetInnerHTML={{ __html: shuffledAnswers[2] }}></Label>
                            </div>
                            <div className="flex items-center gap-3">
                                <RadioGroupItem value={shuffledAnswers[3]} id="r4" />
                                <Label htmlFor="r4" dangerouslySetInnerHTML={{ __html: shuffledAnswers[3] }}></Label>
                            </div>
                        </RadioGroup><Button

                            onClick={() => {
                                if (currentQuestion < questions.length - 1) {
                                    if (answer === questions[currentQuestion].correct_answer) {
                                        toast("Correct, Answer.")
                                        setMarks(marks + 1)
                                    } else {
                                        toast(`Wrong! The correct answer is: ${questions[currentQuestion].correct_answer}`)
                                    }
                                    setCurrentQuestion(currentQuestion + 1)
                                } else {
                                    setFinished(true)
                                }
                            }}
                        >
                            Next Question
                        </Button>
                    </div>

            }

        </section>
    )
}

export default Question