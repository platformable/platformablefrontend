import React from "react"
import { Link, graphql, navigate } from "gatsby"
import Layout from "../../../components/layout"
import GridDisplay from "../../../components/shared-components/GridDisplay"
import HowWeWork from "../../../components/lp-components/open-banking/analyst-as-service/howWeWork"
import FourHorizontalCircles from "../../../components/lp-components/open-banking/analyst-as-service/FourHorizontalCircles"
import AnalistAsServiceTitle from "../../../assets/ob-analyst-as-service/heroImg.png"
import HowToHire from "../../../components/lp-components/open-banking/analyst-as-service/HowToHire"
import Form from "../../../components/shared-components/Form"
import Breadcrumbs from "../../../components/breadcrumbs"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BlogCardComponent from "../../../components/BlogCardComponent"

export default function index({ data, location }) {
  const postsCategories = [
    {
      name: "Open Banking / Open Finance",
      url: "/open-banking-posts",
    },
    {
      name: "Open Government",
      url: "/open-government-posts",
    },
    {
      name: "Open Health",
      url: "/open-health-posts",
    },
  ]
  const handleCategory = selectedCategory => {
    const found = postsCategories.find(
      cat => cat.name === selectedCategory.name
    )
    const goTo = found ? navigate(`${found.url}`) : null
    return goTo
  }

  // const authorsData = data?data.allStrapiPost.edges[0].node.user :null
  return (
    <Layout>
      <Breadcrumbs location={location} />

      <GridDisplay
        gridDisplayClass="hero-section flex flex-col sm:flex-row flex-wrap my-6 container mx-auto py-6 sm:mx-auto md:px-0 px-5 justify-between items-center"
        gridContentClass="px-0 md:px-3 lg:px-0 xl:px-3"
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
      <FourHorizontalCircles />

      <HowWeWork />
      {/* TOP LATESTS 3 POSTS */}
      {/* <h3 className="text-center font-black mt-5">Our Latest Work </h3>
    
      <section className="container mx-auto all-blog-content my-20 md:px-0 px-5">
        <div className="container mx-auto all-blog-content px-0 md:px-3 lg:px-0 xl:px-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data
              ? data.allStrapiPost.edges.map((post, index) => {
                  while (index < 3 && post.node.staging === false) {
                    return (
                      <BlogCardComponent
                        index={index}
                        staging={post.node.staging}
                        img={post.node.featured_image}
                        categories={post.node.categories}
                        publishing_date={post.node.publishing_date}
                        id={post.node.id}
                        slug={post.node.slug}
                        user={post.node.user}
                        content={post.node.content}
                        title={post.node.title}
                      />
                    )
                  }
                })
              : null}
          </div>
        </div>
      </section> */}

      <HowToHire />

      {/*       <Form
      formClass="text-center my-5 mx-auto overflow-hidden py-6"
      formID="lp-training-form"
      titleClass=""
      title="Sign up now to gain new insights into your open banking / open finance strategy"
      iframeId="submitMailerlite"
      iframeSrc={"https://landing.mailerlite.com/webforms/landing/b9q0r6"}
    /> */}
    </Layout>
  )
}

export const AnalystPagePosts = graphql`
  query AnalystPagePosts {
    allStrapiPost(
      limit: 3
      filter: {
        categories: {
          elemMatch: { name: { eq: "Open Banking / Open Finance" } }
        }
        tags: { elemMatch: { name: { eq: "analysis" } } }
      }
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
              gatsbyImageData(
                blurredOptions: { width: 100 }
                placeholder: BLURRED
              )
            }
          }
          publishing_date
          title
          staging
          updated_at
          content
          user {
            id
            username
          }
        }
      }
    }
  }
`
