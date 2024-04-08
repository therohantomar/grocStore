function useCreateuser() {
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
    },
    setStatus: React.Dispatch<React.SetStateAction<number>>
  ) {
    try {
      await fetch("https://groc-store.vercel.app/users", {
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

      setStatus(201);

      return {
        success: true,
        message: "User created successfully",
        data: { userName, userEmail, userAddress, password },
      };
    } catch (error) {
      return error;
    }
  }

  return createUser;
}

export default useCreateuser;
