import React from "react"

import { Homepage } from "@/components/pages/home"
import SEO from "@/components/seo"
import { NavbarLayout } from "@/components/layouts"

const IndexPage = () => (
  <NavbarLayout>
    <SEO title="Home" />
    <Homepage />
  </NavbarLayout>
)

export default IndexPage
