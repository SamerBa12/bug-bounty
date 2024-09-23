import { Box, Image, Tabs, Title, Paper } from "@mantine/core"
import sectionimage from '../../assets/image/Group1.png'
import { RegisterForm } from "../../components/Forms/RegisterForm"
import '../../assets/css/root/root.css'
import '../../assets/css/register/register.css'
import InputMantine from "../../components/Input/InputMantine"
import { BsPerson } from "react-icons/bs"


export const Register = () => {
    return (
        <>
            <div className="container d-flex flex-row-reverse my-4 justify-content-center py-4" >
                <Paper shadow="xl" p="xl" className="right w-75 mx-3 p-2   ">
                    <Box className="title d-flex flex-column justify-content-center align-items-center gap-1">
                        <Title order={3} >مرحباً بك في Bug Bounty</Title>
                        <Title order={6} className="secondtitle" >يرجى التسجيل للمتايعة</Title>
                    </Box>
                    <Box className="tabs">
                        <Tabs color="red" variant="pills" defaultValue="gallery" className="py-4">
                            <Tabs.List className="d-flex justify-content-center w-100 g-5 ">
                                <div className="headerRegister d-flex gap-5">
                                    <div className="registerAsCyber ">
                                        <Tabs.Tab value="gallery" style={{ width: '300px', height: '40px', fontSize: '20px' }} >
                                            التسجيل كباحث أمني
                                        </Tabs.Tab>
                                        <hr />
                                    </div>
                                    <div className="registerAsCompany" >

                                        <Tabs.Tab value="messages" style={{ width: '300px', height: '40px', fontSize: '20px' }} >
                                            التسجيل كشركة جديدة
                                        </Tabs.Tab>
                                        <hr />
                                    </div>
                                </div>

                            </Tabs.List>
                            <Tabs.Panel value="gallery">
                                <RegisterForm />
                            </Tabs.Panel>

                            <Tabs.Panel value="messages">
                                Messages tab content
                            </Tabs.Panel>

                        </Tabs>
                    </Box>

                </Paper>

            </div>



        </>
    )
}