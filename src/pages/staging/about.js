import React from "react"
import {graphql} from 'gatsby';
import Layout from "../../components/layout"
import SEO from "../../components/seo"

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
                <StaticImage src="../../static/about/our-mission/build.png" alt="platformable" className="img-thumbnail"/>
                </div>
                <p>Build economic opportunities</p>
            </div>

            <div className="our-mission-card grid  justify-center rounded-xl shadow p-5 bg-white">
                <div className="our-mission-image grid justify-center items-center p-3">
                <StaticImage src="../../static/about/our-mission/solve.png" alt="platformable" className="img-thumbnail"/>
                </div>
                <p>Solve complex problems</p>
            </div>

            <div className="our-mission-card grid justify-center rounded-xl shadow p-5 bg-white">
                <div className="our-mission-image grid justify-center items-center p-3">
                <StaticImage src="../../static/about/our-mission/enable.png" alt="platformable" className="img-thumbnail"/>
                </div>
                <p>Enable everyone to participate </p>
                <p>and co-create their own value</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-clients mt-10 mb-5">
        <div className="container mx-auto pb-12 md:px-28 px-5">
          <h3 className="text-center font-black my-5 md:text-2xl text-xl">Current and previous clients</h3>

          <div className="about-client-box md:flex gap-4 my-5 md:px-0 px-5 items-center">
            <div className="about-client-box-image md:w-1/5 w-full md:mb-0 mb-5">
            <StaticImage src="../../static/about/clients/odi.png" alt="Platformable client" className="img-thumbnail"/>
            </div>
            <div className="about-client-box-text md:w-4/5">
                <p className="text-sm md:text-md">Working on projects to document data institutions and
policy landscape models with Open Data Institute</p>
            </div>
          </div>

          <div className="about-client-box md:flex gap-4 my-5 md:px-0 px-5 items-center">
            <div className="about-client-box-image md:w-1/5 w-full md:mb-0 mb-5">
            <StaticImage src="../../static/about/clients/cgap.png" alt="Platformable client" className="img-thumbnail"/>
            </div>
            <div className="about-client-box-text md:w-4/5">
                <p className="text-sm md:text-md">Work with the World Bank’s Consultative Group to Assist the
Poor (CGAP) to demonstrate the value of open APIs for
financial inclusion</p>
            </div>
          </div>


          <div className="about-client-box md:flex gap-4 my-5 md:px-0 px-5 items-center">
            <div className="about-client-box-image md:w-1/5 w-full md:mb-0 mb-5">
            <StaticImage src="../../static/about/clients/blackHealth.png" alt="Platformable client" className="img-thumbnail"/>
            </div>
            <div className="about-client-box-text md:w-4/5 flex items-center">
                <p className="text-sm md:text-md ">Work with National Black Leadership Commission on
Health (Black Health) on data governance projects and
data stewardship training</p>
            </div>
          </div>


          <div className="about-client-box md:flex gap-4 my-5 md:px-0 px-5 items-center">
            <div className="about-client-box-image md:w-1/5 w-full md:mb-0 mb-5">
            <StaticImage src="../../static/about/clients/axway.png" alt="Platformable client" className="img-thumbnail"/>
            </div>
            <div className="about-client-box-text md:w-4/5">
                <p className="text-sm md:text-md">Working with Axway API management provider on a range
of data reports and content products</p>
            </div>
          </div>

          <div className="about-client-box md:flex gap-4 my-5 md:px-0 px-5 items-center">
            <div className="about-client-box-image md:w-1/5 w-full md:mb-0 mb-5">
            <StaticImage src="../../static/about/clients/iconEquity.png" alt="Platformable client" className="img-thumbnail"/>
            </div>
            <div className="about-client-box-text md:w-4/5">
                <p className="text-sm md:text-md">Creation of value-based data models that include equity as
a core component for open banking and digital government</p>
            </div>
          </div>


          <div className="about-client-box md:flex gap-4 my-5 md:px-0 px-5 items-center">
            <div className="about-client-box-image md:w-1/5 w-full md:mb-0 mb-5">
            <StaticImage src="../../static/about/clients/europeanCommission.png" alt="Platformable client" className="img-thumbnail"/>
            </div>
            <div className="about-client-box-text md:w-4/5">
                <p className="text-sm md:text-md">Lead author for European Commission report documenting
