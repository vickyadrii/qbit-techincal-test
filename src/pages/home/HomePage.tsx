import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Home from "@/features/home/Home";
import { IRootState } from "@/store";
import { authActions } from "@/store/auth";
import { LoginContext } from "@/types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const loginContext = useSelector<IRootState, LoginContext>((state) => state.auth);
  const { username, isAuthenticated } = loginContext;

  const handleLogout = () => {
    toast({
      title: "Successfully!",
      description: "Logout successfully!",
      duration: 2500,
    });

    dispatch(authActions.logout());
  };

  useEffect(() => {
    document.title = "Home Page | QBIT Technical Test";
  });

  return (
    <div className="space-y-5">
      {isAuthenticated && (
        <div className="py-5 flex justify-between nter items-center">
          <h1>
            Welcome back, <span className="font-bold">{username}!</span>
          </h1>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      )}
      <Home />
    </div>
  );
};

export default HomePage;
