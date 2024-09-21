import React, { useEffect, useState } from 'react'

function Timer() {
const[time, setTime] = useState(60);

useEffect(()=> {
    if(time > 0) {
        const timer = setTimeout(()=> setTime(time-1), 1000);
        return ()=> clearTimeout(timer)
    }
}, [time])

  return (
    <div>
        <h2>Time left: {time} second</h2>
    </div>
  )
}

export default Timer