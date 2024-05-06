// product images
import breadcrumb_1 from "~/assets/img/portfolio/1/breadcrumb.jpg";
import breadcrumb_2 from "~/assets/img/portfolio/2/breadcrumb.jpg";
import breadcrumb_3 from "~/assets/img/portfolio/3/breadcrumb.jpg";
import uj_img_1 from "~/assets/img/portfolio/1/img-1.jpg";
import uj_img_2 from "~/assets/img/portfolio/1/img-2.jpg";
import uj_img_3 from "~/assets/img/portfolio/1/img-3.jpg";
import uj_img_4 from "~/assets/img/portfolio/1/img-4.jpg";
import uj_mp4_1 from "~/assets/img/portfolio/1/video-1.mp4";
import uj_mp4_2 from "~/assets/img/portfolio/1/video-2.mp4";
import zadig_img_1 from "~/assets/img/portfolio/2/img-1.jpg"; 
import zadig_img_2 from "~/assets/img/portfolio/2/img-2.jpg"; 
import zadig_img_3 from "~/assets/img/portfolio/2/img-3.jpg";
import zadig_img_4 from "~/assets/img/portfolio/2/img-4.jpg"; 
import zadig_mp4_1 from "~/assets/img/portfolio/2/video-1.mp4";
import b4c_img_1 from "~/assets/img/portfolio/3/img-1.jpg";
import b4c_img_2 from "~/assets/img/portfolio/3/img-2.jpg";
import b4c_img_3 from "~/assets/img/portfolio/3/img-3.jpg";



