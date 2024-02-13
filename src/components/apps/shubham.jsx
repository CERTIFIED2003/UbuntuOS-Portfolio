import { Component } from 'react';
import ReactGA from 'react-ga4';
import { project_list, tag_colors } from '../../projects.config';

export class AboutShubham extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": About,
            "portfolio": Portfolio,
            "education": Education,
            "experience": Experience,
            "skills": Skills,
            "projects": Projects,
            "resume": Resume,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });

        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about shubham" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="portfolio" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "portfolio" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about shubham" src="./themes/Yaru/status/portfolio.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Portfolio</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="shubham's education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="experience" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "experience" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="shubham's experience" src="./themes/Yaru/status/experience.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Experience</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="shubham's skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="shubham's projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="shubham's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
                <div className='my-0.5 w-28 md:w-full h-8 hidden md:flex' >
                    <iframe src="https://github.com/sponsors/Shubham-Lal/button" title="Sponsor Shubham-Lal" width={"100%"} height={"100%"} ></iframe>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen && <this.state.screen />}
                </div>
            </div>
        );
    }
}

export default AboutShubham;

export const displayAboutShubham = () => {
    return <AboutShubham />;
}

function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/bitmoji.png" alt="shubham Patel Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>My name is <span className="font-bold">Shubham Lal</span> ,</div>
                <div className="font-normal ml-1">I&apos;m a <span className="text-pink-600 font-bold">Developer</span>.</div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">I&apos;m a <span className=" font-medium">Student</span> currently pursuing Computer Science.
                    I&apos;ve completed my 5th Semester at
                    <u className=' cursor-pointer '> <a href="https://www.bitcollege.in/" target={"_blank"} rel="noreferrer" className='text-red-600'>Bengal Institute of Technology</a> </u>,
                    and now I&apos;m looking for Summer&apos;24 Internship opportunities!
                    Hit me up <a className='text-underline' href='mailto:contact@shubhamlal.in'><u>@contact@shubhamlal.in</u></a>
                </li>
                <li className=" mt-3 list-building">Actively engaged in building efficient back-end solutions.</li>
                <li className=" mt-3 list-time">When I am not coding my next project, I like to spend my time working on web development, working on game projects or watching <a href="https://www.youtube.com/@Hyperplexed" className='underline text-cyan-500' target="_blank" rel="noreferrer"> Hyperplexed&apos;s videos</a>.</li>
                <li className=" mt-3 mb-4 list-star">And I also have interest in Artificial Intelligence & Blockchain! Currently exploring Web3🚀</li>
            </ul>
        </>
    )
}

function Portfolio() {
    return (
        <iframe src="https://shubhamlal.pages.dev" frameBorder="0" title="My Portfolio" className="h-full w-full bg-ub-cool-grey"></iframe>
    )
}

function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className="w-10/12 my-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Bengal Institute of Technology
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2021 - Present</div>
                    <div className=" text-sm md:text-base">Computer Science Engineering</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">CGPA &nbsp; 9/10</div>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Class 12<sup>th</sup>
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2019 - 2021</div>
                    {/* <div className=" text-sm md:text-base">Senior Secondary Education</div> */}
                    <div className="text-sm text-gray-300 font-bold mt-1">Percentile Rank &nbsp; 81%</div>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Class 10<sup>th</sup>
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2018 - 2019</div>
                    {/* <div className=" text-sm md:text-base">Higher Secondary Education</div> */}
                    <div className="text-sm text-gray-300 font-bold mt-1">Percentile Rank &nbsp; 93%</div>
                </li>
            </ul>
        </>
    )
}

