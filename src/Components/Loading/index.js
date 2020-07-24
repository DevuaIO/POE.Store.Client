import React from "react"

export default function Loading({ state, render, children }) {
  if (typeof state === "boolean" && state)
    return render ? render : <span>Loading...</span>
  return children
}