export default {
  data() {
    return {
      portfolioData: [
        {
          id: 1,
          title: "Uncle J: build a marketplace of refurbished sneakers.",
          slug: "Uncle J is a startup I founded, <strong>incubated at Station F</strong>, with over 70.000 followers on social networks.",
          heroImage: breadcrumb_1,
          details: "I had to create an innovative, high-performance <strong>e-commerce marketplace</strong>, managing all the technical aspects and business development.",
          informations: [
            {
              title: 'Goals',
              content: "Develop an e-commerce platform from scratch in <strong>Vue.js</strong>, with a focus on <strong>performance optimization</strong>, code architecture and user experience. Manage the company's global strategy."
            },
            {
              title: 'Team',
              content: "Lead a <strong>team of 6 people</strong>, taking on the roles of CTO, PO, and Scrum, while working closely with a UI Designer co-founder."
            },
            {
              title: 'Missions',
              content: "<ul><li>Build a <strong>Vue.js E-commerce PWA</strong>, with Vuex connected via <strong>API REST</strong>(json) for store management, using JavaScript ES6, SASS for CSS, and BEM for HTML structure.</li><li>Develop a <strong>Design System</strong> (Figma) with components well thought for a fluid, fast user experience, with <strong>CSS animations</strong>.</li><li>Manage the transition of the platform to WordPress to simplify maintenance and future development, and <strong>hire/onboard an intern developer</strong>.</li></ul>"
            },
            {
              title: 'Stack',
              content: "<ul><li>Vue 2, Vuex, JavaScript ES6, SASS, BEM, PWA, Netlify, GitHub, Webpack, API REST, Airtable, No-Code, Performance Web, SEO, No-code, SCRUM</li><li>Scrum (daily, sprint planning, sprint reviews, etc.)</li></ul>"
            }
          ],
          website: "https://uncle-j.com/",
          relatedImages: [
            { img: uj_img_3 },
            { video: uj_mp4_1 },
            { img: uj_img_2 },
            { video: uj_mp4_2 },
            { img: uj_img_4 },
            { img: uj_img_1 },
          ],
        },
        {
          id: 2,
          title: "Zadig&Voltaire: revamping a luxury ecommerce website.",
          slug: "Zadig & Voltaire is a luxury brand with a <strong>high-traffic e-commerce platform</strong> (+1M visitors / month).",
          heroImage: breadcrumb_2,
          details: "I joined the team for a major <strong>redesign of the e-commerce</strong> site's front-end, with a particular focus on the header, shopping cart and product pages, using Vue.js and Vue Storefront.",
          informations: [
            {
              title: 'Goal',
              content: "Leading a front-end redesign, <strong>improving architecture</strong> of existing code, and ensuring an optimized user experience across various browsers while doing <strong>SEO and accessibility</strong> optimization."
            },
            {
              title: 'Team',
              content: "<strong>Squad of 7 people</strong>. Composed of 3 front-end developers, 2 back-end developers, 1 lead dev, and 1 PO."
            },
            {
              title: 'Missions',
              content: "<ul><li><strong>Redesign</strong> the header, shopping cart and product pages on the Vue.js E-commerce PWA.</li><li>Perform a deep refactoring of <strong>Design System</strong> components, optimize HTML and CSS architecture, and improve data management between components.</li><li>Ensure <strong>perfect accessibilit</strong> on all browsers, especially Safari, using BrowserStack.</li><li>Contribute to <strong>optimizing the performance</strong> of the high-traffic website and work closely with the SEO team.</li><li>Suggest improvements to the design, particularly in terms of <strong>CSS animations</strong>, bringing in my UI expertise.</li><li>Actively participate in the <strong>code review</strong> before each push to maintain a high standard of quality.</li></ul>"
            },
            {
              title: 'Stack',
              content: "<ul><li>Vue 2, Vue Storefront, Vuex, JavaScript ES6, SASS, BEM, Webpack, GitLab, BrowserStack, Webpack, GIT, Accessibilité, Web Perf, SEO, SCRUM</li><li>Scrum rituals, US estimations, Code Reviews, Demo, ...</li></ul>"
            }
          ],
          website: "https://zadig-et-voltaire.com/us/en/",
          relatedImages: [
            { img: zadig_img_1 },
            { img: zadig_img_2 },
            { video: zadig_mp4_1 },
            { img: zadig_img_3 },
            { img: zadig_img_4 },
          ],
        },
        {
          id: 3,
          title: "B4Cure: build a Medtech SaaS from Scratch.",
          slug: "B4Cure is an innovative <strong>MedTech start-up</strong> (raised +€10M) which has created a machine for high-speed PCR testing.",
          heroImage: breadcrumb_3,
          details: "I joined the team to transform the Python software controlling the machine into a PWA <strong>Vue 3</strong> for better access and usability.",
          informations: [
            {
              title: 'Goal',
              content: "Create a <strong>SaaS from Scratch</strong> to control machines via <strong>REST API</strong> (json) and display analysis results in the form of complex graphics (dataviz). Ensure a smooth transition from existing software to an integrated web solution."
            },
            {
              title: 'Team',
              content: "<strong>Squad of 8 people</strong>. Made up of 3 front-end developers, 1 Python back-end developer, 2 UI Designers, 1 Lead Dev, and 1 PO."
            },
            {
              title: 'Missions',
              content: "<ul><li>Work closely with the Python team to <strong>recreate features in Vue 3</strong>.</li><li>Develop the <strong>Design System</strong> (Figma) by components via <strong>Storybook</strong>, including integration, responsiveness, <strong>CSS animations</strong>, component architecture, transfer of data flow and development of features.</li><li>Manage <strong>data visualization</strong> (dataviz) using D3.js and Plotly to display complex graphs from machine data.</li><li>Contribute to the implementation of <strong>unit and functional tests</strong> to ensure compliance with medical standards, using <strong>Jest</strong> for unit tests and <strong>Cypress</strong> for functional tests.</li><li>Work with <strong>Tailwind</strong> for CSS and <strong>TypeScript</strong> for better code structure.</li><li>Write detailed documentation for compliance audits.</li></ul>"
            },
            {
              title: 'Stack',
              content: "<ul><li>Vue 3, Pinia, Vuex, JS ES6, Typescript, SASS, BEM, Tailwind, TDD, Test Unitaire, Test Fonctionnel, Cypress, Jest, StorybookD3.js, Plotly, Gitlab, API REST</li><li>Scrum rituals, Sprint planning, Code Reviews, Demo, etc.</li></ul>"
            }
          ],
          website: "https://bforcure.com/",
          relatedImages: [
            { img: b4c_img_1 },
            { img: b4c_img_2 },
            { img: b4c_img_3 }
          ],
        },
      ],
    };
  },
};
