/* =========================================================
   TENNESSEE TSA COMPETITIVE EVENTS
   2026–2027 HIGH SCHOOL EVENTS
   ========================================================= */

const events = {

    "animatronics": {
        title: "Animatronics",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "3 teams of 2–3 members per state",
        teamSize: "2–3 members",
        description:
            "Participants demonstrate knowledge of mechanical and control systems by creating an animatronic device with a specific purpose.",
        challenge:
            "Create an animatronic device that includes sound, lights, and an appropriate surrounding environment or display.",
        themeTitle: "Turning classic tales into a mechanical marvel",
        themeText:
            "Bring a story to life through an animatronic creation following the official Animatronics rules.",
        submissions: [
            ["Main Entry", "Completed animatronic device."],
            ["Documentation", "Documentation required by the official event rules."]
        ]
    },

    "architectural-design": {
        title: "Architectural Design",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "2 teams of 2–4 members per state; individual entries permitted",
        teamSize: "1–4 members",
        description:
            "Participants develop architectural plans and related materials, construct a physical and computer-generated model, and create a virtual walkthrough.",
        challenge:
            "Develop an architectural solution that meets the annual design challenge and communicate the design through plans, models, and a virtual walkthrough.",
        themeTitle: "2026–2027 Architectural Design Problem",
        themeText:
            "Follow the official annual architectural design problem and required specifications.",
        themeLink:
            "https://tsaweb.org/docs/default-source/competitions/themes-and-problems-2026-2027/high-school/2027-architecutral-design-problem.pdf?sfvrsn=9f840cf2_1",
        submissions: [
            ["Architectural Plans", "Required architectural drawings and plans."],
            ["Physical Model", "A physical model of the proposed design."],
            ["Computer Model", "Computer-generated representation of the design."],
            ["Virtual Walkthrough", "Virtual walkthrough accurately depicting the design."]
        ]
    },

    "artificial-intelligence": {
        title: "Artificial Intelligence",
        level: "High School",
        competition: "States → Nationals",
        eligibility: "1 team of 2 individuals per chapter",
        teamSize: "2 members",
        newEvent: true,
        description:
            "Participants demonstrate knowledge of artificial intelligence concepts, models, and best practices through testing and an onsite challenge.",
        challenge:
            "Semifinalist teams solve an onsite problem using a generative AI tool. Solutions are objectively measured to determine the best solution.",
        submissions: [
            ["Preliminary Round", "Complete the required AI knowledge assessment."],
            ["Semifinalist Challenge", "Only if you advance: solve the onsite problem using a generative AI tool."]
        ],
        semifinalist:
            "Solve the onsite problem or problems using a generative artificial intelligence tool."
    },

    "audio-podcasting": {
        title: "Audio Podcasting",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "3 teams per state; individual entries permitted",
        teamSize: "Individual or team",
        description:
            "Participants use digital audio technology to create original podcast content addressing the annual theme.",
        challenge:
            "Create a podcast using storytelling, voice acting, and Foley sound effects, supported by documentation of the development process.",
        themeTitle: "The Debate Desk",
        themeText:
            "Create an audio podcast presenting multiple perspectives on a controversial topic in STEM, society, education, health, or the environment.",
        submissions: [
            ["Podcast", "Completed original podcast entry."],
            ["Documentation", "Documentation of podcast development and required elements."]
        ],
        semifinalist:
            "If you advance, complete the required semifinalist podcast entry and onsite upload."
    },

    "automated-manufacturing": {
        title: "Automated Manufacturing Systems",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "2 teams of 2–3 members per state",
        teamSize: "2–3 members",
        description:
            "Participants collaborate to engineer and prototype an automated manufacturing system that solves a production problem.",
        challenge:
            "Analyze the prompt, build a sensor-based mechatronic solution, program the automation logic, document the design, and provide operating instructions.",
        submissions: [
            ["System", "Completed automated manufacturing system."],
            ["Documentation", "Mechanical and software design documentation."],
            ["Operating Instructions", "Instructions for judges to operate the system."]
        ]
    },

    "biotechnology-design": {
        title: "Biotechnology Design",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "1 team per chapter",
        teamSize: "Team",
        description:
            "Participants research a contemporary biotechnology problem, develop a solution, and demonstrate their understanding through research, documentation, a display, and multimedia presentation.",
        challenge:
            "Research a biotechnology problem and develop a research-supported solution.",
        themeTitle: "Biosensors for Disease Detection",
        themeText:
            "Present the science behind biosensors and demonstrate one use of biosensor technology in detecting or monitoring disease.",
        submissions: [
            ["Research", "Documented research addressing the biotechnology problem."],
            ["Solution", "A proposed biotechnology solution."],
            ["Display", "Required display materials."],
            ["Presentation", "Multimedia presentation."]
        ]
    },

    "board-game-design": {
        title: "Board Game Design",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "3 teams of 2–4 members per state",
        teamSize: "2–4 members",
        description:
            "Participants develop, build, and package a board game focused on a subject of their choice.",
        challenge:
            "Create a complete pilot board game with creative packaging, instructions, pieces, and cards.",
        submissions: [
            ["Board Game", "Complete playable pilot board game."],
            ["Packaging", "Creative game packaging."],
            ["Instructions", "Complete game instructions."],
            ["Game Materials", "Required pieces and cards."]
        ]
    },

    "chapter-team": {
        title: "Chapter Team",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "1 team of 6 members per chapter",
        teamSize: "6 members",
        description:
            "Participants take a parliamentary procedure test to qualify for the semifinal round.",
        challenge:
            "Semifinalists conduct an opening ceremony, items of business, parliamentary actions, and a closing ceremony.",
        submissions: [
            ["Test", "Complete the parliamentary procedure test."]
        ],
        semifinalist:
            "Conduct the required opening ceremony, business, parliamentary actions, and closing ceremony."
    },

    "children-stories": {
        title: "Children’s Stories",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "3 teams or 3 individuals per state",
        teamSize: "Individual or team",
        description:
            "Participants create an illustrated children's story with artistic, instructional, and social value and document its development.",
        challenge:
            "Create an original illustrated children's story addressing the annual theme.",
        themeTitle: "A Graphic Novel / Comic Book",
        themeText:
            "Create the required graphic novel or comic book. Binding cannot be stapled.",
        submissions: [
            ["Story", "Original illustrated children's story."],
            ["Documentation", "Documentation related to story development."]
        ]
    },

    "cad-architecture": {
        title: "Computer-Aided Design (CAD), Architecture",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "2 individuals per state",
        teamSize: "Individual",
        description:
            "Participants use advanced computer graphic skills and CAD processes to develop architectural representations in response to a design challenge.",
        challenge:
            "Develop an architectural CAD solution in response to the design challenge.",
        submissions: [
            ["CAD Solution", "Architectural CAD solution responding to the challenge."],
            ["Interview", "Responses to judge questions about the solution."]
        ],
        semifinalist:
            "Complete the onsite CAD design problem and upload the solution through JudgePro."
    },

    "cad-engineering": {
        title: "Computer-Aided Design (CAD), Engineering",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "2 individuals per state",
        teamSize: "Individual",
        description:
            "Participants use advanced computer graphic skills and CAD processes to develop three-dimensional engineering representations.",
        challenge:
            "Develop a three-dimensional engineering CAD solution in response to the design challenge.",
        submissions: [
            ["CAD Solution", "Three-dimensional engineering CAD solution."],
            ["Interview", "Responses to judge questions about the solution."]
        ],
        semifinalist:
            "Complete the onsite CAD engineering design problem and upload the solution through JudgePro."
    },

    "cybersecurity": {
        title: "Cybersecurity",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "1 team of 2–4 members per chapter",
        teamSize: "2–4 members",
        description:
            "Participants respond to cybersecurity challenges by identifying breaches in computer security through Capture the Flag games.",
        challenge:
            "Solve onsite cybersecurity problems involving areas such as exploit development, digital puzzles, cryptography, reverse engineering, binary analysis, and mobile security.",
        submissions: [
            ["CTF Challenge", "Complete the required Capture the Flag challenges."],
            ["Onsite Work", "Solve cybersecurity problems within the allotted time."]
        ]
    },

    "data-science": {
        title: "Data Science and Analytics",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "3 teams of 2 members per state; individual entries permitted",
        teamSize: "Individual or 2 members",
        description:
            "Participants identify a societal issue, collect or compile data, and produce documentation and a digital scientific poster.",
        challenge:
            "Semifinalists create a synopsis and digital visual representation of a dataset provided in an onsite challenge.",
        themeTitle: "AI-Generated Climate and Environmental Sustainability Dataset",
        themeText:
            "Use one AI-generated dataset related to climate and environmental sustainability for analysis and research. Cite the AI tool, model when available, and prompts used.",
        themeLink:
            "https://tsaweb.org/docs/default-source/competitions/themes-and-problems-2025-2026/scientific-poster-template.pptx?sfvrsn=a92c1471_1",
        submissions: [
            ["Research", "Research and documentation addressing a societal issue."],
            ["Scientific Poster", "Digital scientific poster."],
            ["Dataset", "Required structured dataset and AI-use documentation."]
        ],
        semifinalist:
            "Create a synopsis and digital visual representation of the onsite dataset."
    },

    "debating-technological-issues": {
        title: "Debating Technological Issues",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "3 teams of 2 members per state",
        teamSize: "2 members",
        description:
            "Participants research the annual topic and subtopics and prepare for a debate against a team from another chapter.",
        challenge:
            "Teams are assigned the pro or con side of a selected subtopic and use research and references to support their position.",
        themeTitle: "Artificial Intelligence in Medicine",
        themeText:
            "Debate the assigned subtopic using research and evidence.",
        submissions: [
            ["Research", "Research and references supporting the team's position."],
            ["Debate", "Prepared arguments for the assigned side."]
        ]
    },

    "digital-video-production": {
        title: "Digital Video Production",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "3 teams or 3 individuals per state",
        teamSize: "Individual or team",
        description:
            "Participants develop and submit a digital video and documentation portfolio addressing the annual theme.",
        challenge:
            "Create a digital video supported by a storyboard, script, sources, and equipment list.",
        themeTitle: "1990s Infomercial",
        themeText:
            "Create an infomercial featuring a product and using the style of the 1990s.",
        submissions: [
            ["Video", "Completed digital video."],
            ["Documentation Portfolio", "Storyboard, script, references, equipment list, and required documentation."]
        ]
    },

    "dragster-design": {
        title: "Dragster Design",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "2 individuals per chapter",
        teamSize: "Individual",
        description:
            "Participants design, draw, and construct a CO₂-powered dragster according to specifications and the annual theme.",
        challenge:
            "Design and construct a compliant CO₂-powered dragster. Semifinalists compete in a double-elimination race and participate in an interview.",
        themeTitle: "INSIDE / OUT",
        themeText:
            "One axle must use internal wheels while the opposite axle uses external wheels.",
        submissions: [
            ["Dragster", "Completed compliant CO₂-powered dragster."],
            ["Documentation", "Required design and documentation materials."]
        ],
        semifinalist:
            "Compete in the double-elimination race and participate in the required interview."
    },

    "drone-challenge": {
        title: "Drone Challenge (UAV)",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "3 teams of 2–6 members per state",
        teamSize: "2–6 members",
        description:
            "Participants design, build, assemble, document, and test fly an open-source unmanned aerial vehicle.",
        challenge:
            "Create a UAV meeting the annual requirements and document the engineering and programming process.",
        themeTitle: "Humanitarian Aid and Rescue",
        themeText:
            "Develop a UAV designed around the official humanitarian aid and rescue problem.",
        themeLink:
            "https://tsaweb.org/docs/default-source/competitions/themes-and-problems-2026-2027/high-school/2027-hs-drone-challenge-theme.pdf?sfvrsn=476818b7_1",
        submissions: [
            ["UAV", "Completed UAV meeting the annual specifications."],
            ["Documentation", "Photographic log, wiring schematics, programming information, and required documentation."]
        ]
    },

    "engineering-design": {
        title: "Engineering Design",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "5 teams of 2–4 members per state",
        teamSize: "2–4 members",
        description:
            "Participants develop an engineering solution to an annual theme based on a National Academy of Engineering grand challenge.",
        challenge:
            "Develop an engineering solution supported by a documentation portfolio, display, and model or prototype.",
        themeTitle: "Engineering the Future of Energy",
        themeText:
            "Develop an engineering solution that improves the generation, storage, conservation, distribution, or use of energy.",
        submissions: [
            ["Solution", "Engineering solution addressing the annual theme."],
            ["Documentation", "Documentation portfolio."],
            ["Display", "Required display."],
            ["Model or Prototype", "Physical model or prototype."]
        ],
        semifinalist:
            "Deliver the required presentation and participate in the interview."
    },

    "extemporaneous-speech": {
        title: "Extemporaneous Speech",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "3 individuals per state",
        teamSize: "Individual",
        description:
            "Participants select a technology-related or TSA topic and prepare a three-to-five-minute speech.",
        challenge:
            "Select one of three topics, prepare within the allotted time, and deliver the speech effectively.",
        submissions: [
            ["Speech", "Three-to-five-minute prepared speech."]
        ]
    },

    "fashion-design-and-technology": {
        title: "Fashion Design and Technology",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "5 teams of 2–4 members per state",
        teamSize: "2–4 members",
        description:
            "Participants demonstrate fashion design principles by creating a wearable garment, patterns, and documentation.",
        challenge:
            "Create a wearable garment and supporting documentation addressing the annual theme.",
        themeTitle: "Recycled or Repurposed Fashion",
        themeText:
            "Create fashion using recycled or repurposed materials.",
        submissions: [
            ["Outfit", "One complete outfit, with a maximum of two garments."],
            ["Patterns", "Required garment patterns."],
            ["Documentation", "Required documentation portfolio."]
        ],
        semifinalist:
            "Garment accessories are required only for the semifinal round."
    },

    "flight-endurance": {
        title: "Flight Endurance",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "2 individuals per chapter",
        teamSize: "Individual",
        description:
            "Participants design, build, fly, and trim a rubber-band-powered model aircraft for long endurance flights.",
        challenge:
            "Design and optimize a model aircraft for endurance. Documentation, inspection, flight box requirements, and official flight times are evaluated.",
        submissions: [
            ["Aircraft", "Completed rubber-band-powered model aircraft."],
            ["Documentation", "Required aircraft documentation."]
        ]
    },

    "forensic-science": {
        title: "Forensic Science",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "1 team of 2 members per chapter",
        teamSize: "2 members",
        description:
            "Participants take a basic forensic science test to qualify for the semifinal round.",
        challenge:
            "Semifinalists examine a mock crime scene and demonstrate forensic science knowledge through analysis and a written report.",
        submissions: [
            ["Test", "Complete the forensic science test."]
        ],
        semifinalist:
            "Examine the mock crime scene and submit the required written analysis or report."
    },

    "future-technology-teacher": {
        title: "Future Technology and Engineering Teacher",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "2 individuals per chapter",
        teamSize: "Individual",
        description:
            "Participants research a developing technology, create a classroom application video, and develop a lesson plan or activity.",
        challenge:
            "Develop a classroom application connected to STEL, STEM initiatives, and technology integration.",
        submissions: [
            ["Research", "Research on a developing technology."],
            ["Video", "Video showing the technology's classroom application."],
            ["Lesson Plan", "Lesson plan or activity featuring the technology."]
        ],
        semifinalist:
            "Demonstrate the lesson plan and answer questions."
    },

    "hybrid-racer-xl": {
        title: "Hybrid Racer XL",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "1 team of 2–4 members per chapter",
        teamSize: "2–4 members",
        description:
            "Participants apply STEM, creativity, teamwork, and problem-solving skills to design, construct, and race a dual-powered vehicle.",
        challenge:
            "Design, construct, and race a solar- and battery-powered car that meets the annual requirements.",
        themeTitle: "5-Ounce Fishing Weight Requirement",
        themeText:
            "The vehicle must hold or pull one 5-ounce fishing weight provided onsite and include a rear hitch.",
        themeLink:
            "https://a.co/d/05yQLCZx",
        submissions: [
            ["Vehicle", "Completed dual-powered vehicle."],
            ["Hitch", "Rear hitch capable of attaching the required weight."]
        ]
    },

    "interior-design": {
        title: "Interior Design",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "3 teams of 2 members per state; individual entries permitted",
        teamSize: "Individual or 2 members",
        description:
            "Participants develop color samples and material design boards for a cohesive interior design solution based on an annual challenge.",
        challenge:
            "Design the interior of a tiny home for young adults transitioning into independent living, maximizing comfort, storage, functionality, and affordability.",
        themeTitle: "Tiny Living, Big Impact",
        themeText:
            "Design a welcoming and innovative tiny-home interior with a $28,000 material budget.",
        submissions: [
            ["Design Boards", "Color samples and material design boards."],
            ["Interior Design", "Design solution addressing the required spaces and considerations."]
        ]
    },

    "manufacturing-prototype": {
        title: "Manufacturing Prototype",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "1 team per chapter",
        teamSize: "Team",
        description:
            "Participants use Computer Integrated Manufacturing to create a product addressing the annual theme.",
        challenge:
            "Design, fabricate, and use CIM to create the required product prototype.",
        themeTitle: "Display or Container for Small Collectible Items",
        themeText:
            "Create a product that displays or contains small collectible items.",
        submissions: [
            ["Prototype", "Completed manufactured prototype."],
            ["Documentation", "Required documentation portfolio."]
        ],
        semifinalist:
            "Give the required product sales pitch and demonstration."
    },

    "music-production": {
        title: "Music Production",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "3 teams per state; individual entries permitted",
        teamSize: "Individual or team",
        description:
            "Participants produce an original musical piece reflecting the annual theme and submit required documentation.",
        challenge:
            "Create an original, dynamic soundtrack for a climactic boss battle in a futuristic or fantasy video game.",
        themeTitle: "Futuristic or Fantasy Boss Battle",
        themeText:
            "Build escalating tension, dramatic contrasts, powerful climaxes, and a track suitable for seamless gameplay looping.",
        submissions: [
            ["Music", "Original musical composition."],
            ["Documentation", "Plan of work, self-evaluation, hardware/software/instrument list, and required documentation."]
        ],
        semifinalist:
            "Participate in the semifinalist interview."
    },

    "on-demand-video": {
        title: "On Demand Video",
        level: "High School",
        competition: "States → Nationals",
        eligibility: "1 team per chapter",
        teamSize: "Team",
        description:
            "Participants receive the challenge at the national conference and have 36 hours to produce a 60-second film.",
        challenge:
            "Produce a 60-second film showcasing video skills, tools, and communication processes.",
        submissions: [
            ["Film", "Completed 60-second film produced during the 36-hour challenge."]
        ]
    },

    "photographic-technology": {
        title: "Photographic Technology",
        level: "High School",
        competition: "States → Nationals",
        eligibility: "1 individual per chapter",
        teamSize: "Individual",
        description:
            "Participants produce a photographic portfolio demonstrating imaging technology skills and communicating a message based on the annual theme.",
        challenge:
            "Semifinalists have 24 hours to complete a required onsite photographic portfolio.",
        themeTitle: "Behind the Scenes",
        themeText:
            "Create a photographic portfolio communicating the annual theme.",
        submissions: [
            ["Preliminary Portfolio", "Required photographic portfolio."],
            ["Documentation", "Required portfolio documentation."]
        ],
        semifinalist:
            "Complete the required 24-hour onsite portfolio with required documentation."
    },

    "prepared-presentation": {
        title: "Prepared Presentation",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "3 individuals per state",
        teamSize: "Individual",
        description:
            "Participants deliver a three-to-five-minute presentation related to the current national TSA conference theme.",
        challenge:
            "Choose a technology that was once considered futuristic and explain its development, current applications, and future evolution.",
        themeTitle: "Science Fiction to Reality",
        themeText:
            "Describe the development, current applications, and future possibilities of a technology once considered futuristic.",
        submissions: [
            ["Presentation", "Three-to-five-minute oral presentation."],
            ["Slide Deck", "Required accompanying presentation slides."]
        ]
    },

    "promotional-design": {
        title: "Promotional Design",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "3 individuals per state",
        teamSize: "Individual",
        description:
            "Participants use computerized graphic communications skills to create a promotional resource packet addressing the annual problem.",
        challenge:
            "Create a cohesive promotional identity for a retro-inspired American diner.",
        themeTitle: "Milestone Diner",
        themeText:
            "Develop a family-friendly late-1970s-inspired brand identity with a modern appeal.",
        submissions: [
            ["Logo", "Restaurant logo on an 8.5 × 11-inch sheet."],
            ["Menu", "Bifold 11 × 17-inch restaurant menu."],
            ["Business Card", "General Manager Delmar Olson business card."],
            ["Advertisement", "Static 4:5 Instagram grand-opening advertisement."]
        ],
        semifinalist:
            "Complete the onsite technical design challenge demonstrating publishing competency."
    },

    "robotics": {
        title: "Robotics",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "2 teams of 2–6 members per state",
        teamSize: "2–6 members",
        description:
            "Participants design, build, document, and test an open-source robot according to the annual specifications and theme.",
        challenge:
            "Create a robot that meets the annual challenge and specifications.",
        themeTitle: "2026–2027 Robotics Problem",
        themeText:
            "Follow the official annual Robotics problem and specifications.",
        themeLink:
            "https://tsaweb.org/docs/default-source/competitions/themes-and-problems-2026-2027/high-school/2027-hs-robotics.pdf?sfvrsn=6c629180_3",
        submissions: [
            ["Robot", "Completed competition robot."],
            ["Documentation", "Engineering and development documentation."]
        ]
    },

    "software-development": {
        title: "Software Development",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "1 team per chapter",
        teamSize: "Team; presentation/interview limited to 3 members",
        description:
            "Participants design, implement, test, document, and present a software project of educational or social value.",
        challenge:
            "Develop software that improves how people learn, teach, practice, or develop new skills.",
        submissions: [
            ["Software Project", "Completed educational or training software application."],
            ["Documentation", "Required development documentation."],
            ["Presentation", "Project presentation."]
        ],
        semifinalist:
            "If you advance, present and demonstrate the software project and answer questions."
    },

    "stem-mass-media": {
        title: "STEM Mass Media",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "1 team of 2–3 members per chapter",
        teamSize: "2–3 members",
        description:
            "Participants use journalism and communication skills to produce a news story in video and written formats.",
        challenge:
            "Develop a news broadcast with an introduction, summary, and future implications based on the annual headline.",
        themeTitle: "Scientists link human right-handedness to walking upright and brain evolution",
        themeText:
            "Develop the required news story based on the research headline and background provided by TSA.",
        themeLink:
            "https://www.eurekalert.org/news-releases/1128472",
        submissions: [
            ["Video Broadcast", "Preliminary video news broadcast."],
            ["Written Story", "Digital written news format."]
        ]
    },

    "structural-design": {
        title: "Structural Design and Engineering",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "1 team of 2 individuals per chapter",
        teamSize: "2 members",
        description:
            "Participants apply structural engineering principles to design and construct a structure meeting the annual challenge.",
        challenge:
            "Design and construct a structure whose efficiency is evaluated through documentation and destructive testing.",
        submissions: [
            ["Structure", "Completed competition structure."],
            ["Documentation", "Required engineering documentation."]
        ],
        semifinalist:
            "The structure undergoes the required destructive testing and design-efficiency evaluation."
    },

    "technology-bowl": {
        title: "Technology Bowl",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "1 team of 3 members per chapter",
        teamSize: "3 members",
        description:
            "Participants demonstrate knowledge of TSA and technology content standards through testing and a head-to-head competition.",
        challenge:
            "Complete the objective test and, if selected, compete in the question-and-response team competition.",
        submissions: [
            ["Test", "Complete the objective technology knowledge test."]
        ],
        semifinalist:
            "Compete in the question-and-response head-to-head team competition."
    },

    "technology-problem-solving": {
        title: "Technology Problem Solving",
        level: "High School",
        competition: "States → Nationals",
        eligibility: "1 team of 2 individuals per chapter",
        teamSize: "2 members",
        description:
            "Participants use problem-solving skills to design and construct a solution to a challenge provided onsite.",
        challenge:
            "Develop a finite solution during the 90-minute onsite challenge. Solutions are evaluated using measures appropriate to the problem.",
        submissions: [
            ["Onsite Solution", "Complete the required 90-minute problem-solving challenge."]
        ]
    },

    "transportation-modeling": {
        title: "Transportation Modeling",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "1 individual per chapter",
        teamSize: "Individual",
        description:
            "Participants research, design, and produce a scale model of a vehicle that complies with the annual design problem.",
        challenge:
            "Create a scale vehicle model supported by a display and documentation portfolio.",
        themeTitle: "Cartoon / Comic Vehicles",
        themeText:
            "Design and produce a scale model based on the annual cartoon/comic vehicle theme.",
        submissions: [
            ["Model", "Completed scale vehicle model."],
            ["Display", "Display for the model."],
            ["Documentation", "Vehicle description, photographs, technical illustrations, and production commentary."]
        ],
        semifinalist:
            "Participate in the required interview."
    },

    "video-game-design": {
        title: "Video Game Design",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "5 teams per state",
        teamSize: "Team",
        description:
            "Participants design, build, and launch an E-rated online video game addressing the annual theme.",
        challenge:
            "Create a deep-space RPG where progression is based on puzzle-solving rather than combat.",
        themeTitle: "Deep Space Puzzle RPG",
        themeText:
            "Include RPG elements such as character stats, leveling, and branching dialogue, but no traditional combat.",
        submissions: [
            ["Game", "Completed E-rated online video game."],
            ["Documentation", "Required game-development documentation."]
        ],
        semifinalist:
            "Participate in the required interview to demonstrate knowledge gained during development."
    },

    "virtual-reality-simulation": {
        title: "Virtual Reality Simulation (VR)",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "1 team per chapter; individual entries permitted",
        teamSize: "Individual or team",
        description:
            "Participants use video and 3D computer graphics tools to create a two-to-three-minute VR visualization addressing the annual theme.",
        challenge:
            "Create a two-to-three-minute VR visualization supported by required documentation.",
        submissions: [
            ["VR Visualization", "Completed two-to-three-minute VR experience."],
            ["Documentation", "Supporting documentation."]
        ],
        semifinalist:
            "Deliver a presentation about the visualization and participate in the interview."
    },

    "vlogging": {
        title: "Vlogging",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "2 teams of 2–6 members per chapter",
        teamSize: "2–6 members",
        description:
            "Participants use digital video technology and storytelling techniques to create an original series reflecting an annual technology theme.",
        challenge:
            "Create a connected three-episode vlog series exploring how a small action can lead to meaningful change.",
        themeTitle: "The Butterfly Effect",
        themeText:
            "Create three connected episodes showing how one decision, act of kindness, innovation, challenge, or moment can create extraordinary change.",
        submissions: [
            ["Vlog Series", "Three connected episodes with a maximum total length of six minutes."],
            ["Storytelling", "Authentic experiences, reflection, and creative videography/editing."]
        ],
        semifinalist:
            "Complete the onsite video challenge with the required criteria."
    },

    "webmaster": {
        title: "Webmaster",
        level: "High School",
        competition: "Regionals → States → Nationals",
        eligibility: "1 team per chapter; maximum 6 members; individual entries permitted",
        teamSize: "Individual or up to 6 members",
        description:
            "Participants design, build, and launch a website addressing the annual challenge.",
        challenge:
            "Create an interactive AI learning portal for grades 9–12 that teaches foundational AI concepts, practical tools, and ethical AI use.",
        themeTitle: "Artificial Intelligence Learning Portal",
        themeText:
            "The website must include educational modules and gamification/progress tracking.",
        submissions: [
            ["Website", "Completed interactive AI learning portal."],
            ["Educational Modules", "At least three sections covering AI concepts, practical tools, and ethical AI use."],
            ["Gamification", "Features such as badges, XP, or a progress dashboard."]
        ],
        semifinalist:
            "Participate in the interview to demonstrate knowledge and expertise gained during development."
    }

};
const competitionDates = [
    {
        title: "Regional Pre-Submissions",
        date: "January 5–7"
    },
    {
        title: "Regional Conferences",
        date: "January 15–18"
    },
    {
        title: "SLC Pre-Submissions",
        date: "February 15"
    },
    {
        title: "SLC Pre-Submissions",
        date: "February 17"
    },
    {
        title: "State Leadership Conference",
        date: "March 3–6"
    },
    {
        title: "National TSA Conference",
        date: "Dates TBD"
    }
];

