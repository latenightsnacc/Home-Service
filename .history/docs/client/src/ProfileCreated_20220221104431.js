import {Link} from "react-router-dom";

const ProfileCreated = () => {
  
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center">
          <h1 className="text-5xl text-green-500 font-bold">Profile Created</h1>
          <p className="text-center text-sm my-3">Please login using your email-address and statecode.</p>
          <Link to={"/login"}>
          </Link>
          
      </div>
    </>
  )
}

export default ProfileCreated;