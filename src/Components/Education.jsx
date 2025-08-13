import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const EDUCATION = [
    
    {
        degree: "Bachelor of Science (B.Sc.) in Mathematics ",
        institution: "Kamaraj Arts Govt College, Surandai",
        year: "2018 - 2021",
        description: "Studied core Mathematics subjects.",
        grade: "First Class"
    },
    {
        degree: "Higher Secondary Education (12th - Bio-Maths)",
        institution: "TPS Govt Boys School",
        year: "2017 - 2018",
        description: "Specialized in Biology and Mathematics",
        grade: "60%"
    },
    {
        degree: "Secondary School Certificate (10th)",
        institution: "A V Higher Secondary School",
        year: "2015 - 2017",
        description: "Completed high school with a strong focus on science and mathematics",
        grade: "80%"
    }
];

const Education = () => {
    useEffect(() => {
        AOS.init(); 
    }, []);
    return (
        <div className='pb-4'>
            <h2 className='my-20 text-center text-4xl'>Education</h2>
            <div>
                {EDUCATION.map((item, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <div className='w-full lg:w-1/4'>
                            <p className='mb-2 text-sm text-stone-400'>{item.year}</p>
                        </div>
                        <div className='w-full max-w-xl lg:w-1/4'>
                            <h3 className='mb-2 font-semibold'>
                                {item.degree}
                                <span className='text-sm text-stone-500'> - {item.institution}</span>
                            </h3>
                            <p className='mb-4 text-stone-400'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
