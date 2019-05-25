import React,{useState} from 'react'

export default initialState=>props=>C=>({children,...rest})=>
{
  const [state,setState]=useState(initialState)
  return <C {...rest} {...props(state,setState)}>{{...state,...children}}</C>
}
