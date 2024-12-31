import { useFormik } from "formik";
import { AuthRequest } from "../../model/AuthRequest";
import loginValidationSchema from "../../validation/loginValidationSchema";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const {login, isLoading, error} = useLogin();
  const formik = useFormik<AuthRequest>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (authRequest: AuthRequest) => {
      console.log(authRequest);
      login(authRequest);
    },
  });

  return (
    <div className="d-flex justify-content-center align-items-center login-background">
      <div className="container col-md-4 col-sm-12">
        {isLoading && <p>Loading</p>}
        {error && <p className="text-danger">{error}</p>}
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your e-mail"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger fst-italic">
                {formik.errors.email}
              </div>
            ) : null}
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-danger fst-italic">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <button
            className="btn btn-sm app-primary-bg-color btn-outline-light"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
