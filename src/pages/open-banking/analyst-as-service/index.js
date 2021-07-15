import React from 'react'
import {Link,graphql, navigate} from 'gatsby'
import Layout from '../../../components/layout'
import GridDisplay from '../../../components/shared-components/GridDisplay'
import HowWeWork from '../../../components/lp-components/open-banking/analyst-as-service/howWeWork'
import FourHorizontalCircles from '../../../components/lp-components/open-banking/analyst-as-service/FourHorizontalCircles'
import AnalistAsServiceTitle from '../../../assets/ob-analyst-as-service/heroImg.png'
import HowToHire from '../../../components/lp-components/open-banking/analyst-as-service/HowToHire'
import Form from '../../../components/shared-components/Form'
import Breadcrumbs from '../../../components/breadcrumbs'
import { GatsbyImage, getImage } from "gatsby-plugin-image"



export default function index({data,location}) {

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

    // const authorsData = data?data.allStrapiPost.edges[0].node.user :null
    return (
       <Layout>
        <Breadcrumbs location={location}/>
         {/* <section className="mainHero py-20">
           <div className="container mx-auto flex">
          <div className="heroLeft">
            <h3 className="font-black text-3xl">Analyst as a service</h3>
          </div>
          <div className="heroRight">
            <img src={AnalistAsServiceTitle} />
          </div>
          </div>
         </section> */}

        <GridDisplay
      gridDisplayClass="hero-section flex flex-col sm:flex-row flex-wrap my-6 container mx-auto py-6 px-5 justify-between items-center"
      gridContentClass=""
      title="Open Banking / Open Finance"
      subtitle="Analyst as a service"
      secondParagraph=""
      secondParagraphClass=""
      paragraphOne="Subscribe to a set range of hours and answer key questions to support your growth"
      paragraphTwo=""
      paragraphThree=""
      imgContentClass=""
      imgClass=""
      backImgSrc={AnalistAsServiceTitle}
      alt="Hero"
    ></GridDisplay>

   <FourHorizontalCircles/>

   <HowWeWork/>



   {/* <PostsCards/> */}
   <h3 className="text-center font-black mt-5">Our Latest Work </h3>
    {/* POSTS */}
    <section className="container mx-auto all-blog-content my-20 px-5">
          
    {/* TOP LATESTS 3 POSTS */}
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          {data?data.allStrapiPost.edges.map((post, index) => {
            while (index < 3 && post.node.staging ===false) {
              return (
                <>
                  <div className="px-2 rounded-xl bg-gray-50 shadow py-2 top-blog-cards flex flex-col justify-between">
                    <div className="top-blog-card-img-container flex justify-center max-h-56">
                      {post.node.featured_image && post.node.featured_image ? (
                        <Link to={`/${post.node.slug}`}>
                          {" "}
                          <GatsbyImage image={getImage(post.node.featured_image)} className="block object-contain h-48 w-full" alt={post.node.title}/>
                        </Link>
                      ) : null}
                    </div>
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
                      {post.node.excerpt ? post.node.excerpt : ""}
                    </p>
                  </div>
                </>
              )
            }
          }):null}
        </div>


        </section>



        <HowToHire/>

        <Form
      formClass="text-center my-5 mx-auto overflow-hidden py-6"
      formID="lp-training-form"
      titleClass=""
      title="Sign up now to gain new insights into your open banking / open finance strategy"
      iframeId="submitMailerlite"
      iframeSrc={"https://landing.mailerlite.com/webforms/landing/b9q0r6"}
    />
     
    
       </Layout>
    )
}



export const AnalystPagePosts = graphql`
query AnalystPagePosts {
  allStrapiPost(limit:3, filter: {categories: {elemMatch: {name: {eq: "Open Banking / Open Finance"}}}, tags: {elemMatch: {name: {eq: "analysis"}}}}) {
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
            gatsbyImageData(blurredOptions: {width: 100}, placeholder: BLURRED)
          }
        }
        publishing_date
        title
        staging
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