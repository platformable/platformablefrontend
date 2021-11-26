import React from "react"
import { Link, graphql, navigate } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import BlogCardComponent from "../components/BlogCardComponent"

/*shared-components*/
import Layout from "../components/layout"
import SEO from "../components/seo"
import GridDisplay from "../components/shared-components/GridDisplay"
import Form from "../components/shared-components/Form"
/*specific-components*/
import PositionedSection from "../components/home-components/PositionedSection"
import HowWeDoItCards from "../components/home-components/HowWeDoItCards"
import WorkWithCards from "../components/home-components/WorkWithCards"

/*assets*/

const IndexPage = ({ data }) => {
  const noStagingPosts = data
    ? data.allStrapiPost.edges.filter(post => post.node.staging != true)
    : " "

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
  const getMonthString = date => {
    return new Date(date).toLocaleString("default", {
      month: "short",
    })
  }
  const getDayString = date => {
    return new Date(date).toLocaleString("default", {
      day: "2-digit",
    })
  }

  // 225 w/m - average reading speed
  const calculateTimeToRead = article => {
    return Math.ceil(article.trim().split(/\s+/).length / 225)
  }
  return (
    <Layout>
      <SEO title="Home" />

      <section className="md:my-14 my-5 md:px-0 px-5">
        <br />
        <br />
        <div className="container mx-auto grid md:grid-cols-2 grid-cols-1">
          <div className="left flex items-center">
            <div>
              <h3 className="font-black mb-5 text-base md:text-2xl">
                We support open ecosystems that build economic opportunities,
                solve complex problems, and enable everyone to participate and
                co-create their own value
              </h3>
              <Link
                to="/about"
                className="outlinedBtn mt-3 text-sm md:text-primary font-bold border-2 my-5 mx-0 py-2 px-10 rounded-full hover:bg-secondary cursor-pointer"
              >
                Learn more about us
              </Link>
            </div>
          </div>
          <div className="right flex justify-end">
            <StaticImage
              src="../assets/home/hero_squares.png"
              alt="platformable"
              width={400}
            />
          </div>
        </div>
        <br />
        <br />
      </section>

      <section className="bg-gray-100 py-5 md:px-0 px-5">
        <br />
        <br />
        <div className="container mx-auto grid md:grid-cols-2 grid-cols-1">
          <div className="left flex items-center">
            <div>
              <p>Download our latest release</p>
              <h3 className="font-black mb-5">
                Open Banking/Open Finance Quarterly Trend Reports Q2 2021
              </h3>
              <Link
                to="/open-banking/trends"
                className="bg-secondary text-sm md:text-primary font-bold my-5 mx-0 py-2 px-10 rounded-full hover:bg-secondary cursor-pointer"
              >
                More info on our reports
              </Link>
            </div>
          </div>
          <div className="right flex justify-end">
            <StaticImage
              src="../assets/home/quarterly_trends1.png"
              alt="platformable"
              width={400}
            />
          </div>
        </div>
        <br />
        <br />
      </section>

      {/* <PostsCards/> */}
      <h3 className="text-center font-black mt-5">Latest Posts </h3>
      {/* POSTS */}
      <section className="cards-section my-6 container px-3 sm:mx-auto py-8">
        <div className="grid grid-cols-1 grid-cols-1 md:grid-cols-3 text-lg md:text-sm lg:text-sm xl:text-lg gap-5">
          {data
            ? noStagingPosts.map((post, index) => {
                while (index < 3 && post.node.staging === false) {
                  return (
                    <div className="rounded-xl pt-5 pb-10 top-blog-cards flex flex-col shadow relative">
                      <Link to={`/${post.node.slug}`}>
                        <div className="px-7 text-center justify-center mb-3 h-44 overflow-hidden">
                          <GatsbyImage
                            image={getImage(post.node.featured_image)}
                            className=""
                            alt={post.node.title}
                          />
                        </div>
                      </Link>
                      <div>
                        <div className="flex flex-col gap-3 h-auto mr-5 h-11 mb-2">
                          {post.node.categories.map((cat, index) => {
                            return (
                              <div key={index} className="flex justify-between">
                                <div className="w-1/5">
                                  <div
                                    className={`flex text-center items-center w-16 h-16 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-14 xl:h-14 bg-dark-${cat.name}
                                                    justify-center`}
                                  >
                                    <div className="flex flex-col text-white">
                                      <p className="font-bold text-xl">
                                        {getDayString(
                                          post.node.publishing_date
                                        )}
                                      </p>
                                      <p className="font-bold text-xl">
                                        {getMonthString(
                                          post.node.publishing_date
                                        )}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className={
                                    cat.name === "Open Banking / Open Finance"
                                      ? `flex items-end justify-center flex-nowrap w-full sm:-ml-11 md:ml-0`
                                      : `flex items-end justify-center flex-nowrap w-full -ml-11 md:ml-0 lg:-ml-11`
                                  }
                                >
                                  <button
                                    key={index}
                                    to={cat.name}
                                    className={`text-dark-${cat.name} capitalise self-end md:self-center lg:self-end text-center`}
                                    onClick={() => handleCategory(cat)}
                                  >
                                    {cat.name}
                                  </button>
                                </div>
                              </div>
                            )
                          })}

                          <div className="text-center ml-5">
                            <h5 class="capitalise font-bold">
                              <Link to={`/${post.node.slug}`}>
                                {" "}
                                {post.node.title}
                              </Link>
                            </h5>
                            <small className="small-text">
                              {`Writen by `}{" "}
                            </small>
                            {post.node.user.length === 1 ? (
                              <Link
                                className="hover:text-black transition duration-300 ease-in-out small-text mr-1"
                                to={`/author/${post.node.user[0].id}`}
                              >{` ${post.node.user[0].username}`}</Link>
                            ) : post.node.user.length > 1 ? (
                              post.node.user.map((x, index) => (
                                <Link
                                  key={index}
                                  to={`/author/${post.node.user[index].id}`}
                                  className="hover:text-black transition duration-300 ease-in-out small-text mr-1"
                                >
                                  {x.username}{" "}
                                  {index < post.node.user.length - 1
                                    ? " & "
                                    : ""}
                                </Link>
                              ))
                            ) : null}
                          </div>
                        </div>

                        {post.node.categories.map(cat => {
                          return (
                            <div
                              key={index}
                              className="absolute right-5 w-full bottom-5"
                            >
                              <div
                                className={`flex gap-1 items-center justify-end fill-dark-${cat.name}`}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <p
                                  className={`text-dark-${cat.name} text-sm font-bold text-red-orange-dark`}
                                >
                                  {post.node.content
                                    ? calculateTimeToRead(post.node.content)
                                    : "0"}{" "}
                                  min read
                                </p>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                }
              })
            : null}
        </div>
      </section>

      <PositionedSection />

      <HowWeDoItCards />

      <WorkWithCards />

      <section className="publish_analysis">
        <div className="container mx-auto grid md:grid-cols-2 grid-cols-1">
          <div className="left flex items-center">
            <div>
              <h3 className="font-black">We publish analysis and insights</h3>
              <p>
                We share data on the growth of open ecosystems, and track how
                value is being generated and distributed
              </p>
            </div>
          </div>
          <div className="right flex justify-end">
            <StaticImage
              src="../assets/home/we_publish_analysis.png"
              alt="platformable"
              width={400}
            />
          </div>
        </div>
      </section>
      {/* 
    <Form
      id="submitMailerlite"
      formClass="text-center my-6 mx-auto"
      titleClass="text-sm"
      title="The future is open"
      iframeId=""
      iframeSrc={"https://landing.mailerlite.com/webforms/landing/b9q0r6"}
      paragraph="We share monthly updates on the growth of open ecosystems"
      paragraphClass="mb-12"
    /> */}
    </Layout>
  )
}

export default IndexPage

export const blogQuery = graphql`
  query HomepagePosts {
    allStrapiPost(sort: { fields: publishing_date, order: DESC }, limit: 3) {
      edges {
        node {
          categories {
            name
          }
          id
          slug
          staging
          publishing_date
          published_at
          is_featured
          tags {
            name
          }
          featured_image {
            childImageSharp {
              gatsbyImageData(
                width: 300
                blurredOptions: { width: 100 }
                placeholder: BLURRED
                formats: PNG
              )
            }
          }
          title
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
