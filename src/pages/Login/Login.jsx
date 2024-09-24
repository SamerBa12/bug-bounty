import { Box, Paper, Title } from "@mantine/core";
import { Header } from "../../components/Header/Header";
import "../../assets/css/register/register.css";
import { LoginForm } from "../../components/Forms/LoginForm";

export const Login = () => {
  return (
    <div className="backgroun">
      <div className="backgroun-content">
        <Header />
        <div className="container my-4 justify-content-center py-4">
          <Paper shadow="xl" p="xl" className="form-paper w-50 my-5 ">
            <Box className="title d-flex flex-column justify-content-center align-items-center gap-1">
              <Title order={3}>مرحباً بك في Bug Bounty</Title>
              <Title order={6} className="secondtitle">
                يرجى التسجيل للمتابعة
              </Title>
            </Box>
            <Box>
              <LoginForm />
            </Box>
          </Paper>
        </div>
      </div>
    </div>
  );
};
