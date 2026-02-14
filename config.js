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

get content() { return [ `

	<img src="/images/backgrounds/tedx-background.jpg" alt="TEDx event background" class="full-width hero-image" />

        <h2>TEDx, Mauritius on ${this.date}</h2>
        Hosted by the African Leadership College of Higher Education.


    ALCHE provides higher education for a higher purpose. We believe that young people hold the potential to become the ethical, entrepreneurial leaders our continent and planet need. Our role is to unlock that potential through a one-of-a-kind learning experience that gives students the foundation for a lifetime of leading positive change.

We have designed our entire institution around young people’s agency and autonomy as changemakers. Students declare missions, not majors – defining their educational experience by the impact they want to make in the world. And students needn’t wait until after graduation to start making that impact.

<img src="/images/alche.mountains.jpg" class="full-width hero-image"/>

At ALCHE, we break down the walls between academia and “the real world,” allowing opportunities for learning in hands-on settings like internships and off-campus projects. We believe students learn best when they can see their education in action, and that some of the greatest lessons come not only from our world-class faculty and staff, but also from industry professionals and peers.

Today, ALCHE is sought out by top tier international press to share our methods with the world. We are humbled to help nurture a new era of higher education that unleashes the amazing change young people can create. The moment for that change is long overdue.

<a href="https://alcheducation.com/admissions/" target="_blank">Join us.</a>`,


]; }

}