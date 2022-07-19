import React, { useState } from "react";
import * as yup from "yup";
import { Form, Formik, useFormik } from "formik";

const Login = () => {
  const [userType, setlUserType] = useState("login");
  let schemaObj, initVal;
  userType === "login"
    ? (schemaObj = {
        email: yup
          .string()
          .email("Please Enter Valid Email")
          .required("Please Enter Email"),
        password: yup.string().required("Please Enter Password"),
      })
    : (schemaObj = {
        name: yup
          .string()
          .required("Please Enter Name")
          .matches(/^[a-zA-Z\s]+$/, "Please Enter Valid Name"),
        mobile: yup
          .string()
          .required("Please Enter Phone Number")
          .matches(/^[1-9]\d{9}$/, "Phone Number must be 10 Digits"),

        email: yup
          .string()
          .email("Please Enter Valid Email")
          .required("Please Enter Email"),
        password: yup.string().required("Please Enter Password"),
      });

  userType === "login"
    ? (initVal = {
        email: "",
        password: "",
      })
    : (initVal = {
        name: "",
        mobile: "",
        email: "",
        password: "",
      });

  let schema = yup.object().shape(schemaObj);

  const formik = useFormik({
    initialValues: initVal,
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    enableReinitialize: true,
  });

  const { handleChange, values, handleSubmit, errors, touched, handleBlur } =
    formik;
  return (
    <>
      <section className="login py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <div className="card mb-5">
                <div className="card-body">
                  {userType === "login" ? (
                    <h2 className="card-title mb-3 fw-bold">Sign In</h2>
                  ) : (
                    <h2 className="card-title mb-3 fw-bold">Create Account</h2>
                  )}
                  <Formik>
                    <Form action="" method="" onSubmit={handleSubmit}>
                      {userType === "signup" ? (
                        <div className="mb-3">
                          <label>Name</label>
                          <input
                            type="text"
                            className="form-control shadow-none"
                            name="name"
                            onChange={handleChange}
                            value={values.name || ""}
                            onBlur={handleBlur}
                          />
                          {errors.name && touched.name ? (
                            <div className="validate fw-bold">
                              {errors.name}
                            </div>
                          ) : null}
                        </div>
                      ) : null}
                      {userType === "signup" ? (
                        <div className="mb-3">
                          <label>Mobile Number</label>
                          <input
                            type="text"
                            className="form-control shadow-none"
                            name="mobile"
                            onChange={handleChange}
                            value={values.mobile || ""}
                            onBlur={handleBlur}
                          />
                          {errors.mobile && touched.mobile ? (
                            <div className="validate fw-bold">
                              {errors.mobile}
                            </div>
                          ) : null}
                        </div>
                      ) : null}
                      <div className="mb-3">
                        <label>Email</label>
                        <input
                          type="text"
                          className="form-control shadow-none"
                          name="email"
                          onChange={handleChange}
                          value={values.email}
                          onBlur={handleBlur}
                        />
                        {errors.email && touched.email ? (
                          <div className="validate fw-bold">{errors.email}</div>
                        ) : null}
                      </div>
                      <div className="mb-3">
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control shadow-none"
                          name="password"
                          onChange={handleChange}
                          value={values.password}
                          autoComplete="off"
                          onBlur={handleBlur}
                        />
                        {errors.password && touched.password ? (
                          <div className="validate fw-bold">
                            {errors.password}
                          </div>
                        ) : null}
                      </div>
                      <p>
                        By continuing, you agree to our Terms of Use and Privacy
                        Policy.
                      </p>
                      {userType === "login" ? (
                        <button
                          type="submit"
                          className="form-btn btn text-black w-100 shadow-none border-0"
                        >
                          Sign In
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="form-btn btn text-black w-100 shadow-none border-0"
                        >
                          Create Account
                        </button>
                      )}
                    </Form>
                  </Formik>
                </div>
              </div>
              <div className="text-center">
                {userType === "login" ? (
                  <p className="new mb-0">New to Basel & Co.?</p>
                ) : (
                  <p className="new mb-0">Already have an account?</p>
                )}

                {userType === "login" ? (
                  <button
                    className="account-btn btn shadow-none text-decoration-underline text-primary"
                    onClick={() => {
                      setlUserType("signup");
                    }}
                  >
                    Create your Amazon account
                  </button>
                ) : (
                  <button
                    className="account-btn btn shadow-none text-decoration-underline text-primary"
                    onClick={() => {
                      setlUserType("login");
                    }}
                  >
                    Sign In
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
