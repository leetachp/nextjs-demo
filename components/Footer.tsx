import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-10" id="contact">

        <div className="flex flex-col items-center">
            <h1 className="heading lg:max-w-[45vw] ">
                Ready to see <span className="text-purple"> My Portfolio</span> ?
            </h1>
            <p className="text-white-100 md:mt-10 my-5 text-center">Portfolio for applying to KMITL</p>
            <a href="https://www.canva.com/design/DAGWdWdxKm4/LH7Jv1dzSugC3rkob06N_g/edit?utm_content=DAGWdWdxKm4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                <MagicButton
                    title="click this"
                    icon ={<FaLocationArrow />}
                    position="right"
                />
            </a>
        </div>

        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
            <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2024 Tachaya</p>
        </div>
    </footer>
  )
}

export default Footer