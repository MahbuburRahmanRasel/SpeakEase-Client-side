import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const [user, setUser] = useState(null);
  const { loading, setLoading, signInWithGoogle } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  //google signin
  const handleGoogleSignIn = () => {
    // setLoading(true)
    signInWithGoogle()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
        toast.error(error.message);
      });
  };
  return (
    <div>
      <img
        onClick={handleGoogleSignIn}
        src="https://i.ibb.co/BNpZdWP/pl216rvkx1xcg65i6yb0.webp"
        alt=""
        className="cursor-pointer"
      />
    </div>
  );
};

export default SocialLogin;
