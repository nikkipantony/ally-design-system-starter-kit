/*
 * Main Layout Template
 */

import React from "react"
import "../09_styles/styles.scss"
import Header from "../03_organisms/header"
import Footer from "../03_organisms/footer"
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav"

const MainLayout = ({ children }) => (
    <>
        <SkipNavLink />
        <Header />
        <SkipNavContent />
        <main className="main-site-layout">{children}</main>
        <Footer />
    </>
)

export default MainLayout