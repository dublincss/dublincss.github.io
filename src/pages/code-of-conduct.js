import React from "react"

import Layout from "../components/layout"
import ImportantNotice from "../components/important-notice"

const CodeOfConduct = () => (
  <Layout>
    <section className="code-of-conduct">
        <h1>Conference Code of Conduct</h1>

        <p>
        All attendees, speakers, sponsors and volunteers at our conference are
        required to agree with the following code of conduct. Organisers will
        enforce this code throughout the event. We expect cooperation from all
        participants to help ensure a safe environment for everybody.
        </p>

        <ImportantNotice title="Important notice">
            This code of conduct page is a template and <strong>should not be considered as
            enforceable</strong>. If an event has linked to this page, please ask them to
            publish their own code of conduct including details on how to report
            issues and where to find support.
        </ImportantNotice>

        <h2>The Quick Version</h2>

        <p>
        Our conference is dedicated to providing a harassment-free conference
        experience for everyone, regardless of gender, gender identity and
        expression, age, sexual orientation, disability, physical appearance, body
        size, race, ethnicity, religion (or lack thereof), or technology choices.
        We do not tolerate harassment of conference participants in any form.
        Sexual language and imagery is not appropriate for any conference venue,
        including talks, workshops, parties, Twitter and other online media.
        Conference participants violating these rules may be sanctioned or
        expelled from the conference <em>without a refund</em> at the discretion
        of the conference organisers.
        </p>

        <h2>The Less Quick Version</h2>

        <p>
        Harassment includes offensive verbal comments related to gender, gender
        identity and expression, age, sexual orientation, disability, physical
        appearance, body size, race, ethnicity, religion, technology choices,
        sexual images in public spaces, deliberate intimidation, stalking,
        following, harassing photography or recording, sustained disruption of
        talks or other events, inappropriate physical contact, and unwelcome
        sexual attention.
        </p>

        <p>
        Participants asked to stop any harassing behavior are expected to comply
        immediately.
        </p>

        <p>
        Sponsors are also subject to the anti-harassment policy. In particular,
        sponsors should not use sexualised images, activities, or other material.
        Booth staff (including volunteers) should not use sexualised
        clothing/uniforms/costumes, or otherwise create a sexualised environment.
        </p>

        <p>
        If a participant engages in harassing behavior, the conference organisers
        may take any action they deem appropriate, including warning the offender
        or expulsion from the conference with no refund.
        </p>

        <p>
        If you are being harassed, notice that someone else is being harassed, or
        have any other concerns, please contact a member of conference staff
        immediately. Conference staff can be identified as they&#39;ll be wearing
        branded clothing and/or badges.
        </p>

        <p>
        Conference staff will be happy to help participants contact hotel/venue
        security or local law enforcement, provide escorts, or otherwise assist
        those experiencing harassment to feel safe for the duration of the
        conference. We value your attendance.
        </p>

        <p>
        We expect participants to follow these rules at conference and workshop
        venues and conference-related social events.
        </p>

        <div className="code-of-conduct__footer">
            <p>
                <small>
                    <em>
                        Original source and credit:
                        <a
                            className="dublincss-cta__link"
                            href="http://2012.jsconf.us/#/about"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            http://2012.jsconf.us/#/about
                        </a>
                        &amp;
                        <a
                            className="dublincss-cta__link"
                            href="http://geekfeminism.wikia.com/wiki/Conference_anti-harassment/Policy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            The Ada Initiative
                        </a><br />

                        Please help by translating or improving:
                        <a
                            className="dublincss-cta__link"
                            href="https://github.com/confcodeofconduct/confcodeofconduct.com"
                            target="_blank"
                            rel="noopener noreferrer">
                            on github.com
                        </a><br />

                        This work is licensed under a
                        <a
                            className="dublincss-cta__link"
                            rel="license"
                            href="http://creativecommons.org/licenses/by/3.0/deed.en_US"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Creative Commons Attribution 3.0 Unported License
                        </a>
                    </em>
                </small>
            </p>
        </div>
    </section>
  </Layout>
)

export default CodeOfConduct