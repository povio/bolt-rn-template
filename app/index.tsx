import { Link } from "expo-router";
import React from "react";

import Box from "@/components/Box";
import Button from "@/components/buttons/Button";
import { useAuthStore } from "@/modules/auth/stores/authStore";

const Login = () => {
  const { login } = useAuthStore();

  const handleLogin = () => {
    login("1234567890");
  };

  return (
    <Box
      p="4"
      backgroundColor="elevation-background"
      flex={1}
      gap="2"
      justifyContent="center"
    >
      <Button
        label="Log In"
        onPress={handleLogin}
      />
      <Link
        href="/sign-up"
        asChild
      >
        <Button
          label="Sign Up"
          variant="secondary"
        />
      </Link>
    </Box>
  );
};

export default Login;
