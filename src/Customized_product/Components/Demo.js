import { useState } from 'react'

function Demo(props) {
  const [foods, setFoods] = useState(Array(5).fill({ id: 0, name: '' }))

  return (
    <>
      <div>
        Foods:
        {foods.map((v, i) => (
          <div key={i}>
            {v.name}
            {v.id > 0 && (
              <button
                onClick={() => {
                  const newFoods = [...foods]
                  newFoods[i] = { id: 0, name: '' }
                  setFoods(newFoods)
                }}
              >
                X
              </button>
            )}
          </div>
        ))}
      </div>

      <div>下面是按了選到上面Foods</div>
      <ul>
        {Array(20)
          .fill(1)
          .map((v, i) => {
            return (
              <li
                key={i}
                onClick={() => {
                  const food = { id: i + 1, name: i + 1 }
                  const index = foods.findIndex((v, i) => v.id === 0)

                  if (index > -1) {
                    const newFoods = [...foods]
                    newFoods[index] = food
                    setFoods(newFoods)
                  } else {
                    alert('滿了')
                  }
                }}
              >
                {i + 1}
              </li>
            )
          })}
      </ul>
    </>
  )
}

export default Demo
