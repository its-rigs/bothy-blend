import * as React from 'react';
import { Link } from 'gatsby';
import { Layout } from '../components';

const NotFoundPage = () => {
  return (
    <Layout>
      <title>Not found</title>
      <h1>Page not found</h1>
      <p>
        Sorry{' '}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{' '}
        we couldn’t find what you were looking for.
        <Link to="/">Go home</Link>.
      </p>
    </Layout>
  );
};

export default NotFoundPage;