an API Framework for Digital Government and to develop
resources to guide API discoverability</p>
            </div>
          </div>


          <div className="about-client-box md:flex gap-4 my-5 md:px-0 px-5 items-center">
            <div className="about-client-box-image md:w-1/5 w-full md:mb-0 mb-5">
            <StaticImage src="../../static/about/clients/githubApiDays.png" alt="Platformable client" className="img-thumbnail"/>
            </div>
            <div className="about-client-box-text md:w-4/5">
                <p className="text-sm md:text-md">GitHub APIdays GraphQL State of the Market report</p>
            </div>
          </div>

          <div className="about-client-box md:flex gap-4 my-5 md:px-0 px-5 items-center">
            <div className="about-client-box-image md:w-1/5 w-full md:mb-0 mb-5">
            <StaticImage src="../../static/about/clients/42ChrunchWhitePaper.png" alt="Platformable client" className="img-thumbnail"/>
            </div>
            <div className="about-client-box-text md:w-4/5">
                <p className="text-sm md:text-md">42Crunch white paper</p>
            </div>
          </div>


          <div className="about-client-box md:flex gap-4 my-5 md:px-0 px-5 items-center">
            <div className="about-client-box-image md:w-1/5 w-full md:mb-0 mb-5">
            <StaticImage src="../../static/about/clients/netlify.png" alt="Platformable client" className="img-thumbnail"/>
            </div>
            <div className="about-client-box-text md:w-4/5">
                <p className="text-sm md:text-md">Netlify white paper</p>
            </div>
          </div>
          
<div className="about-client-box md:flex gap-4 my-5 md:px-0 px-5 items-center">
            <div className="about-client-box-image md:w-1/5 w-full md:mb-0 mb-5">
            <StaticImage src="../../static/about/clients/eudatathon.png" alt="Platformable client" className="img-thumbnail"/>
            </div>
            <div className="about-client-box-text md:w-4/5">
                <p className="text-sm md:text-md">Second-place prize winner in European Datathon 2020 to
createa dashboard on Government API value</p>
            </div>
          </div>

        </div>
      </section>


      <section className="commitment">
        <div className="container mx-auto">
        <h3 className="text-center font-black my-5 md:text-2xl text-xl">Our commitment...</h3>

        <div className="commitment-container grid md:grid-cols-2 grid-cols-1">
          <div className="commitment-left px-10 commitment-left-borders py-5">
              <div className="commitment-left-top">
                <div className="flex justify-center items-center my-5 gap-4">
                <StaticImage src="../../static/about/our-commitment/open source icon.png" alt="platformable" className="img-md-thumbnail"/>
                <h4 className="font-black text-center md:text-lg text-sm">...to open source <br />  and open ecosystems</h4>
                <StaticImage src="../../static/about/our-commitment/open ecosystem icon.png" alt="platformable" className="img-md-thumbnail"/>
                </div>
                <p className="mb-5 md:text-md text-sm">We donate/volunteer a percentage
of our work projects to open source
projects and we select open source
technologies where we can.
We allocate internal team time on
building content and products that
can be shared in the open.</p>
                <p className="mb-5 md:text-md text-sm">We offer a 10% discount on our project
pricing to open source community
organisations and non-profits.</p>
                <p className="mb-5">We are building partnerships with
organisations that work on reducing
health inequalities and we look for
opportunities to extend our industry
knowledge in support of vanguards
working in this area.</p>            
              </div>
            </div>
            <div className="commitment-right px-10 commitment-right-borders py-5">
              <div className="commitment-right-top">
              <div className="flex justify-center items-center my-5 gap-4">
              <StaticImage src="../../static/about/our-commitment/diversity icon.png" alt="platformable" className="img-md-thumbnail"/>
              <h4 className="font-black text-center md:text-lg text-sm">...to diversisty <br /> and equity</h4>
              
              <StaticImage src="../../static/about/our-commitment/equity icon.png" alt="platformable" className="img-md-thumbnail"/>
              </div>
              <p className="mb-5 md:text-md text-sm">We are committed to hiring a diverse
workforce that represents the
communities that are not traditionally
prioritised when building communities,
products or services.
This is our hidden strength</p>
                <p className="mb-5 md:text-md text-sm">We track metrics to ensure that when
we highlight examples of best
practices and when we reach out to
industry stakeholders, we reflect
women and migrant-owned
businesses and we cover a diverse
range of use cases for ecosystem.</p>
                <p className="mb-5">We collect metrics that measure
the capacity for open ecosystems
to ensure participation from
under-represented populations
and whether the value of open
ecosystem models is distributed to
all stakeholder groups equitably.</p>            
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
        <h3 className="font-black md:text-2xl text-xl text-center mb-4">
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
                    {/* <GatsbyImage image={getImage(x.position_icon)} alt="Platformable Team"/> */}
                    <div>
                    <h3 className="font-black text-lg text-center leading-tight sm:leading-normal md:text-sm">
                      {`${x.name} ${x.lastname}`}
                    </h3>
                   
                    <p className="text-xs text-center italic font-black">{x.position}</p>
                    {x.pronounce && <p className="text-xs text-center">{x.pronounce}</p>}
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
          pronounce
          image {
            childImageSharp {
              gatsbyImageData(width:320, blurredOptions: {width: 100}, placeholder: BLURRED)
            }
          }
          bio
          position_icon {
            childImageSharp {
              gatsbyImageData(width:32, blurredOptions: {width: 100}, placeholder: BLURRED)
            }
          }
        }
      }
      teamTitle
      content
    }
  }
`
