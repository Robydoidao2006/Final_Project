import React from 'react';
import { auth } from '../../../firebase';
import "./index.css";

const SignOutButton = () =>
  <button className="signOutButton"
    type="button"
    onClick={auth.doSignOut}
  >
    Sign Out
  </button>

export default SignOutButton;
