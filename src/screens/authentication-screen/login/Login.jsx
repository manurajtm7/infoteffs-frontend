import React from "react";
import { Authenticate } from "../../../components";

function Login() {
  return (
    <div className="w-full h-4/5 gradient grid place-items-center">
      <div className="w-full h-full grid place-items-center">
        <Authenticate isLogin={true} />
      </div>
    </div>
  );
}

export default Login;
