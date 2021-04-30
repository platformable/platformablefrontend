import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo";


export default function blogs({data, location}) {
const authorsData = data.allStrapiPost.edges[0].node.user;
  return (
    <Layout>
        <SEO title="Blog"/>
        <section className="container mx-auto ">
      <div className="my-10 px-5">

      </div>
      </section>
      <div className="container mx-auto all-blog-content my-20 px-5">
   
      <div className="blog-cards-main-page-container">
{data.allStrapiPost.edges.map((post,index)=>{
  return (
 
                  <div className="blog-card-main-page flex flex-wrap  md:flex-nowrap bg-gray-50 shadow-md" alt={post.node.title}
                  key={post.node.featured_image.childImageSharp.gatsbyImageData.images.fallback.src}>
                  
                  <div className="blog-card--left-main-page">
                  {post.node.featured_image && post.node.featured_image ?
                   <Link to={`/${post.node.slug}`}> <img src={post.node.featured_image.childImageSharp.gatsbyImageData.images.fallback.src}/></Link>
                    : null}
                    </div>
                   
                    <div className="blog-card-right-main-page ">
                    <h5 className="text-lg font-bold leading-5 mt-5">
                <Link to={`/${post.node.slug}`}> {post.node.title}</Link>
              </h5>
              <span className="text-gray-600 mr-3 small-text mt-1">
            Published {new Date(post.node.publishing_date).toDateString()}
          </span>
                   {' '}

                   <div className="text-gray-600 text-sm font-medium flex mb-0 mt-0">
                <small className="small-text mr-1">{`Writen by `} </small>
                {post.node.user.length === 1 ? (
                  <Link
                    className="hover:text-black transition duration-300 ease-in-out small-text mr-1"
                    to={`/author/${post.node.user[0].id}`}
                  >{` ${post.node.user[0].username}`}</Link>
                ) : post.node.user.length > 1 ? (
                  post.node.user.map((x, index) => (
                    <Link
                      to={`/author/${post.node.user[index].id}`}
                      className="hover:text-black transition duration-300 ease-in-out small-text mr-1"
                    >
                      {x.username} {index < post.node.user.length - 1 ? " & " : ""}
                    </Link>
                  ))
                ) : null}
              </div>

              <div>
                {post.node.categories.map(cat => {
                  return (
                    <div key={post.node.id} className="">
                      <button
                        to={cat.name}
                        className={`bg-${cat.name} py-0 px-2 rounded text-white small-text text-xs`}
                      >
                        {cat.name}
                      </button>
                    </div>
                  )
                })}
              </div>
              <p className="text-xs leading-5 my-1 small-text">
             {post.node.excerpt ? post.node.excerpt : ""}
              </p>
        


                  </div>

                  </div>


            
  )
})}
</div>
      {/* <h3 className="text-3xl font-black text-center">
        Open Ecosytems
      </h3>
      <h3 className="text-1xl font-black text-center mb-10">Posts and Articles</h3> */}
          {/* blog CARD START HERE */}
        
      </div>
    </Layout>
  )
}


export const blogQuery = graphql`
query AllBlogPosts {
  allStrapiPost(sort: {fields: publishing_date, order: DESC}) {
    edges {
      node {
        categories {
          name
        }
        id
        slug
        is_featured
        tags {
          name
        }
        featured_image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        title
        updated_at
        user {
          id
          username
        }
        publishing_date
        published_at
        excerpt
      }
    }
  }
}
`

