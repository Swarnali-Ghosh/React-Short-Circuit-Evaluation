import React,{useState} from 'react'
import ShowMe from './ShowMe'

const SCEvaluation = () => {
    const [show] = useState(true)
  return (
    <>
        <h1>Short Circuit Evaluation</h1>
        {show || <ShowMe/>}
        {show && <ShowMe/>}
        {show ? <ShowMe /> : null}
    </>
  )
}

export default SCEvaluation

{/* 
The && logical operator means that both conditions on either side of it have to be 
met in order for it to be true. Right now, as the code stands, show is false 
because that's what it's initially set at by useState. So nothing, or null, would be 
rendered. If it were set to true, however, both conditions would be successfully met 
and then render <ShowMe />.
*/}
