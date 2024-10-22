/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import Tours from './components/Tours'
import Loading from './components/Loading'
function App() {
  const [toursData, setToursData] = useState([])
  const [loading, setLoading] = useState(true)

  const handleRemoveTour = (id) => {
    setToursData(toursData.filter((tours) => tours.id !== id))
  }

  const fetchTourData = async () => {
    setLoading(true)
    try {
      const response = await fetch(
        'https://www.course-api.com/react-tours-project'
      )
      const data = await response.json()
      setToursData(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTourData()
  }, [])

  if (loading) return <Loading />

  if (toursData.length === 0) {
    return (
      <div className="text-center py-8">
        <h2 className=" font-medium text-2xl ">No tours</h2>
        <button
          className="bg-green-600 py-2 px-4 text-white rounded-md"
          onClick={() => fetchTourData()}
        >
          Refetch
        </button>
      </div>
    )
  }

  return (
    <main className="bg-[rgba(248,_250,_252,_1)] container mx-auto">
      <h1 className="text-[rgba(15,_23,_42,_1)] text-4xl text-center capitalize p-10">
        our tours
      </h1>
      <Tours tours={toursData} onRemove={handleRemoveTour} />
    </main>
  )
}

export default App
