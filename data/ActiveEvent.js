const event = {
    active: true,
    name: "Breaking into the Data Industry", // preferable shorter so that can fit into navbar
    fullName: "Breaking into the Data Industry | Panel Discussion",
    shortDescription: "A discussion between 5 data professionals regarding the data trend in the industry",
    fullDescription: "<p>Hello world</p><p>Second paragraph</p>", // this can be set to paragraph using p tags
    details: {
        date: "12 December 2021",
        time: "8:00 p.m. - 10:00 p.m",
        venue: "Teams"
    },
    invitedTitle: "Panelists", // maybe it can be Panelists / Speakers / Mentors / Judges / anything
    invitedDescription: "They will be sharing their experience in this workshop", // a short paragraph of description if there's any
    speakers: [
        {
            name: "John Doe",
            pic: "https://freepikpsd.com/file/2019/10/john-doe-png-6-Transparent-Images.png",
            description: "A random dude who has experience in doing many things."
        },
        {
            name: "John 2",
            pic: "https://freepikpsd.com/file/2019/10/john-doe-png-6-Transparent-Images.png",
            description: "A random dude who has experience in doing many things."
        },
        {
            name: "John 3",
            pic: "https://freepikpsd.com/file/2019/10/john-doe-png-6-Transparent-Images.png",
            description: "A random dude who has experience in doing many things."
        },
        {
            name: "John 4",
            pic: "https://freepikpsd.com/file/2019/10/john-doe-png-6-Transparent-Images.png",
            description: "A random dude who has experience in doing many things.",
            linkedin: "https://linkedin.com"
        }
    ],
    posts: [
        {
            link: "https://instagram.com",
            lazy: "https://i.imgur.com/4xtUNYTt.jpg",
            img: "https://i.imgur.com/4xtUNYTl.jpg",
            shortCaption: "hello world this is cool, super duper cool, very cool event"
        },
        {
            link: "https://instagram.com",
            lazy: "https://i.imgur.com/4xtUNYTt.jpg",
            img: "https://i.imgur.com/4xtUNYTl.jpg",
            shortCaption: "hello world this is cool, super duper cool, very cool event"
        },
        {
            link: "https://instagram.com",
            lazy: "https://i.imgur.com/4xtUNYTt.jpg",
            img: "https://i.imgur.com/4xtUNYTl.jpg",
            shortCaption: "hello world this is cool, super duper cool, very cool event"
        },
        {
            link: "https://instagram.com",
            lazy: "https://i.imgur.com/4xtUNYTt.jpg",
            img: "https://i.imgur.com/4xtUNYTl.jpg",
            shortCaption: "hello world this is cool, super duper cool, very cool event"
        },

    ],
    colors: {
        // change this color to give different theme feel,
        first: "#E6E6FA",
        second: "#f2e6fc",
        third: "#e8daf3",
        fourth: "#fcecff"
    },
}

export default event;