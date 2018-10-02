import React from 'react';
import { Link } from 'react-static';

// Make sure there aren't any trailing white spaces
export default ({ to, ...props }) => <Link {...props} to={to ? to.trim() : undefined} />;
