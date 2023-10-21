import React from 'react'
import { Center, Heading } from '@chakra-ui/react'

const DataAnalysis = () => {
  const docURL = "https://docs.google.com/document/d/1EeJoypIFivEzYdWkp46sb09v6z1JMISGclojIERayPc/edit"
  return (
    <div>
        <iframe src={docURL} width="100%" height="800px">
        </iframe>
        
        
    </div>
  )
}

export default DataAnalysis