import React from "react"
import { Link, graphql, navigate } from "gatsby"
import Layout from "../../../components/layout"
import SEO from '../../../components/seo'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Breadcrumbs  from "../../../components/breadcrumbs"

const OpenHealthPosts = ({data,location}) => {

  const noStagingPosts = data?data.allStrapiPost.edges.filter(post=>post.node.staging !=true):" ";
  const postsCategories =[
    {
      name:"Open Banking / Open Finance",
      url:"/open-banking-posts"
    },
    {
      name:"Open Government",
      url:"/open-government-posts"
    },
    {
      name:"Open Health",
      url:"/open-health-posts"
    }

  ]
  const handleCategory = (selectedCategory)=>{
    const found = postsCategories.find(cat => cat.name === selectedCategory.name);
    const goTo = found ? navigate(`${found.url}`) : null
    return goTo
  }

  // const authorsData = data.allStrapiPost.edges[0].node.user;

  return(
  <Layout>
    <SEO title="Blog"/>
    <section className="container mx-auto all-blog-content  px-5">
      <Breadcrumbs location={location}/>
      <h3 className="text-3xl font-black text-center">
      Open Health 
      </h3>
      <h3 className="text-1xl font-black text-center mb-5">Posts and Articles</h3>

      <div className="container mx-auto all-blog-content my-20 px-5">
        {/* TOP LATESTS 3 POSTS */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {data?noStagingPosts.map((post, index) => {
            
            while (index < 3 && post.node.staging ===false) {
              return (
                <>
                  <div key={post.node.title} className="px-2 rounded-xl bg-gray-50 shadow py-5 top-blog-cards flex flex-col justify-between">
                    <div className="top-blog-card-img-container flex justify-center items-center  md:h-3/5">
                      <div className="">
                      {post.node.featured_image && post.node.featured_image ? (
                        <Link to={`/${post.node.slug}`} >
                          {" "}
                          <GatsbyImage
                              image={getImage(post.node.featured_image)}
                              className=""
                              alt={post.node.title}
                         
                            />
                        </Link>
                      ) : null}
                      </div>
                    </div>
                    <div className="md:h-2/5">
                    <Link to={`/${post.node.slug}`}><h5 className="text-lg font-bold leading-5 mt-5">
                      {post.node.title}
                    </h5></Link>
                    <span className="text-gray-600 mr-3 small-text mt-1">
                      Published{" "}
                      {new Date(post.node.publishing_date).toDateString()}
                    </span>{" "}
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
                            {x.username}{" "}
                            {index < post.node.user.length - 1 ? " & " : ""}
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
                              onClick={()=> handleCategory(cat)}
                            >
                              {cat.name}
                            </button>
                          </div>
                        )
                      })}
                    </div>
                    <p className="text-xs leading-5 my-1 small-text">
                      {post.node.excerpt ? post.node.excerpt.substr(0,120)+" ..." : ""}
                    </p>
                    </div>
                  </div>
                </>
              )
            }
          }):null}
        </div>

        <div className="blog-cards-main-page-container">
        {data?noStagingPosts.map((post, index) => {

while (index > 2 && post.node.staging ===false) {
    return (
<div className="my-4">

        <div className="horizontal-blog-card rounded bg-gray-50 shadow-md">
      
          <div className="blog-card-image">
          <GatsbyImage
                              image={getImage(post.node.featured_image)}
                              className=""
                              alt={post.node.title}
                            />
          </div>
          <div className="blog-card-content">
          <h5 className="text-lg font-bold leading-5 mt-5">
                    <Link to={`/${post.node.slug}`}> {post.node.title}</Link>
          </h5>
          <span className="text-gray-600 mr-3 small-text mt-1">
                    Published{" "}
                    {new Date(post.node.publishing_date).toDateString()}
          </span>{" "}
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
                          {x.username}{" "}
                          {index < post.node.user.length - 1 ? " & " : ""}
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
                            onClick={()=> handleCategory(cat)}
                          >
                            {cat.name}
                          </button>
                        </div>
                      )
                    })}
                  </div>
                  <p className="text-xs leading-5 my-1 small-text pr-5">
                    {post.node.excerpt ? post.node.excerpt : ""}
                  </p>
          </div>
     
        </div>
        
</div>
)}
}):null}
        </div>

      </div>
     
      
      {/* end of all posts */}
    </section>
  </Layout>
)}

export default OpenHealthPosts

export const blogQuery = graphql`
query OpenHealthBlogPosts {
    allStrapiPost(
    sort: {fields: publishing_date, order: DESC}
    filter: {categories: {elemMatch: {name: {eq: "Open Health"}}}}
  ) {
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
            gatsbyImageData(width: 320, blurredOptions: {width: 100}, placeholder: BLURRED)
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
        staging
      }
    }
  }
}
`




