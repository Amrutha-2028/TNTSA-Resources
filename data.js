/* =========================================================
   TENNESSEE TSA · 2026–2027 HIGH SCHOOL COMPETITIVE EVENTS
   ---------------------------------------------------------
   Every fact below comes from a 2026–27 source. Each one is
   listed in SOURCES and linked on the event pages.

   Last checked against sources: November 19, 2026
   ========================================================= */

const SEASON = {
    label: "2026–2027",
    lastChecked: "November 19, 2026",
    nationalTheme: "Forward to Fifty",
    nationalDates: "June 23–27, 2027",
    nationalCity: "Orlando, FL",
    slcDates: "March 3–6, 2027",
    slcVenue: "Chattanooga Convention Center, Chattanooga, TN",
    rlcDate: "January 15, 2027",
    rlcVenue: "Virtual",
    rlcTheme: "Beyond the Blueprint"
};

const SOURCES = {
    nationalEvents: {
        label: "TSA High School Competitions (2027 & 2028 guide)",
        url: "https://tsaweb.org/competitions/high-school"
    },
    themes: {
        label: "TSA Themes and Problems, 2026–2027",
        url: "https://tsaweb.org/competitions/themes-and-problems"
    },
    eligibility: {
        label: "2027 & 2028 High School Eligibility Chart (PDF)",
        url: "https://tsaweb.org/docs/default-source/competitions/hs-events-eligibility-charts.pdf?sfvrsn=5754d9_2"
    },
    updates: {
        label: "TSA Competition Updates",
        url: "https://tsaweb.org/competitions/competition-updates"
    },
    presub: {
        label: "TSA Preconference Submission Requirements",
        url: "https://tsaweb.org/competitions/competitive-event-preconference-submission-requirements"
    },
    approval: {
        label: "TSA State Advisor Approval Events",
        url: "https://tsaweb.org/competitions/state-advisor-approval-events"
    },
    natRequirements: {
        label: "2027 National Conference Competition Requirements",
        url: "https://tsaweb.org/competitions/competition-requirements"
    },
    natDates: {
        label: "2027 National TSA Conference: Dates & Deadlines",
        url: "https://tsaweb.org/conferences/2027-national-tsa-conference/dates-and-deadlines_2027"
    },
    tnSlc: {
        label: "Tennessee TSA State Leadership Conference",
        url: "https://tntsa.org/slc"
    },
    tnSlcEvents: {
        label: "TNTSA SLC 2027 Event Eligibility & Adjustments (updated Sept. 24, 2026)",
        url: "https://docs.google.com/document/d/12yZI1QBnh5WCqk3A1EiKOm1LpzBPqfAiEuX1um8VYVE/edit?usp=sharing"
    },
    tnRlc: {
        label: "Tennessee TSA Regional Leadership Conference",
        url: "https://www.tntsa.org/rlc"
    },
    tnRlcEvents: {
        label: "TNTSA Regional 2027 Event Eligibility & Adjustments (updated Sept. 9, 2026)",
        url: "https://docs.google.com/document/d/1NNzXCL5ufJJEC7i94krYrUgceKnXsv7kGZ7DM9VdXiw/edit?usp=sharing"
    },
    tnRlcGuide: {
        label: "2027 Tennessee TSA Regional Conference Guide",
        url: "https://docs.google.com/document/d/15Bxj-IlGR5WF2b442mvXWaGP_rinlWD2bCz4sH-N6dE/edit?usp=sharing"
    }
};

/* Official TSA high school categories (tsaweb.org). */
const CATEGORIES = {
    "arch": "Architecture & Construction Technology",
    "comm": "Communications Technology",
    "cs": "Computer Science",
    "lead": "Leadership",
    "mfg": "Manufacturing & Transportation Technology",
    "stem": "STEM (General)",
    "arts": "STEM & the Arts",
    "research": "Technology & Research"
};

/* =========================================================
   KEY DATES · 2026–2027
   type: "rlc" | "slc" | "nat"
   ========================================================= */

const KEY_DATES = [
    { date: "2026-12-01", label: "Affiliation deadline to compete at Regionals", type: "rlc", src: "tnRlc" },
    { date: "2026-12-08", label: "Regional registration opens (9 a.m. ET)", type: "rlc", src: "tnRlcGuide" },
    { date: "2026-12-11", label: "Regional registration deadline (5 p.m. ET)", type: "rlc", src: "tnRlcGuide" },
    { date: "2027-01-05", end: "2027-01-07", label: "Regional pre-submission window (noon ET to noon ET); prompts released Jan. 5", type: "rlc", src: "tnRlcGuide" },
    { date: "2027-01-07", label: "Affiliation deadline to compete at State", type: "slc", src: "tnSlc" },
    { date: "2027-01-15", label: "Regional Leadership Conference: live sessions & events (virtual)", type: "rlc", src: "tnRlc" },
    { date: "2027-01-19", label: "Regional awards video released (noon ET)", type: "rlc", src: "tnRlcGuide" },
    { date: "2027-01-21", end: "2027-01-28", label: "State conference registration open", type: "slc", src: "tnSlc" },
    { date: "2027-02-08", label: "State pre-submission instructions released", type: "slc", src: "tnSlcEvents" },
    { date: "2027-02-12", label: "State payment deadline; housing closes", type: "slc", src: "tnSlc" },
    { date: "2027-02-15", end: "2027-02-17", label: "State pre-submission window (9 a.m. ET Feb. 15 to 5 p.m. ET Feb. 17)", type: "slc", src: "tnSlcEvents" },
    { date: "2027-03-03", end: "2027-03-06", label: "State Leadership Conference, Chattanooga", type: "slc", src: "tnSlc" },
    { date: "2027-05-12", label: "National competitive event registration deadline", type: "nat", src: "natDates" },
    { date: "2027-05-17", end: "2027-05-19", label: "National pre-submission upload window", type: "nat", src: "natDates" },
    { date: "2027-06-23", end: "2027-06-27", label: "National TSA Conference, Orlando", type: "nat", src: "natDates" }
];

/* =========================================================
   REUSABLE TENNESSEE NOTES
   ========================================================= */

const TN = {
    rlcPresub:
        "Pre-submission window opens January 5 at 12 p.m. (noon) ET and closes January 7 at 12 p.m. (noon) ET for all event materials.",
    slcPresub:
        "Requires a pre-submission. The window opens 9 a.m. ET Monday, February 15 and closes 5 p.m. ET Wednesday, February 17. Submission instructions are released Monday, February 8.",
    slcTesting:
        "On-site, proctored testing is held in a Wednesday-night window. Teams may arrive any time in the window, but everyone from a chapter competing in that event must start the exam at the same time.",
    slcSpeaking:
        "Unlike in previous years, TNTSA will hold both a preliminary and a semifinal round for all speaking events."
};

/* =========================================================
   EVENTS
   ---------------------------------------------------------
   summary      Official event description (tsaweb.org)
   eligibility  National eligibility (2027 & 2028 chart)
   theme        2026–27 theme / problem (Themes & Problems)
   specs        Key numbers from the official 2027 problem PDF
   updates      Official TSA competition updates for this guide
   natPresub    National pre-conference uploads
   approval     Needs state advisor approval for Nationals
   tn.rlc       Tennessee Regional (null = not offered)
   tn.slc       Tennessee State (null = not on the list)
   refs         Extra links (official first)
   gaps         Known missing 2026–27 information
   ========================================================= */

