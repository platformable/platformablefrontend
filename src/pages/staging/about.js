import React from "react"
import {graphql} from 'gatsby';
import Layout from "../../components/layout"
import AboutTeamComponent from "../../components/AboutTeamComponent"
import SEO from "../../components/seo"
import EmbedContainer from "react-oembed-container"
import foto from "../../assets/about/example.png"
import { Link } from "gatsby";

import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

export default function about({ data }) {
  return (
    <Layout>
      <SEO title="About" />
      
      <div className="container mx-auto my-10 px-5">
     
      {/* <Breadcrumb location={location} crumbLabel="About" /> */}
      <div className="container mx-auto">
                <div className="flex md:flex-nowrap flex-wrap mt-10 mb-5 items-center">
                    <div className="labs-hero-left md:w-3/5 w:1/1 md:p-0 p-5">
                        <h3 className="font-black md:text-2xl text-xl">{data.strapiAbout.heroText}</h3>
                        
                    </div>
                    <div className="labs-hero-right md:w-2/5 flex justify-end">
                  {/* <img src={sectionHeroImg} alt="" /> */}
                  <StaticImage src="../assets/product-streams/home_hero.svg" placeholder="blurred" alt="Platformable"/> 
                    </div>
                </div>
      </div>
      </div>

      <section className="OurMission pt-5 bg-gray-50">
        <div className="container mx-auto pb-5 md:px-0 px-5">
          <h3 className="font-black text-center md:text-2xl text-xl">Our Mission</h3>
          <h4 className="text-center md:text-2xl text-xl">We support <span className="font-black">open ecosystems</span> that:</h4>

          <div className="our-mission-cards-container grid md:grid-cols-3 grid-cols-1 md:gap-24 gap-4 my-5">

          <div className="our-mission-card grid  justify-center rounded-xl shadow p-5 bg-white">
                <div className="our-mission-image grid justify-center items-center p-3">
                <StaticImage src="../../assets/about/example.png" alt="platformable" className="img-thumbnail"/>
                </div>
                <p>Build economic opportunities</p>
            </div>

            <div className="our-mission-card grid  justify-center rounded-xl shadow p-5 bg-white">
                <div className="our-mission-image grid justify-center items-center p-3">
                <StaticImage src="../../assets/about/example.png" alt="platformable" className="img-thumbnail"/>
                </div>
                <p>Solve complex problems</p>
            </div>

            <div className="our-mission-card grid justify-center rounded-xl shadow p-5 bg-white">
                <div className="our-mission-image grid justify-center items-center p-3">
                <StaticImage src="../../assets/about/example.png" alt="platformable" className="img-thumbnail"/>
                </div>
                <p>Enable everyone to participate </p>
                <p>and co-create their own value</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-clients mt-10 mb-5">
        <div className="container mx-auto pb-12">
          <h3 className="text-center font-black my-5 md:text-2xl text-xl">Current and previous clients</h3>

          <div className="about-client-box md:flex gap-4 my-5 md:px-0 px-5">
            <div className="about-client-box-image md:w-1/5 w-full md:mb-0 mb-5">
            <StaticImage src="https://theodi.org/wp-content/themes/theodi/images/ODI-default-image-logo.jpg" alt="Platformable client" className="img-thumbnail"/>
            </div>
            <div className="about-client-box-text md:w-4/5">
                <p className="text-sm md:text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laborum ipsum explicabo excepturi illum, repellat quae officia aperiam corporis veniam nobis dignissimos facilis magni ex ea? Asperiores quisquam beatae hic placeat? Placeat itaque explicabo ipsa quos doloremque saepe veritatis eaque sit laboriosam in ducimus nisi, unde porro perspiciatis alias, similique, magnam autem. Incidunt aut consectetur eligendi labore, quo aliquid tenetur.</p>
            </div>
          </div>

          <div className="about-client-box md:flex gap-4 my-5 md:px-0 px-5">
            <div className="about-client-box-image md:w-1/5 w-full md:mb-0 mb-5">
            <StaticImage src="https://www.cgap.org/sites/default/files/styles/medium/public/inline-images/CGAP-Logo-2c.png?itok=_1CxsKMi" alt="Platformable client" className="img-thumbnail"/>
            </div>
            <div className="about-client-box-text md:w-4/5">
                <p className="text-sm md:text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laborum ipsum explicabo excepturi illum, repellat quae officia aperiam corporis veniam nobis dignissimos facilis magni ex ea? Asperiores quisquam beatae hic placeat? Placeat itaque explicabo ipsa quos doloremque saepe veritatis eaque sit laboriosam in ducimus nisi, unde porro perspiciatis alias, similique, magnam autem. Incidunt aut consectetur eligendi labore, quo aliquid tenetur.</p>
            </div>
          </div>


          <div className="about-client-box md:flex gap-4 my-5 md:px-0 px-5">
            <div className="about-client-box-image md:w-1/5 w-full md:mb-0 mb-5">
            <StaticImage src="https://nblch.org/wp-content/uploads/2021/02/black-health-logo-header-250.png" alt="Platformable client" className="img-thumbnail"/>
            </div>
            <div className="about-client-box-text md:w-4/5">
                <p className="text-sm md:text-md ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laborum ipsum explicabo excepturi illum, repellat quae officia aperiam corporis veniam nobis dignissimos facilis magni ex ea? Asperiores quisquam beatae hic placeat? Placeat itaque explicabo ipsa quos doloremque saepe veritatis eaque sit laboriosam in ducimus nisi, unde porro perspiciatis alias, similique, magnam autem. Incidunt aut consectetur eligendi labore, quo aliquid tenetur.</p>
            </div>
          </div>


          <div className="about-client-box md:flex gap-4 my-5 md:px-0 px-5">
            <div className="about-client-box-image md:w-1/5 w-full md:mb-0 mb-5">
            <StaticImage src="https://www.axway.com/sites/default/files/2019-09/axway.png" alt="Platformable client" className="img-thumbnail"/>
            </div>
            <div className="about-client-box-text md:w-4/5">
                <p className="text-sm md:text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laborum ipsum explicabo excepturi illum, repellat quae officia aperiam corporis veniam nobis dignissimos facilis magni ex ea? Asperiores quisquam beatae hic placeat? Placeat itaque explicabo ipsa quos doloremque saepe veritatis eaque sit laboriosam in ducimus nisi, unde porro perspiciatis alias, similique, magnam autem. Incidunt aut consectetur eligendi labore, quo aliquid tenetur.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="commitment">
        <div className="container mx-auto">
        <h3 className="text-center font-black my-5 md:text-2xl text-xl">Our commitment</h3>

        <div className="commitment-container grid md:grid-cols-2 grid-cols-1">
          <div className="commitment-left px-10 commitment-left-borders py-5">
              <div className="commitment-left-top">
                <div className="flex justify-center items-center my-5 gap-4">
                <StaticImage src="https://dummyimage.com/75x100/000/fff" alt="platformable"/>
                <h4 className="text-black text-center md:text-lg text-sm">to open source <br />  and open ecosystems</h4>
                <StaticImage src="https://dummyimage.com/75x100/000/fff" alt="platformable"/>
                </div>
                <p className="mb-5 md:text-md text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid recusandae quia deserunt error nesciunt nihil nemo itaque ea debitis repellendus est fuga officia ratione, non architecto illum, sed sunt molestias illo unde aliquam! Temporibus vero possimus ut, ipsa dicta unde?</p>
                <p className="mb-5 md:text-md text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates dignissimos dolor aliquid itaque consectetur maxime rem accusantium voluptate quaerat error.</p>
                <p className="mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates earum, accusamus eligendi quibusdam, quas delectus expedita natus alias corporis perspiciatis, assumenda enim sequi.</p>            
              </div>
            </div>
            <div className="commitment-right px-10 commitment-right-borders py-5">
              <div className="commitment-right-top">
              <div className="flex justify-center items-center my-5 gap-4">
              <StaticImage src="https://dummyimage.com/75x100/000/fff" alt="platformable"/>
              <h4 className="text-black text-center md:text-lg text-sm">to diversisty <br /> and equity</h4>
              
              <StaticImage src="https://dummyimage.com/75x100/000/fff" alt="platformable"/>
              </div>
              <p className="mb-5 md:text-md text-sm"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid recusandae quia deserunt error nesciunt nihil nemo itaque ea debitis repellendus est fuga officia ratione, non architecto illum, sed sunt molestias illo unde aliquam! Temporibus vero possimus ut, ipsa dicta unde?</p>
                <p className="mb-5 md:text-md text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates dignissimos dolor aliquid itaque consectetur maxime rem accusantium voluptate quaerat error.</p>
                <p className="mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates earum, accusamus eligendi quibusdam, quas delectus expedita natus alias corporis perspiciatis, assumenda enim sequi.</p>            
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="privacy-policy my-16">
        <div className="container mx-auto md:px-0 px-5">
          <h3 className="font-black md:text-2xl text-xl text-center mb-8">Privacy Policy</h3>
          <p className="text-center  text-sm">Platformable is committed to managing people´s data responsibly.</p>
          <p className="text-center">Check out our <Link to="/privacy-policy" className="font-black">Privacy Policy</Link></p>
        </div>

      </section>



      <section className="our-team bg-gray-50 py-10 ">
        <h3 className="font-black md:text-2xl text-xl text-center mb-8">
          Platformable's Team
        </h3>
        <div className="container mx-auto mt-20 grid grid-cols-1 gap-8 md:grid-cols-3 xl:grid-cols-3 md:px-28 px-5">

          {data.strapiAbout.Author.map((userauthor, index) => {
            return userauthor.user.map((x, ind) => {
              return (
                <div
                  key={ind}
                  className=" pt-5 rounded overflow-hidden   bg-gray-50 w-1/1"
                >
      
                   <div className="flex justify-center">
                    <GatsbyImage image={getImage(x.image)} className="my-0 img-thumbnail" alt="Platformable team"/>
                    </div>

                  <div className="p-4 md:p-6 md:block md:px-5 px-5">
                    <div className="flex gap-4 items-center mb-5 justify-center ">
                    <img src="https://dummyimage.com/32x25/000/fff" alt="" className="self-start" />
                    <div>
                    <h3 className="font-black text-lg leading-tight sm:leading-normal md:text-sm">
                      {`${x.name} ${x.lastname}`}
                    </h3>
                    <p className="text-xs">{x.position}</p>
                    </div>
                    </div>
                    <div className="text-sm">
                      <div
                        className="leading-none text-xs"
                        dangerouslySetInnerHTML={{ __html: x.bio }}
                      ></div>
                    </div>
                  </div>

                </div>
              )
            })
          })}
        </div>
      </section>





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
        <div className="container mx-auto mt-20 grid grid-cols-1 gap-8 md:grid-cols-3 xl:grid-cols-3 md:px-5">

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
                      <div
                        className="leading-none text-xs"
                        dangerouslySetInnerHTML={{ __html: x.bio }}
                      ></div>
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
  query MyAboutStaging {
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
