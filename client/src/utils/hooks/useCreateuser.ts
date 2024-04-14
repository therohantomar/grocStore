import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

function useCreateuser() {
  const notify = () => toast("User created successfully");
  const errornotify = () => toast.error("user Not Created!");
  const Navigate = useNavigate();

  async function createUser(
    {
      userName,
      userEmail,
      userAddress,
      password,
    }: {
      userName: string;
      userEmail: string;
      userAddress: string;
      password: string;
    }
  ) {
    try {
      const response = await fetch("https://groc-store.vercel.app/users", {
        method: "POST",
        body: JSON.stringify({
          userName,
          userEmail,
          userAddress,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });

      const res = await response.json()
    
      if (res.status !== 400) {
        notify();
        Navigate("/login");
      }else{
       errornotify()
      }

      

    } catch (error) {
      return error;
    }
  }

  return createUser;
}

export default useCreateuser;
