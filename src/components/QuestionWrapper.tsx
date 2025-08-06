
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "./ui/button"
import { useState } from "react"
import Question from "./Question"

export function QuestionCategorySelector({ goToNext }: { goToNext: (value: string | null) => void }) {
    const [currentFruit, setCurrentFruit] = useState<string | null>(null)
    return (
        <section className="flex flex-col">
            <Select defaultValue='Any Category' onValueChange={setCurrentFruit} value={currentFruit} >
                <h1 className="font-semibold mb-2">Select Category</h1>
                <SelectTrigger className="w-[300px]">
                    <SelectValue placeholder="Select a Category" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Category</SelectLabel>
                        <SelectItem value="0">Any Category</SelectItem>
                        <SelectItem value="9">General Knowledge</SelectItem>
                        <SelectItem value="10">Entertainment: Books</SelectItem>
                        <SelectItem value="11">Entertainment: Film</SelectItem>
                        <SelectItem value="12">Entertainment: Music</SelectItem>
                        <SelectItem value="13">Entertainment: Musicals & Theatres</SelectItem>
                        <SelectItem value="14">Entertainment: Television</SelectItem>
                        <SelectItem value="15">Entertainment: Video Games</SelectItem>
                        <SelectItem value="16">Entertainment: Board Games</SelectItem>
                        <SelectItem value="17">Science & Nature</SelectItem>
                        <SelectItem value="18">Science: Computer</SelectItem>
                        <SelectItem value="19">Science: Mathematics</SelectItem>
                        <SelectItem value="20">Mythology</SelectItem>
                        <SelectItem value="21">Sport</SelectItem>
                        <SelectItem value="22">Geography</SelectItem>
                        <SelectItem value="23">History</SelectItem>
                        <SelectItem value="24">Politics</SelectItem>
                        <SelectItem value="25">Art</SelectItem>
                        <SelectItem value="26">Celebrities</SelectItem>
                        <SelectItem value="27">Animals</SelectItem>
                        <SelectItem value="28">Vehicles</SelectItem>
                        <SelectItem value="29">Entertainment: Comics</SelectItem>
                        <SelectItem value="30">Science: Gadgets</SelectItem>
                        <SelectItem value="31">Entertainment: Japanese Anim & Manga </SelectItem>
                        <SelectItem value="32">Entertainment: Cartoon & Animations</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select >
            <Button className="mt-4" onClick={() => goToNext(currentFruit)}>
                Next
            </Button>
        </section>
    )
}

const QuestionWrapper = () => {
    const [questions, setQuestions] = useState([])
    const [currentComponent, setCurrentComponent] = useState(0)

    const goToNext = (value) => {
        let url: string;
        if (value === '0') {
            url = `https://opentdb.com/api.php?amount=5&type=multiple`
        } else
            url = `https://opentdb.com/api.php?amount=5&category=${value}&type=multiple`
        const response = fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setQuestions(data.results)
                setCurrentComponent(1)
            })
            .catch((error) => {
                console.error("Error fetching questions:", error)
            })

    }

    const reset = () => {
        setCurrentComponent(0)
        setQuestions([])
    }
    return (
        <div className="flex flex-col items-center justify-center h-full w-[90%]">
            {
                currentComponent === 0 ? (
                    <QuestionCategorySelector goToNext={goToNext} />
                ) : <Question questions={questions} reset={reset} />
            }
        </div>
    )
}

export default QuestionWrapper