function Experience() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Experience
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12 my-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className="flex flex-col lg:flex-row gap-0.5 lg:gap-2 lg:items-center">
                        <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                            AI Chef Master
                        </div>
                        <div className=" text-sm text-gray-400">Feb 2024 - Present</div>
                    </div>
                    <div className=" text-sm md:text-base">Frontend Developer Intern</div>
                </li>
                <li className="list-disc mt-5">
                    <div className="flex flex-col lg:flex-row gap-0.5 lg:gap-2 lg:items-center">
                        <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                            GDSC Bengal Institute of Technology
                        </div>
                        <div className=" text-sm text-gray-400">Sep 2023 - Present</div>
                    </div>
                    <div className=" text-sm md:text-base">Lead Web Developer</div>
                </li>
                <li className="list-disc mt-5">
                    <div className="flex flex-col lg:flex-row gap-0.5 lg:gap-2 lg:items-center">
                        <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                            eZ- "The One" App
                        </div>
                        <div className=" text-sm text-gray-400">Aug 2023 - Oct 2023</div>
                    </div>
                    <div className=" text-sm md:text-base">Back-End Developer Intern</div>
                </li>
                <li className="list-disc mt-5">
                    <div className="flex flex-col lg:flex-row gap-0.5 lg:gap-2 lg:items-center">
                        <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                            freeCodeCamp
                        </div>
                        <div className=" text-sm text-gray-400">May 2023 - Jun 2023</div>
                    </div>
                    <div className=" text-sm md:text-base">Open Source Developer</div>
                </li>
            </ul>
        </>
    )
}

function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    I&apos;ve worked with a wide variety of programming languages & frameworks.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> My areas of expertise are both <strong className="text-ubt-gedit-orange">front-end and back-end development, React.js & javascript!</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="shubham javascript" />
                        <img className="m-1" src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white" alt="shubham c++" />
                        <img className="m-1" src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="shubham python" />
                        <a href="https://www.google.com/search?q=is+html+a+language%3F" target="_blank" rel="noreferrer"><img title="yes it's a language!" className="m-1" src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff" alt="shubham HTML" /></a>
                        <img src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat&logo=firebase&logoColor=ffffff" alt="shubham firebase" className="m-1" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className=" m-1" src="https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=ffffff" alt="shubham next" />
                        <img className=" m-1" src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff" alt="shubham react" />
                        <img className="m-1" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="shubham tailwind css" />
                        <img src="https://img.shields.io/badge/-Nodejs-339933?style=flat&logo=Node.js&logoColor=ffffff" alt="shubham node.js" className="m-1" />
                        <img className="m-1" src="https://img.shields.io/badge/Redux-593D88?style=flat&logo=redux&logoColor=white" alt="shubham redux" />
                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> And of course,</span> <img className=" inline ml-1" src="https://img.shields.io/badge/-Unreal%20Engine-black" alt="shubham unreal engine" /> <span>!</span>
                </li>
            </ul>
        </>
    )
}

function Projects() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <iframe src="https://github.com/sponsors/Shubham-Lal/card" title="Sponsor Shubham-Lal" className='md:w-full' ></iframe>

            {
                project_list.map((project, index) => {
                    const projectNameFromLink = project.link.split('/')
                    const projectName = projectNameFromLink[projectNameFromLink.length - 1]
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                        <div className=" text-base md:text-lg mr-2">{project.name.toLowerCase()}</div>
                                        {project.noview ? "" : <iframe src={`https://ghbtns.com/github-btn.html?user=Shubham-Lal&repo=${projectName}&type=star&count=true`} frameBorder="0" scrolling="0" width="150" height="20" title={project.name.toLowerCase() + "-star"}></iframe>}
                                    </div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains
                                            ? project.domains.map((domain, index) => {
                                                const borderColorClass = `${tag_colors[domain]}`
                                                const textColorClass = `text-${tag_colors[domain]}`

                                                return <span key={index} className={`px-1.5 py-0.5 w-max border border-${borderColorClass} ${textColorClass} m-1 rounded-full`}>{domain}</span>
                                            })
                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}

function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Resume-Shubham-Lal.pdf" title="Shubham Lal's Resume" frameBorder="0"></iframe>
    )
}