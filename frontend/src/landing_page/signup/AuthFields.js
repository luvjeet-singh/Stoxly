import React from "react";

const getInputClass = (formik, field) => {
  if (formik.touched[field] && formik.errors[field]) return "is-invalid";
  if (formik.touched[field] && !formik.errors[field]) return "is-valid";
  return "";
};

const AuthFields = ({ formik, isSignup }) => {
  return (
    <>
      {isSignup && (
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            className={`form-control ${getInputClass(formik, "username")}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="invalid-feedback">{formik.errors.username}</div>
          ) : formik.touched.username ? (
            <div className="valid-feedback">Looks good!</div>
          ) : null}
        </div>
      )}

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={`form-control ${getInputClass(formik, "email")}`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="invalid-feedback">{formik.errors.email}</div>
        ) : formik.touched.email ? (
          <div className="valid-feedback">Looks good!</div>
        ) : null}
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className={`form-control ${getInputClass(formik, "password")}`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
      </div>
    </>
  );
};

export default AuthFields;
