/* eslint-disable react/prop-types */
import Tour from './Tour'

const Tours = ({ tours, onRemove }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
      {tours.map((tour) => (
        <Tour key={tour.id} tour={tour} onRemove={onRemove} />
      ))}
    </div>
  )
}

export default Tours
