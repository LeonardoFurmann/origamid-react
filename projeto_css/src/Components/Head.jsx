import React, { useEffect } from 'react'

const Head = (props) => {
    useEffect(() => {
        document.title = props.title
        document.querySelector('meta[name=description]').setAttribute('content', props.desc)
    }, [props])


  return (
    <></>
  )
}

export default Head