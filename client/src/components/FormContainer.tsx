import React from "react"

const FormContainer = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="flex flex-col max-w-lg justify-center items-center gap-4 w-full">
        {children}
    </div>
  )
}

export default FormContainer