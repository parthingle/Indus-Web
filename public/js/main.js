document.addEventListener("DOMContentLoaded", function(event) {
    let officersSource = $("#officers-template").html();
    let officersTemplate = Handlebars.compile(officersSource);
    
    let dataObj = {
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
    
    $('#officers-mount').html(officersTemplate({
        officers: dataObj.officers
    }));
});
