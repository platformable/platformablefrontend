import React, { useState } from "react"
import { DebounceInput } from "react-debounce-input"
import { Link, graphql, navigate } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Blogs({ data, location }) {
  // const authorsData = data.allStrapiPost.edges[0].node.user;
  const noStagingPosts = data
    ? data.allStrapiPost.edges.filter(post => post.node.staging != true)
    : " "

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

  // filter for categories
  const [filterState, setFilterState] = useState("")
  const getFilter = (post, index) => {
    if (filterState === "") {
      return index > 0
    }
    return (
      index > 0 &&
      post.node.categories.filter(cat => cat.name === filterState).length > 0
    )
  }
  // filter for search
  const [searchedValue, setSearchedValue] = useState("")
  const handleInputChange = event => {
    setSearchedValue(event.target.value)
  }
  const getSearchFilters = (post, index) => {
    const searchedValueLowerCase = searchedValue.toLowerCase().trim()
    if (searchedValue === "") {
      return index > 0
    }
    return (
      index > 0 &&
      (post.node.title.toLowerCase().trim().includes(searchedValueLowerCase) ||
        post.node.user.filter(user =>
          user.username.toLowerCase().trim().includes(searchedValueLowerCase)
        ).length > 0)
    )
  }
  // Reset filter = all categories
  const resetFilters = () => {
    setSearchedValue("")
    setFilterState("")
  }

  const postsCategories = [
    { name: "Open Ecosystems" },
    {
      name: "Open Banking / Open Finance",
      url: "/open-banking/open-banking-posts",
    },
    {
      name: "Open Health",
      url: "/open-health/open-health-posts",
    },
    {
      name: "Open Sustainability",
    },
    {
      name: "Open Government",
      url: "/open-government/open-government-posts",
    },
    {
      name: "Labs",
      url: "/labs",
    },
  ]
  const handleCategory = selectedCategory => {
    const found = postsCategories.find(
      cat => cat.name === selectedCategory.name
    )
    const goTo = found && found.url ? navigate(`${found.url}`) : null
    return goTo
  }

  const CardComponent = props => {
    return (
      <div className="rounded-xl pt-5 pb-10 top-blog-cards flex flex-col shadow relative">
        <div className="px-7 text-center justify-center mb-3 h-44 overflow-hidden">
          <GatsbyImage
            image={getImage(props.img)}
            className=""
            alt={props.title}
          />
        </div>
        <div>
          <div className="flex flex-col gap-3 h-auto mr-5 h-11 mb-2">
            {props.categories.map((cat, index) => {
              return (
                <div key={index} className="flex justify-between">
                  <div className="w-1/5">
                    <div
                      className={`flex text-center items-center w-16 h-16 xl:w-14 xl:h-14 bg-dark-${cat.name}
                                 justify-center`}
                    >
                      <div className="flex flex-col text-white">
                        <p className="font-bold text-xl">
                          {getDayString(props.publishing_date)}
                        </p>
                        <p className="font-bold text-xl">
                          {getMonthString(props.publishing_date)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      cat.name === "Open Banking / Open Finance"
                        ? `flex items-end justify-center flex-nowrap w-full`
                        : `flex items-end justify-center flex-nowrap w-full sm:-ml-11`
                    }
                  >
                    <button
                      key={props.id}
                      to={cat.name}
                      className={`text-dark-${cat.name} capitalise self-end text-center`}
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
                <Link to={`/${props.slug}`}> {props.title}</Link>
              </h5>
              <small className="small-text">{`Writen by `} </small>
              {props.user.length === 1 ? (
                <Link
                  className="hover:text-black transition duration-300 ease-in-out small-text mr-1"
                  to={`/author/${props.user[0].id}`}
                >{` ${props.user[0].username}`}</Link>
              ) : props.user.length > 1 ? (
                props.user.map((x, index) => (
                  <Link
                    key={index}
                    to={`/author/${props.user[index].id}`}
                    className="hover:text-black transition duration-300 ease-in-out small-text mr-1"
                  >
                    {x.username} {index < props.user.length - 1 ? " & " : ""}
                  </Link>
                ))
              ) : null}
            </div>
          </div>

          {props.categories.map(cat => {
            return (
              <div key={props.id} className="absolute right-5 w-full bottom-5">
                <p
                  className={`text-right text-sm font-bold text-dark-${cat.name}`}
                >
                  {props.content
                    ? calculateTimeToRead(props.content)
                    : "less than 1"}{" "}
                  min read
                </p>
              </div>
            )
          })}
        </div>
      </div>
    )
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
                    <div
                      key={post.node.title}
                      className="container mx-auto all-blog-content px-5"
                    >
                      <div class="flex flex-col mb-5 w-full shadow-md lg:flex-row xl:flex-row">
                        <div class="w-full lg:w-1/2 flex flex-col gap-8">
                          <div className="flex gap-3 h-auto ">
                            {post.node.categories.map(cat => {
                              return (
                                <div
                                  key={post}
                                  className={`bg-dark-${cat.name} flex text-center items-center w-16 h-16 justify-center`}
                                >
                                  <div className="w-6/12 text-white font-bold text-xl flex flex-col">
                                    <span className="">
                                      {getDayString(post.node.publishing_date)}
                                    </span>
                                    <span className="">
                                      {getMonthString(
                                        post.node.publishing_date
                                      )}
                                    </span>
                                  </div>
                                </div>
                              )
                            })}
                            <div className="flex flex-col justify-center">
                              <div>
                                <h2 class="cursor-default capitalise font-bold text-3xl">
                                  Latest Article
                                </h2>
                                <div className="h-px bg-russian-violet-dark w-full" />
                              </div>
                              {post.node.categories.map(cat => {
                                return (
                                  <div key={post.node.id} className="">
                                    <p
                                      className={`text-dark-${cat.name} capitalise`}
                                    >
                                      <button
                                        to={cat.name}
                                        onClick={() => handleCategory(cat)}
                                      >
                                        {cat.name}
                                      </button>
                                    </p>
                                  </div>
                                )
                              })}
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
                                    key={index}
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

                            {post.node.categories.map(cat => {
                              return (
                                <div key={post}>
                                  <p
                                    className={`text-dark-${cat.name} text-right text-sm font-bold text-red-orange-dark`}
                                  >
                                    {post.node.content
                                      ? calculateTimeToRead(post.node.content)
                                      : "0"}{" "}
                                    min read
                                  </p>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                        <div class="flex items-center w-full text-center lg:mb-0 lg:w-1/2 ">
                          {post.node.featured_image &&
                          post.node.featured_image ? (
                            <Link to={`/${post.node.slug}`}>
                              <div className="w-11/12 flex items-center mx-auto mb-5 lg:mb-0 ">
                                <GatsbyImage
                                  image={getImage(
                                    post.node.featured_image.bigImg
                                  )}
                                  className=""
                                  alt={post.node.title}
                                />
                              </div>
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
        {/* end of the featured post*/}

        {/* start of the search component*/}
        <div className="container mx-auto all-blog-content my-20 px-5">
          <div className="flex justify-center flex-col mt-10 mb-10">
            <div>
              <h4 className="capitalize font-bold text-center text-russian-violet-dark">
                previous articles
              </h4>
            </div>
            <div className="flex gap-3 justify-center mt-10 ">
              {/* debounce adds delay to avoid flickering due to onChange event */}
              <DebounceInput
                minLength={3}
                debounceTimeout={400}
                id="searchbar"
                placeholder="Search article"
                className="rounded-full pl-3 pr-16 border-2 border-gray-purple-light"
                onChange={handleInputChange}
                value={searchedValue}
              />
            </div>
          </div>
        </div>
        {/* end of the search component */}
        {/* Posts component */}
        <div className="container mx-auto all-blog-content px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Categories component */}
            <div className="pl-2 pr-5 rounded-xl pt-5 pb-5 top-blog-cards flex flex-col">
              <h5 className="font-bold sm:pb-2 md:pb-0 text-xl ml-2">
                Categories
              </h5>
              <button
                className={
                  filterState === ""
                    ? `bg-sunglow-dark mt-2 text-left`
                    : `text-left mt-2`
                }
                onClick={resetFilters}
              >
                <h6
                  className={
                    filterState === ""
                      ? `font-medium md:text-lg pt-4 pb-2 pl-2 bg-sunglow-dark`
                      : `font-medium md:text-lg pt-4 pb-2 border-b-px border-bottom-sunglow-dark pl-2 `
                  }
                >
                  All categories
                </h6>
              </button>
              {postsCategories.map((cat, index) => (
                <button
                  key={index}
                  className={
                    filterState === cat.name
                      ? `bg-dark-${cat.name} mt-2 text-left text-white`
                      : `text-left`
                  }
                  onClick={() => {
                    setSearchedValue("")
                    setFilterState(cat.name)
                  }}
                >
                  <h6
                    className={
                      filterState === cat.name
                        ? `font-medium md:text-lg pt-4 pb-2 border-t-px pl-2`
                        : `pl-2 font-medium md:text-lg pt-4 pb-2 border-b-px border-russian-violet-dark text-dark-${cat.name}`
                    }
                  >
                    {cat.name}
                  </h6>
                </button>
              ))}
            </div>
            {/* cards */}
            {data
              ? noStagingPosts
                  .filter(getFilter)
                  .filter(getSearchFilters)
                  .map((post, index) => {
                    return (
                      <CardComponent
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
                  })
              : null}
          </div>
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
            #fetching big image for the top post
            bigImg: childImageSharp {
              gatsbyImageData(
                width: 1280
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
