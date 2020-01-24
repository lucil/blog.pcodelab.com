import React from 'react';
import Layout from '../components/Layout';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <main>
          <h1>404 Post not found</h1>

          <section className="error-container">
            <span>4</span>
            <span>
              <span className="screen-reader-text">0</span>
            </span>
            <span>4</span>
          </section>
          <div className="link-container">
            <a
              target="_blank"
              href="https://blog.pcodelab.com"
              className="more-link"
            >
              Go to homepage
            </a>
          </div>
        </main>
      </Layout>
    );
  }
}

export default NotFoundPage;
