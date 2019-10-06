import React from "react"

import { Homepage } from "@/components/pages/home"
import SEO from "@/components/seo"
import './style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk, faDownload } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faMailBulk, faDownload);

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Homepage  />
  </>
)

export default IndexPage
