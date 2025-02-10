import styles from "./LoginPage.module.css";

import { Button } from "../../../ui";
import { AuthLayout } from "../AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "../../hooks/useAuthStore";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });
  const navigate = useNavigate();

  const { startLogin } = useAuthStore();

  const onSubmit = (data: LoginFormData) => {
    startLogin(data)
      .then(() => navigate("/dashboard/security-box"))
      .catch((err) => console.log(err));
  };

  return (
    <AuthLayout>
      <section className={styles.contentLogin}>
        <h1 className={styles.heading}>Welcome Back!</h1>
        <p className={styles.subheading}>Please enter your details here.</p>

        <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              required
              {...register("email")}
            />
            {errors.email && (
              <p className={styles.errorText}>{errors.email.message}</p>
            )}
          </div>
          <div className="mb-1">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="*********"
              id="password"
              required
              {...register("password")}
            />
            {errors.password && (
              <p className={styles.errorText}>{errors.password.message}</p>
            )}
          </div>
          <Button onClick={() => {}} type="primary" btnType="submit">
            Sign In
          </Button>
        </form>
        <p className={styles.textFooter}>
          Don't have an account <Link to="/auth/register">Register Now</Link>
        </p>
      </section>
    </AuthLayout>
  );
};

export default LoginPage;