const EVENTS = [

{
    slug: "animatronics",
    title: "Animatronics",
    cat: "arts",
    summary: "To address the annual design challenge, participants exhibit and demonstrate their knowledge of mechanical and control systems by creating an animatronic device with a specific purpose (i.e., communicate an idea, entertain, demonstrate a concept, etc.) that includes sound, lights, and an appropriate surrounding environment (a display).",
    eligibility: "Three (3) teams of two to three (2–3) team members per state",
    team: "Team of 2–3",
    approval: true,
    theme: {
        label: "Design Problem",
        title: "Turning classic tales into a mechanical marvel",
        text: ["Bring a story to life following the Animatronics rules."]
    },
    tn: {
        rlc: null,
        slc: {
            eligibility: "Two (2) teams per chapter",
            notes: ["No on-site check-in. Teams sign up for a time online.", "Only one presentation/interview takes place, and all teams participate in it."]
        }
    }
},

{
    slug: "architectural-design",
    title: "Architectural Design",
    cat: "arch",
    summary: "In response to the annual design challenge, participants develop a set of architectural plans and related materials, and construct both a physical and computer-generated model and virtual walkthrough to accurately depict their design. Semifinalists deliver a presentation and participate in an interview.",
    eligibility: "Two (2) teams of two to four (2–4) members per state; individual entries are permitted",
    team: "Individual or team of 2–4",
    approval: true,
    natPresub: ["Documentation portfolio (PDF)", "Virtual walk-through (URL)"],
    theme: {
        label: "2027 Design Problem",
        title: "A family-themed restaurant",
        text: [
            "Design a family themed restaurant that is the type and purpose of the team’s choice. A theme restaurant aims to create a unique and immersive experience for diners, such as cultural or historical periods, nature, experiential dining, or storytelling."
        ],
        list: [
            "Research restaurant types, design, planning, and construction.",
            "Treat the site as if it is in Orange County, Florida, and use those building codes and locally available materials. It does not have to be a real property.",
            "Maximum land space: 2 acres. The solution and study model do not have to use the whole site.",
            "At minimum: a foyer, a waiting area, seating for a maximum of 150 customers, restrooms, office space, food preparation, storage, and food delivery pick-up.",
            "Vehicle parking belongs in the planning and drawings, but the study model focuses on the restaurant.",
            "One to three floors.",
            "No copyright infringement, and no breaking TSA general rules (for example: no wine, bar, bar service, violence, or weapons; appropriate attire for employees and guests).",
            "Study model site board: 20″ × 20″ maximum."
        ],
        link: {
            label: "2027 Architectural Design Problem (PDF)",
            url: "https://tsaweb.org/docs/default-source/competitions/themes-and-problems-2026-2027/high-school/2027-architecutral-design-problem.pdf?sfvrsn=9f840cf2_1"
        }
    },
    tn: {
        rlc: {
            eligibility: "Two (2) teams of two to six (2–6) per chapter",
            notes: [TN.rlcPresub, "The semifinalist challenge will not be hosted."]
        },
        slc: {
            eligibility: "Two (2) individuals or teams per chapter",
            presub: true,
            notes: [TN.slcPresub]
        }
    },
    refs: [
        { label: "Florida Building Code (official site)", url: "https://www.floridabuilding.org/c/default.aspx", note: "The problem says to use Orange County, Florida codes." }
    ]
},

{
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    cat: "cs",
    summary: "Applying leadership and 21st century skills, participants demonstrate knowledge of artificial intelligence (AI) concepts, models, and best practices by completing a test to qualify for semifinals. Semifinalist teams solve an onsite problem(s) using a generative artificial intelligence (GenAI) tool. Completed solutions are objectively measured to determine the best solution for the stated problem.",
    eligibility: "One (1) team of two (2) individuals per chapter",
    team: "Team of 2",
    onsiteTest: true,
    noTheme: "This event has no annual theme. Semifinalists solve a problem revealed onsite.",
    tn: {
        rlc: null,
        slc: {
            eligibility: "Two (2) teams per chapter",
            notes: [TN.slcTesting]
        }
    }
},

{
    slug: "audio-podcasting",
    title: "Audio Podcasting",
    cat: "comm",
    summary: "Participants use digital audio technology to create original content for a podcast piece that addresses the annual theme. The podcast must feature high level storytelling techniques, voice acting, and folly sound effects; the full entry must include documentation of the podcast development process and elements. Semifinalists participate in an interview.",
    eligibility: "Three (3) teams per state; individual entries are permitted",
    team: "Individual or team",
    approval: true,
    natPresub: ["Documentation portfolio (PDF)", "Audio podcast (URL)"],
    onsiteUpload: "Semifinalists upload their semifinal entry to JudgePro at Nationals.",
    theme: {
        label: "Theme",
        title: "“The Debate Desk”",
        text: ["Students create an audio podcast presenting multiple perspectives on a controversial topic in STEM, society, education, health, or the environment."]
    },
    tn: {
        rlc: {
            eligibility: "Two (2) individuals or teams per chapter",
            notes: [TN.rlcPresub, "The semifinalist challenge will not be hosted."]
        },
        slc: {
            eligibility: "Two (2) individuals or teams per chapter",
            presub: true,
            notes: [TN.slcPresub, "Semifinalists submit the on-site challenge through the same platform as pre-submission events."]
        }
    }
},

{
    slug: "automated-manufacturing-systems",
    title: "Automated Manufacturing Systems",
    cat: "cs",
    also: ["research"],
    summary: "Applying leadership and 21st century skills, participants collaborate to engineer and prototype an automated manufacturing system to solve a production problem. Teams analyze the prompt, build a sensor-based mechatronic solution, program the automation logic, document the mechanical and software design, and create instructions for judges to operate the system.",
    eligibility: "Two (2) teams of two to three (2–3) members per state",
    team: "Team of 2–3",
    approval: true,
    noTheme: "No annual theme is posted on the 2026–27 Themes and Problems page. Teams respond to the prompt given in the event.",
    tn: {
        rlc: null,
        slc: {
            eligibility: "Two (2) teams of three (3) individuals per chapter",
            notes: ["This event is based on the previous System Control Technology event. Review the Competitive Events Guide for the specific changes."]
        }
    }
},

{
    slug: "biotechnology-design",
    title: "Biotechnology Design",
    cat: "research",
    summary: "Participants select a contemporary biotechnology problem that addresses the annual theme and demonstrates understanding of the topic through documented research, the development of a solution, a display (including an optional model or prototype), and an effective multimedia presentation. Semifinalists deliver a presentation and participate in an interview.",
    eligibility: "One (1) team per chapter",
    team: "Team",
    theme: {
        label: "Topic",
        title: "Biosensors for Disease Detection",
        text: [
            "Biosensors use biological molecules, cells, or enzymes to detect specific chemicals or disease markers. These tools are increasingly important in medical diagnostics, environmental monitoring, and food safety.",
            "Present the science behind biosensors and demonstrate one use of biosensor technology in detecting or monitoring disease."
        ]
    },
    tn: {
        rlc: null,
        slc: { eligibility: "Two (2) teams per chapter", notes: [] }
    },
    refs: [
        { label: "NIBIB: Science Education topics (NIH)", url: "https://www.nibib.nih.gov/science-education", note: "Background on sensors and bioengineering from the National Institutes of Health." },
        { label: "NIBIB: Bioanalytical Sensors program (NIH)", url: "https://www.nibib.nih.gov/programs/sensors" }
    ]
},

{
    slug: "board-game-design",
    title: "Board Game Design",
    cat: "arts",
    summary: "Participants develop, build, and package a board game that focuses on a subject of their choice. Creative packaging, and the instructions, pieces, and cards associated with the pilot game will be evaluated. Semifinalists set up the game, demonstrate how the game is played, explain the game’s features, and discuss the design process.",
    eligibility: "Three (3) teams of two to four (2–4) individuals per state",
    team: "Team of 2–4",
    approval: true,
    noTheme: "No annual theme. Teams choose their own subject.",
    tn: {
        rlc: null,
        slc: { eligibility: "Two (2) teams per chapter", notes: [] }
    }
},

{
    slug: "chapter-team",
    title: "Chapter Team",
    cat: "lead",
    summary: "Participants take a parliamentary procedure test to qualify for the semifinal round of competition. Semifinalists conduct an opening ceremony, items of business, parliamentary actions, and a closing ceremony.",
    eligibility: "One (1) team of six (6) members per chapter",
    team: "Team of 6",
    onsiteTest: true,
    noTheme: "No annual theme.",
    tn: {
        rlc: {
            eligibility: "Three (3) teams per chapter",
            notes: ["The selected subtopic is released January 5 at noon ET. A video recording of the business meeting and a scanned PDF of the handwritten business minutes are due January 7 at noon ET to the online submission portal."]
        },
        slc: {
            eligibility: "Two (2) teams of six (6) individuals per chapter",
            notes: [TN.slcTesting]
        }
    }
},

{
    slug: "childrens-stories",
    title: "Children’s Stories",
    cat: "comm",
    summary: "In response to the annual theme, participants create an illustrated children’s story of artistic, instructional, and social value, and submit documentation related to the development of the physical storybook. Semifinalists read their story aloud and participate in an interview.",
    eligibility: "Three (3) teams or three (3) individuals per state",
    team: "Individual or team",
    approval: true,
    theme: {
        label: "Theme",
        title: "A graphic novel / comic book",
        text: ["Binding cannot be stapled."]
    },
    tn: {
        rlc: {
            eligibility: "Two (2) individuals or teams per chapter",
            notes: [TN.rlcPresub, "Submit a PDF with scanned pages of the book, including the front and back cover.", "Semifinalist interviews will not be conducted."]
        },
        slc: { eligibility: "Two (2) individuals or teams per chapter", notes: [] }
    }
},

{
    slug: "cad-architecture",
    title: "Computer-Aided Design (CAD), Architecture",
    short: "CAD, Architecture",
    cat: "arch",
    summary: "Participants use complex computer graphic skills, tools, and processes to respond to a design challenge in which they develop representations of architectural subjects, such as foundation and/or floor plans, and/or elevation drawings, and/or details of architectural ornamentation or cabinetry. The solution to the design challenge and participant answers in an interview are evaluated.",
    eligibility: "Two (2) individuals per state",
    team: "Individual",
    approval: true,
    onsiteUpload: "The onsite design problem solution is uploaded to JudgePro at Nationals.",
    noTheme: "No annual theme. The design challenge is given onsite.",
    tn: {
        rlc: null,
        slc: { eligibility: "Two (2) individuals per chapter", notes: [] }
    }
},

{
    slug: "cad-engineering",
    title: "Computer-Aided Design (CAD), Engineering",
    short: "CAD, Engineering",
    cat: "arch",
    summary: "Participants use complex computer graphic skills, tools, and processes to respond to a design challenge in which they develop three-dimensional representations of engineering subjects, such as a machine part, tool, device, or manufactured product. The solution to the design challenge and participant answers in an interview are evaluated.",
    eligibility: "Two (2) individuals per state",
    team: "Individual",
    approval: true,
    onsiteUpload: "The onsite design problem solution is uploaded to JudgePro at Nationals.",
    noTheme: "No annual theme. The design challenge is given onsite.",
    tn: {
        rlc: null,
        slc: { eligibility: "Two (2) individuals per chapter", notes: [] }
    }
},

{
    slug: "cybersecurity",
    title: "Cybersecurity",
    cat: "cs",
    summary: "Applying leadership and 21st century skills, participants respond to a cybersecurity challenge by identifying a breach in computer security via “Capture the Flag” games. Areas of challenge might include exploit development, digital puzzles, cryptography, reverse engineering, binary analysis, mobile security, etc. Participants must accurately address a series of on-site problems within a specified, limited amount of time.",
    eligibility: "One (1) team of two to four (2–4) members per chapter; one (1) entry per team",
    team: "Team of 2–4",
    noTheme: "No annual theme. Problems are given onsite.",
    tn: { rlc: null, slc: null },
    gaps: ["Cybersecurity is not on TNTSA’s 2027 State Leadership Conference high school event list (updated Sept. 24, 2026). Ask your advisor before planning on it in Tennessee."],
    refs: [
        { label: "picoCTF: Get started (Carnegie Mellon)", url: "https://picoctf.org/get_started.html", note: "Free capture-the-flag practice in the picoGym." },
        { label: "The CTF Primer", url: "https://primer.picoctf.org/" }
    ]
},

{
    slug: "data-science-and-analytics",
    title: "Data Science and Analytics",
    cat: "cs",
    summary: "Participants identify a societal issue, collect or compile data from various sources about the issue, and then produce documentation and a digital scientific poster about their findings. Semifinalists create a synopsis and digital visual representation of a data set provided in an onsite challenge.",
    eligibility: "Three (3) teams of two (2) individuals per state; individual entries are permitted",
    team: "Individual or team of 2",
    approval: true,
    natPresub: ["Documentation portfolio (PDF)", "Photo/film/video consent forms, if applicable (PDF)"],
    theme: {
        label: "Theme",
        title: "An AI-generated climate & sustainability dataset",
        text: [
            "Identify and use one AI-generated dataset related to Climate and Environmental Sustainability for analysis and research.",
            "Competitors may use an artificial intelligence tool to create the dataset, provide the resulting data file in a structured format (such as CSV, XLSX, or JSON), and cite the artificial intelligence tool, model (if available), and prompts or queries used to generate the dataset."
        ],
        link: {
            label: "Scientific Poster Template (PPTX, linked on the 2026–27 page)",
            url: "https://tsaweb.org/docs/default-source/competitions/themes-and-problems-2025-2026/scientific-poster-template.pptx?sfvrsn=a92c1471_1"
        }
    },
    updates: [{ date: "8/20/2026", text: "See updated Theme." }],
    tn: {
        rlc: {
            eligibility: "Three (3) teams of two (2) individuals per chapter",
            notes: [TN.rlcPresub, "Semifinalist interviews will not be conducted."]
        },
        slc: {
            eligibility: "Two (2) individuals or teams of two (2) per chapter",
            presub: true,
            notes: [TN.slcPresub]
        }
    }
},

{
    slug: "debating-technological-issues",
    title: "Debating Technological Issues",
    cat: "comm",
    summary: "Participants research the annual topic and subtopics and prepare for a debate against a team from another chapter. Teams are instructed to take either the pro or con side of a selected subtopic, submit a summary of references, and use their research to support their assigned position. The quality of a team’s debate determines semifinalists and finalists.",
    eligibility: "Three (3) teams of two (2) individuals per state",
    team: "Team of 2",
    approval: true,
    theme: {
        label: "Theme",
        title: "Artificial Intelligence in Medicine",
        list: [
            "Topic 1: AI diagnostic tools should be allowed to make medical decisions without final approval from a physician.",
            "Topic 2: The use of AI in healthcare will improve access to care more than it will increase medical bias.",
            "Topic 3: Patients should have the right to know when AI is involved in their diagnosis or treatment plan."
        ]
    },
    updates: [{ date: "8/24/2026", text: "“Official Rating Form, Go No Go: Documentation Portfolio (two [2] complete copies required): PRELIMINARY ROUND Debate Procedures B. Teams will have one (1) minute to prepare.”", verbatim: true }],
    tn: {
        rlc: {
            eligibility: "Three (3) teams of two (2) individuals per chapter",
            live: true,
            notes: [
                "Held live on Zoom. Time sign-ups run Tuesday, January 12 (9 a.m. ET) to Wednesday, January 13 (5 p.m. ET). Missing sign-ups could mean disqualification.",
                "Teams draw the prompt and their pro/con stance on arrival and get 5 minutes to prepare.",
                "Have your resource page ready to show the judges. Not having one could mean disqualification."
            ]
        },
        slc: {
            eligibility: "Two (2) teams of two (2) individuals per chapter",
            notes: [TN.slcSpeaking]
        }
    },
    refs: [
        { label: "FDA: List of AI-Enabled Medical Devices", url: "https://www.fda.gov/medical-devices/artificial-intelligence-enabled-medical-devices/list-artificial-intelligence-enabled-medical-devices", note: "Primary source for which AI medical devices are authorized in the U.S." }
    ]
},

{
    slug: "digital-video-production",
    title: "Digital Video Production",
    cat: "arts",
    summary: "Participants develop and submit a digital video and a documentation portfolio (including such items as a storyboard, script, summary of references and sources, and equipment list) that reflects the annual theme. Semifinalists participate in an interview.",
    eligibility: "Three (3) teams or three (3) individuals per state",
    team: "Individual or team",
    approval: true,
    natPresub: ["Documentation portfolio (PDF)", "Digital video (URL)"],
    theme: {
        label: "Theme",
        title: "A 1990s-style infomercial",
        text: ["Create an infomercial with a product and in the style of the 1990s."]
    },
    tn: {
        rlc: {
            eligibility: "Two (2) individuals or teams per chapter",
            notes: [TN.rlcPresub, "Expect to turn in a link, such as a shareable Google Drive folder or an unlisted YouTube link.", "Semifinalist interviews will not be conducted."]
        },
        slc: {
            eligibility: "Two (2) individuals or teams per chapter",
            presub: true,
            notes: [TN.slcPresub]
        }
    }
},

{
    slug: "dragster-design",
    title: "Dragster Design",
    cat: "mfg",
    summary: "Participants design, draw, and construct a CO2-powered dragster that adheres to specifications, design and documentation requirements, and the annual theme. Semifinalists compete in a double-elimination race and participate in an interview.",
    eligibility: "Two (2) individuals per chapter",
    team: "Individual",
    theme: {
        label: "Theme",
        title: "INSIDE / OUT",
        text: ["One axle (front or rear) must use internal wheels, while the opposite axle must use external wheels. You choose which is front and which is rear."],
        list: [
            "Internal: the wheels must be enclosed by the vehicle body on the top and both sides above the axle. The bottom of the wheel stays exposed.",
            "External: the wheels must be completely outside the vehicle body. No part of the body may cover any part of the wheel from the top or sides.",
            "Per TSA: “One set of wheels (front or rear) must be external (outside 35mm) and the other set of wheels must be internal (shell).”"
        ]
    },
    tn: {
        rlc: null,
        slc: { eligibility: "Two (2) individuals per chapter", notes: [] }
    }
},

{
    slug: "drone-challenge",
    title: "Drone Challenge (UAV)",
    cat: "mfg",
    summary: "Participants design, build, assemble, document, and test fly an open-source Unmanned Arial Vehicle (UAV) according to the stated annual theme/problem specifications. The required documentation portfolio must include elements such as a photographic log, wiring schematics, and a description of the programming software used. Semifinalists participate in an interview.",
    eligibility: "Three (3) teams of two to six (2–6) members per state",
    team: "Team of 2–6",
    approval: true,
    theme: {
        label: "2027 Mission Brief",
        title: "Operation Lifeline: Humanitarian Aid & Rescue",
        text: ["Design, build, assemble, document, and test-fly a UAV that can complete a series of humanitarian aid and disaster response missions. Teams pick the missions that fit their UAV. You don’t have to complete every mission."],
        link: {
            label: "2027 HS Drone Challenge Mission Brief (PDF)",
            url: "https://tsaweb.org/docs/default-source/competitions/themes-and-problems-2026-2027/high-school/2027-hs-drone-challenge-theme.pdf?sfvrsn=476818b7_1"
        }
    },
    specs: [
        ["Flight area", "About 10 ft × 20 ft, divided into mission zones"],
        ["Mission time", "10 minutes, running clock"],
        ["Driver meeting", "30 minutes max, before competition starts"],
        ["Piloting", "FPV or visual line-of-sight. A second member may help navigate."],
        ["Payload release", "Grippers or magnets"],
        ["Mission 1: Inspection", "Verify TSA Markers A (5), B (5), C (10) on camera; exit through the upper opening (5)"],
        ["Mission 2: Recovery", "Lift the Rescue Figure (10); place it in the Safe Zone (10)"],
        ["Mission 3: Delivery", "Two medical pods, 15 points each, plus a 5-point bonus for the rooftop drop after Mission 1"],
        ["Mission 4: Mitigation", "Hazard passage: low 2, moderate 5, or high 10; plus 1 per containment pod (max 10)"],
        ["Mission 5: Beacon", "Upper passage 5 or lower passage 10; activate the beacon (10)"],
        ["Finish early", "Declare “Flight Complete” before 10:00 for 10 points"],
        ["Safety", "Safety glasses and high-visibility vests required. Batteries must be disconnected outside the competition tent, or the team is disqualified."],
        ["Ties", "The faster mission time advances"]
    ],
    updates: [{ date: "10/27/2026", text: "Exception to General Rules E.11.a: only student or team ID numbers go in an entry, but the member’s name is allowed on the TRUST certification copies in the portfolio." }],
    tn: {
        rlc: null,
        slc: { eligibility: "Two (2) teams of two to six (2–6) individuals per chapter", notes: [] }
    },
    refs: [
        { label: "FAA: What is TRUST?", url: "https://www.faa.gov/faq/what-trust", note: "The mission brief says TRUST certificates are checked at pre-inspection." },
        { label: "FAA: Recreational Flyers", url: "https://www.faa.gov/uas/recreational_flyers" }
    ]
},

{
    slug: "engineering-design",
    title: "Engineering Design",
    cat: "stem",
    summary: "Participants develop a solution to an annual theme that is based on a specific challenge noted by the National Academy of Engineering (NAE) in its compilation of the grand challenges for engineering in the 21st century. The solution will include a documentation portfolio, a display, and a model/prototype. Semifinalists deliver a presentation and participate in an interview.",
    eligibility: "Five (5) teams of two to four (2–4) individuals per state",
    team: "Team of 2–4",
    approval: true,
    theme: {
        label: "Theme",
        title: "Engineering the Future of Energy",
        text: ["Engineering solutions that improve the generation, storage, conservation, distribution, or use of energy."]
    },
    tn: {
        rlc: null,
        slc: { eligibility: "Two (2) teams of at least three (3) individuals per chapter", notes: [] }
    },
    gaps: ["TSA’s State Advisor Approval page lists this event as “five (5) teams of three (3) or more individuals per state,” while the eligibility chart says “two to four (2–4).” Check with your advisor."],
    refs: [
        { label: "NAE Grand Challenges for Engineering", url: "https://www.engineeringchallenges.org/challenges/16091.aspx", note: "The event is built on these challenges." }
    ]
},

{
    slug: "extemporaneous-speech",
    title: "Extemporaneous Speech",
    cat: "lead",
    summary: "Participants select a technology-related or TSA topic from among three topic cards and prepare and give a three-to-five-minute speech that communicates their knowledge of the chosen topic. The quality of the speech determines advancement to the semifinalist level of competition, for which an identical competition procedure is followed to determine finalists.",
    eligibility: "Three (3) individuals per state",
    team: "Individual",
    approval: true,
    noTheme: "No annual theme. Topics are drawn at the competition.",
    tn: {
        rlc: {
            eligibility: "Three (3) individuals per chapter",
            live: true,
            notes: [
                "Held live on Zoom with no holding room and no prep time. The three speech options are announced the morning of Friday, January 15. Arrive ready to give a speech on one of them.",
                "Time sign-ups run Tuesday, January 12 (9 a.m. ET) to Wednesday, January 13 (5 p.m. ET)."
            ]
        },
        slc: {
            eligibility: "Two (2) individuals per chapter",
            notes: [TN.slcSpeaking]
        }
    }
},

{
    slug: "fashion-design-and-technology",
    title: "Fashion Design and Technology",
    cat: "arts",
    summary: "To address the annual theme, participants demonstrate expertise in fashion design principles by creating a wearable garment, garment patterns, and a documentation portfolio. Semifinalist teams present their garment designs (worn by team models), discuss the design process with evaluators, and respond to interview questions.",
    eligibility: "Five (5) teams of two to four (2–4) individuals per state",
    team: "Team of 2–4",
    approval: true,
    theme: {
        label: "Theme",
        title: "Fashion from recycled or repurposed materials",
        list: [
            "One complete outfit; a maximum of two (2) garments.",
            "Garment accessories are for the semifinal round only.",
            "The design can include new/purchased materials, but the majority of the final garment must be recycled."
        ]
    },
    updates: [{ date: "10/28/2026", text: "See updated Theme." }],
    tn: {
        rlc: null,
        slc: {
            eligibility: "Two (2) teams of two to four (2–4) individuals per chapter",
            notes: ["Semifinalist teams may join an optional gallery walk / “meet the designer” event in Exhibit Hall B during the semifinal interview period, when they are not interviewing. It is open to the public."]
        }
    }
},

{
    slug: "flight-endurance",
    title: "Flight Endurance",
    cat: "mfg",
    summary: "Participants design, build, fly, and adjust (trim) a rubber-band powered model aircraft to make long endurance flights inside a contained airspace. Documentation (including elements such as attributes of the model design, drawings, and an analysis of the trim modifications), an inspection of the model and the required model flight box, and official times for two flights are aspects of the evaluation.",
    eligibility: "Two (2) individuals per chapter",
    team: "Individual",
    noTheme: "No annual theme is posted for 2026–27.",
    tn: {
        rlc: null,
        slc: { eligibility: "Two (2) individuals per chapter", notes: [] }
    }
},

{
    slug: "forensic-science",
    title: "Forensic Science",
    cat: "research",
    summary: "Participants take a test of basic forensic science to qualify for the semifinal round of competition. Semifinalists examine a mock crime scene and demonstrate their knowledge of forensic science through crime scene analysis, with the findings synthesized in a written report/analysis.",
    eligibility: "One (1) team of two (2) individuals per chapter",
    team: "Team of 2",
    onsiteTest: true,
    noTheme: "No annual theme.",
    tn: {
        rlc: null,
        slc: { eligibility: "Two (2) teams of two (2) individuals per chapter", notes: [TN.slcTesting] }
    }
},

{
    slug: "future-technology-teacher",
    title: "Future Technology and Engineering Teacher",
    short: "Future Tech & Engineering Teacher",
    cat: "lead",
    summary: "Participants research a developing technology, prepare a video showing an application of the technology in the classroom, and create a lesson plan/activity that features the application and connects to the Standards for Technological and Engineering Literacy (STEL), as well as STEM initiatives and integration. Semifinalists demonstrate the lesson plan and answer questions about their presentation.",
    eligibility: "Two (2) individuals per chapter",
    team: "Individual",
    natPresub: ["Documentation portfolio (PDF)"],
    noTheme: "No annual theme. You choose the developing technology.",
    tn: {
        rlc: {
            eligibility: "Three (3) individuals per chapter",
            notes: ["Different window: pre-submission opens January 12 at noon ET and closes January 16 at noon ET.", "Semifinalist interviews will not be conducted."]
        },
        slc: {
            eligibility: "Two (2) individuals per chapter",
            presub: true,
            notes: [TN.slcPresub]
        }
    },
    refs: [
        { label: "ITEEA: Standards for Technological and Engineering Literacy (STEL)", url: "https://www.iteea.org/downloadpurchase-stel", note: "The lesson plan must connect to STEL." }
    ]
},

{
    slug: "hybrid-racer-xl",
    title: "Hybrid Racer XL",
    cat: "mfg",
    summary: "Hybrid Racer XL provides a hands-on opportunity for participants to apply science, technology, engineering, and mathematics (STEM) concepts - as well as leadership and 21st century skills such as creativity, teamwork, and problem-solving skills - as they design (according to annual requirements, if any), construct, and race a dual-powered (solar and battery) car.",
    eligibility: "One (1) team of two to four (2–4) individuals per chapter; one (1) entry per team",
    team: "Team of 2–4",
    theme: {
        label: "Annual Design Requirement",
        title: "Tow a 5-ounce fishing weight",
        list: [
            "The car must attach and pull/drag one 5-ounce fishing weight, provided on-site.",
            "The design must include a hitch at the rear of the car to attach the weight.",
            "The weight must touch the floor surface throughout the race(s).",
            "A 36″ tow line of fishing line and the fishing weights are provided on site.",
            "A model solar track on top of carpet will be the floor surface at the 2027 National TSA Conference."
        ],
        link: { label: "Sample fishing weight (link provided by TSA)", url: "https://a.co/d/05yQLCZx" }
    },
    updates: [{ date: "11/10/2026", text: "Rubric p. 254: Head-to-Head Race subtotal corrected. F. Solar Paneling 10.a: only the provided batteries may power the model. No capacitors, flywheels, extra batteries, or any other energy storage devices are permitted. See updated Theme." }],
    tn: {
        rlc: null,
        slc: {
            eligibility: null,
            notes: ["TNTSA notes: “This event has changed from the original event, Solar Racer. Please look at the event guidelines to prepare the correct materials and follow the right dimensions.”"]
        }
    },
    gaps: ["TNTSA’s SLC list does not give a per-chapter eligibility number for Hybrid Racer XL."]
},

{
    slug: "interior-design",
    title: "Interior Design",
    cat: "arch",
    summary: "Applying leadership and 21st century skills, participants develop a color sample and material design board(s) used by interior designers to plan an overall cohesive design based on an annual challenge. Participants must demonstrate an understanding of and aptitude for interior design, developing design boards, and presenting a design interpretation.",
    eligibility: "Three (3) teams of two (2) individuals per state; individual entries are permitted",
    team: "Individual or team of 2",
    approval: true,
    theme: {
        label: "Design Challenge",
        title: "Tiny Living, Big Impact",
        text: ["A nonprofit is developing a Tiny Home Community for young adults moving into independent living. Your firm designs the interior of one model home that maximizes comfort, storage, functionality, and affordability in a limited footprint, and feels welcoming while showing innovative space-saving ideas."],
        list: [
            "Required spaces: living area, kitchenette, sleeping area, bathroom, workspace, storage.",
            "Show: multifunctional furniture, Universal Design principles, sustainable materials, efficient circulation, creative storage, residential lighting design.",
            "Material budget: $28,000."
        ]
    },
    updates: [{ date: "9/29/2026", text: "Students develop their own floor plan; no shell is provided. The tiny home should follow standard tiny home requirements and be under 400 square feet. The $28,000 budget covers the interior only; assume the exterior shell (walls, roof, exterior doors, windows) is complete, and count interior elements in the budget. Portfolio pages are single-sided 8½″ × 11″ in a clear front report cover." }],
    tn: {
        rlc: {
            eligibility: "Three (3) teams of two (2) per chapter",
            notes: [TN.rlcPresub, "Semifinalist interviews will not be conducted."]
        },
        slc: {
            eligibility: "Two (2) teams of two (2) per chapter",
            presub: true,
            notes: [TN.slcPresub]
        }
    }
},

{
    slug: "manufacturing-prototype",
    title: "Manufacturing Prototype",
    cat: "mfg",
    summary: "Participants design, fabricate, and use Computer Integrated Manufacturing (CIM) to create a product that addresses the annual theme. A documentation portfolio and the completed product prototype are submitted for evaluation. Semifinalists give a product “sales pitch” and demonstration.",
    eligibility: "One (1) team per chapter",
    team: "Team",
    theme: {
        label: "Theme",
        title: "A display or container for small collectible items",
        text: []
    },
    tn: {
        rlc: null,
        slc: { eligibility: "Two (2) teams per chapter", notes: [] }
    }
},

{
    slug: "music-production",
    title: "Music Production",
    cat: "arts",
    summary: "Participants produce an original musical piece that reflects the annual theme on the TSA website under Themes & Problems. The quality of the musical piece and required documentation (including elements such as a plan of work, self-evaluation, and a list of hardware, software, and instruments used) determines advancement to the semifinal level of competition, during which semifinalist participants are interviewed.",
    eligibility: "Three (3) teams per state; individual entries are permitted",
    team: "Individual or team",
    approval: true,
    natPresub: ["Documentation portfolio (PDF)", "Musical piece (URL)"],
    theme: {
        label: "Theme",
        title: "A boss-battle soundtrack",
        text: ["Compose an original, dynamic soundtrack for a climactic boss battle in a futuristic or fantasy video game. Your music should portray the intensity of the encounter through creative composition, sound design, and production techniques. The track should build escalating tension, feature dramatic contrasts and powerful climaxes, and be suitable for seamless looping during continuous gameplay."]
    },
    tn: {
        rlc: {
            eligibility: "Three (3) individuals or teams per chapter",
            notes: [TN.rlcPresub, "Semifinalist interviews will not be conducted."]
        },
        slc: {
            eligibility: "Two (2) individuals or teams per chapter",
            presub: true,
            notes: [TN.slcPresub]
        }
    }
},

{
    slug: "on-demand-video",
    title: "On Demand Video",
    cat: "arts",
    summary: "Once participants receive the challenge details (required criteria, such as props and a line of dialogue) at the national TSA conference, they have 36 hours to produce a 60-second film that showcases video skills, tools, and communication processes. The quality of the completed video production determines the finalists.",
    eligibility: "One (1) team per chapter",
    team: "Team",
    onsiteUpload: "Semifinal entries are uploaded to JudgePro at Nationals.",
    noTheme: "No annual theme. The challenge is revealed at the conference.",
    tn: {
        rlc: {
            eligibility: "Two (2) teams per chapter",
            notes: ["The prompt is released January 5 at noon ET and is due January 7 at noon ET.", "Semifinalist interviews will not be conducted."]
        },
        slc: {
            eligibility: "One (1) team per chapter",
            notes: ["Teams get only 24 hours to submit after the orientation meeting, because of conference time limits.", "All teams must submit a copyright checklist with the video."]
        }
    }
},

{
    slug: "photographic-technology",
    title: "Photographic Technology",
    cat: "arts",
    summary: "Participants produce a photographic portfolio - demonstrating expertise in photo and imaging technology processes - to convey a message based on the annual theme. Semifinalists have 24 hours to complete a portfolio of photos (with required documentation) taken onsite at the national TSA conference. Finalists are determined based on the quality of the semifinal portfolio, the portfolio presentation, and interview responses.",
    eligibility: "One (1) individual per chapter",
    team: "Individual",
    natPresub: ["Photographic portfolio (PDF)"],
    theme: {
        label: "Theme",
        title: "Behind the scenes",
        text: []
    },
    tn: {
        rlc: {
            eligibility: "Three (3) individuals per chapter",
            notes: ["Only the preliminary round is held. " + TN.rlcPresub, "No semifinalist challenge will be held."]
        },
        slc: {
            eligibility: "Two (2) individuals per chapter",
            presub: true,
            notes: [TN.slcPresub, "Semifinalists turn in work online through the submission platform, not in person on a thumb drive."]
        }
    }
},

{
    slug: "prepared-presentation",
    title: "Prepared Presentation",
    cat: "lead",
    summary: "Participants deliver a three-to-five-minute oral presentation related to the current national TSA conference theme. Both semifinalists and finalists are determined based on the quality of the presentation and the appropriate use and content of the accompanying required slide deck.",
    eligibility: "Three (3) individuals per state",
    team: "Individual",
    approval: true,
    theme: {
        label: "Theme",
        title: "From science fiction to reality",
        text: ["Many technologies begin as science fiction before becoming reality. Choose one technology that was once considered futuristic and is now used today. Describe its development, current applications, and how it may continue to evolve in the future."]
    },
    tn: {
        rlc: {
            eligibility: "Three (3) individuals per chapter",
            notes: ["Turn in a video of your presentation during the January 5–7 pre-submission window (noon ET to noon ET).", "This year the theme is the same at every conference."]
        },
        slc: {
            eligibility: "Two (2) individuals per chapter",
            notes: [TN.slcSpeaking]
        }
    }
},

{
    slug: "promotional-design",
    title: "Promotional Design",
    cat: "comm",
    summary: "Participants use computerized graphic communications layout and design skills to produce a promotional resource packet. The resource must address the annual theme/problem and include at least four printed publication items and required documentation. Semifinalists demonstrate publishing competency in an onsite technical design challenge.",
    eligibility: "Three (3) individuals per state",
    team: "Individual",
    approval: true,
    natPresub: ["Promotional design portfolio (PDF)"],
    theme: {
        label: "Theme",
        title: "Milestone Diner",
        text: ["Milestone Diner, a new retro-inspired American diner, is preparing for its grand opening. Create a cohesive brand identity and promotional materials that celebrate the diner’s nostalgic 1978 inspiration while attracting today’s customers: a late-1970s look that stays inviting, family-friendly, and appealing to a modern audience."],
        list: [
            "Item 1: Restaurant logo, enlarged on an 8.5″ × 11″ sheet (portrait or landscape).",
            "Item 2: Bifold menu on tabloid paper (11″ × 17″), panels positioned for printing and folding, with original item names, descriptions, and prices.",
            "Item 3: Single-sided business card for the General Manager.",
            "Item 4: Static Instagram grand-opening graphic, 4:5 vertical ratio."
        ]
    },
    specs: [
        ["Restaurant", "Milestone Diner"],
        ["Address", "1978 Celebration Boulevard, Orlando, FL 32819"],
        ["Phone", "(407) 555-1978"],
        ["General Manager", "Delmar Olson"],
        ["Email", "manager@milestonediner.com"],
        ["Grand opening", "July 1, 2027"]
    ],
    tn: {
        rlc: null,
        slc: {
            eligibility: "Two (2) individuals per chapter",
            notes: ["Semifinalists submit their solution on DLG JudgePro, linked on the TNTSA SLC page."]
        }
    }
},

{
    slug: "robotics",
    title: "Robotics",
    cat: "mfg",
    summary: "Participants design, build, document, and test a robot assembled using open-sourced parts according to stated specifications and to meet the challenge of the yearly theme/problem.",
    eligibility: "Two (2) teams of two to six (2–6) members per state",
    team: "Team of 2–6",
    approval: true,
    theme: {
        label: "2027 Challenge",
        title: "Collect, navigate, score",
        text: ["Design, build, and operate a robot that maneuvers through field obstacles to collect Scoring Objects and score them in the matching Goals in the Scoring Zone. One robot on the field at a time, 10 minutes maximum."],
        link: {
            label: "2027 HS Robotics Theme (PDF)",
            url: "https://tsaweb.org/docs/default-source/competitions/themes-and-problems-2026-2027/high-school/2027-hs-robotics.pdf?sfvrsn=6c629180_3"
        }
    },
    specs: [
        ["Field", "About 10′ × 10′, 1-inch PVC perimeter, four Obstacle Zones"],
        ["Starting size", "Must fit in a 16″ × 16″ × 16″ cube; can expand after the start"],
        ["Starting Zone", "16″ × 16″ taped square"],
        ["Scoring Objects", "12 total (3 per Obstacle Zone), 10 points each in the correct Goal"],
        ["Possession", "One Scoring Object at a time"],
        ["End Zone bonus", "+10 for ending fully on the 24″ × 24″ plywood"],
        ["Hanging bonus", "+10 for hanging from the bar off the ground"],
        ["Run time", "10-minute running clock; say “Stop Clock” to end early"],
        ["Control", "Untethered remote control, by line-of-sight or FPV. Any member may drive."],
        ["One robot", "No detachable sub-assemblies or mini-bots"],
        ["Semifinals", "Top 12 teams get a 10-minute interview. Run and interview scores combine."],
        ["Ties", "The faster time ranks higher"]
    ],
    updates: [{ date: "9/4/2026", text: "See updated Theme." }],
    tn: {
        rlc: null,
        slc: { eligibility: "Two (2) teams of two to six (2–6) individuals per chapter", notes: [] }
    }
},

{
    slug: "software-development",
    title: "Software Development",
    cat: "cs",
    summary: "Participants use their knowledge of cutting-edge technologies, algorithm design, problem-solving principles, effective communication, and collaboration to design, implement, test, document, and present a software development project of educational or social value. Both semifinalists and finalists are determined based on the quality of the presentation and project.",
    eligibility: "One (1) team per chapter; presentation/interview is limited to three (3) members",
    team: "Team (3 present)",
    natPresub: ["Resources and AI Reflection Form (PDF)", "Copy of code (PDF or URL)"],
    theme: {
        label: "Challenge",
        title: "Software that improves how people learn",
        text: ["Develop a software application that improves how people learn, teach, practice, or develop new skills. Identify an educational or training challenge affecting learners of any age and design an engaging, effective, and user-centered software solution."]
    },
    tn: {
        rlc: null,
        slc: {
            eligibility: "Two (2) teams per chapter",
            notes: ["Only the semifinal round is held: you demonstrate the project and answer questions in one presentation."]
        }
    }
},

{
    slug: "stem-mass-media",
    title: "STEM Mass Media",
    cat: "comm",
    summary: "In response to an annual theme, participants use written and verbal communication skills to convey a news story in both a video broadcast (preliminary round) and a digital written format (semifinal round). Participants must demonstrate a strong understanding of journalism etiquette and the common practices of the field of mass media.",
    eligibility: "One (1) team of two to three (2–3) members per chapter",
    team: "Team of 2–3",
    natPresub: ["Documentation portfolio (PDF)", "Video news story (URL)"],
    theme: {
        label: "Headline",
        title: "Scientists link human right-handedness to walking upright and brain evolution",
        text: [
            "An Oxford-led study in PLOS Biology suggests human right-handedness may be connected to walking upright on two legs and the expansion of the brain. Researchers analyzed data from 2,025 individuals across 41 species of monkeys and apes.",
            "Prompt: develop a news broadcast with an introduction of the headline, a summary of the information in the news story, and an explanation of potential future implications of the highlighted work."
        ],
        link: { label: "EurekAlert! news release (linked by TSA)", url: "https://www.eurekalert.org/news-releases/1128472" }
    },
    tn: {
        rlc: {
            eligibility: "Three (3) teams of two to three (2–3) individuals per chapter",
            notes: ["Only the preliminary round is held. " + TN.rlcPresub]
        },
        slc: {
            eligibility: "Two (2) teams of two to three (2–3) individuals per chapter",
            presub: true,
            notes: [TN.slcPresub]
        }
    },
    refs: [
        { label: "University of Oxford press release (May 15, 2026)", url: "https://www.ox.ac.uk/news/2026-05-15-why-is-almost-everyone-right-handed-the-answer-may-lie-in-how-we-learned-to-walk", note: "Original source for the headline." }
    ]
},

{
    slug: "structural-design-and-engineering",
    title: "Structural Design and Engineering",
    short: "Structural Design & Engineering",
    cat: "arch",
    summary: "Participants apply the principles of structural engineering to design and construct a structure that complies with the annual challenge. An assessment of the required documentation and the destructive testing of the structure (to determine its design efficiency) determine both semifinalists and finalists.",
    eligibility: "One (1) team of two (2) individuals per chapter",
    team: "Team of 2",
    theme: {
        label: "2027 Problem Statement",
        title: "A balsa structure: most load, least material",
        text: ["Design a balsa structure that supports the greatest load possible (on the top and in the center) using the least material. No substructure is permitted. The solution must transfer the load from the test block to the top of the abutments as efficiently as possible."],
        link: {
            label: "2027 HS Structural Problem Statement (PDF)",
            url: "https://tsaweb.org/docs/default-source/competitions/themes-and-problems-2026-2027/high-school/2027-structural-design-and-engineering-problem-statement.pdf?sfvrsn=56397e65_1"
        }
    },
    specs: [
        ["Length", "10″ minimum, 11″ maximum"],
        ["Width", "2″ minimum, 3″ maximum"],
        ["Height", "8″ minimum, 9″ maximum (8″ kept under the test block)"],
        ["Tolerance", "±1/16″ on length, width, and height"],
        ["Material", "1/8″ × 1/8″ balsa sticks only, 14 linear feet max. No treated, conditioned, or coated balsa."],
        ["Test block", "6″ × 2″ × 3/4″, on top in the center, crossing the width"],
        ["Span", "9″ between abutments"],
        ["Test rod", "1/2″ rod must pass vertically through the center"],
        ["Not allowed", "Substructures, laminations, gussets, glue coating, or excess glue that acts like a gusset"],
        ["Joints", "Lap joints allowed, but not below 15° or above 165°"],
        ["Glue", "Your choice, except no hot-melt glue"],
        ["Portfolio", "Title page; one-page three-view drawing (max 11″ × 17″); one-page parts list; Resources and AI Reflection (max 4 pages)"],
        ["Check-in box", "One plastic box, max 18″ × 16″ × 12″"]
    ],
    updates: [{ date: "9/15/2026", text: "“pp.345 Documentation Portfolio section of the rubric Documentation Portfolio Subtotal”", verbatim: true }],
    tn: {
        rlc: null,
        slc: { eligibility: "Two (2) teams of two (2) individuals per chapter", notes: [] }
    }
},

{
    slug: "technology-bowl",
    title: "Technology Bowl",
    cat: "lead",
    summary: "Participants demonstrate their knowledge of TSA and concepts addressed in technology content standards by completing an objective test. Semifinalist teams participate in a question/response, head-to-head, team competition.",
    eligibility: "One (1) team of three (3) individuals per chapter",
    team: "Team of 3",
    onsiteTest: true,
    noTheme: "No annual theme.",
    tn: {
        rlc: null,
        slc: { eligibility: "Two (2) teams of three (3) individuals per chapter", notes: [TN.slcTesting] }
    }
},

{
    slug: "technology-problem-solving",
    title: "Technology Problem Solving",
    cat: "stem",
    summary: "Participants use problem-solving skills to design and construct a finite solution to a challenge provided onsite at the conference. Solutions are evaluated at the end of 90 minutes using measures appropriate to the challenge, such as elapsed time, horizontal or vertical distance, and/or strength.",
    eligibility: "One (1) team of two (2) individuals per chapter",
    team: "Team of 2",
    noTheme: "No annual theme. The challenge is revealed onsite.",
    tn: {
        rlc: null,
        slc: {
            eligibility: "One (1) team of two (2) individuals per chapter",
            notes: ["Bring a full toolkit, including safety goggles. TNTSA provides all build materials."]
        }
    }
},

{
    slug: "transportation-modeling",
    title: "Transportation Modeling",
    cat: "mfg",
    summary: "Participants research, design, and produce a scale model of a vehicle that complies with the annual design problem. A display for the model and a documentation portfolio – containing elements such as a description of the vehicle, photographs and commentary detailing the vehicle production, and technical illustrations – are required. Semifinalists participate in an interview.",
    eligibility: "One (1) individual per chapter",
    team: "Individual",
    theme: {
        label: "Design Problem",
        title: "Cartoon / comic vehicles",
        text: ["No copyrighted vehicles or symbols may be used. Existing cartoon or comic cars may be used as inspiration only."]
    },
    tn: {
        rlc: null,
        slc: { eligibility: "Two (2) individuals per chapter", notes: [] }
    }
},

{
    slug: "video-game-design",
    title: "Video Game Design",
    cat: "cs",
    also: ["stem"],
    summary: "Participants design, build, and launch an E-rated online video game – with accompanying required documentation - that addresses the annual theme. Semifinalists participate in an interview to demonstrate the knowledge and expertise they gained during the development of the game.",
    eligibility: "Five (5) teams per state",
    team: "Team",
    approval: true,
    natPresub: ["Documentation portfolio (PDF)", "Video game (URL)", "Demo video (URL)"],
    theme: {
        label: "Theme",
        title: "A deep-space puzzle RPG",
        text: [
            "Create a deep space-themed RPG where the primary method of progression is puzzle-solving rather than combat.",
            "Your game must include core RPG elements (such as character stats, a leveling system, or branching dialogue), but you may not include traditional combat. Players must use their character’s skills and stats to solve environmental, logical, or social puzzles to survive the dangers of deep space."
        ]
    },
    tn: {
        rlc: {
            eligibility: "Three (3) teams of two to six (2–6) individuals per chapter",
            notes: [TN.rlcPresub, "Semifinalist interviews will not be conducted."]
        },
        slc: {
            eligibility: "Two (2) teams per chapter",
            presub: true,
            notes: [TN.slcPresub]
        }
    },
    refs: [
        { label: "ESRB Ratings Guide", url: "https://www.esrb.org/ratings-guide/", note: "What “E for Everyone” allows." }
    ]
},

{
    slug: "virtual-reality-simulation",
    title: "Virtual Reality Simulation (VR)",
    cat: "cs",
    summary: "Participants use video and 3D computer graphics tools and design processes to create a two-to-three-minute VR visualization (accompanied by supporting documentation) that addresses the annual theme. Semifinalists deliver a presentation about their visualization and participate in an interview.",
    eligibility: "One (1) team per chapter; individual entries are permitted",
    team: "Individual or team",
    theme: {
        label: "Theme",
        title: "High-speed first aid immersive simulation",
        text: ["Develop a VR experience that evaluates a user’s ability to perform life-saving interventions under pressure, such as addressing anaphylaxis, obstructed airways, or traumatic hemorrhaging."],
        list: [
            "Training Mode: instructional support and immediate guidance in a controlled setting.",
            "Certification Mode: a realistic, time-sensitive emergency with no assistance.",
            "A performance analytics dashboard summarizing the user’s technical proficiency and response efficiency."
        ]
    },
    tn: {
        rlc: null,
        slc: { eligibility: "Two (2) individuals or teams per chapter", notes: ["Listed by TNTSA as “Virtual Reality Visualization (VR, formerly SciVis).”"] }
    }
},

{
    slug: "vlogging",
    title: "Vlogging",
    cat: "arts",
    summary: "Vlogging encourages good storytelling, videography, and editing techniques to create a coherent series of creative work. Applying leadership and 21st century skills, participants use digital video technology to create original content that reflects an annual technology theme. Semifinalists complete an onsite challenge to produce additional video(s). Required criteria, such as props, lines of dialog, topics, etc., will be revealed at the semifinalist orientation meeting.",
    eligibility: "Two (2) teams of two to six (2–6) members per chapter",
    team: "Team of 2–6",
    natPresub: ["Documentation portfolio (PDF)", "Video series (URL)"],
    theme: {
        label: "Theme",
        title: "The Butterfly Effect",
        text: [
            "Small actions can create extraordinary change. Create a three-episode vlog series, not to exceed six minutes total, that explores how one decision, act of kindness, innovation, challenge, or moment can lead to a chain of events that produces a meaningful impact.",
            "Follow a connected storyline across all three episodes, capturing authentic experiences, thoughtful reflection, and engaging storytelling."
        ]
    },
    updates: [{ date: "8/25/2026", text: "“EVALUATION SEMIFINAL ROUND A. Onsite Challenge”", verbatim: true }],
    tn: {
        rlc: {
            eligibility: "Two (2) teams of two to six (2–6) individuals per chapter",
            notes: [TN.rlcPresub, "Semifinalist interviews will not be conducted."]
        },
        slc: {
            eligibility: "Two (2) teams of two to six (2–6) individuals per chapter",
            presub: true,
            notes: [TN.slcPresub]
        }
    }
},

{
    slug: "webmaster",
    title: "Webmaster",
    cat: "cs",
    summary: "Participants design, build, and launch a website that addresses the annual challenge. Semifinalists participate in an interview to demonstrate the knowledge and expertise gained during the development of the website.",
    eligibility: "One (1) team per chapter with a maximum of six (6) individuals; individual entries are permitted",
    team: "Individual or up to 6",
    natPresub: ["Website (URL)"],
    theme: {
        label: "Theme",
        title: "An AI learning portal",
        text: ["Design and develop an interactive AI learning portal for high school students (grades 9–12) that demystifies AI: a foundational understanding of the technology, practical tools, and techniques to use AI effectively and ethically in school."],
        list: [
            "Educational content modules: at least three distinct sections covering fundamental AI concepts, practical AI tools/techniques, and ethical AI use.",
            "Gamification & progress tracking: an interactive, gamified interface (e.g., digital badges, experience points, or a progress dashboard) that visually tracks module completion."
        ]
    },
    tn: {
        rlc: {
            eligibility: "Three (3) teams of two to six (2–6) individuals per chapter",
            notes: [TN.rlcPresub, "Semifinalist interviews will not be conducted."]
        },
        slc: {
            eligibility: "Two (2) teams per chapter",
            presub: true,
            notes: [TN.slcPresub]
        }
    },
    refs: [
        { label: "W3C: WCAG 2 Overview", url: "https://www.w3.org/WAI/standards-guidelines/wcag/", note: "Accessibility guidelines for building the site." }
    ]
}

];

/* General rule update that applies to every event with a display. */
const GENERAL_UPDATES = [
    { date: "9/28/2026", text: "HS General Rules E.11.d: unless otherwise noted, any required display may not exceed 15″ deep × 2.5′ wide × 4′ high." }
];
