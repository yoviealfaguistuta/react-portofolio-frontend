import { email, github, instagram, linkedin, telegram } from 'constant/data';
import { FiLinkedin, FiInstagram, FiGithub, FiMail, FiPhoneCall } from 'react-icons/fi';

const SocialButton = () => {

    const socialBottom = [
        {
            link: linkedin,
            icon: <FiLinkedin />
        },
        {
            link: instagram,
            icon: <FiInstagram />
        },
        {
            link: github,
            icon: <FiGithub />
        },
        {
            link: email,
            icon: <FiMail />
        },
        {
            link: telegram,
            icon: <FiPhoneCall />
        },
    ]

    return (
        <div className="social-bottom-icon">
            {
                socialBottom.map((item, index) => {
                    return (
                        <a key={index + item.link} href={item.link} target={'_blank'} rel="noreferrer" className="text-title">{item.icon}</a>
                    )
                })
            }
        </div>
    )
}

export default SocialButton;