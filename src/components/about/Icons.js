import React from 'react';
import ISTE from "../statics/iste.svg"
import athena from "../statics/athena.png"

export default function Icons() {
  return (
    <ul style={{ display: 'flex', justifyContent: 'center', marginBottom:'20px'}}>
      <li style={{ listStyle: 'none', display: 'flex'}}>
        <a href="https://www.athenaconsulting.io/" target="_blank" rel="noreferrer">
          <img src={athena} alt="Athena Logo" width={'200px'} style={{marginTop:'13px',marginRight:'20px'}}/>
        </a>
        <a href="https://www.istenith.com/" target="_blank" rel="noreferrer">
          <img src={ISTE} alt="ISTE Logo" />
        </a>
      </li>
    </ul>
  )
}