/*
 * Main Layout Template Component
 *
 */

import React from "react"
import SkipLink from "../../01_atoms/SkipLink/SkipLink"
import { SkipNavContent } from "@reach/skip-nav"
import Header from "../../03_organisms/Header/Header"
import Footer from "../../03_organisms/Footer/Footer"

const MainLayout = ({ children }) => (
    <>
        <SkipLink />
        <Header />
        <main className="main-layout">
            <SkipNavContent tabindex="-1">{children}</SkipNavContent>
        </main>
        <Footer />
    </>
)

export default MainLayout