/* =========================================================
   EVENT PAGE
   ========================================================= */

function loadEventPage() {

    const titleElement = document.getElementById("eventTitle");

    if (!titleElement) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const eventKey = params.get("event");

    const event = events[eventKey];

    if (!event) {

        titleElement.textContent = "Event Not Found";

        const subtitle = document.getElementById("eventSubtitle");

        if (subtitle) {
            subtitle.textContent =
                "The competitive event you are looking for could not be found.";
        }

        return;
    }

    document.title = `${event.title} | Tennessee TSA`;

    titleElement.textContent = event.title;

    const subtitle = document.getElementById("eventSubtitle");

    if (subtitle) {
        subtitle.textContent = event.description;
    }

    const level = document.getElementById("eventLevel");

    if (level) {
        level.textContent = event.level;
    }

    const newBadge = document.getElementById("eventNew");

    if (newBadge) {
        newBadge.textContent = event.newEvent ? "NEW" : "";
    }

    const eligibility = document.getElementById("eligibility");

    if (eligibility) {
        eligibility.textContent = event.eligibility;
    }

    const teamSize = document.getElementById("teamSize");

    if (teamSize) {
        teamSize.textContent = event.teamSize;
    }

    const competition = document.getElementById("competition");

    if (competition) {
        competition.textContent = event.competition;
    }

    const description = document.getElementById("description");

    if (description) {
        description.textContent = event.description;
    }

    const challenge = document.getElementById("challenge");

    if (challenge) {
        challenge.textContent = event.challenge;
    }

    loadTheme(event);
    loadSubmissions(event);
    loadResources(event);
    loadDeadlines();
    cleanUpEventPage();

}


