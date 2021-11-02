import React from "react"
import { Link, graphql, navigate } from "gatsby"
// import {GatsbyImage} from 'gatsby-plugin-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function blogs({ data, location }) {
  // const authorsData = data.allStrapiPost.edges[0].node.user;
  const noStagingPosts = data
    ? data.allStrapiPost.edges.filter(post => post.node.staging != true)
    : " "

  const postsCategories = [
    {
      name: "Open Banking / Open Finance",
      url: "/open-banking/open-banking-posts",
    },
    {
      name: "Open Government",
      url: "/open-government/open-government-posts",
    },
    {
      name: "Open Health",
      url: "/open-health/open-health-posts",
    },
  ]
  const handleCategory = selectedCategory => {
    const found = postsCategories.find(
      cat => cat.name === selectedCategory.name
    )
    const goTo = found ? navigate(`${found.url}`) : null
    return goTo
  }

  return (
    <Layout>
      <SEO title="Blog" />
      <section className="container mx-auto ">
        <div className="my-10 px-5"></div>
      </section>
      <div className="container mx-auto all-blog-content my-20 px-5">
        {data
          ? noStagingPosts.map((post, index) => {
              if (index === 0 && post.node.staging === false) {
                return (
                  <>
                    {/* FEATURED POST */}
                    <div className="container mx-auto all-blog-content my-20 px-5">
                      <div
                        key={post.node.title}
                        class="flex flex-col mb-5 bg-gray-50 w-full shadow-md lg:flex-row xl:flex-row"
                      >
                        <div class="w-full lg:w-1/2 flex flex-col gap-8">
                          <div className="flex gap-3 h-auto ">
                            <div className="flex text-center items-center w-20 h-20 bg-red-orange-dark justify-center">
                              <p className="uppercase w-6/12 text-white font-bold text-2xl">
                                {new Date(
                                  post.node.publishing_date
                                ).toLocaleString("default", {
                                  month: "short",
                                  day: "2-digit",
                                })}
                              </p>
                            </div>
                            <div className="flex flex-col justify-between">
                              <h2 class="capitalise font-bold text-3xl">
                                Latest Article
                              </h2>
                              <div className="h-px bg-russian-violet-dark w-full" />
                              <p className="text-red-orange-dark orange-text capitalise">
                                {post.node.categories.map(cat => {
                                  return (
                                    <div key={post.node.id} className="">
                                      <button
                                        to={cat.name}
                                        onClick={() => handleCategory(cat)}
                                      >
                                        {cat.name}
                                      </button>
                                    </div>
                                  )
                                })}
                              </p>
                            </div>
                          </div>
                          <div className="mx-auto w-11/12 mb-10">
                            <Link to={`/${post.node.slug}`}>
                              <h3 className="text-2xl font-bold mb-3 text-russian-violet-dark">
                                {post.node.title}
                              </h3>
                            </Link>
                            <p className="mb-3">
                              {`Writen by `}{" "}
                              {post.node.user.length === 1 ? (
                                <Link
                                  className="hover:text-black transition duration-300 ease-in-out mr-1"
                                  to={`/author/${post.node.user[0].id}`}
                                >{` ${post.node.user[0].username}`}</Link>
                              ) : post.node.user.length > 1 ? (
                                post.node.user.map((x, index) => (
                                  <Link
                                    to={`/author/${post.node.user[index].id}`}
                                    className="hover:text-black transition duration-300 ease-in-out mr-1"
                                  >
                                    {x.username}{" "}
                                    {index < post.node.user.length - 1
                                      ? " & "
                                      : ""}
                                  </Link>
                                ))
                              ) : null}
                            </p>
                            <p>
                              {post.node.excerpt
                                ? post.node.excerpt.substr(0, 500) + " ..."
                                : ""}
                            </p>

                            <p className="text-right text-sm font-bold text-red-orange-dark">
                              {post.node.excerpt
                                ? Math.ceil(
                                    post.node.content.trim().split(/\s+/)
                                      .length / 225
                                  )
                                : ""}{" "}
                              min read
                            </p>
                          </div>
                        </div>

                        <div class="w-full text-center lg:mb-0 lg:w-1/2 ">
                          {post.node.featured_image &&
                          post.node.featured_image ? (
                            <Link to={`/${post.node.slug}`}>
                              {" "}
                              <img
                                src="https://dummyimage.com/1280x720/000/fff"
                                alt={post.node.title}
                              />
                            </Link>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            })
          : null}

        <div className="container mx-auto all-blog-content my-20 px-5">
          {/* TOP LATESTS 3 POSTS */}
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            {data
              ? noStagingPosts.map((post, index) => {
                  while (index < 3 && post.node.staging === false) {
                    return (
                      <>
                        <div
                          key={post.node.title}
                          className="px-2 rounded-xl bg-gray-50 shadow pt-5 pb-10 top-blog-cards flex flex-col justify-between"
                        >
                          <div className="top-blog-card-img-container flex justify-center items-center  md:h-3/5">
                            <div className="">
                              {post.node.featured_image &&
                              post.node.featured_image ? (
                                <Link to={`/${post.node.slug}`}>
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
                            <Link to={`/${post.node.slug}`}>
                              <h5 className="text-lg font-bold leading-5 mt-5">
                                {post.node.title}
                              </h5>
                            </Link>
                            <span className="text-gray-600 mr-3 small-text mt-1">
                              Published{" "}
                              {new Date(
                                post.node.publishing_date
                              ).toDateString()}
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
                            <p className="text-xs  my-5 py-1 small-text">
                              {post.node.excerpt
                                ? post.node.excerpt.substr(0, 100) + " ..."
                                : ""}
                            </p>
                            <br /> <br />
                          </div>
                        </div>
                      </>
                    )
                  }
                })
              : null}
          </div>

          {data
            ? noStagingPosts.map((post, index) => {
                while (index > 2 && post.node.staging === false) {
                  return (
                    <div className="my-4" key={index}>
                      <div className="horizontal-blog-card rounded-xl bg-gray-50 shadow-md">
                        <div className="blog-card-image">
                          <GatsbyImage
                            image={getImage(post.node.featured_image)}
                            className=""
                            alt={post.node.title}
                          />
                        </div>
                        <div className="blog-card-content">
                          <h5 className="text-lg font-bold leading-5 mt-5">
                            <Link to={`/${post.node.slug}`}>
                              {" "}
                              {post.node.title}
                            </Link>
                          </h5>
                          <span className="text-gray-600 mr-3 small-text mt-4">
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
                          <p className="text-xs leading-5 my-1 small-text pr-5">
                            {post.node.excerpt ? post.node.excerpt : ""}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                }
              })
            : null}
        </div>
      </div>
    </Layout>
  )
}

export const blogQuery = graphql`
  query AllBlogPosts {
    allStrapiPost(sort: { fields: publishing_date, order: DESC }) {
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
                width: 300
                blurredOptions: { width: 100 }
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
          publishing_date
          published_at
          excerpt
          staging
          content
        }
      }
    }
  }
`
