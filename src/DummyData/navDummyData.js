 export const navLinks = [
    {
        name: "Hotels & Resorts", type: "submenu", submenu: [
            { name: "Hotels & Resorts", href: "/hotels/luxury" },
            { name: "New Hotels", href: "/hotels/business" },
            { name: "Meetings & Celebrations", href: "/hotels/family" },
        ]
    },
    {
        name: "Experiences", type: "submenu", submenu: [
            { name: "Spa & Wellness", href: "/experiences/spa" },
            { name: "Dining & Nightlife", href: "/experiences/dining" },
            { name: "Adventure & Sports", href: "/experiences/adventure" }
        ]
    },
    { name: "Ritz-Carlton Reserve", href: "/about" },
    { name: "Residences", href: "/services" },
    { name: "Yachts", href: "/contact" },
    {
        name: "About The Ritz-Carlton",
        type: "nested",
        items: [
            {
                name: "About The Ritz-Carlton",
                subItems: [
                    { name: "About The Ritz-Carlton", href: "/about"  },
                    { name: "Our Legacy", href: "/legacy" },
                    { name: "Sustainability", href: "/sustainability" },
                ],
                sideInfo:{
                        imgSrc: "https://cache.marriott.com/is/image/marriotts7prod/rz-rc-club-ap-lifestyle-25-32041:Wide-Hor?wid=217&fit=constrain",
                        title: "The Gold Standard",
                        desc: "With a credo and corporate philosophy of unwavering commitment to service, The Ritz-Carlton sets the standard for luxury experiences the world over.",
                        link: "About The Ritz-Carlton"
                    }
            },
            {
                name: "The Ritz-Carlton Experience",
                subItems: [
                    { name: "Experiences", href: "/experiences" },
                    { name: "Service Philosophy", href: "/service" },
                ],
                sideInfo:{
                        imgSrc: "https://cache.marriott.com/is/image/marriotts7prod/rz-rc-club-ap-lifestyle-25-32041:Wide-Hor?wid=217&fit=constrain",
                        title: "Inspiring Life’s Journeys",
                        desc: "Explore how The Ritz-Carlton aspires to give you an experience that will stay with you forever.",
                        link: "The Ritz-Carlton Experience"
                    }
            },
        ],
    },
    {
        name: "The Journey", type: "submenu", submenu: [
            { name: "The Journey", href: "/contact/support" },
            { name: "Inspiration", href: "/contact/careers" },
            { name: "Destination Guides", href: "/contact/careers" },
            { name: "Travel Interests", href: "/contact/careers" }
        ]
    },
];