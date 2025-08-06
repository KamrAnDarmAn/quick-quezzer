import QuestionWrapper from './components/QuestionWrapper'
import Navbar from './components/Navbar'
import { Toaster } from "@/components/ui/sonner"

const App = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <QuestionWrapper />
      <Toaster />
    </main>
  )
}

export default App