
import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';

const ContainerVariable = {
    hidden: { opacity: 0, x: -100 },
    visibility: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, staggerChildren: 0.5 },
    },
};

const childVariant = {
    hidden: { opacity: 0, x: -100 },
    visibility: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
    return (
        <div className='pb-4 lg:mb-36'>
            <div className='flex flex-wrap lg:flex-row-reverse'>
                {/* Image Section */}
                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:p-8'>
                        <motion.img
                            src='/images/vk.png'
                            alt="Hero"
                            className='border border-stone-900 rounded-3xl max-w-full h-auto lg:max-w-md object-cover'
                            width={650}
                            height={650}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.5 }}
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className='w-full lg:w-1/2'>
                    <motion.div
                        className='flex flex-col items-center text-center lg:items-start lg:text-left mt-10'
                        initial="hidden"
                        animate="visibility"
                        variants={ContainerVariable}  
                    >
                        {/* Name Heading */}
                        <motion.h2
                            className='pt-4 text-2xl lg:text-4xl tracking-tighter'
                            variants={childVariant}  
                        >
                            Vishn Kumar
                        </motion.h2>

                        {/* Role with Gradient */}
                        <motion.span
                            className='typing-effect bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl lg:text-3xl tracking-tight text-transparent'
                            variants={childVariant}  // Use child variant
                        >
                            MERN Full Stack Developer
                        </motion.span>

                        {/* Description */}
                        <motion.p
                            className='my-3 max-w-lg py-4 text-lg lg:text-xl leading-normal lg:leading-relaxed'
                            variants={childVariant}  // Use child variant
                        >
                            I am a passionate full stack developer with a knack for crafting robust and scalable web applications. My journey in web development has equipped me with skills in front-end technologies like React and back-end technologies like Node.js, MongoDB, and Express. I am eager to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.
                        </motion.p>
                        
                        <motion.a
                            href='Vishnu Kumar - MERN Stack Developer Resume (1).pdf'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='bg-white rounded-full p-4 text-sm text-stone-800 mb-10'
                            variants={childVariant}  
                        >
                            Download Resume
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
