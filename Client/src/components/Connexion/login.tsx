export default function Login({ setIsLogin }: { setIsLogin: (isLogin: boolean) => void }) {
  return (
    <div className="login">
      <h1>Welcome back</h1>
      <h2>Welcome back! Please enter your details.</h2>
      <form action="">
        <label htmlFor="Email">Email</label>
        <input type="email" name="Email" id="Email" placeholder="Enter your email" required maxLength={64} />
        <label htmlFor="Password">Password</label>
        <input type="password" name="Password" id="Password" placeholder="**********" required maxLength={64} />
        <div className="middle">
          <div className="remember">
            <input type="checkbox" name="CheckBox" id="CheckBox" />
            <label htmlFor="CheckBox">Remember for 30 days</label>
          </div><a href="#">Forgot password</a>
        </div>
        <button className="SubmitBtn" type="submit">Sign in</button>
      </form>
      <div className="bottom">
        <p>Don't have an account? </p>
        <a onClick={() => setIsLogin(false)}>Sign up</a>
      </div>
    </div>
  );
}