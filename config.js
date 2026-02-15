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

    <h1>Our Mission</h1>
   To bring together thought leaders, innovators, and changemakers to explore the questions that will define tomorrow sparking conversations that inspire action and create lasting impact.


	<img src="/images/backgrounds/tedx-background.png" alt="TEDx event background" class="full-width hero-image" />

        <h2>TEDx, Mauritius on ${this.date}</h2>
        Hosted by the African Leadership College of Higher Education.


    ALCHE provides higher education for a higher purpose. We believe that young people hold the potential to become the ethical, entrepreneurial leaders our continent and planet need. Our role is to unlock that potential through a one-of-a-kind learning experience that gives students the foundation for a lifetime of leading positive change.

We have designed our entire institution around young people’s agency and autonomy as changemakers. Students declare missions, not majors – defining their educational experience by the impact they want to make in the world. And students needn’t wait until after graduation to start making that impact.

<img src="/images/alche.mountains.png" class="full-width hero-image"/>

At ALCHE, we break down the walls between academia and “the real world,” allowing opportunities for learning in hands-on settings like internships and off-campus projects. We believe students learn best when they can see their education in action, and that some of the greatest lessons come not only from our world-class faculty and staff, but also from industry professionals and peers.

Today, ALCHE is sought out by top tier international press to share our methods with the world. We are humbled to help nurture a new era of higher education that unleashes the amazing change young people can create. The moment for that change is long overdue.

<a href="https://alcheducation.com/admissions/" target="_blank">Join us.</a>`,

`<h1 id="dates">Event Dates</h1>
<p>Since your event is scheduled for October 5, 2026, you should follow the standard TEDx organizer timeline, which typically begins 9 to 12 months before the event date. Based on TED.com guidelines and typical TEDx cycles for 2026, here are the critical dates and deadlines you should note:</p>

<p><strong>Speaker Submission Deadline: February &ndash; April 2026</strong>



For an October event, most organizers close their speaker applications between February and April. This allows for a rigorous 5 to 6 month vetting and coaching process.</p>
<ul>
<li>Application Launch: Late 2025 or January 2026.</li>
<li>Submission Deadline: Aim for no later than March 31, 2026, to stay on schedule for speaker selections in May.</li>
</ul>

<p><strong>Speaker Selection and Announcement: May 2026</strong>



By May, you should have finalized your speaker list. This timing is essential because it gives you the summer months to work with speakers on their scripts and stage presence.</p>

<p><strong>Speaker Training and Rehearsals: June &ndash; August 2026</strong>



TEDx requires a significant time investment in speaker coaching. You should plan for:</p>
<ul>
<li>Outline and Script Reviews: June.</li>
<li>Slide Preparation: July.</li>
<li>Active Rehearsals: August and September.</li>
</ul>

<p><strong>Licensing and Logistics: October 2025 &ndash; January 2026</strong></p>
<ul>
<li>License Application: You must apply for your license at least 3 months before your event, but 9 to 12 months is recommended. If you haven't applied yet, do so immediately.</li>
<li>Venue Booking: Secure your venue at least 9 months out (January 2026) to ensure the date is held.</li>
</ul>

<p><strong>Post-Event Deadlines: October &ndash; November 2026</strong></p>
<ul>
<li>Video Uploads: You are required to upload all talk videos to the TEDx YouTube channel within one month of your event (by November 5, 2026).</li>
<li>Speaker Releases: Ensure all signed release forms are collected and archived before the speakers take the stage on October 5.</li>
</ul>

`


]; }

}