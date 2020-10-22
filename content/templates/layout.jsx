import React from "react"
import { Link } from "gatsby"
import '../style.css';

const Layout = props => {
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <div className="header-content">
        <h1>
          <Link
            style={{
              boxShadow: "none",
              textDecoration: "none",
              color: "inherit",
            }}
            to="/"
          >
            Home
          </Link>
        </h1>
      </div>
    )
  } else {
    header = (
      <div className="container header-content">
        <div className="blog-title">
          <Link
            style={{
              boxShadow: "none",
              textDecoration: "none",
              color: "inherit",
            }}
            to="/"
          >
            Home
          </Link>
        </div>
        <h3 className="description">a blog written by Brandon Mowat</h3>
      </div>
    )
  }
  return (
    <div>
      <header>{header}</header>
      <main className="container">{children}</main>
      <footer className="container">made from scratch</footer>
    </div>
  )
}

export default Layout