/* =========================================================
   THEME
   ========================================================= */

function loadTheme(event) {

    const themeSection = document.getElementById("themeSection");

    if (!themeSection) {
        return;
    }

    if (!event.themeTitle && !event.themeText) {
        themeSection.style.display = "none";
        return;
    }

    const themeTitle = document.getElementById("themeTitle");

    if (themeTitle) {
        themeTitle.textContent = event.themeTitle || "";
    }

    const themeText = document.getElementById("themeText");

    if (themeText) {
        themeText.textContent = event.themeText || "";
    }

    const themeLink = document.getElementById("themeLink");

    if (themeLink) {

        if (event.themeLink) {

            themeLink.href = event.themeLink;
            themeLink.textContent = "View Official Problem →";

        } else {

            themeLink.style.display = "none";

        }
    }

}


/* =========================================================
   SUBMISSIONS
   ========================================================= */

function loadSubmissions(event) {

    const container = document.getElementById("submissions");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    if (event.submissions) {

        event.submissions.forEach(item => {

            const card = document.createElement("div");

            card.className = "submission-item";

            card.innerHTML = `
                <span>${item[0]}</span>
                <p>${item[1]}</p>
            `;

            container.appendChild(card);

        });

    }

    /*
       Semifinalist requirements are intentionally separated
       so students can immediately see what happens ONLY
       if they advance.
    */

    if (event.semifinalist) {

        const semifinalist = document.createElement("div");

        semifinalist.className =
            "submission-item semifinalist";

        semifinalist.innerHTML = `
            <span>Semifinalist — Only if you advance</span>
            <p>${event.semifinalist}</p>
        `;

        container.appendChild(semifinalist);

    }

}


