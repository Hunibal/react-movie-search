import React from "react"
import Logo from "./Logo"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <>
            <Link to="/">
                <h3 className="slogan">Find your new <br /> favourite movie</h3>
                <h1 className="title">Movie Search</h1>
            </Link>
        </>
    )
}