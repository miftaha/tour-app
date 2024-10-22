/* eslint-disable react/prop-types */
import { useState } from 'react'

const Tour = ({ tour, onRemove }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="rounded-2xl bg-[rgba(255,_255,_255,_1)] w-full shadow-2xl">
      <div>
        <div>
          <img
            src={tour.image}
            alt={tour.name}
            className="rounded-t-2xl w-full h-[320px]  object-cover"
          />
        </div>
        <div className="text-center py-1 px-2">
          <h2 className="text-[rgba(15,_23,_42,_1)] font-medium text-sm  tracking-wide m-2">
            {tour.name}
          </h2>
          <div>
            <p className="text-start">
              {isExpanded ? tour.info : tour.info.substring(0, 200) + '...'}
            </p>
            <button
              className="text-[rgba(16,_185,_129,_1)] font-bold text-xs bg-transparent capitalize overflow-hidden"
              onClick={toggleExpand}
            >
              {isExpanded ? 'Show Less' : 'Read More'}
            </button>
          </div>
          <button
            className="block bg-white border w-full border-green-600 rounded-sm shadow-sm capitalize text-[rgba(16,_185,_129,_1)] my-6"
            onClick={() => onRemove(tour.id)}
          >
            not interested
          </button>
        </div>
      </div>
    </div>
  )
}

export default Tour
