import React from 'react';
import PropTypes from 'prop-types';
import Renderer from 'markdown-it';

import prism from 'markdown-it-prism';
import 'prismjs/themes/prism-okaidia.css';

const md = new Renderer({
  breaks: true,
  html: true,
  typographer: true
});
md.use(prism);

const Markdown = ({ text, ...props }) => (
  <div dangerouslySetInnerHTML={{ __html: md.render(text) }} {...props} />
);

Markdown.propTypes = {
  text: PropTypes.string
};

Markdown.defaultProps = {
  text: ''
};

export default Markdown;
