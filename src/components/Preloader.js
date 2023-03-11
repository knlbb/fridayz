import React, { useEffect, useState } from 'react'
import Login from './Login';
import bgBlurry from "../assets/images/bgBlurry.jpg"



function Preloader() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(undefined);
    const [completed, setCompleted] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                setLoading(true);
                setTimeout(() => {
                    setCompleted(true)
                }, 1000)
            });
        }, 1000)
    }, [])
    
  return (
    <div>
        {
            !completed? (
                !loading ? (
                    <div className='text-black'>
                            Loading...
                    </div>

                ):(
                    <div>
                        Fuck you bitch.
                    </div>
                )
            ) : (
                <Login/>
            )
        }
    </div>
  )
}

export default Preloader