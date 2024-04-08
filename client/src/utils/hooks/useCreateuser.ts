function useCreateuser() {
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
      const res = await fetch("https://groc-store.vercel.app/users", {
        method: "POST",
        body: JSON.stringify({
          userName,
          userEmail,
          userAddress,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);

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
