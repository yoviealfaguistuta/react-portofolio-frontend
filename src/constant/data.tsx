import { DEFAULT_GOLANG_IMAGE, DEFAULT_JQUERY_IMAGE, DEFAULT_LARAVEL_IMAGE, DEFAULT_REACT_IMAGE } from 'constant/images';
export const TechStackData = [
    {
        name: 'react',
        links: 'https://reactjs.org/',
        alt: 'React - A JavaScript library for building user interfaces',
        images: DEFAULT_REACT_IMAGE,
    },
    {
        name: 'laravel',
        links: 'https://laravel.com/',
        alt: 'Laravel - The PHP Framework for Web Artisans',
        images: DEFAULT_LARAVEL_IMAGE,
    },
    {
        name: 'jquery',
        links: 'https://jquery.com/',
        alt: 'jQuery - Write less do more',
        images: DEFAULT_JQUERY_IMAGE,
    },
    {
        name: 'go',
        links: 'https://go.dev/',
        alt: 'Go - Build fast, reliable, and efficient software at scale',
        images: DEFAULT_GOLANG_IMAGE,
    },
];

export const linkedin = process.env.REACT_APP_LINKEDIN_URL || ''
export const instagram = process.env.REACT_APP_INSTAGRAM_URL || ''
export const github = process.env.REACT_APP_GITHUB_URL || ''
export const email = process.env.REACT_APP_EMAIL_URL || ''
export const telegram = process.env.REACT_APP_TELEGRAM_URL || ''
export const address = process.env.REACT_APP_ADDRESS_URL || ''
export const FOOTER_REACT_ICON = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
export const FOOTER_GO_ICON = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/2560px-Go_Logo_Blue.svg.png"
export const FOOTER_DIGITAL_OCEAN_ICON = "https://static.cdnlogo.com/logos/d/54/digitalocean.svg"
export const GITHUB_CLIENT_APP = "https://github.com/yoviealfaguistuta/react-portofolio-frontend"
export const GITHUB_SERVER_APP = "https://github.com/yoviealfaguistuta/go-portofolio-api"
export const DIGITAL_OCEAN_URL = "https://www.digitalocean.com/"