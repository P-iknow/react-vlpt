import React from 'react'

const Total = ({items}) => {

  const TotalPrice = items.reduce((prev,curr) => {
    return prev + (curr.count * curr.price)
  }, 0)

  return (
    <div>
      총계: {`${String(TotalPrice)}`}
    </div>
  )
}

export default Total
