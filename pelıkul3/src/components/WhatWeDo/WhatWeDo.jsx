'use client'

import React from 'react'
import './WhatWeDo.css'
import { features } from '@/src/utils/data'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { containerVariants, desVariants, tagVariants, titleVariants } from '@/src/utils/animation'

const WhatWeDo = () => {
  return (
    <div className="wwd-wrapper">
        <div className="container">
            <div className="wwd-container">
                {/* head of section */}
                <div className="wwd-head">
                    <motion.span
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className='tag'
                    >qwerqwerwqer</motion.span>
                    <motion.span
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className='title'
                    >
                        {" "}
                        qwerqwerqwerqwerqwerqwerqwerwqrqweqwebkit
                    </motion.span>
                    <motion.span
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={desVariants}
                    className='des'
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laboriosam enim architecto voluptas quibusdam minima officiis quas consectetur doloremque sunt, exercitationem tempore aperiam quod quae voluptates esse at expedita vitae?e</motion.span>
                </div>

                {/* two blocks */}
                <div className="wwd-blocks">
                    {/* first block */}
                    <div className="wwd-block">
                        <motion.span 
                        variants={titleVariants}
                        initial="offscreen"
                        whileInView={"onscreen"}
                        className='sec-title'>
                            lorem
                        </motion.span>
                        <motion.span 
                        variants={desVariants}
                        initial="offscreen"
                        whileInView={"onscreen"}
                        className='text'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo unde, sed nulla quod dicta sint nobis labore molestiae minima voluptatibus dolorum nemo soluta id quis reiciendis est delectus. Rerum, quasi!
                        </motion.span>
                        <div className="block-features">
                            {
                                features.slice(0, 3).map((feature, i)=> (
                                    <motion.div 
                                    initial="offscreen"
                                    whileInView={"onscreen"}
                                    variants={containerVariants((i+1)*0.1)}
                                    className='block-feature' key={i}>
                                        <Image src={feature.icon} alt='feature' width={60} height={60} />
                                        <span>{feature.title}</span>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                    {/* second block */}
                    <div className="wwd-block">
                        <motion.span 
                        variants={titleVariants}
                        initial="offscreen"
                        whileInView={"onscreen"}
                        className='sec-title'>
                            Blue Seed
                        </motion.span>
                        <motion.span 
                        variants={desVariants}
                        initial="offscreen"
                        whileInView={"onscreen"}
                        className='text'>
                            Fund one-offs to scale e.g. product, hiring. 
                        </motion.span>
                        <div className="block-features">
                            {
                                features.slice(3, 6).map((feature, i)=> (
                                    <motion.div 
                                    initial="offscreen"
                                    whileInView={"onscreen"}
                                    variants={containerVariants((i+1)*0.1)}
                                    className='block-feature' 
                                    key={i}>
                                        <Image src={feature.icon} alt='feature' width={60} height={60} />
                                        <span>{feature.title}</span>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                {/* support block */}
                <motion.div 
                initial="offscreen"
                whileInView={"onscreen"}
                variants={containerVariants(0.3)}
                className="wwd-support">
                    {/* left side */}
                    <div>
                        <span className="sec-title">
                            Blue Growth Support
                        </span>
                        <span className="des">
                            Data Insights and full stack expertise to supercharge growth
                        </span>
                    </div>

                    {/* right side */}
                    <div>
                        <span className='text'>
                            Actionable data insights by connecting revenue, marketing and social media platforms
                        </span>
                        <span className='text'>
                            On demand execution expertise at cost or revenue share across proposition design
                            engineering marketing analytics, partnerships, brand, intellectual property, market expansion,
                            talent management.
                        </span>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default WhatWeDo