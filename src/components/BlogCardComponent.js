import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link, navigate } from "gatsby"

const BlogCardComponent = props => {
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
  const handleCategory = selectedCategory => {
    const found = postsCategories.find(
      cat => cat.name === selectedCategory.name
    )
    const goTo = found && found.url ? navigate(`${found.url}`) : null
    return goTo
  }

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
export default BlogCardComponent
