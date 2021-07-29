import React from "react"
import {Link, graphql, navigate} from 'gatsby'
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

/*shared-components*/
import Layout from "../components/layout"
import SEO from "../components/seo"
import GridDisplay from "../components/shared-components/GridDisplay"
import Form from "../components/shared-components/Form"
/*specific-components*/
import PositionedSection from '../components/home-components/PositionedSection';
import HowWeDoItCards from '../components/home-components/HowWeDoItCards';
import WorkWithCards from '../components/home-components/WorkWithCards';

/*assets*/

import sectionTwoImg from "../assets/home/quarterly_trends1.png"


const IndexPage = ({data}) => {

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
 
return (
  <Layout>
    <SEO title="Home" />


    <section className="my-14">
      <br /><br />
      <div className="container mx-auto grid md:grid-cols-2 grid-cols-1">
        <div className="left flex items-center">
          <div>
            <h3 className="font-black mb-5">
            We support open ecosystems that build economic opportunities, solve
            complex problems, and enable everyone to participate and co-create
            their own value
            </h3>
            <Link
            to="/about"
            className="outlinedBtn mt-3 text-primary font-bold border-2 my-5 mx-0 py-2 px-10 rounded-full hover:bg-secondary cursor-pointer"
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
      <br /><br />
    </section>


    <section className="bg-gray-100 py-5">
      <br /><br />
      <div className="container mx-auto grid md:grid-cols-2 grid-cols-1">
        <div className="left flex items-center">
          <div>
            <p>Download our latest release</p>
            <h2 className="font-black mb-5">
            Open Banking/Open Finance Quarterly Trend Reports
            Q2 2021

            </h2>
            <Link
            to="/open-banking/trends"
            className="bg-secondary text-primary font-bold my-5 mx-0 py-2 px-10 rounded-full hover:bg-secondary cursor-pointer"
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
      <br /><br />
    </section>

    


    {/* <PostsCards/> */}
    <h3 className="text-center font-black mt-5">Latest Posts </h3>
    {/* POSTS */}
    <section className="container mx-auto all-blog-content my-20 px-5">
      {/* TOP LATESTS 3 POSTS */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {data
          ? data.allStrapiPost.edges.map((post, index) => {
              while (index < 3 && post.node.staging === false) {
                return (
                  <>
                    <div className="px-2 rounded-xl bg-gray-50 shadow py-2 top-blog-cards flex flex-col justify-between">
                      <div className="top-blog-card-img-container flex justify-center max-h-56">
                        {post.node.featured_image &&
                        post.node.featured_image ? (
                          <Link to={`/${post.node.slug}`}>
                            {" "}
                            <GatsbyImage
                              image={getImage(post.node.featured_image)}
                              className=""
                              alt={post.node.title}
                              layout="fixed"
                              width={200}
                              height={200}
                            />
                          </Link>
                        ) : null}
                      </div>
                      <Link to={`/${post.node.slug}`}>
                        <h5 className="text-lg font-bold leading-5 mt-5">
                          {post.node.title}
                        </h5>
                      </Link>
                      <span className="text-gray-600 mr-3 small-text mt-1">
                        Published{" "}
                        {new Date(post.node.publishing_date).toDateString()}
                      </span>{" "}
                      <div className="text-gray-600 text-sm font-medium flex mb-0 mt-0">
                        <small className="small-text mr-1">
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
                                onClick={() => handleCategory(cat)}
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

    <Form
      id="submitMailerlite"
      formClass="text-center my-6 mx-auto"
      titleClass="text-sm"
      title="The future is open"
      iframeId=""
      iframeSrc={"https://landing.mailerlite.com/webforms/landing/b9q0r6"}
      paragraph="We share monthly updates on the growth of open ecosystems"
      paragraphClass="mb-12"
    />
  </Layout>
)
            }

export default IndexPage


export const blogQuery = graphql`
query HomepagePosts {
  allStrapiPost(sort: {fields: publishing_date, order: DESC}, filter: {is_featured: {eq: true}}, limit: 3)  {
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
              width:300
              blurredOptions: {width: 100}
              placeholder: BLURRED
              formats: PNG
            )
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