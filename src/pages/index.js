import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PostList from "../components/post-list";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="index-welcome">
      <p>Welcome to DublinCSS website. Here you'll find more information about our group events</p>
      <div className="dublincss-cta">
        Go to <a className="dublincss-cta__link" href="https://meetup.com/DublinCSS" target="_blank" rel="noopener noreferrer">meetup.com/DublinCSS</a> to RSVP to our events.
      </div>
    </section>
    <hr className="index-separator" />
    <PostList
      title="Latest Posts"
    />
  </Layout>
);

export default IndexPage;
