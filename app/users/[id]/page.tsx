import React from 'react'

interface Props{
    params: { id: number}
}

const useDetailPage = ({params: {id}}: Props) => {
  return (
    <div>useDetailPage {id}</div>
  )
}

export default useDetailPage