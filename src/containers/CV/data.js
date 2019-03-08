import React, { Fragment } from "react";

export const EXPERIENCE = [
  {
    position: "Senior developer",
    company: "BCG Digital Ventures",
    url: "https://www.bcgdv.com/",
    dates: "April 2019 - Present"
  },
  {
    position: "Frontend developer",
    company: "Fathom",
    url: "https://fath.om",
    dates: "June 2017 - March 2019",
    description: () => (
      <Fragment>
        <p>
          Working at Fathom provided me with the opportunity of working
          alongside a number of highly-skilled professionals on a diverse range
          of challenging frontend web projects. The majority of my time was
          spent working with React, but was also fortunate enough to acquire
          hands-on experience with React Native, GatsbyJS and Angular 2.
        </p>
        <p>
          Over the years, Fathom helped instill a set of base principles to
          strive towards: complexity should only be introduced when it’s
          unavoidable; code should be easy to reason with and delete; try to
          avoid abstracting too early and think too far in the future, and
          finally, the top priority is always the best possible user experience.
        </p>
      </Fragment>
    )
  },
  {
    position: "Associate developer",
    company: "Cohaesus",
    url: "https://cohaesus.co.uk/",
    dates: "Feb 2015 - June 2017",
    description: () => (
      <Fragment>
        <p>
          I accrued over two years of experience working at Cohaesus in teams of
          various sizes on commercial front-end web projects. Originally hired
          as a Trainee developer, I progressed through Junior and into the
          Associate role by completing several technical segments and
          consistently delivering on time and to the best of my ability.
        </p>

        <ul>
          <li>
            HTML and CSS frameworks, but also had the exposure to Unity,
            Wordpress, and Knockout JS.
          </li>
          <li>
            Contributed to commercial projects on-site at some of London's top
            advertising agencies.
          </li>
          <li>
            Worked on both green field and legacy projects in both Agile and
            waterfall project environments.
          </li>
          <li>
            Hosted workshops and technical training sessions for Junior
            Developers.
          </li>
          <li>
            Represented the business overseas at international training events.
          </li>
        </ul>
      </Fragment>
    )
  },
  {
    position: "QA Tester",
    company: "Rockstar North",
    url: "https://www.rockstarnorth.com",
    dates: "May 2014 – Feb 2015",
    description: () => (
      <Fragment>
        <p>
          Credited as a QA Tester on Grand Theft Auto V, I was responsible for
          identifying defects, errors, and failures in the system software.
          These were cross-referenced over multiple databases; undiscovered bugs
          were logged and pre-existing issues were updated.
        </p>

        <ul>
          <li>
            Experience with functionality, regression, and user acceptance
            testing.
          </li>
          <li>
            Co-ordinated with up to 30 team members across multiple studios, and
            led a small team of four on previously unreleased alpha content.
          </li>
          <li>Software was version controlled with Perforce</li>
        </ul>
      </Fragment>
    )
  }
];

export const EDUCATION = [
  {
    qualification: "BSc (Hons) 2.1",
    course: "Audio Technology & Multimedia",
    institute: "Glasgow Caledonian University",
    dates: "2010 - 2014"
  },
  {
    qualification: "Graduate",
    course: "Frontend Nanodegree",
    institute: "Udacity",
    dates: "2016"
  }
];

export const EXPERTISE = [
  {
    id: "HTML",
    rating: 4
  },
  {
    id: "CSS",
    rating: 5
  },
  {
    id: "JS",
    rating: 3
  },
  {
    id: "Git",
    rating: 3
  }
];

export const INTERESTS = [
  "react",
  "react native",
  "gatsbyjs",
  "graphQL",
  "css-in-js"
];

export const HOBBIES = [
  "cycling",
  "boxing",
  "guitar",
  "video games",
  "cooking",
  "rugby"
];
