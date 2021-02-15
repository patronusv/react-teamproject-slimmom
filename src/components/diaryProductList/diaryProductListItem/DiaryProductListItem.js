import React from 'react'

const DiaryProductListItem = () => {
  return (
    <ul>
      {array.map(() => {
        return (
          <li >
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <button>Delete</button>
          </li>
        )
      })}
    </ul>
  )
}

export default DiaryProductListItem
