import { Box, Image, Tabs, Title,Paper } from "@mantine/core"
import sectionimage from '../../assets/image/Group1.png'
import { RegisterForm } from "../../components/Forms/RegisterForm"
import '../../assets/css/root/root.css'
import '../../assets/css/register/register.css'


export const Register = () => {
    return (
        <Box className="container flexrow">
            <Box >
                <Image src={sectionimage} className="sectionimage" />
            </Box>
            
                <Box className="contain container">
                <Paper withBorder radius="md" p="xl">

                    <Box className="title">
                        <Title order={3} >مرحباً بك في Bug Bounty</Title>
                        <Title order={6} className="secondtitle" >يرجى التسجيل للمتايعة</Title>
                    </Box>
                    <Box className="tabs">
                        <Tabs color="red" variant="pills" defaultValue="gallery">
                            <Tabs.List>
                                <Tabs.Tab value="gallery" >
                                    التسجيل كباحث أمني
                                </Tabs.Tab>
                                <Tabs.Tab value="messages"   data-disabled >
                                    التسجيل كشركة جديدة
                                </Tabs.Tab>

                            </Tabs.List>
                            <hr />
                            <Tabs.Panel value="gallery">
                                <RegisterForm />
                            </Tabs.Panel>

                            <Tabs.Panel value="messages">
                                Messages tab content
                            </Tabs.Panel>

                        </Tabs>
                    </Box>
                    </Paper>

                </Box>
                
          
        </Box>
    )
}