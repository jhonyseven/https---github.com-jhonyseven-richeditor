import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
 
const ArticleTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiArticulo.titulo}</h1>
    <p>{data.strapiArticulo.descripcion}</p>
  </Layout>
)
 
export default ArticleTemplate
 
export const query = graphql`
  query ArticleTemplate($id: Int!) {
    strapiArticulo(strapiId: { eq: $id }) {
      titulo
      descripcion
    }
  }
`