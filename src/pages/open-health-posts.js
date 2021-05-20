import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from '../components/seo'
import BlogCards from "../components/BlogCards"


const OpenHealthPosts = ({data}) => {

  // const authorsData = data.allStrapiPost.edges[0].node.user;

  return(
  <Layout>
    <SEO title="Blog"/>
    <section className="container mx-auto all-blog-content my-20 px-5">
      <h3 className="text-3xl font-black text-center">
        Open Health 
      </h3>
      <h3 className="text-1xl font-black text-center mb-5">Posts and Articles</h3>
     
     {data.allStrapiPost.edges.length===0 ? "<h3>Sorry there is no post yet</<h3>" : <BlogCards data={data}/>}
      
      {/* end of all posts */}
    </section>
  </Layout>
)}

export default OpenHealthPosts

export const blogQuery = graphql`
query OpenHealthBlogPosts {
    allStrapiPost(filter: {categories: {elemMatch: {name: {eq: "Open Health"}}}}) {
        edges {
          node {
            categories {
              name
            }
            id
            publishing_date
            published_at
            slug
            is_featured
            tags {
              name
            }
            featured_image {
              childImageSharp {
                gatsbyImageData(blurredOptions: {width: 100}, placeholder: BLURRED)
              }
            }
            title
            updated_at
            user {
              id
              username
            }
          }
        }
      }
}
`




