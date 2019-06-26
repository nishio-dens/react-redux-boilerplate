import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import './style.scss';
import sampleImage from '../../images/150x50.png';

import { getUsers, addUser } from '../../modules/users';

const propTypes = {};

const HomePage = (props) => (
  <article>
    <Helmet>
      <title>Home Page</title>
      <meta name="description" content="A React.js Boilerplate application homepage" />
    </Helmet>
    <div className="home-page">
      <section className="centered">
        <h2>Hello React boilerplate</h2>
        <p>
          A minimal <i>React-Redux</i> boilerplate
        </p>
        <img src={sampleImage} /><br />
        <Link to="/sample">Go to sample page</Link><br />
        <Link to="/testtest">Go to not found</Link>
      </section>
      <div>
        <button onClick={() => props.loadUsers()}>Load Initial Records</button>
        <button onClick={() => props.addUser(`TestUser: ${Date.now()}`)}>Add New User</button>
        <h3>users({props.users.size})</h3>
        <ul>
          {props.users.map((u, i) => <li key={`user-${i}`}>{u}</li>)}
        </ul>
      </div>
    </div>
  </article>
);

HomePage.propTypes = propTypes;

const mapDispatchToProps = (dispatch) => ({
  loadUsers: () => dispatch(getUsers()),
  addUser: (name) => dispatch(addUser(name))
});

const mapStateToProps = (state) => ({
  users: state.users.get('records')
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(HomePage);
