import { Box, Paper, Title } from "@mantine/core";

import "../../assets/css/register/register.css";
import { LoginReForm } from "../../components/Forms/LoginReForm";

export const LoginResearcher = () => {
  return (
    <div className="backgroun">
      <div className="backgroun-content">
     
        <div className="container my-4 justify-content-center py-4">
          <Paper shadow="xl" p="xl" className="form-paper w-50 my-5 ">
            <Box className="title d-flex flex-column justify-content-center align-items-center gap-1">
              <Title order={3}>مرحباً بك في Bug Bounty</Title>
              <Title order={6} className="secondtitle">
                يرجى التسجيل للمتابعة
              </Title>
            </Box>
            <Box>
              <LoginReForm/>
            </Box>
          </Paper>
        </div>
      </div>
    </div>
  );
};

