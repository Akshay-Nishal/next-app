// import React from 'react'

import Link from "next/link"

function AboutUsPage() {
  return (
    <>
      <div>About Us Page</div>
      <ul>
        <li><Link href="aboutus/1">Yash</Link></li>
        <li><Link href="aboutus/2">Vaibhav</Link></li>
        <li><Link href="aboutus/3">Suresh</Link></li>
      </ul>
    </>
  )
}

export default AboutUsPage
