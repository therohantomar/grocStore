import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function useCreateuser(
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>,
  setUser: React.Dispatch<React.SetStateAction<any>>
) {
  const notify = () => toast("User created successfully");
  const errornotify = () => toast.error("user Not Created!");
  const errorusernotify = () => toast.error("user Exists!");
  const Navigate = useNavigate();

  async function createUser({
    userName,
    userEmail,
    userAddress,
    password,
  }: {
    userName: string;
    userEmail: string;
    userAddress: string;
    password: string;
  }) {
    try {
      setIsSubmitted(true);
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
          "Access-Control-Allow-Origin":
            "http://localhost:5173,http://localhost:3000,https://groc-store-5d1c.vercel.app",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH",
        },
      });

      const res = await response.json();
      console.log(res);
      if (res.status === 200) {
        setUser({ userAddress: "", userName: "", userEmail: "", password: "" });
        setIsSubmitted(false);
        notify();
        Navigate("/login");
      } else if (res.status === 400) {
        setUser({ userAddress: "", userName: "", userEmail: "", password: "" });
        errorusernotify();
        setIsSubmitted(false);
      } else {
        setUser({ userAddress: "", userName: "", userEmail: "", password: "" });
        errornotify();
        setIsSubmitted(false);
      }
    } catch (error) {
      setUser({ userAddress: "", userName: "", userEmail: "", password: "" });
      errornotify();
      setIsSubmitted(false);
    }
  }

  return createUser;
}

export default useCreateuser;
