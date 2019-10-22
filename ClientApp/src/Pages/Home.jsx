import React, { useState, useEffect } from 'react'
// import axios from 'axios'

export default function Home() {
  const [bookList, setBookList] = useState([])

  useEffect(() => {
    //go get the book list
  })

  return (
    <main>
      <ul>
        {bookList.map(book => {
          return (
            <li>
              {book.name}
              <button>Add data</button>
            </li>
          )
        })}
        <li>Want to see</li>
        <li>If this shows</li>
        <li>Up</li>
        <li>Need to make a map</li>
      </ul>
    </main>
  )
}
