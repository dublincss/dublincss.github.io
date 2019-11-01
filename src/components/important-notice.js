import React from "react"
import PropTypes from "prop-types"
import "./important-notice.css"

const ImportantNotice = ({ title, children }) => (
    <div className="notice">
        <h2>{ title }</h2>
        <p>
            { children }
        </p>
    </div>
);

ImportantNotice.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ImportantNotice