import React from "react"

import { Homepage } from "@/components/pages/home"
import SEO from "@/components/seo"
import { NavbarLayout } from "@/components/layouts"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <NavbarLayout title="Highly Skilled React Front-End Developer">
      
      <Homepage  />
    </NavbarLayout>
  </>
)

export default IndexPage
