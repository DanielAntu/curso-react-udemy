import React from 'react'

const Fragment = ({propFragment}) => {
  return (
    <div>
        <>
        <h2>Primeiro Titulo</h2>
        <h3>Segundo Titulo</h3>
        <h4>{propFragment}</h4>
        </>
    </div>
  )
}

export default Fragment