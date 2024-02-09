import { useAuth } from "@clerk/nextjs";
import { CircularProgress } from "@mui/material";
import React from "react";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn } = useAuth();
  if (!isSignedIn) {
    return <CircularProgress />;
  }
  return <div>PrivateRoute</div>;
};

export default PrivateRoute;
