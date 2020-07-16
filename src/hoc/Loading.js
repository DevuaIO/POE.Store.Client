import React from "react"

const Loading = (props) => {
  if (typeof props.state === "boolean" && props.state)
    return props.render ? props.render : <span>Loading...</span>
  return props.children
}

export default Loading