/* =========================================================
   RESOURCES
   ========================================================= */

function loadResources(event) {

    const container = document.getElementById("resources");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    addResource(
        container,
        "TSA Competitive Events",
        "https://tsaweb.org/competitions"
    );

    addResource(
        container,
        "National TSA Competition Requirements",
        "https://tsaweb.org/competitions/competition-requirements"
    );

    if (event.themeLink) {

        addResource(
            container,
            "Official Event Theme / Problem",
            event.themeLink
        );

    }

}


/* =========================================================
   RESOURCE HELPER
   ========================================================= */

function addResource(container, name, url) {

    const item = document.createElement("div");

    item.className = "resource-item";

    item.innerHTML = `
        <span>${name}</span>
        <a
            href="${url}"
            target="_blank"
            rel="noopener noreferrer"
        >
            View Resource →
        </a>
    `;

    container.appendChild(item);
}
function loadDeadlines() {

    const container = document.getElementById("deadlines");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    competitionDates.forEach(item => {

        const timelineItem = document.createElement("div");

        timelineItem.className = "timeline-item";

        timelineItem.innerHTML = `
            <strong>${item.title}</strong>
            <span>${item.date}</span>
        `;

        container.appendChild(timelineItem);

    });
}

/* =========================================================
   CLEAN UP EVENT PAGE
   ========================================================= */

