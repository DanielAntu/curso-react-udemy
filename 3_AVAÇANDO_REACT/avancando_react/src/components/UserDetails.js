import React from 'react'

const UserDetails = ({name, age, job}) => {
  return (
    <div>
        <h3>{name}</h3>
        <h4>{age}</h4>
        <h5>{job}</h5>

        {age >= 18 ? (
            <div>
                <p>Você pode tirar a carteira</p>
            </div>
        ) : (
            <div>
                <p>Você é menor de idade</p>
            </div>
        )}  
    </div>
  )
}

export default UserDetails