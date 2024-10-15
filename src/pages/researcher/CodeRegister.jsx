import { Box, Paper, Title } from "@mantine/core";
import "../../assets/css/register/register.css";
import { CodeRegisterForm } from "../../components/researcher/CodeRegisterForm";


export const CodeRegister = () => {

  return (
    <div className="backgroun d-flex  align-items-center justify-content-center ">
      <div className="backgroun-content ">
     

        <div className="container   py-4 ">
          <Paper shadow="xl" p="xl" className="form-paper  " style={{ width: "550px" ,height:"350px"}}>
            <Box className="title d-flex flex-column   my-4 gap-1">
              <Title order={3}>يرجى إدخال كود التسجيل</Title>
              <Title order={6} className="secondtitle">
              يتألف كود التسجيل من 8 خانات تحتوي أرقام حروف
              </Title>
            </Box>
            <Box>
              <CodeRegisterForm />
            </Box>
          </Paper>
        </div>
      </div>
    </div>
  );
};
