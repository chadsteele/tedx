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
        <img src="/images/backgrounds/tedx-background.png" alt="TEDx event background" class="full-width hero-image" />
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
      {type: 'profilecard',
        profileImage: '/images/speakers/Fred Swaniker.png',
        link: 'https://alcheducation.com/our-leadership/#:~:text=Fred%20Swaniker',
        title: 'Speaker',
        subtitle: 'ALCHE Founder',
        name: 'FRED SWANIKER',
        subname: 'Founder of African Leadership Group',
        description: `Fred was recognized twice by US President Obama in 2010 and 2013 for his work in developing Africa’s future leaders. He has been recognised as a Young Global Leader by the World Economic Forum, by Forbes Magazine as one of the top ten young ‘power men’ in Africa, and by Echoing Green as one of the fifteen ‘best emerging social entrepreneurs in the world’. He is a Fellow of the Aspen Institute’s Global Leadership Network and was a TED Fellow in 2009. Fred founded the African Leadership ‘Group’—an ecosystem of organizations that includes African Leadership Academy, African Leadership Network, Africa Advisory Group, and of course, ALCHE. Collectively, these institutions aim to transform Africa by identifying, developing, and connecting three million game-changing leaders for Africa by 2060.`,
      },
      {
        type: 'profilecard',
        profileImage: '/images/speakers/veda-sunassee.png',
             link: 'https://alcheducation.com/our-leadership/#:~:text=Veda%20Sunassee',
        title: 'SPEAKER',
        subtitle: 'ALCHE, CEO',
        name: 'Veda Sunassee',
        subname: 'Educator & Leader',
        description: `As an educator at heart, Veda has spent a decade in several roles with the African Leadership (AL) Group, first as an Entrepreneurial Leadership Faculty at the African Leadership Academy before later serving as the Founding Dean of the African Leadership University (ALU), Rwanda for 2 years. Veda is currently serving as the Chief Executive Officer of ALC & ALU, overseeing operations across both the Mauritius and Rwanda campuses while steering the institution's new 5-year strategy to become a 'distributed university' across the world. He has helped develop the leadership model of central to the mandate of the AL Group- to develop 3 million African Leaders by 2035. During a sabbatical that he took in 2019, Veda co-founded NiaDelta, a Leadership and Education consulting firm that advises corporate C-suites as well as education leaders.`
      },
      {
        type: 'profilecard',
        profileImage: '/images/speakers/jeremy-ruiters.png',
             link: 'https://alcheducation.com/our-leadership/#:~:text=Jeremy%20Ruiters',
        title: 'SPEAKER',
        subtitle: 'ALCHE, Dean',
        name: 'Jeremy Ruiters',
        subname: 'Psychologist & Administrator',
        description: `Master of Arts: Psychology. Master of Business Administration (MBA). Jeremy John Ruiters is a dedicated psychologist and accomplished leader with over a decade of experience in university administration. Currently serving as the Dean of the Mauritius campus at the African Leadership College of Higher Education (ALCHE), Jeremy brings a wealth of knowledge in student development and program management. With a Masters Degree in Psychology and a Masters in Business Administration (MBA) specializing in leadership, Jeremy has a deep understanding of human behavior and organizational dynamics. Jeremy is known for leading diverse teams and spearheading initiatives that enhance the student experience. He is committed to fostering student ownership and development, and is recognized for his problem-solving skills, empathy, and strategic vision.`
      },
      {
        type: 'profilecard',
        profileImage: '/images/speakers/stephen-naicken.png',
             link: 'https://alcheducation.com/our-leadership/#:~:text=Stephen%20Naicken',
        title: 'SPEAKER',
        subtitle: 'ALCHE, Academic Programmes',
        name: 'Stephen Naicken',
        subname: 'Computer Scientist & Educator',
        description: `BSc (Hons) Computer Science, MRes Computer Science and Artificial Intelligence, PhD Informatics. Dr. Stephen Naicken is the Director of Academic Programmes at the African Leadership College of Higher Education (ALCHE) in Mauritius. He holds a Ph.D. in Informatics from the University of Sussex and has extensive experience in higher education and research. His interests include computer science education, computational trust, and delay-tolerant networking. He has numerous publications in reputable journals and conferences, and his work as a research fellow at the University of Sussex led to the creation of a university-back entrepreneurial venture. His faculty and curriculum development leadership, with a student-first focus, ensures the academic programs remain cutting-edge and impactful.`
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
        subname: 'Entrepreneurial Leadership Student',
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
        name: 'Pretty',
        subname: 'Animal Ambassador | Master at Play, Love and Happiness',
        description: 'Pretty is our beloved stray dog and the heart of Mauritius. She, like all the others, teach joy and comfort to everyone around her.'
        }
    ];
    }
}