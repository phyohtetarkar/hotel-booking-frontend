import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input, PasswordInput } from "../components/forms";

interface SignUpForm {
  fullName?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
}

function Register() {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  const {
    control,
    formState: { isSubmitting },
  } = useForm();

  const processSignUp = async (values: SignUpForm) => {
    try {
      const phone = `+95${values.phone!.substring(1)}`;
    } catch (error) {
      console.log("error signing up:", error);
    }
  };

  return (
    <div className="container py-3">
      <div className="row my-4">
        <div className="col-lg-6 offset-lg-3">
          <div className="card mb-5">
            <div className="card-body p-lg-4">
              <h4 className="card-title fw-bold mt-2 mb-4">Register</h4>

              {/* {signUpState.error && (
                <div className="alert alert-danger" role="alert">
                  {parseError(signUpState.error)}
                </div>
              )} */}

              <form className="row g-3">
                <div className="col-lg-6">
                  <Input
                    label="Full Name"
                    id="nameInput"
                    type="text"
                    name="fullName"
                    placeholder="Your full name"
                  />
                </div>
                <div className="col-lg-6">
                  <Input
                    label="Phone Number"
                    id="phoneInput"
                    type="tel"
                    name="phone"
                    placeholder="09xxxxxxxx"
                    autoComplete="username"
                  />
                </div>
                <div className="col-md-12">
                  <PasswordInput
                    label="Password"
                    name="password"
                    placeholder="Minimum 8 characters"
                    autoComplete="new-password"
                  />
                </div>
                <div className="col-md-12">
                  <PasswordInput
                    label="Confirm Password"
                    name="confirmPassword"
                    placeholder="Minimum 8 characters"
                    autoComplete="new-password"
                  />
                </div>
                <div className="col-md-12 mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 py-2h"
                    disabled={isSubmitting}
                  >
                    {isSubmitting && (
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    )}
                    Sign up
                  </button>
                </div>
                <div className="col-md-12">
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
                      disabled={isSubmitting}
                    >
                      <Image
                        src="/images/icons8-facebook-48.png"
                        alt="facebook"
                        width={28}
                        height={28}
                      />
                      <span className="text-dark ms-1">Facebook</span>
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-light border w-50 d-flex align-items-center"
                      disabled={isSubmitting}
                    >
                      <Image
                        src="/images/icons8-google-48.png"
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
              Already have an account?
              <Link href="/login" className="text-decoration-none fw-bold ms-1">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Register.getLayout = (page) => {
//   return <Layout hideAuth>{page}</Layout>;
// };

export default Register;
