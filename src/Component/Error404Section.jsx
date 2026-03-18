import React from 'react'
import Button from '../Component/Button'
import { Link, useNavigate } from "react-router-dom";


const ErrorPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='py-[140px] text-center '>
        <h1 className='text-[110px] font-medium leading-[115px] '>404 Not Found</h1>
        <p className='pt-[40px] pb-[80px]'>Your visited page not found. You may go home page.</p>
        <Button onClick={()=> navigate("/")} className="inline-block !px-4"> Back to Home Page</Button>
      </div>
    </>
  )
}

export default ErrorPage
