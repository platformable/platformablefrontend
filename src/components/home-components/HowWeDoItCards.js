import React from "react"
/*assets*/
import buildImg from "../../assets/home/building_tools.png"
import measureImg from "../../assets/home/measuring_value.png"
import bestPracticesImg from "../../assets/home/sharing_best_practices.png"
import connectImg from "../../assets/home/connecting_partners.png"


export const howWeDoitData = [
  {
    src: buildImg,
    title: "Building Tools",
    paragraph: "To grow platforms and ecosystems",
  },
  {
    src: measureImg,
    title: "Measuring Value",
    paragraph: "To identify gaps and opportunities in open ecosystems",
  },
  {
    src: bestPracticesImg,
    title: "Sharing Best Practices",
    paragraph: "To learn from what works",
  },
  {
    src: connectImg,
    title: "Connecting Partners",
    paragraph: "To collaborate effectively",
  },
]
const HowWeDoItCards = () => {

  return (
    <section className="cards-section  mb-10 container mx-auto py-8 border rounded-xl md:px-0 px-5">
      <h2 className="text-center mt-2  mb-10 font-bold">
        How we do it
      </h2>

      <div className="grid md:grid-cols-4 gid-cols-1 gap-5 justify-center">
        {howWeDoitData.map((img, i) => (
          <div
            key={i}
            className="text-center"
          >
            <img src={img.src} alt={img.title} className="w-20 h-20" />
            <div className="">
              <h4 className="my-1 text-center font-bold">{img.title}</h4>
              <p className="text-center">{img.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowWeDoItCards
