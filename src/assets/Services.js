const services = [
    {
        service: 'Load Balancer',
        message: 'Automatically distributes incoming traffic across a collection of servers',
        price: "price: $25/month"
    },
    {
        service: 'Continuous integration',
        message: 'Automatically build and test code every time you push to Github. This will connect your server directly to a repo on Github',
        options: [
            { 
                name: 'Perpetuate Yellow',
                price: '$100/month',
                builds: "50/day",
                concurrentBuilds: 1
            },
            {
                name: 'Perpetuate Green',
                price: '$300/month',
                builds: "100/day",
                concurrentBuilds: 2
            },
            {
                name: 'Perpetuate Silver',
                price: '$100/month',
                builds: "unlimited",
                concurrentBuilds: 5
            }
        ]
    },
    {
        service: "Error Logging/Monitoring",
        message: "Monitor your server/projects/code. Measure preformance, track errors as well as server info",
        options: [
            {
                name: "Telescope Andromeda",
                price: "$25/month",
                eventsPerMonth: "100,000",
                history: "90 days",
                users: 2
            },
            {
                name: "Telescope Cosmos",
                price: "$50/month",
                eventsPerMonth: "250,000",
                history: "180 days",
                users: 5
            },
            {
                name: "Telescope Virgo Stellar",
                price: "$150/month",
                eventsPerMonth: "750,000",
                history: "365 days",
                users: 25
            }
        ]
    }
]

export default services