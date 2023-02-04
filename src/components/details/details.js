import React from 'react'
const LightBox = ({children}) => {
  return<>
        <div style={{backgroundColor:"white", width:"500px"}}>
            {children}
        </div>
    </>
  
}

export default LightBox