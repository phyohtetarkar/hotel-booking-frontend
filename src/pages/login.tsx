import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Input, PasswordInput } from "@/components/forms";
import { useForm } from "react-hook-form";

interface LoginFrom {
  phone?: string;
  password?: string;
}

function Login() {
  const router = useRouter();

  const {
    control,
    formState: { isSubmitting },
  } = useForm();

  const processLogin = async (values: LoginFrom) => {
    try {
      const phone = `+95${values.phone!.substring(1)}`;
    } catch (error: any) {
      console.log("error signing in:", error.code);
    }
  };

  return (
    <div className="container py-3">
      <div className="row my-4">
        <div className="col-md-6 offset-md-3 col-xxl-4 offset-xxl-4">
          <div className="card mb-5">
            <div className="card-body p-lg-4">
              <h4 className="card-title fw-bold mt-2 mb-4">Sign In</h4>

              {/* {loginState.error && (
                <div className="alert alert-danger" role="alert">
                  {parseError(loginState.error)}
                </div>
              )} */}

              <form className="row">
                <div className="col-md-12 mb-3">
                  <Input
                    label="Phone Number"
                    id="phoneInput"
                    type="tel"
                    name="phone"
                    placeholder="09xxxxxxxx"
                    autoComplete="username"
                  />
                </div>
                <div className="col-md-12 mb-2">
                  <PasswordInput
                    label="Password"
                    name="password"
                    placeholder="Enter password"
                    autoComplete="current-password"
                  />
                </div>
                <div className="col-md-12">
                  <Link href="/forgot-password" className="text-primary-dark">
                    Forgot password?
                  </Link>
                </div>
                <div className="col-md-12 mt-4 mb-2">
                  <button type="submit" className="btn btn-primary w-100 py-2h">
                    {isSubmitting && (
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    )}
                    Login
                  </button>
                </div>
                <div className="col-md-12 mb-2">
                  <div className="row g-2">
                    <div className="col">
                      <hr className="text-muted" />
                    </div>
                    <div className="col-auto align-self-center text-muted">
                      or continue with
                    </div>
                    <div className="col">
                      <hr className="text-muted" />
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="hstack gap-2 align-items-center">
                    <button
                      type="button"
                      className="btn btn-outline-light border w-50 d-flex align-items-center"
                    >
                      <Image
                        src="https://firebasestorage.googleapis.com/v0/b/mocha-mart.appspot.com/o/icons8-facebook-48.png?alt=media"
                        alt="facebook"
                        width={28}
                        height={28}
                      />
                      <span className="text-dark ms-1">Facebook</span>
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-light border w-50 d-flex align-items-center"
                    >
                      <Image
                        src="https://firebasestorage.googleapis.com/v0/b/mocha-mart.appspot.com/o/icons8-google-48.png?alt=media"
                        alt="google"
                        width={28}
                        height={28}
                      />
                      <span className="text-dark ms-1">Google</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="text-center p-3 card-footer">
              Don&apos;t have an account?
              <Link
                href="/sign-up"
                className="text-decoration-none fw-bold ms-1"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Login.getLayout = (page) => {
//   return <Layout hideAuth>{page}</Layout>;
// };

export default Login;
