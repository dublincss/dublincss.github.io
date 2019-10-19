import React from 'react';

import Layout from '../components/layout';
import SEO from "../components/seo";

const About = () => (
  <Layout>
    <SEO title="About" />
    <section className="index-welcome">
      <div>
        <div>
          DublinCSS is Ireland’s only group dedicated to all things CSS.
          We are a bunch of people passionate about nice interfaces and all the magic that CSS has to offer to the world wide web.
          We welcome all developers, designers and curious individuals, regardless of experience level, to discuss and learn about the latest and standard CSS tips and techniques.
          If you love CSS as much as we do, join our group now, and see you in the next meeting!
        </div>
        <div className="dublincss-cta-about">

          <div className="dublincss-cta">
            Follow us on <a className="dublincss-cta__link" href="https://twitter.com/dublincss" target="_blank" rel="noopener noreferrer">Twitter</a>.
          </div>
          <div className="dublincss-cta">
            Join <a className="dublincss-cta__link" href="https://meetup.com/DublinCSS" target="_blank" rel="noopener noreferrer">DublinCSS</a> on Meetup.
          </div>

          <div className="dublincss-cta">
            <br></br>
            Interested in <b>speaking</b>?
            <br></br>
            Apply <a className="dublincss-cta__link" href="https://bit.ly/DublinCSS-CFP" target="_blank" rel="noopener noreferrer">here</a> to RSVP to our events.
          </div>
        </div>

      </div>

    </section>
    <hr className="index-separator" />
  </Layout >

);

export default About;
