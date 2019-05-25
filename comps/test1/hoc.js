import hoc from 'hocs/hoc'
import React from 'react'

const props=(state,setState)=>
{
  const change=()=>setState
  (
    {
      ...state,
      greeting:<span>bye</span>
    }
  )
  const el=
  {
    change
  }
  return el
}

const state=
{
  show:true,
  greeting:<span>hi</span>
}

export default hoc(state)(props)
