import {useNavigate} from "react-router-dom";

const ProfileCreated = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center">
          <h1 className="text-5xl text-green-500 font-bold">Profile Created</h1>
          <p className="text-center tex my-3">Please login using your email-address and statecode.</p>
          <button 
          className={"text-lg uppercase text-green-500 text-underline"}
          onClick={() => {navigate('login')}}>Login</button>
      </div>
    </>
  )
}

export default ProfileCreated;