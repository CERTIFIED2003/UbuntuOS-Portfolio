import React, { Component } from 'react';
import ReactGA from 'react-ga';

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
            "about": <About />,
            "portfolio": <Portfolio />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
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
        ReactGA.pageview(`/${screen}`);

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
                <div className='my-0.5 w-28 md:w-full h-8 px-2 md:px-2.5 flex' >
                    <iframe src="https://github.com/sponsors/certified2003/button" title="Sponsor CERTIFIED2003" width={"100%"} height={"100%"} ></iframe>
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
                    {this.state.screen}
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
                <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">Software Engineer!</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">I'm a <span className=" font-medium">Student</span> currently pursuing Computer Science.
                    I've completed my 2nd Semester at
                    <u className=' cursor-pointer '> <a href="https://www.bitcollege.in/" target={"_blank"} className='text-red-600'>Bengal Institute of Technology</a> </u>,
                    and now I'm looking for Summer'23 Internship opportunities!
                    ( Hit me up <a className='text-underline' href='mailto:im.shubhamlal@gmail.com'><u>@im.shubhamlal@gmail.com</u></a> :)
                </li>
                <li className=" mt-3 list-building"> I enjoy building awesome web apps that solve practical problems.</li>
                <li className=" mt-3 list-time"> When I am not coding my next project, I like to spend my time working on web development, working on game projects or watching <a href="https://www.youtube.com/@Hyperplexed" className='underline text-cyan-500' target="_blank" rel="noreferrer"> Hyperplexed's videos</a>.</li>
                <li className=" mt-3 list-star"> And I also have interest in Artificial Intelligence & Blockchain! Currently exploring Web3🚀</li>
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
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Bengal Institute of Technology
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2022 - Present</div>
                    <div className=" text-sm md:text-base">Computer Science Engineering</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">CGPA &nbsp; 9/10</div>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Class 10<sup>th</sup> (CBSE)
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2018 - 2019</div>
                    <div className=" text-sm md:text-base">Higher Secondary Education</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">Percentile Rank &nbsp; 93%</div>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Class 12<sup>th</sup>
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2020 - 2022</div>
                    <div className=" text-sm md:text-base">Senior Secondary Education</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">Percentile Rank &nbsp; 81%</div>
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
                    I've worked with a wide variety of programming languages & frameworks.
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
    const project_list = [
        // {
        //     name: "",
        //     date: "April 2023",
        //     link: "",
        //     description: [

        //     ],
        //     domains: [""]
        // },
        {
            name: "CrowdFunding | Support Campaigns with Ethereum",
            date: "April 2023",
            link: "https://github.com/CERTIFIED2003/Crowdfunding-Blockchain",
            description: [
                "CrowdFunding allows users to create and fund projects using Ethereum, ensuring transparency and security in the crowdfunding process."
            ],
            domains: ["solidity", "tailwindcss", "ethers.js"]
        },
        {
            name: "Krypt | Blockchain Transaction",
            date: "April 2023",
            link: "https://github.com/CERTIFIED2003/Krypt-Blockchain-Transaction",
            description: [
                "Krypt is a personal project that documents my initial foray into the world of Web3 development. Transfer of Sepolia Ethereum and post a message with gif to be stored in Blockchain network."
            ],
            domains: ["solidity", "tailwindcss", "ethers.js"]
        },
        {
            name: "ToDo App",
            date: "April 2023",
            link: "https://github.com/CERTIFIED2003/ToDo-Internship",
            description: [
                "Full Stack Todo Application. Frontend made with Vite and MongoDB used as Database for Backend. Used Redux for CRUD applications"
            ],
            domains: ["redux", "mongodb", "sass"]
        },
        {
            name: "CertyStore | E-Commerce Site",
            date: "March 2023",
            link: "https://github.com/CERTIFIED2003/ECommerce-Site-v2",
            description: [
                "Full Stack E-Commerce Web App with fully functional Admin's Dashboard"
            ],
            domains: ["mern", "express", "reactjs", "node", "redux", "tailwindcss"]
        },
        {
            name: "Login with IP System",
            date: "March 2023",
            link: "https://github.com/CERTIFIED2003/Login-with-IP-System",
            description: [
                "A simple authentication system. Login for Student, Teacher & Admin. For Student authentication, there is a predefined IP Address env variable assigned in the backend (NETWORK_IP)."
            ],
            domains: ["mern", "express", "reactjs", "node"]
        },
        {
            name: "Twitter Clone",
            date: "Feb 2023",
            link: "https://github.com/CERTIFIED2003/Twitter-Clone",
            description: [
                "Awesome looking Twitter clone build using NextJS + TailwindCSS. Firebase v9 integrated for post creation and file storage. With the support of NewsAPI making this application super awesome.",
            ],
            domains: ["nextjs", "firebase-auth", "firebase-database"]
        },
        {
            name: "Reddit Clone",
            date: "Feb 2023",
            link: "https://github.com/CERTIFIED2003/Reddit-Clone",
            description: [
                "An awesome Reddit clone made with nextjs framework, used Chakra UI for CSS design & Firebase services for entire application's NoSQL.",
            ],
            domains: ["nextjs", "typescript", "chakra-ui", "firebase-auth", "firebase-database", "firebase-storage"]
        },
        {
            name: "Questions Answering AI",
            date: "Jan 2023",
            link: "https://github.com/CERTIFIED2003/question-answering-ai",
            description: [
                "Powerful Query answering AI tool build with Vite, OPENAI & Tailwindcss.",
            ],
            domains: ["vite", "openai", "tailwindcss", "javascript"]
        },
        {
            name: "Image Generator AI",
            date: "Jan 2023",
            link: "https://github.com/certified2003/image-generator-ai",
            description: [
                "Think of an awesome imagination and make it surreal with this awesome Image Generator AI",
            ],
            domains: ["vite", "tailwindcss", "javascript"]
        },
        {
            name: "UbuntuOS",
            date: "Jan 2023",
            link: "https://github.com/certified2003/ubuntuOS-playground",
            description: [
                "Website of theme Ubuntu 20.04, made using NEXT.js & Tailwind CSS",
            ],
            domains: ["next.js", "tailwindcss", "javascript"]
        },
        {
            name: "Clang Social v2",
            noview: true,
            date: "Dec 2022",
            link: "https://clangsocial.netlify.app",
            description: [
                "A free-speech social media app where user can video chat, share their thoughts, images, follow and add friends. So what are you waiting for. Dive into this cool social media platform.",
            ],
            domains: ["reactjs", "mongodb", "javascript"]
        },
        {
            name: "Clang Social App",
            noview: true,
            date: "Jan 2023",
            link: "https://play.google.com/store/apps/details?id=com.casuals4fun.clang_social",
            description: [
                "Clang Social mobile app to make life easier",
            ],
            domains: ["java", "android studio"]
        },
        {
            name: "Clang Social v1",
            noview: true,
            date: "Nov 2022",
            link: "https://clang-social.netlify.app",
            description: [
                "Powered by Sanity databse, this social media app can be used to share images to the community out there.",
            ],
            domains: ["reactjs", "sanity", "javascript"]
        },
        {
            name: "Keeper",
            date: "Dec 2022",
            link: "https://github.com/CERTIFIED2003/keeper_frontend",
            description: [
                "A very much Google Keep lookalike clone.",
            ],
            domains: ["reactjs", "javascript"]
        },
        {
            name: "Infix Operations",
            noview: true,
            date: "Dec 2022",
            link: "https://certified2003.github.io/infix_operation",
            description: [
                "An ultimate Infix Expressions problem solver. Over 10+ hours used to complete the project and bugs fix.",
            ],
            domains: ["html", "css", "javascript"]
        },
        {
            name: "HammerOBots",
            noview: true,
            date: "Jul 2022",
            link: "https://play.google.com/store/apps/details?id=com.Casuals4Fun.HammerOBots",
            description: [
                "An epic battle between Mech robot and Evil Enemy Invasion on a island that has been abandoned and is deserted island long since.",
            ],
            domains: ["unreal engine"]
        },
        {
            name: "Face Recognition System + Attendance System",
            date: "Aug 2022",
            link: "https://github.com/CERTIFIED2003/FacialRecognitionSystem-withAttendance",
            description: [
                "This Project was made specifically for one of my Drone Projects to get Attendance of the acknowledged Personalities.",
            ],
            domains: ["python"]
        },
        {
            name: "Face Mask Detection System",
            date: "Aug 2022",
            link: "https://github.com/CERTIFIED2003/Face-Mask-Detection",
            description: [
                "This Project was made to distinguish the individuals whether they are wearing Mask or not. The model of this is trained by the images of the people wearing mask and those who are without mask.",
            ],
            domains: ["python"]
        },
        {
            name: "Items Detector AI",
            date: "Aug 2022",
            link: "https://github.com/CERTIFIED2003/Items-Detector-AI",
            description: [
                "This Project can help identify the objects throughout the live feed and can be explicitly used for the Security.",
            ],
            domains: ["python"]
        },
        {
            name: "J.A.R.V.I.S",
            date: "Aug 2022",
            link: "https://github.com/CERTIFIED2003/VoiceDetection-AI",
            description: [
                "An intelligent voice recognition software to make life easier.",
            ],
            domains: ["python"]
        },
        {
            name: "Space Shooter Game",
            date: "Sep 2022",
            link: "https://github.com/CERTIFIED2003/py-game",
            description: [
                "A casual space arcade game made with the help of Python's 'pygame' library.",
            ],
            domains: ["pygame", "python"]
        },
        {
            name: "Tic-Tac-Toe Game",
            date: "Oct 2022",
            link: "https://github.com/CERTIFIED2003/TicTacToe_Apk-usingJAVA",
            description: [
                "A basic android tic-tac-toe game.",
            ],
            domains: ["java", "android studio"]
        },
    ];

    const tag_colors = {
        "javascript": "yellow-300",
        "firebase": "red-600",
        "firestore": "red-500",
        "firebase auth": "red-400",
        "chrome-extension": "yellow-400",
        "flutter": "blue-400",
        "dart": "blue-500",
        "react-native": "purple-500",
        "html5": "pink-600",
        "sass": "pink-400",
        "tensorflow": "yellow-600",
        "django": "green-600",
        "python": "green-200",
        "codeforces-api": "gray-300",
        "tailwindcss": "blue-300",
        "next.js": "purple-600",
        "mongodb": "green-600",
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <iframe src="https://github.com/sponsors/certified2003/card" title="Sponsor CERTIFIED2003" className='my-4 w-5/6 md:w-3/4' ></iframe>

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
                                        {project.noview ? "" : <iframe src={`https://ghbtns.com/github-btn.html?user=certified2003&repo=${projectName}&type=star&count=true`} frameBorder="0" scrolling="0" width="150" height="20" title={project.name.toLowerCase() + "-star"}></iframe>}
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
                                                // const borderColorClass = `border-${tag_colors[domain]}`
                                                // const textColorClass = `text-${tag_colors[domain]}`

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
