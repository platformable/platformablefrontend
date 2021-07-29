import React from "react"
import {graphql} from 'gatsby';
import Layout from "../components/layout"
import AboutTeamComponent from "../components/AboutTeamComponent"
import Img from "gatsby-image"
import SEO from "../components/seo"
import EmbedContainer from "react-oembed-container"
import sectionOneImg from "../assets/home/hero_squares.png"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function about({ data }) {
  return (
    <Layout>
      <SEO title="About" />
      
      <div className="container mx-auto my-10 px-5">
     
      {/* <Breadcrumb location={location} crumbLabel="About" /> */}
        <section>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 items-center">
            <div>
              <h3 className="text-2xl md:text-4xl font-black mt-5 md:mt-10 md:mt-32 mb-5 md:mb-20">
                {/* We build platforms and ecosystems that allow users to
                participate and co-create */}
                {data.strapiAbout.heroText}
              </h3>
            </div>

            <div>
              <img src={sectionOneImg} alt="platformable" />
            </div>
          </div>

        </section>
      </div>

      <section className="content">
        <div className="posts-container mx-auto my-10 px-5 about-page">
          {data.strapiAbout.content && (
            <EmbedContainer markup={data.strapiAbout.content}>
              <div
                dangerouslySetInnerHTML={{
                  __html: unescape(data.strapiAbout.content),
                }}
              />
            </EmbedContainer>
          )}
        </div>
      </section>
      {/*end of container */}
      <section className="our-team bg-gray-50 py-10">
        <h3 className="text-5xl font-black text-center mb-5 mt-20">
          Platformable's Team
        </h3>
        <div class="container mx-auto mt-20 grid grid-cols-1 gap-8 md:grid-cols-3 xl:grid-cols-3 md:px-5">

          {data.strapiAbout.Author.map((userauthor, index) => {
            return userauthor.user.map((x, ind) => {
              return (
                <div
                  key={ind}
                  className=" pt-5 rounded overflow-hidden border-b-4 border-russian-violet-dark bg-gray-50 w-1/1"
                >
      
                   <div className="flex justify-center">
                    <GatsbyImage image={getImage(x.image)} className="my-0" alt="Platformable team"/>
                    </div>
                  <div className="p-4 md:p-6">
                    <h3 className="font-semibold mb-2 text-center text-xl leading-tight sm:leading-normal">
                      {`${x.name} ${x.lastname}`}
                    </h3>
                    <p className="text-center text-xs bg-red-orange-dark text-white rounded px-1 py-1 my-5">
                      {x.position}
                    </p>
                    <div className="text-sm">
                      <p
                        className="leading-none text-xs"
                        dangerouslySetInnerHTML={{ __html: x.bio }}
                      ></p>
                    </div>
                  </div>
                </div>
              )
            })
          })}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query MyAbout {
    strapiAbout {
      heroText
      Author {
        id
        user {
          name
          lastname
          position
          image {
            childImageSharp {
              gatsbyImageData(width:320, blurredOptions: {width: 100}, placeholder: BLURRED)
            }
          }
          bio
        }
      }
      teamTitle
      content
    }
  }
`
