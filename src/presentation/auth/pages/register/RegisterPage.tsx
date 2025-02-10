import { zodResolver } from "@hookform/resolvers/zod";
import { AuthLayout } from "../AuthLayout";
import styles from "./../login/LoginPage.module.css";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "../../../ui";
import Swal from "sweetalert2";
import { useRegister } from "../../hooks/useRegister";
import { useNavigate } from "react-router-dom";

const registerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  surname: z.string().min(2, "Surname is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  repeatPassword: z.string().min(8, "Password must be at least 8 characters"),
  phone: z.string().min(5, "Phone is required"),
  pin: z
    .string()
    .min(6, "Pin must be 6 characters")
    .max(6, "Pin must be 6 characters"),
});

type registerFormData = z.infer<typeof registerSchema>;

const RegisterPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerFormData>({ resolver: zodResolver(registerSchema) });

  const { registerUser } = useRegister();

  const onSubmit = (data: registerFormData) => {
    if (data.password !== data.repeatPassword) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Las contraseñas deben ser iguales",
        showConfirmButton: false,
        timer: 2000,
      });
    }

    console.log("hola");

    registerUser({
      email: data.email,
      name: data.name,
      surname: data.surname,
      password: data.password,
      phone: data.phone,
      pin: data.pin,
    })
      .then(() => navigate("/auth/login"))
      .catch((error) => console.log(error));
  };

  return (
    <AuthLayout>
      <section className={styles.contentLogin}>
        <h1 className={styles.heading}>Register Now!</h1>
        <p className={styles.subheading}>Please enter your details here.</p>

        <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email">Nombres:</label>
            <input
              type="text"
              placeholder="Enter your name"
              id="name"
              required
              {...register("name")}
            />
            {errors.name && (
              <p className={styles.errorText}>{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="surname">Apellidos:</label>
            <input
              type="text"
              placeholder="Enter your surname"
              id="surname"
              required
              {...register("surname")}
            />
            {errors.surname && (
              <p className={styles.errorText}>{errors.surname.message}</p>
            )}
          </div>
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
          <div className="mb-1">
            <label htmlFor="repeatPassword">Confirmar Contraseña:</label>
            <input
              type="password"
              placeholder="*********"
              id="repeatPassword"
              required
              {...register("repeatPassword")}
            />
            {errors.repeatPassword && (
              <p className={styles.errorText}>
                {errors.repeatPassword.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="phone">Celular:</label>
            <input
              type="text"
              placeholder="Enter your phone"
              id="phone"
              required
              {...register("phone")}
            />
            {errors.phone && (
              <p className={styles.errorText}>{errors.phone.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="pin">Pin:</label>
            <input
              type="password"
              placeholder="Enter your pin"
              id="pin"
              required
              {...register("pin")}
            />
            {errors.pin && (
              <p className={styles.errorText}>{errors.pin.message}</p>
            )}
          </div>
          <Button onClick={() => {}} type="primary" btnType="submit">
            Sign Up
          </Button>
        </form>
      </section>
    </AuthLayout>
  );
};

export default RegisterPage;