function cleanUpEventPage() {

    const labels = document.querySelectorAll(
        ".content-section .section-label"
    );

    const labelNames = [
        "DESCRIPTION",
        "THEME & DESIGN PROBLEM",
        "WHAT YOU SUBMIT",
        "OFFICIAL RESOURCES"
    ];

    labels.forEach((label, index) => {

        if (labelNames[index]) {
            label.textContent = labelNames[index];
        }

    });

    

    

}


/* =========================================================
   EVENT SEARCH
   ========================================================= */

function setupSearch() {

    const searchInput =
        document.getElementById("eventSearch");

    if (!searchInput) {
        return;
    }

    const cards =
        document.querySelectorAll(".event-card");

    const categories =
        document.querySelectorAll(".event-category");

    let noResults =
        document.querySelector(".no-results");

    if (!noResults) {

        noResults = document.createElement("p");

        noResults.className = "no-results";

        noResults.textContent =
            "No competitive events match your search.";

        const eventsSection =
            document.querySelector(".events-section");

        if (eventsSection) {
            eventsSection.appendChild(noResults);
        }

    }

    searchInput.addEventListener("input", () => {

        const query =
            searchInput.value.trim().toLowerCase();

        if (!query) {

            cards.forEach(card => {
                card.classList.remove("hidden");
            });

            categories.forEach(category => {
                category.classList.remove("hidden");
            });

            noResults.style.display = "none";

            return;
        }

        let visibleCards = 0;

        cards.forEach(card => {

            const text =
                card.textContent.toLowerCase();

            if (text.includes(query)) {

                card.classList.remove("hidden");
                visibleCards++;

            } else {

                card.classList.add("hidden");

            }

        });

        categories.forEach(category => {

            const visible =
                category.querySelectorAll(
                    ".event-card:not(.hidden)"
                ).length;

            if (visible === 0) {
                category.classList.add("hidden");
            } else {
                category.classList.remove("hidden");
            }

        });

        noResults.style.display =
            visibleCards === 0 ? "block" : "none";

    });

}


/* =========================================================
   START
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    loadEventPage();
    setupSearch();

});