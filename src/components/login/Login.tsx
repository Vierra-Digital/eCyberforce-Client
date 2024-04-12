import styles from "./css/login.module.css";
import Logo from "./img/logo.svg";
import Image from "next/image";
import Inputs from "./Inputs";
import "./css/login_styles.css";

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.model}>
        <div>
          <Image
            src={Logo}
            alt=""
            width={134}
            height={134}
            className={styles.logo}
          />
        </div>
        <h2>Join us or sign in</h2>
        <p>
          Track your future orders, checkout faster, and sync your favorites.
          Just enter your email and we’ll send you a special link that will sign
          you in instantly. An account will be automatically created for you if
          you don ’t have one yet.
        </p>
        <div className={styles.input}>
          <Inputs />
        </div>
      </div>
    </div>
  );
}

export default Login;
