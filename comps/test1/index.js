import React from 'react'
import hoc from 'comps/test1/hoc'
import style from 'comps/test1/style'

const v1=
({children:{show,greeting},change,...rest})=>
show&&
<div>
  {greeting}
  <button onClick={change}>change</button>
</div>

export const V1=hoc(v1)
