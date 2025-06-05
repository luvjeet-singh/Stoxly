import React from "react";

const ModeToggle = ({ isSignup, setMode }) => {
  return (
    <div className="mt-3">
      {isSignup ? (
        <p>
          Already have an account?{" "}
          <button
            className="btn btn-link p-0"
            type="button"
            onClick={() => setMode("login")}
          >
            Login
          </button>
        </p>
      ) : (
        <p>
          Don’t have an account?{" "}
          <button
            className="btn btn-link p-0"
            type="button"
            onClick={() => setMode("signup")}
          >
            Signup
          </button>
        </p>
      )}
    </div>
  );
};

export default ModeToggle;
