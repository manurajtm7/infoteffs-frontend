import React from "react";

function Authenticate() {
  return (
    <form className="w-full h-full">
      <input
        type="text"
        name="username"
        placeholder="username"
        className="w-[90%] h-12 text-tcolor bg-transparent border border-zinc-700 "
      />
      <input
        type="text"
        name="email"
        placeholder="email"
        className="w-[90%] h-12 text-tcolor bg-transparent border border-zinc-700 "
      />
      <input
        type="text"
        name="password"
        placeholder="password"
        className="w-[90%] h-12 text-tcolor bg-transparent border border-zinc-700 "
      />

      <button className="w-[90%] h-10 text-tcolor bg-primary">Sign</button>
    </form>
  );
}

export default Authenticate;
