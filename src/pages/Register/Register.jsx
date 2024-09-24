import { Box, Title, Paper, Tabs } from "@mantine/core";
import { RegisterForm } from "../../components/Forms/RegisterForm";
import { RegisterCompany } from "../../components/Forms/RegisterCompany";
import { Header } from "../../components/Header/Header";
import '../../assets/css/root/root.css';
import '../../assets/css/register/register.css';

export const Register = () => {
    return (
        <div className="backgroun">
      <div className="backgroun-content">
            <Header />
            <div className="container my-4 justify-content-center py-4">
                <Paper shadow="xl" p="xl" className="form-paper w-75 mx-3 p-4">
                    <Box className="title d-flex flex-column justify-content-center align-items-center gap-1">
                        <Title order={3}>مرحباً بك في Bug Bounty</Title>
                        <Title order={6} className="secondtitle">يرجى التسجيل للمتابعة</Title>
                    </Box>
                    <Box className="tabs">
                        <Tabs color="red" variant="pills" defaultValue="registerAsCyber" className="py-4">
                            <Tabs.List className="d-flex justify-content-center w-100 gap-5">
                                <Tabs.Tab value="registerAsCyber" style={{ width: '300px', fontSize: '20px' }}>
                                    التسجيل كباحث أمني
                                </Tabs.Tab>
                                <Tabs.Tab value="registerAsCompany" style={{ width: '300px', fontSize: '20px' }}>
                                    التسجيل كشركة جديدة
                                </Tabs.Tab>
                            </Tabs.List>
                            <Tabs.Panel value="registerAsCyber">
                                <RegisterForm />
                            </Tabs.Panel>
                            <Tabs.Panel value="registerAsCompany">
                                <RegisterCompany />
                            </Tabs.Panel>
                        </Tabs>
                    </Box>
                </Paper>
            </div>
            </div>
        </div>
    );
}
