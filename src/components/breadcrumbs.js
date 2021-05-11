import React, { useState, useEffect } from "react"
import {Link } from 'gatsby';

export default function Breadcrumbs({ location }) {
  const [urls, setUrls] = useState([])

  const getLocations = location => {
    const url = location.href
    const getUrls = url.split(/[/]/)
    const pathnames = getUrls.splice(3, getUrls.length - 1)
    setUrls(pathnames)
  }

  useEffect(() => {
    getLocations(location)
  }, [])
  return (
    <section className="container mx-auto p-5">
      <ul className="flex">
        <li className="small-text">
          <Link to={`/sectors`}>Sectors</Link>
        </li>
        {urls &&
          urls.map((url, index) => {
            return (
              <>
              
                <li className={`small-text ${index===urls.length-1 ? 'font-black' : null}`}><Link to={index===urls.length-1 ? null : `/${url}` }>{`/${url}`}</Link></li>
              </>
            )
          })}
      </ul>
    </section>
  )
}
