import React from 'react';
import ISTE from "../statics/iste.svg"

export default function Icons() {
  return(
    <ul style={{display:'flex', justifyContent:'center'}}>
      <li style={{listStyle:'none', flex:'none', width:"80px", margin:'0% 0% 2% 2%'}}><a href="https://www.istenith.com/" target="_blank">< img src={ISTE} alt="ISTE Logo"/></a></li>
    </ul>
  )
}