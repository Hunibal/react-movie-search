import React from "react"

export default function Footer( { currentYear } ) {
    return (
        <footer className="footer">
            <p><small>Built with &hearts; using <a href="https://react.dev/" title="React - The library for web and native user interfaces" alt="Link to the React homepage" >React</a> - ©{currentYear} by <a href="https://github.com/Hunibal" title="Julian von Tiedemann - Web Developer" alt="Github Profile of Julian von Tiedemann">Julian von Tiedemann</a></small></p>
        </footer>
    )
}