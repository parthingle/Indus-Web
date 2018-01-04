document.addEventListener("DOMContentLoaded", function(event) {
    let eventsSource = $("#events-template").html();
    let eventsTemplate = Handlebars.compile(eventsSource);
    let officersSource = $("#officers-template").html();
    let officersTemplate = Handlebars.compile(officersSource);
    
    let dataObj = {
        events: [
            {name: "Fall Study Night: Parhai with Chai", date: "12/05/17", location: "Young Hall 4216", description: "*Fall quarter is ending soon.... But that doesn't mean the South Asian community is done just yet! *Come through as UCLA Bangali Students Association BSA, Indus at UCLA, and UCLA Pakistani Student Association present to you FALL STUDY NIGHT! *We know you all are going to be on that study grind, but why not spice it up while eating some snacks and sipping on some chai with fellow Bruins! We will also be providing some free scantrons and bluebooks to prepare you for finals week! *All are welcome to join and we can't wait to see you there!"},
            {name: "INDUS Diwali 2017", date: "11/10/17", location: "UCLA Ackerman Grand Ballroom", description: "*Join Indus Bruins for Diwali 2017 at UCLA!!! Celebrate alongside UCLA's South Asian Community with free food, performances, and fun! It's a night you don't want to miss!*WHEN: Friday, November 10th*WHERE: Ackerman Grand Ballroom*SCHEDULE:*6:00 pm- Doors open*6:15-8:00pm- Performances*8:00-9:00 pm- Dinner*9:00-9:45 pm- OPEN DANCE FLOOR*ATTIRE: Semi-formal Desi or Western"},
            {name: "Pre-Diwali Mehndi & Henna Sale", date: "11/09/17", location: "Rieber Fireside Lounge", description: "*Joining us for INDUS Diwali 2017 but don't know where to get your mehendi done? We got your back! Come through to get your mehendi done, learn more about INDUS Diwali and get excited to celebrate with us!"},
            {name: "INDUS Diwali Sale!", date: "10/19/17", location: "Bruinwalk", description: "*Missing Diwali because of midterms or sheer distance!? Wish Indus Diwali was now and not on Nov 10? Well, don't worry! To get you into a Diwali mood, Indus is doing a small Diwali sale where you can eat samosas and maybe *gasps* mithai while board draws Mehendi on you! Come say hi! After all, Diwali is supposed to be spent with family!"},
            {name: "Indus General Body Meeting", date: "10/12/17", location: "UCLA Bunche Hall", description: "*When: Thursday, October 12th, 6-7:50 pm*Where: Bunche 3156 *Indus would like to invite you to our first general body meeting of the year! Come through and learn about the different ways you can get involved with any and all components of Indus (Diwali, South Asian Art Week, etc)! *We will also have a Q&A with UCLA upperclassmen to answer questions and share life hacks and tips to survive your first year at UCLA!*Open to everyone (undergraduate, graduate, faculty, etc)*PS: there’s food!"},
            {name: "Apply to the Indus Internship 2017", date: "10/08/17", location: "N/A", description: "*APPLICATION EXTENDED TO OCTOBER 8*Are you a South Asian student who wants to meet fellow South Asians of diverse backgrounds, dig deeper into your racial/social/political identity, dialogue/talk/and bond to develop a more holistic understanding of what being South Asian means to you? Do you want to make close friends with like-minded people?*INDUS interns will learn about social, political, and cultural concepts that will help them become a more active member in the South Asian community at UCLA and beyond. In addition to that, they will gain insight into event planning, advocacy, and foster long-lasting friendships with fellow interns and the INDUS board.*Thank you for considering to apply to the INDUS internship!*APPLICATION LINK : tinyurl.com/indusinterns"},
        ],
        officers: [
            {name: "Sanjana", imgUrl: "img/boardmembers/sanjana.jpg", role: "President", email: "mailto:social@ieeewatt.com", bio: "Sanjana is a fourth year Anthropology major. Her favorite Indus memory was the night before Diwali when board members and interns were working on decorations together and learning the moves to Kala Chashma. In her free time, you can find Sanjana napping on the third floor of Kerckhoff or avoiding people on Bruin Walk as she tries to get to class on time. She joined Indus board because she needed a home to learn more about and develop her political identity."},
            {name: "Lamia", imgUrl: "img/boardmembers/lamia.jpg", role: "Internal Vice President", email: "mailto:advocacywellness@ieeewatt.com", bio: "Lamia is a third year Psychobiology major. Her favorite Indus memory was making decorations and planning for events during South Asian Art Week."},
            {name: "Henna", imgUrl: "img/boardmembers/henna.jpg", role: "External Vice President", email: "mailto:internalpresident@ieeewatt.com", bio: "Henna is a third year Statistics major. Her favorite Indus memory is eating pani puri and pav bhaji during the student film festival in South Asian Art Week. (In her free time she can be found hunting food spots around LA with the same Indus people)"},
            {name: "Pradisha", imgUrl: "img/boardmembers/pradisha.jpg", role: "Co-Director of Cultural Affairs", email: "mailto:workshops@ieeewatt.com", bio: "Pradisha is a fourth year International Development Studies major. Her favorite Indus memory is making decorations and rehearsing the Indus dance number for Diwali."},
            {name: "Harman", imgUrl: "img/boardmembers/harman.jpg", role: "Co-Director of Cultural Affairs", email: "mailto:publicity@ieeewatt.com", bio: "Harman is a fourth year Political Science student. Her favorite Indus memory is getting to hear her amazing fellow board members talk about their cool ideas at meetings."},
            {name: "Shayleen", imgUrl: "img/boardmembers/shayleen.jpg", role: "Co-Director of Political Affairs", email: "mailto:workshops@ieeewatt.com", bio: "Shayleen is a second year Physiological Science major. Her favorite Indus memory is the internship because she learned and connected with her South Asian identity through culture and politics. She joined board to give back to her community. "},
            {name: "Anandamayee", imgUrl: "img/boardmembers/anandamayee.jpg", role: "Co-Director of Political Affairs", email: "mailto:workshops@ieeewatt.com", bio: "Anandamayee is a fourth year English Literature and Gender Studies double major. double major. Her favourite Indus memory is when the SAAW team took group photos at the end of all the events on Bunche rooftop. Everyone was their best hot-mess selves then and it gave her a real sense of community. "},
            {name: "Spun", imgUrl: "img/boardmembers/spun.jpg", role: "Internship Co-Director", email: "mailto:webmaster@ieeewatt.com", bio: "Spun is a second year Gender Studies major and this year's co-Internship Director. Their favorite Indus memory was helping organize South Asian Art Week. They joined Indus as an intern and wanted to continue forming a like-minded South Asian community on campus."},
            {name: "Priya", imgUrl: "img/boardmembers/priya.jpg", role: "Internship Co-Director", email: "mailto:treasurer@ieeewatt.com", bio: "Priya is a second year Psychology major and this year's co-Internship Director. Her favorite Indus memory is the UC South Asian Conference, where she met so many loving and passionate South Asian folks from across the UC and saw her community organize in a political way. "},
            {name: "Marsha", imgUrl: "img/boardmembers/marsha.jpg", role: "Co-Director of Community Projects", email: "mailto:workshops@ieeewatt.com", bio: "Marsha is a third year Cognitive Science major. Her favorite INDUS memory was attending the Mental Health with Communities of Color panel, in which she experienced a compassionate and loving space lead by South Asians unafraid to be political and it felt like home."},
            {name: "Anjum", imgUrl: "img/boardmembers/anjum.jpg", role: "Co-Director of Community Projects", email: "mailto:mentorship@ieeewatt.com", bio: "Anjum is a sophmore concentrating in neuroscience with a minor in gender studies. Her favorite INDUS memory: being one of the only non-indus members on the potent (and INDUS-saturated) team that spearheaded the first UC-wide South Avsian Conference."},
            {name: "Gaurav", imgUrl: "img/boardmembers/gaurav.jpg", role: "Director of Special Projects", email: "mailto:workshops@ieeewatt.com", bio: "Gaurav is a fourth year Statistics and Political Science double major. He is interested in uplifting traditionally marginalized communities within the South Asian community and providing them with a platform to share their stories."},
            {name: "Aashita", imgUrl: "img/boardmembers/aashita.jpg", role: "Co-Director of Finance", email: "mailto:corporate@ieeewatt.com", bio: "Aashita is a second year (budding) Computer Science Major. Her favourite Indus Memory is the post-South Asian Conference mixer where she finally felt like she found a place where she could be herself (by dancing dramatically)"},
            {name: "Shashwat", imgUrl: "img/boardmembers/shashwat.jpg", role: "Co-Director of Finance", email: "mailto:publicity@ieeewatt.com", bio: "Hi! I'm a second year Business Economics student. My favourite Indus memory is going on desi food trips in culver city."},
            {name: "Apurva", imgUrl: "img/boardmembers/apurva.jpg", role: "Director of Outreach", email: "mailto:externalpresident@ieeewatt.com", bio: "Appurva is a second year Pre Business Econ major. My favorite Indus memory: the art mixer that we held during the South Asian Art Week. SAAW required a lot of efforts and the mixer made me realize that every effort I put into SAAW was worth it because it helped create a space where I could engage with art and momentarily forgot all the problems that I had at that time. "},
            {name: "Tanzeela", imgUrl: "img/boardmembers/tanzeela.jpg", role: "Co-Director of Technology", email: "mailto:events@ieeewatt.com", bio: "Tanzeela is a third year Computer Science and Engineering Major. Her favorite Indus memory was promoting South Asian Art Week on her radio show with fellow board members."},            
            {name: "Parth", imgUrl: "img/boardmembers/parth.jpg", role: "Co-Director of Technology", email: "mailto:secretary@ieeewatt.com", bio: "I'm a third year Computer Science Major. My favorite Indus memory is selling samosas on Bruinwalk. "},
        ]
    };
    
    $.each(dataObj.events,function(i,item){reformatToPs(i,item);})
    $('#events-mount').html(eventsTemplate({
        events: dataObj.events
    }));
    
    $('#officers-mount').html(officersTemplate({
        officers: dataObj.officers
    }));
});

function reformatToPs(i, item){
    let list = item.description.split('*');
    let html = '';
     for(let i=0; i<list.length; i++) {
        html += '<p>' + list[i] + '</p>';
      }
    // html += '</ul>';
    item.description = html;
}
