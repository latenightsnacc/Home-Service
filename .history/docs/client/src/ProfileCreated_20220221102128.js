import {useNavigate} from "react-router-dom";

const ProfileCreated = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center">
          <h1 className="text-5xl text-green-500 font-bold">Profile Created</h1>
          <p>Please login using the email address</p>
          <button 
          className={"mt-3 focus:outline-0 shadow-sm border-1 border-green-400 rounded py-3 px-5 text-lg text-green-500 hover:bg-green-500 hover:text-white hover:shadow-none"}
          onClick={() => {navigate('register')}}>Get Started</button>
      </div>
    </>
  )
}

export default ProfileCreated;