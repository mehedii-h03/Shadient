import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="flex mb-8 shadow-xl lg:w-3/4 mx-auto mt-3 rounded-lg my-10">
      <div className="hidden rounded-lg md:flex md:flex-col md:justify-center md:items-center md:w-1/2 md:relative md:bg-cover md:bg-center">
        <h2 className="text-4xl font-bold text-center">Welcome to Shadient</h2>
        <p className="mt-2">They needed your help. </p>
      </div>
      {/* Left side with form */}
      <div className="flex flex-col justify-center items-center py-4 px-6 lg:px-0 w-full md:w-1/2 border-l border-gray-300">
        <h1 className="text-3xl font-bold mt-3 mb-8">Sign Up</h1>
        <form className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="border-b bg-inherit border-gray-300 w-full py-2 px-3 leading-tight focus:outline-none focus:border-[#525fe1]"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="border-b bg-inherit border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#525fe1]"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="photo">
              Photo Url
            </label>
            <input
              className="border-b bg-inherit border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#525fe1]"
              id="photo"
              type="text"
              placeholder="Enter your photo url"
            />
          </div>
          <div className="mb-6 relative">
            <label className="block font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="flex">
              <input
                className="border-b bg-inherit border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#525fe1] pr-10"
                id="password"
                type="password" // Ensure this is type="password"
                placeholder="Enter password"
              />
            </div>
          </div>
          <div className="mb-6 relative">
            <label className="block font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <div className="flex">
              <input
                className="border-b bg-inherit border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#525fe1] pr-10"
                id="confirmPassword"
                type="password" // Ensure this is type="password"
                placeholder="Confirm password"
              />
            </div>
          </div>
          <input
            className="btn btn-sm bg-[#525fe1] text-white hover:bg-black border-0"
            type="submit"
            value="Sign Up"
          />
          <p className="mt-4 text-sm text-red-600">{/* {error} */}</p>
          <p className="text-sm mt-1 text-center">
            Already have an Account?
            <Link
              to="/login"
              className="inline-block align-baseline font-bold text-sm text-[#525fe1] hover:text-[#949dff]"
            >
              Log in
            </Link>
          </p>
          <div className="divider">OR</div>
        </form>
        <div className="text-center mt-2">
          <button
            className="btn btn-sm border-0 bg-inherit hover:bg-base-200"
            type="button"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
