import React from 'react';
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';

const Labs = () => {


    return (
        <Layout>


            <div className="container mx-auto">
                <div className="labs-hero-container flex md:flex-nowrap flex-wrap my-5 items-center">
                    <div className="labs-hero-left md:w-3/5 w:1/1 md:p-0 p-5">
                        <h3 className="text-3xl font-black labs-main-color-dark">Labs</h3>
                        <p>Lorem ipsum amet adipisicing elit vaccinx. Cumlaud commodi nnnhhdoloremque! Nesciunt unde nobis maiores tempora iusto error mollitia nostrum corporis dignissimos accusantium at, qui debitis odit dolore reprehenderit.</p>

                    </div>
                    <div className="labs-hero-right md:w-2/4 w:1/1">
                        <StaticImage src="../assets/labs/Home Hero.png" placeholder="blurred"/>
                    </div>
                </div>
            </div>


            <section className="bg-pink-50 py-20">
            <div className="container mx-auto md:p-0 px-5">
                <h3 className="text-2xl font-black mb-2 labs-main-color-dark">Current Lab Projects</h3>
                <div className="current-labs-container flex  flex-wrap ">
                    <div className="lab-container flex gap-4 items-center md:w-1/3 mb-2">
                    <StaticImage src="../assets/labs/Open banking-open finance ecosystem data model.png" className="img-thumbnail md:w-1/3" placeholder="blurred"/>
                    <h3 className="text-lg flex-grow md:w-2/3">Open banking / open finance ecosystem data model</h3>

                    </div>
                    <div className="lab-container flex gap-4 items-center md:w-1/3 mb-2">
                    <StaticImage src="../assets/labs/Open health ecosystem model.png" className="img-thumbnail" placeholder="blurred"/>
                    <h3 className="text-lg flex-grow md:w-2/3">Open health ecosystem model</h3>
                    </div>
                    <div className="lab-container flex gap-4 items-center md:w-1/3 mb-2">
                    <StaticImage src="../assets/labs/Equity tool to measure participation in open ecosystems.png" className="img-thumbnail md:w-1/3" placeholder="blurred"/>
                    <h3 className="text-lg md:w-2/3">Equity tool to measure participation in open ecosystems</h3>
                    </div>
                    <div className="lab-container flex gap-4 items-center md:w-1/3 mb-2">
                    <StaticImage src="../assets/labs/Equity tech financing.png" className="img-thumbnail md:w-1/3" placeholder="blurred"/>
                    <h3 className="text-lg md:w-2/3">Equity tech financing</h3>
                    </div>
                    <div className="lab-container flex gap-4 items-center md:w-1/3 mb-2">
                    <StaticImage src="../assets/labs/Open sustainability ecosystem data model.png" className="img-thumbnail md:w-1/3" placeholder="blurred"/>
                    <h3 className="text-lg md:w-2/3">Open sustainability data model</h3>
                    </div>

                    

                </div>
                <span className="labs-main-color-dark">Details on projects below ↓</span>
            </div>
            </section>

            <section className="lab-component my-5 py-5">
                <div className="container mx-auto">
                    <div className="lab-component-container flex px-5">
                        <div className="lab-component-left md:w-3/5 w-1/1 ">
                            <h3 className="text-2xl md:text-5xl font-black mb-5">Open banking / open finance ecosystem data model</h3>
                            <p className="text-sm mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, hic quaerat impedit reprehenderit perspiciatis officia accusantium nihil? Vel aperiam voluptas at, minus, fugit recusandae eaque officia aliquam hic ullam odit? Aliquam vero magnam totam voluptatum, veritatis quod cumque impedit pariatur rerum rem adipisci iure nulla alias dolor. Corrupti, vel dolorem.</p>      
                        </div>
                        <div className="lab-component-right md:w-2/5  hidden inline-block md:flex md:justify-end md:items-start">
                        <StaticImage src="../assets/labs/Open banking-open finance ecosystem data model.png" className="img-thumbnail md:w-1/3" placeholder="blurred"/>
                        </div>
                       
                    </div>
                    <Link className="labs-main-color-dark text-sm px-5">Read more</Link>
                </div>
            </section>

            <section className="lab-component my-5 py-5">
                <div className="container mx-auto">
                    <div className="lab-component-container flex px-5">
                        <div className="lab-component-left md:w-3/5 w-1/1 ">
                            <h3 className="text-2xl md:text-5xl font-black mb-5">Open health ecosystem model</h3>
                            <p className="text-sm mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, hic quaerat impedit reprehenderit perspiciatis officia accusantium nihil? Vel aperiam voluptas at, minus, fugit recusandae eaque officia aliquam hic ullam odit? Aliquam vero magnam totam voluptatum, veritatis quod cumque impedit pariatur rerum rem adipisci iure nulla alias dolor. Corrupti, vel dolorem.</p>      
                        </div>
                        <div className="lab-component-right md:w-2/5  hidden inline-block md:flex md:justify-end md:items-start">
                        <StaticImage src="../assets/labs/Open health ecosystem model.png" className="img-thumbnail" placeholder="blurred"/>
                        </div>
                    </div>
                    <Link className="labs-main-color-dark text-sm px-5">Read more</Link>
                </div>
            </section>

            <section className="lab-component my-5 py-5">
                <div className="container mx-auto">
                    <div className="lab-component-container flex px-5">
                        <div className="lab-component-left md:w-3/5 w-1/1 ">
                            <h3 className="text-2xl md:text-5xl font-black mb-5">Open sustainability data model</h3>
                            <p className="text-sm mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, hic quaerat impedit reprehenderit perspiciatis officia accusantium nihil? Vel aperiam voluptas at, minus, fugit recusandae eaque officia aliquam hic ullam odit? Aliquam vero magnam totam voluptatum, veritatis quod cumque impedit pariatur rerum rem adipisci iure nulla alias dolor. Corrupti, vel dolorem.</p>      
                        </div>
                        <div className="lab-component-right md:w-2/5  hidden inline-block md:flex md:justify-end md:items-start">
                        <StaticImage src="../assets/labs/Equity tool to measure participation in open ecosystems.png" className="img-thumbnail md:w-1/3" placeholder="blurred"/>
                        </div>
                    </div>
                    <Link className="labs-main-color-dark text-sm px-5">Read more</Link>
                </div>
            </section>

            <section className="lab-component my-5 py-5">
                <div className="container mx-auto">
                    <div className="lab-component-container flex px-5">
                        <div className="lab-component-left md:w-3/5 w-1/1 ">
                            <h3 className="text-2xl md:text-5xl font-black mb-5">Equity tool to measure participation in open ecosystem</h3>
                            <p className="text-sm mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, hic quaerat impedit reprehenderit perspiciatis officia accusantium nihil? Vel aperiam voluptas at, minus, fugit recusandae eaque officia aliquam hic ullam odit? Aliquam vero magnam totam voluptatum, veritatis quod cumque impedit pariatur rerum rem adipisci iure nulla alias dolor. Corrupti, vel dolorem.</p>      
                        </div>
                        <div className="lab-component-right md:w-2/5  hidden inline-block md:flex md:justify-end md:items-start">
                        <StaticImage src="../assets/labs/Equity tech financing.png" className="img-thumbnail md:w-1/3" placeholder="blurred"/>
                        </div>
                    </div>
                    <Link className="labs-main-color-dark text-sm px-5">Read more</Link>
                </div>
            </section>

            <section className="lab-component my-5 py-5">
                <div className="container mx-auto">
                    <div className="lab-component-container flex px-5">
                        <div className="lab-component-left md:w-3/5 w-1/1 ">
                            <h3 className="text-2xl md:text-5xl font-black mb-5">Equity tech financing</h3>
                            <p className="text-sm mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, hic quaerat impedit reprehenderit perspiciatis officia accusantium nihil? Vel aperiam voluptas at, minus, fugit recusandae eaque officia aliquam hic ullam odit? Aliquam vero magnam totam voluptatum, veritatis quod cumque impedit pariatur rerum rem adipisci iure nulla alias dolor. Corrupti, vel dolorem.</p>      
                        </div>
                        <div className="lab-component-right md:w-2/5  hidden inline-block md:flex md:justify-end md:items-start">
                        <StaticImage src="../assets/labs/Open sustainability ecosystem data model.png" className="img-thumbnail md:w-1/3" placeholder="blurred"/>
                        </div>
                    </div>
                    <Link className="labs-main-color-dark text-sm px-5">Read more</Link>
                </div>
            </section>

            <section className="my-5   py-5 lab-form">
                <div className="container mx-auto bg-pink-50 rounded-xl p-5">
                    <div className="labs-form-container">
                        <div className="lab-form-top-container flex items-center">
                            <div className="lab-form-top-left-container">
                                <h3 className="text-3xl font-black">Support this project and get exclusive benefits</h3>
                                <p>Your institution can be a Supporter of this porject and receive exclusive material and insights</p>
                            </div>
                            <div className="lab-form-top-right-container flex   items-center">
                            <StaticImage src="../assets/labs/Home Hero.png" placeholder="blurred" className="lab-form-img"/>
                            </div>
                        </div>
                    </div>

                    <div className="labs-form-inputs grid md:grid-cols-3 grid-cols-1 gap-4">
                    
                    <input type="text" name="name" id="lab-form-email" placeholder="name" className="px-10 rounded-xl"/>
                    <input type="email" name="email" id="lab-form-email" placeholder="email" className="px-10 rounded-xl"/>
                    <button className="btn bg-pink-500 rounded-xl p-3">Contact us now</button>

                </div>
                </div>

                
            </section>

        </Layout>
    );
}

export default Labs;
