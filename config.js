export default {
    location: "ALCHE",
    title:"TEDxALCHE",
    org:"ALCHE",
    date: "October 5, 2026",

    description: `Mauritius is an island nation in the Indian Ocean, known for its stunning beaches, vibrant culture, and diverse wildlife. It offers a blend of natural beauty and rich history, making it a popular destination for travelers seeking both relaxation and adventure.

    `,

    get phrases() {
        return [
            `<span class="ted-red">Ideas</span> worth spreading`,
            `African <span class="ted-red">Leadership College</span> of Higher Education`,
            `Reimagining Education`,
            `Join us for an unforgettable day of <span class="ted-red">inspiration</span>, <span class="ted-red">innovation</span>, and <span class="ted-red">connection</span>`,
            this.date,
            `Just ${Math.ceil((new Date(this.date) - new Date()) / (1000 * 60 * 60 * 24))} days away!`,
            `Get your tickets now!`
        ];
    },

    get content() {
        return [
        `
        <h1>Our Mission</h1>
        <p>To bring together thought leaders, innovators, and changemakers to explore the questions that will define tomorrow sparking conversations that inspire action and create lasting impact.</p>
        <img src="/images/backgrounds/tedx-background.png" alt="TEDx event background" class="full-width " />
        <h2>TEDx, Mauritius on ${this.date}</h2>
        <p>Hosted by the African Leadership College of Higher Education.</p>
        <p>ALCHE provides higher education for a higher purpose. We believe that young people hold the potential to become the ethical, entrepreneurial leaders our continent and planet need. Our role is to unlock that potential through a one-of-a-kind learning experience that gives students the foundation for a lifetime of leading positive change.</p>
        <p>We have designed our entire institution around young people's agency and autonomy as changemakers. Students declare missions, not majors – defining their educational experience by the impact they want to make in the world. And students needn't wait until after graduation to start making that impact.</p>
        <img src="/images/alche.mountains.png" class="full-width hero-image"/>
        <p>At ALCHE, we break down the walls between academia and "the real world," allowing opportunities for learning in hands-on settings like internships and off-campus projects. We believe students learn best when they can see their education in action, and that some of the greatest lessons come not only from our world-class faculty and staff, but also from industry professionals and peers.</p>
        <p>Today, ALCHE is sought out by top tier international press to share our methods with the world. We are humbled to help nurture a new era of higher education that unleashes the amazing change young people can create. The moment for that change is long overdue.</p>
        <a href="https://alcheducation.com/admissions/" target="_blank">Join us.</a>`,

        `<h1 id="dates">Event Timeline</h1>
        <ul>
<li><strong>April 20, 2026:</strong> Speaker Submission Deadline.</li>
<li><strong>May 18, 2026:</strong> Speaker Selection and Announcement - Finalize speaker list and begin coaching.</li>
<li><strong>August 17, 2026:</strong> Speaker Training and Rehearsals - Script reviews, slide preparation, and active rehearsals</li>
<li><strong>October 5, 2026:</strong> TEDx Event - The BIG day.</li>

        </ul>`,

         `<h1 id="speakers" >Speakers</h1>`,
         `<h2>Nominate someone amazing, perhaps that someone is you?!</h2>
		<p>
			The following are unconfirmed nominations for speakers. We are looking for individuals who have a unique perspective, innovative ideas, and a passion for making a positive impact in Mauritius and the world. If you know someone who fits this description or if you believe you have a story worth sharing, we encourage you to nominate them (or yourself) for consideration as a speaker at our event.
		</p>
		<a href="#contact" class="ted-link">Nominate a speaker</a>

        <h2>Nominated Speakers</h2><i>Unconfirmed and subject to change</i>
         `,



      {type: 'profilecard',
        profileImage: '/images/speakers/Fred Swaniker.png',
        link: 'https://alcheducation.com/our-leadership/#:~:text=Fred%20Swaniker',
        title: 'Keynote',
        subtitle: 'ALCHE Founder',
        name: 'FRED SWANIKER',
        subname: 'Founder of African Leadership Group',
        description: `Fred was recognized twice by US President Obama in 2010 and 2013 for his work in developing Africa’s future leaders. He has been recognised as a Young Global Leader by the World Economic Forum, by Forbes Magazine as one of the top ten young ‘power men’ in Africa, and by Echoing Green as one of the fifteen ‘best emerging social entrepreneurs in the world’. He is a Fellow of the Aspen Institute’s Global Leadership Network and was a TED Fellow in 2009. Fred founded the African Leadership ‘Group’—an ecosystem of organizations that includes African Leadership Academy, African Leadership Network, Africa Advisory Group, and of course, ALCHE. Collectively, these institutions aim to transform Africa by identifying, developing, and connecting three million game-changing leaders for Africa by 2060.`,
      },
      {
        type: 'profilecard',
        profileImage: '/images/speakers/SUSHRUTHI.png',
        title: 'Speaker',
        subtitle: 'change maker',
        name: 'SUSHRUTHI KRISHNA',
        subname: 'Model & Architect',
        description: 'Too often we underestimate the power of a touch, a smile, a kind word, a listening ear, an honest compliment, the smallest act of caring, all of which have the potential to turn a life around.',
      },
       {
        type: 'profilecard',
        profileImage: '/images/speakers/hani.png',
        link: 'https://www.linkedin.com/in/hani-bundhun-4a8766201/',
        title: 'Speaker',
        subtitle: 'Financier',
        name: 'HANI BUNDHUN',
        subname: `Commodity Trade Finance Associate`,
        description: `Commodity Trade Finance Associate at Mauritius Commercial Bank (MCB), specializing in Energy & Commodities.`,
      },






          `<h1 id="about" style="padding-top:50px">About us</h1>`,
        {
        type: 'profilecard',
        profileImage: '/images/team/tako.png',
        title: 'EVENT MC',
        subtitle: 'Master of Ceremonies',
        name: 'Tako',
        subname: 'Entrepreneurial Leadership Student',
        description: 'Entrepreneurial Leadership Student at ALCHE, bridging the capital gap for Africa\'s infrastructure.'
        },
        {
        type: 'profilecard',
        profileImage: '/images/team/Gabrielle-Harry.png',
        link: 'https://www.linkedin.com/in/gabrielle-harry-1a9b3a1b0/',
        title: 'AUTHOR',
        subtitle: 'Cultural Strategist',
        name: 'Gabrielle Harry',
        subname: 'Digital Humanities and African Arts and Culture',
        description: 'Working to increase access to historical and contemporary African and Afro-diasporic knowledge through art, cultural programming and digital interventions which fuel cultural dynamism and drive social change.'
        },
         {
        type: 'profilecard',
        profileImage: '/images/team/lisette-mukiza.png',
        link: 'https://www.linkedin.com/in/lisette-mukiza/',


                title: 'Co-Organizer',
        subtitle: 'EdTech Enthusiast',
        name: 'LISETTE MUKIZA',
        subname: 'Technologist & Leader',

        description: `Software Engineering student at the African Leadership College of Higher Education (ALCHE) in Mauritius and the SRC Academic Affairs Committee Head. She focuses on using technology and education to address youth challenges across Africa, with an emphasis on solving systemic problems.

She has worked on research and team projects exploring youth unemployment, education-to-work pathways, and urban systems in African contexts, building skills in systems thinking, problem analysis, and ethical technology design.

As a TEDxALCHE co-organizer, she aims to create a platform for meaningful conversations on leadership, innovation, education, and social impact. She believes that when young people are given space to share ideas, they can drive positive change in their communities.`,
      },
      {
        type: 'profilecard',
        profileImage: '/images/team/stephy.png',
        title: 'DIRECTOR',
        subtitle: 'Operations',
        name: 'RUKUNDO KEZA STEPHY',
        subname: 'Education & Project Management Leader',
        description: `Education enthusiast, passionate about project management, and about working and building teams. Dedicated to improving the education system across Africa, by working in different educational sectors and developing a deep understanding of what students need. Currently pursuing a bachelor's degree in Computer Science at the African Leadership College of Higher Education with the aim of improving education through the usage of technology.
`,
      },
        {
        type: 'profilecard',
        profileImage: '/images/team/patii.png',
        title: 'DIRECTOR',
        subtitle: 'Marketing',
        name: 'Patii',
        subname: 'Comms & Marketing Specialist',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
        type: 'profilecard',
        profileImage: '/images/team/ayomide.png',
        link: 'https://www.linkedin.com/in/ayomide-ajayi96/',
        title: 'DIRECTOR',
        subtitle: 'Finance',
        name: 'Ayomide Ajayi',
        subname: 'Investment Analyst',
        description: 'Entrepreneurial Leadership Student at ALCHE, bridging the capital gap for Africa\'s infrastructure.'
        },
        {
        type: 'profilecard',
        profileImage: '/images/team/ishimwe.png',
        link: 'https://www.linkedin.com/in/ishimweolivier/',
        title: 'FOUNDER',
        subtitle: 'Fearless Leader',
        name: 'Olivier ISHIMWE',
        subname: 'Impact-Driven Entrepreneur',
        description: 'Entrepreneurial Leadership student at ALCHE, passionate about education, digital innovation, and youth empowerment.'
        },
        {
        type: 'profilecard',
        profileImage: '/images/team/pretty.png',
        title: 'SPIRITUAL',
        subtitle: 'Teacher',
        name: 'Pretty, PhD',
        subname: `Animal Ambassador,  PhD in Play, Love and Happiness`,
        description: 'Pretty is our beloved stray dog and the heart of Mauritius. She, like all the others, teach joy and comfort to everyone around her.'
        }
    ];
    }
}