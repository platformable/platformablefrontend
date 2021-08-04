import React, { useEffect,useState, useRef,useContext } from "react"
import { Link, graphql, navigate } from "gatsby"
import Layout from "../components/layout"
// import EmbedContainer from "react-oembed-container"
import { InlineWidget } from "react-calendly";
import SEO from "../components/seo"
import { Helmet } from "react-helmet"
import BlogPostAlertMessage from '../components/BlogPostAlertMessage'
import PostContentComponent from '../components/PostContentComponent'
import UserContext from '../context/UserContext'
// import { GatsbyImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const isBrowser = typeof window !== "undefined"

const BlogPost = ({ data, pageContext,location }) => {
  const actualPostCategory=data.strapiPost.categories[0].name;
  const noStagingPosts = data?data.allStrapiPost.edges.filter(post=>post.node.staging !=true):" ";
  const sameCatergoryPosts = noStagingPosts.filter(post=> post.node.categories[0].name === actualPostCategory)
  console.log("noStagingPosts",noStagingPosts)





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



  

  /* REEDIRECT TO CAGETORY */
  const handleCategory = (selectedCategory)=>{
    const found = postsCategories.find(cat => cat.name === selectedCategory.name);
    const goTo = found ? navigate(`${found.url}`) : null
    return goTo
  }



  const {next,prev} = pageContext;
  const [user,setUser] = useContext(UserContext)
  const [scripts,setScripts] = useState([])
  const [update,setUpdate]=useState(false);
  const [category,setCategory]=useState('');
  const [urls,setUrls]=useState([])

  /* get user from localStorage */
  let  getLocalUser ={}
  if(isBrowser) {
    getLocalUser = JSON.parse(window.localStorage.getItem('user'))
  }

  const [localUser,setLocalUser]= useState(getLocalUser)
  
  useEffect(()=>{
    if (localUser) {
      setUser(localUser)
    }
  },[localUser])


  /* BREADCRUMBS */
  const getLocations = (location)=> {
    const url = location.href;
    const getUrls = url.split(/[/]/);
    const pathnames = getUrls.splice(3,getUrls.length-1)
    setUrls(pathnames)
  }
  

  useEffect(() => {
    getLocations(location)

  }, [category]);


/* DISPLAY CONTENT BASED ON membership */  

const getMembership = (subscription, isLoggedIn)=>{
 if(subscription==="free") {
   return (
    
    <PostContentComponent data={data.strapiPost.content} />

   )
 } else if (subscription==="free_login" && !user.isLoggedIn) {
  return (<BlogPostAlertMessage message="Hi, this is a login-only blog post. Become a member to get unlimited access and discover more of ours services."/>)
 } else if (subscription==="free_login" && user.isLoggedIn){
  return (

    <PostContentComponent data={data.strapiPost.content} />

   )
 } else if (subscription==="paid" && !user.isLoggedIn) {
  return (<BlogPostAlertMessage message="Hi, this is a member-only blog post. Become a member to get unlimited access and discover more of ours services."/>)
 } else if (subscription==="paid" && user.isLoggedIn && user.membership==="free"){
  return (<BlogPostAlertMessage message="Hi, this is a member-only blog post. Become a member to get unlimited access and discover more of ours services."/>)
 }
 else if (subscription==="paid" && user.isLoggedIn && user.membership==="paid") {
  return (

    <PostContentComponent data={data.strapiPost.content} />
  
   )
 }
}


  function getScripts () {
 // get all script tags from content
 const re = /<script\b[^>]*>[\s\S]*?<\/script\b[^>]*>/g
 const results = data.strapiPost.content? setScripts(data.strapiPost.content.match(re)): " ";
 
 return results
  }
 


  const isInitialMount = useRef(true);
  useEffect(() => {
    
    if (isInitialMount.current) {

      getScripts()
      setUpdate(true)
      isInitialMount.current = false;
    } else {
   
  
    }

  }, [data])


  return (
  
    <>
      <Layout>
        <section className="container mx-auto p-5">
      <ul className="flex">
      <li className="small-text"><Link to={`/blog`}>Blog</Link></li>
        {urls && urls.map((url,index)=>{
          return (
            <>
            
              <li className="small-text font-black">{`/${url}`}</li>
           
            </>
          )
        })}
         </ul>
         </section>
        <Helmet>
          {scripts ? scripts.map((script)=> {
           return script  
          }): null}
        </Helmet>
        <SEO title={data.strapiPost.title}/>
        <section className="posts-container mx-auto all-blog-content my-5 sm:my-20 px-5">
          <h3 className="text-3xl sm:text-3xl font-black mb-3">
            {data.strapiPost.title}
          </h3>
      
          <div className="autor flex flex-wrap items-start">
            <div className="autores flex  ">
              <div className="autorInfo flex items-start">
               
            
                  {data.strapiPost.user.length === 1 ? (
                    <>
                      <Link 
                      to={`/author/${data.strapiPost.user[0].id}`}
                      className="hover:text-black transition duration-300 ease-in-out text-xs mr-1">
                      <h2 className="text-sm tracking-tighter text-gray-900">By {data.strapiPost.user[0].username}</h2> 
                      </Link>{" "}
                    </>
                  ) : data.strapiPost.user.length > 1 ? (
                    data.strapiPost.user.map((x, index) => (
                      <>
                        <Link
                         to={`/author/${x.id}`}
                          className="hover:text-black transition duration-300 ease-in-out text-xs mr-1"
                        >
                          {x.name} {x.lastname}{" "}
                          {index <
                          data.strapiPost.user.length - 1
                            ? " &"
                            : ""}
                        </Link>
                      </>
                    ))
                  ) : null}
                {/* </h2> */}
              </div>
            </div>
            {/* LOAD CATEGORIES */}
            <div className="md:ml-5">
              <ul className="flex flex-nowrap relative ">
                {data.strapiPost.categories.map(cat => {
                  return (
                    <Link
                      key={cat.name}
                      
                      className={`bg-${cat.name} py-1 px-2 mr-1 rounded-lg text-black text-xs flex-grow `}
                      onClick={()=> handleCategory(cat)}
                    >
                      
                      {cat.name}
                    </Link>
                  )
                })}
              </ul>
            </div>
          </div>
          <span className="text-gray-600 mr-3 text-sm">
            Updated at {new Date(data.strapiPost.updated_at).toDateString()}
          </span>

          <div className="posts-content py-10">
            {data.strapiPost.featured_image && data.strapiPost.featured_image ? 
            <div className="post-featured-img   flex justify-center ">
             
              {data.strapiPost.featured_image && data.strapiPost.featured_image ?
              <img src={data.strapiPost.featured_image.childImageSharp.gatsbyImageData.images.fallback.src} className="text-center mb-5  top-featured-post-image" alt={data.strapiPost.title}/>
              : null}
          </div>
            : ''}
            
              {getMembership(data.strapiPost.membership,user.isLoggedIn)}
         
              {data.strapiPost.calendly ? <section className="posts-container mx-auto calendly">
             <InlineWidget url="https://calendly.com/platformable" />
             </section> : ''}
          </div>

          {/* end of all posts */}

          {/* AUTHOR CARD */}

        </section>




        <section className="posts-container mx-auto author-list">
          <div
            className={`grid grid-cols-1 sm:grid-cols-${data.strapiPost.user.length} md:grid-cols-${data.strapiPost.user.length} xl:grid-cols-${data.strapiPost.user.length} gap-4 my-5`}
          >
            {data.strapiPost.user.map((user, index) => {
              return (
                <Link
                to= {`/author/${user.id}`}
                  key={index}
                  className="flex flex-col items-center justify-center p-4  rounded-lg"
                >
                  <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
          
                    <img
                      alt={data.strapiPost.title}
                      key={index}
                      src={user.image.childImageSharp.gatsbyImageData.images.fallback.src}
                      className="h-full w-full my-0"
                    />
                 
                  </div>

                  <h2 className="mt-4 font-bold text-xl">
                    {user.name} {user.lastname}
                  </h2>
                  <h6 className="mt-2 text-sm font-medium">{user.position}</h6>

                  <p className="text-xs text-gray-500 text-center mt-3">
                    {user.bio}
                  </p>
                </Link>
              )
            })}
          </div>
        </section>


{/* <section>
  <div className="post-next-prev-button container mx-auto grid justify-center">
 <ul className="flex mx-auto">
  {prev && (<li className="mr-5 text-small bg-gray-50 rounded-lg px-5 py-2 "><Link to={`/${prev.slug}`} className="small-text">{`< Previous`}</Link></li>)}
   {next && (<li className="mr-5 text-small bg-gray-50 rounded-lg px-5 py-2 text-small"><Link to={`/${next.slug}`} className="small-text">{`Next >`}</Link></li>)}
   
   
 </ul>
  </div>
</section> */}

    <section className="related-posts container mx-auto my-5">
      <h3 className="font-black my-5 text-center">Related Posts</h3>
   {/* TOP LATESTS 3 POSTS */}
   <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
   {data?sameCatergoryPosts.map((post, index) => {
            
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
          }):<h3 className="text-center">No related posts yet</h3>}
        </div>
    </section>
        

        
      </Layout>
    </>
  )
}

export default BlogPost

export const query = graphql`
query MyPost($slug: String) {
  allStrapiPost(sort: {fields: publishing_date, order: DESC}, filter: {is_featured: {eq: true}})  {
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
        excerpt
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
  strapiPost(slug: {eq: $slug}) {
    categories {
      name
    }
    membership
    content
    id
    title
    user {
      id
      name
      lastname
      username
      image {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      position
    }
    updated_at
    featured_image {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    calendly
  }
}

`
