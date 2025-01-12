<template>
    <div class="view">
        <h1> TONNAM</h1>
        <h2> Athisaya Vasikanond</h2>
        <div class="sub-head">Experience</div>

        <div v-for="(item, index) in experiences" :key="item.role">
            <div class="event">
                <div class="timeline"> 
                    {{ item.duration }} <br> <div class="location">{{ item.location }}</div>
                </div>
                <div class="experience">
                    <b> {{item.role}} </b>
                    <div v-for="(item, index) in item.description" :key="item.role"> 
                        {{ item }}<br> 
                    </div>
                </div>
            </div>
        </div>
        <div> <br><br><br><br>//</div>
        <div class="skills">
                <div class="education-tit"> Skills <br><br></div>
                <div>
                    <b>Soft Skills</b> <br> Flexibility, Collaboration, Initiative, Self Assessment <br><br>
                </div>
                <div>
                    <b>Hard Skills</b> <br> Photography, Videography<br>(Analogue & DSLR) <br><br>
                </div>
                <div>
                    <b>Softwares</b> <br> Adobe Suite, Capture One, Blender, <br>Davinci Resolve, 
				    Visual Studio Code, Webflow,<br> ArduinoIDE, Procreate, Final Cut Pro <br><br>
                </div>
                <div>
                    <b>Language</b> <br> English (Professional)<br>Thai (Native)<br><br>
                </div>
                <div>
                    <b>Values</b> <br> Efficiency, Curiosity, Kindness, Cohesions<br><br>
                </div>
                <div class="education-tit"> <br><br><br> Education<br><br></div>
                <div>
                    2020-2024<br>London College of Communication,<br>Creative Computing Institute (UAL)
                    <br><b>BA (Hons) Design for Art Direction (with Creative Computing)</b><br> Upper Second Honour (2:1)
                </div>
                <div>
                    <br><br>2019-2020<br>Central Saint Martins<br> <b>Level 3 Foundation Diploma in Art and Design</b>
                </div>
                <div>
                    <br><br>2019-2020<br>International School of Creative Arts (ISCA)<br>
                    <b>A-levels:</b> 2 A*s - <br>Graphic Communication,
                    <br>Textiles and Fashion Design
                </div>
                <div>
                    <br><br>2014-2019<br>Shrewsbury International School<br>
                    <b>IGCSEs:</b> 6 A*s, 4As - <br> Fine Art, Design Technology, Maths, Business,<br>
                    Co-ordinated Science, Thai, English Literature, <br>
                    English Second Language, Geography.
                </div>
                <div>
                    <br><br><b>Awards:</b><br>Top in the World Fine Art GCSE<br> Bronze Duke of Edinburgh's International Award
                </div>
        </div>
    </div>
    
  </template>
  
<script>

const experiences = [
    {
        duration: "Dec, 2024",
        location: "London, UK",
        role: "Dop | Buratino short film",
        description : ["a passion project"]
    },
    {
        duration: "Jul-Oct, 2024",
        location: "Bangkok, TH",
        role: "Freelance Logo Design",
        description : ["Next Version Factory Co.,Ltd. "]
    },
    {
        duration: "Jul-Nov, 2024",
        location: "Bangkok, TH",
        role: "Freelance Photographer",
        description : ["Menu Photography for S.B.L. Restaraunt", "Campaign and Product Shots for Sawanya", 
                       "Brand Launch Photography for On My Wish List"]
    },
    {
        duration: "Jun, 2024",
        location: "London,UK",
        role: "",
        description : ["Product shots for Ingrid Kraftchenko"]
    },
    {
        duration: "Jan, 2024",
        location: "London, UK",
        role: "Photographer’s Assistant | Irina  Gauk",
        description : ["A collaboration between Irina and Paper Shoot", "featured in Loammi Magazine"]
    },
    {
        duration: "May-Sep, 2023",
        location: "London, UK",
        role: "Painter | KOKO Art",
        description : ["• Social media content assistant.", "• Leading product design and artist."]
    },
    {
        duration: "2020-23",
        location: "London, UK",
        role: "Head of Graphic Team | UAL Thai Society",
        description : ["Brand manager and social media content creator."]
    },
    {
        duration: "Oct-Mar, 2022",
        location: "London, UK",
        role: "Waitressing | Prarie Fire",
    },
    {
        duration: "Aug, 2022",
        location: "London, UK",
        role: "Chief Creative Director | Samaggi Zine",
        description : ["• Planning and leading the graphic productions", "of Samaggi annual zine."]
    },
    {
        duration: "Jul-Aug, 2022",
        location: "Bangkok, TH",
        role: "Gallery Assistant Intern | ATT19",
        description : ["• Content and social media manager.", "• Gallery event and collaboration project organisation."]
    },
    {
        duration: "Aug-Sep, 2021",
        location: "Bangkok, TH",
        role: "Graphic Internship | Eyelink Vision Company",
        description : ["• Graphic and social media creator for eyewear brands", "including Thelios, Marchon, and ic! berlin.",
                       "• Developed window displays for eyewear.", "• Photography and brand catalogue manager."]
    },
    {
        duration: "2018",
        location: "Bangkok, TH",
        role: "Backstage Assistant |Bunka Fashion School",
        description : ["BA Fashion Design graduate show"]
    },
    {
        duration: "2018",
        location: "Bangkok, TH",
        role: "Styling Assistant | PHENOMENA CO.,LTD. ",
        description : ["• assisted in the preparations and filming of an advert"]
    },
    {
        duration: "2018",
        location: "Bangkok, TH",
        role: "Co-Founder of a Charity Event | Nice to Meet You",
        description : ["Graphic and designs creator for hoodies,", "as a fundrasing event for less fortunate childrens", "in Chiangmai, Thailand."]
    }

]

export default {
    name: "cvView",
    data() {
        return {
            experiences: experiences
        }
    }
}
</script>

<style scoped>

.sub-head {
    margin-top: 5%;
    margin-left: 5%;
    font-size: 24px;
    font-weight: 450;
}

.education-tit {
    font-size: 24px;
    font-weight: 450;
}

.event {
    display: flex;
    flex-direction: row;
    column-gap: 50px;
    margin-top: 35px;
    font-weight: 200;
}

.timeline {
    margin-left: 5%;
    width: 140px;
    text-align: right;
}

.experience {
    width: 450px;
}

.location {
    font-size: 12px;
    text-align: right;
}

.skills {
    display: flex;
    flex-direction: column;
    margin-top: -1251px;
    margin-left: 761px;
    font-weight: 200;
    width: 500px;
}

h1 {
    font-size: 60px;
    margin-bottom: 5px;
    margin-top: 5px;
    margin-left: 5%;
}

h2 {
    font-size: 30px;
    font-weight: 210;
    margin-left: 5%;
}

</style>