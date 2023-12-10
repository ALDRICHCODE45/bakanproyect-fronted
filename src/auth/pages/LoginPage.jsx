import "../../assets/loginAssets/css/owl.carousel.min.css";
import "../../assets/loginAssets/css/bootstrap.min.css";
import "../../assets/loginAssets/css/style.css";
import backgoroud from "../../assets/LoginLogo.png";
import { useForm } from "react-hook-form";
import { useAuthStore } from "../../hooks/useAuthStore";

export const LoginPage = () => {
  const { startLoginUser } = useAuthStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    try {
      startLoginUser(data);
      console.log(data)
    } catch (e) {
      /* handle error */
      console.log("ha ocurrido un error");
    }
  });
  return (
    <>
      <div className="d-lg-flex half">
        <div
          className="bg order-1 order-md-2"
          style={{ backgroundImage: `url(${backgoroud})` }}
        ></div>
        <div className="contents order-2 order-md-1">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7">
                <div className="d-flex align-items-center justify-content-center">
                  <h3 className="align-items-center justify-content-center">
                    <strong>Login</strong>
                  </h3>
                </div>
                <hr />
                <form onSubmit={onSubmit}>
                  <div className="form-group first">
                    <label>Usuario</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre de usuario"
                      id=""
                      {...register("userName", {
                        required: {
                          value: true,
                          message: "el username es requerido",
                        },
                        minLength: {
                          value: 4,
                          message:
                            "el username debe tener al menos 4 caracteres",
                        },
                      })}
                    />
                    {errors.userName && (
                      <span style={{ color: "red" }}>
                        {errors.userName.message}
                      </span>
                    )}
                  </div>

                  <div className="form-group first">
                    <label>Rol</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ventas, embarques, choferes"
                      id="username"
                      {...register("rol", {
                        required: {
                          value: true,
                          message: "el rol es requerido",
                        },
                      })}
                    />
                    {errors.rol && (
                      <span style={{ color: "red" }}>{errors.rol.message}</span>
                    )}
                  </div>
                  <div className="form-group last mb-3">
                    <label type="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Your Password"
                      id="password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                      })}
                    />
                    {errors.password?.type === "required" && (
                      <span style={{ color: "red" }}>
                        La contrasena es requerida
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span style={{ color: "red" }}>
                        la contraseña debe tener al menos 6 caracteres
                      </span>
                    )}
                  </div>

                  <div className="d-flex mb-5 align-items-center">
                    <span className="ml-auto"></span>
                  </div>

                  <input
                    style={{ backgroundColor: "#001529", color: "white" }}
                    type="submit"
                    value="Log In"
                    className="btn btn-block "
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
