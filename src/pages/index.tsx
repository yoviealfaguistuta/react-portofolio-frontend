import About from 'components/About';
import MainButton from 'components/MainButton';
import SocialButton from 'components/SocialButton';
import AbilityCard from 'components/AbilityCard';
import UniqueCard from 'components/UniqueCard';
import PortfolioCard from 'components/PortfolioCard';
import CertificateCard from 'components/CertificateCard';
import { DEFAULT_PROFILE_IMAGE } from 'constant/images';
import { DEFAULT_CV_DOCUMENT } from 'constant/document';
import { DEFAULT_AWESOME_AMAZING_JSON, DEFAULT_CLEAN_DESIGN_JSON, DEFAULT_COMPLEXITY_JSON } from 'constant/json';

export const Home = () => {
    return (
        <>
            <section className="hero-fullscreen bg-main parallax">
                <div className="container css-nf_gi4ga">
                    <div className="css-jge_cvjw">
                        <div className="css-fgE_c">
                            <h3 className='text-highlight hello-for-responsive'>Hello, I am</h3>
                            <h1 className='font-bold text-title pb-0 main-title-res'>Yovie Alfa Guistuta</h1>
                            <About isFooter={false} />
                            <div className="button-main-about">
                                <MainButton links={DEFAULT_CV_DOCUMENT} text={"Download Resume"} isFirst={true} />
                                <MainButton links={"mailto:yoviealfaguistuta@gmail.com"} text={"Contact Me"} isFirst={false} />
                            </div>
                        </div>
                        <div className="text-center">
                            <img className='image-about' src={DEFAULT_PROFILE_IMAGE} alt="Yovie Alfa Guistuta" />
                        </div>
                    </div>
                </div>
                <div className="social-bottom-icon">
                    <SocialButton />
                </div>
            </section>
            <section className="pt100 bg-dark mt-cs pb100">
                <div className="background-image">
                    <img src="img/backgrounds/bg-2.jpg" alt="#" />
                </div>
                <div className="container">
                    <div className="col-md-12 text-center pb20">
                        <h2 className='text-title'>Skills and Tech Stack</h2>
                        <p className="text-desc">My <span className="text-highlight">main skills and tech stack</span> when developing system based on here .</p>
                    </div>
                    <div className="row vertical-align">
                        <div className="col-md-12 pt40 pb30">
                            <div className="progress-bars standard transparent-bars">
                                <div className="row">
                                    <div className="col-md-6">
                                        <AbilityCard title={'Frontend Developer'} description={'Develop apps from mockups into code or use my creativity to create awesome UI and still make the UX super easy to use'} icon={['react', 'laravel', 'jquery']} />
                                    </div>
                                    <div className="col-md-6">
                                        <AbilityCard title={'Backend Developer'} description={'Develop API with highly efficiently and make Frontend easy to consume with nice response, complete API documentation and always care about security'} icon={['laravel', 'go']} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="parallax mt-res-unique bg-dark pb90">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center pb20">
                            <h2 className='text-title'>Unique and Strength</h2>
                            <p className="text-desc">My <span className="text-highlight">unique and strength</span> when developing a system</p>
                        </div>
                        <div className="col-md-12">
                            <div className="testimonials quote-icons centered-cd" data-autoplay="false" data-speed={4000}>
                                <UniqueCard json={DEFAULT_AWESOME_AMAZING_JSON} title={'Awesome and Amazing'} description={'When I make a program then I will make it <span className="text-highlight">as good as possible</span> because this is my work<br /> and people will use what I have created. A good rating from them is what I look forward to the most.<i className="vossen-quote text-white" />'} />
                                <UniqueCard json={DEFAULT_COMPLEXITY_JSON} title={'Complexity'} description={'Making programs that are quite detailed is what I like the most. <br />A program with <span className="text-highlight">very complete features</span> makes the results that are done more satisfying<i className="vossen-quote text-white" />'} />
                                <UniqueCard json={DEFAULT_CLEAN_DESIGN_JSON} title={'Clean Design'} description={"The user interface is something that needs to be <span className='text-highlight'>considered</span> in making a program. <br />I don't like the appearance of a crowded or messy program because it's very uncomfortable to look at.<i className='vossen-quote text-white' />"} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-main pt100 pb110">
                <div className="text-center">
                    <div className="text-center pb20">
                        <h2 className='text-title'>My Greatest Portfolio</h2>
                        <p className="text-desc">The following is the system that I have made so far. It will <span className="text-highlight">keep growing</span></p>
                    </div>
                    <div className="container">
                        <PortfolioCard />
                    </div>
                </div>
            </section>

            <section className="bg-dark pt100 pb110">
                <div className="container">
                    <div className="text-center">
                        <div className="text-center pb20">
                            <h2 className='text-title'>My Certificate and Awards</h2>
                            <p className="text-desc">There is <span className="text-highlight">competitions</span>, <span className="text-highlight">training</span> and <span className="text-highlight">workshops</span>.</p>
                        </div>
                        <CertificateCard />
                    </div>
                </div>
            </section>
            <section className="container bg-main pt100 pb110">
                <div className="container">
                    <div className="text-center">
                        <h2 className="text-title">Ready to <span className="bold text-highlight">Kickstart</span> Your Plans ?..</h2>
                        <p className="lead res-lead-kick"><span className="text-highlight">Hire me</span> and i will give you the <span className="text-highlight">best experience</span></p>
                        <div className="button-main-about">
                            <MainButton links={DEFAULT_CV_DOCUMENT} text={"Download Resume"} isFirst={true} />
                            <MainButton links={"mailto:yoviealfaguistuta@gmail.com"} text={"Contact Me"} isFirst={false} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};