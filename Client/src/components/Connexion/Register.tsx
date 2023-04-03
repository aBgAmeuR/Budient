export default function Register({ setIsLogin }: { setIsLogin: (isLogin: boolean) => void }) {
  return (
    <div className="register">
      <h1>Welcome</h1>
      <h2>Let's get started! Please enter your details.</h2>
      <form action="">
        <label htmlFor="Email">Email</label>
        <input type="email" name="Email" id="Email" placeholder="Enter your email" required maxLength={64} />
        <label htmlFor="Password">Password</label>
        <input type="password" name="Password" id="Password" placeholder="**********" required maxLength={64} />
        <label htmlFor="ConfirmPassword">Confirm password</label>
        <input type="password" name="ConfirmPassword" id="ConfirmPassword" placeholder="**********" required maxLength={64} />
        <button className="SubmitBtn" type="submit">Sign up</button>
      </form>
      <div className="bottom">
        <p>Already have an account? </p>
        <a onClick={() => setIsLogin(true)}>Sign in</a>
      </div>
    </div>
  );
}