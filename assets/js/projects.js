$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/spring-cicd.png',
            link: 'https://github.com/lomayd/Spring-Lab-CICD',
            title: 'Spring-CICD',
            demo: false,
            technologies: ['SpringBoot', 'GitHub-Action', 'Nginx'],
            description: "Zero-Downtime CI / CD Using GitHub Action, Nginx",
            categories: ['featured', 'lab']
        },
        {
            image: 'assets/images/case.png',
            link: 'https://github.com/khu-capstone-design-case/case-backend',
            title: 'CASE',
            demo: false,
            technologies: ['SpringBoot', 'MySQL', 'MongoDB'],
            description: "'CASE' is a call recording summary and emotion (nuance) analysis web service",
            categories: ['featured', 'webdev']
        },
        {
            image: 'assets/images/mysql-replication-delay.png',
            link: 'https://github.com/lomayd/khu-graduate-project',
            title: 'MySQL Replication Delay',
            demo: false,
            technologies: ['MySQL'],
            description: "Study on Causes and Solutions for MySQL Replication Delay Issues",
            categories: ['lab']
        },
        {
            image: 'assets/images/parenting-sim.png',
            link: 'https://github.com/khuthon-parenting-sim/parenting-sim-backend',
            title: '금시초문(Parenting-Sim)',
            demo: false,
            technologies: ['SpringBoot', 'MySQL'],
            description: "'금시초문' is parenting information service for new parents",
            categories: ['featured', 'webdev']
        },
        {
            image: 'assets/images/dbms-replication.png',
            link: 'https://github.com/lomayd/DBMS-Lab-Replication',
            title: 'DBMS-Replication',
            demo: false,
            technologies: ['MySQL'],
            description: "MySQL Master-Slave DB Replication",
            categories: ['lab']
        },
        {
            image: 'assets/images/dbms-optimizing.png',
            link: 'https://github.com/lomayd/DBMS-Lab-Optimizing',
            title: 'DBMS-Optimizing',
            demo: false,
            technologies: ['MySQL'],
            description: "Reducing DBMS Execution Time",
            categories: ['lab']
        },
        {
            image: 'assets/images/dbms-logging.png',
            link: 'https://github.com/lomayd/DBMS-Lab-Logging',
            title: 'DBMS-Logging',
            demo: false,
            technologies: ['ElasticSearch', 'Kibana'],
            description: "Request / Response Logging Using ELK",
            categories: ['lab']
        },
        {
            image: 'assets/images/spring-graphql.png',
            link: 'https://github.com/lomayd/Spring-Lab-GraphQL',
            title: 'Spring-GraphQL',
            demo: false,
            technologies: ['SpringBoot'],
            description: "Spring For GraphQL",
            categories: ['lab']
        },
        {
            image: 'assets/images/dbms-querydsl.png',
            link: 'https://github.com/lomayd/DBMS-Lab-QueryDSL',
            title: 'DBMS-QueryDSL',
            demo: false,
            technologies: ['MySQL'],
            description: "QueryDSL JPA",
            categories: ['lab']
        },
        {
            image: 'assets/images/dbms-mybatis.jpeg',
            link: 'https://github.com/lomayd/DBMS-Lab-Mybatis',
            title: 'DBMS-Mybatis',
            demo: false,
            technologies: ['MySQL'],
            description: "Mybatis",
            categories: ['lab']
        },
        {
            image: 'assets/images/dbms-sharding.jpeg',
            link: 'https://github.com/lomayd/DBMS-Lab-Sharding',
            title: 'DBMS-Sharding',
            demo: false,
            technologies: ['MySQL'],
            description: "Sharded MySQL Cluster Using Apache ShardingSphere",
            categories: ['lab']
        },
        {
            image: 'assets/images/dbms-caching.png',
            link: 'https://github.com/lomayd/DBMS-Lab-Caching',
            title: 'DBMS-Caching',
            demo: false,
            technologies: ['Redis'],
            description: "Cache Server Using Redis",
            categories: ['lab']
        },
        {
            image: 'assets/images/nearbuy.png',
            link: 'https://github.com/Dcom-KHU/nearbuy-backend',
            title: 'NearBuy',
            demo: false,
            technologies: ['SpringBoot', 'MySQL', 'MongoDB'],
            description: "'NearBuy' is a neighborhood transaction platform for single-person households and students living alone",
            categories: ['featured', 'webdev']
        },
        {
            image: 'assets/images/yoursampple.png',
            link: 'https://github.com/lomayd/YourSampple-Remake',
            title: 'YourSampple',
            demo: false,
            technologies: ['SpringBoot', 'MySQL'],
            description: "'YourSampple' is a phone bill calculator",
            categories: ['webdev']
        },
        {
            image: 'assets/images/dbms-nosql.png',
            link: 'https://github.com/lomayd/DBMS-Lab-NoSQL',
            title: 'DBMS-NoSQL',
            demo: false,
            technologies: ['Redis', 'MongoDB', 'ElasticSearch'],
            description: "NoSQL CRUD",
            categories: ['lab']
        },
        {
            image: 'assets/images/dbms-rdbms.png',
            link: 'https://github.com/lomayd/DBMS-Lab-RDBMS',
            title: 'DBMS-RDBMS',
            demo: false,
            technologies: ['Oracle', 'MySQL', 'MSSQL', 'PostgreSQL'],
            description: "RDBMS CRUD",
            categories: ['lab']
        },
        {
            image: 'assets/images/ssd.png',
            link: 'https://github.com/new-tech-project-2/ssd-backend',
            title: 'SSD',
            demo: false,
            technologies: ['SpringBoot', 'MySQL'],
            description: "'SSD' is short for Smart Soju Dispenser, and is a smart soju dispenser using NFC",
            categories: ['featured', 'webdev']
        },
        {
            image: 'assets/images/refrigerator.png',
            link: 'https://github.com/Dcom-KHU/refrigerator-api-server',
            title: '냉장고를부탁해(Refrigerator)',
            demo: false,
            technologies: ['SpringBoot', 'MySQL'],
            description: "'냉장고를 부탁해' is a service that helps you manage the ingredients in your refrigerator and recommend food recipes tailored to the ingredients you have",
            categories: ['webdev']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}