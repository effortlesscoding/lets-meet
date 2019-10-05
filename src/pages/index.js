import React from "react"

import { Homepage } from "@/components/pages/home"
import SEO from "@/components/seo"
import './style.css';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Homepage  />
  </>
)

export default IndexPage
