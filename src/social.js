import { FaLinkedinIn } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import "./social.css"

export default function Social() {

    return (
        <div className='socialLinks'>
            <FaLinkedinIn />
            <FaFacebookF />
            <FaGithub />
            <FaEnvelope />
        </div>
    )
}