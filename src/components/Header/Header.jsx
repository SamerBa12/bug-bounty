import { Image, Group, Paper, Box, Text } from "@mantine/core";
import logo from "../../assets/image/header/Vector.png";
import { Buttonn } from "../Button/Button";
import "../../assets/css/header/headre.css";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/fonts/Zain/Zain-Bold.ttf";
export const Header = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/");
  };
  const handlelogin = () => {
    navigate("/login");
  };
  return (
    <Paper className="custom-box">
      <Box className="flex-between-center container">
        <Group>
          <Buttonn
            title="دخول"
            className="btn-white"
            onClick={() => {
              handlelogin();
            }}
          />
          <Buttonn
            title="سجل مجانا"
            className="btn-danger"
            onClick={() => {
              handleRegister();
            }}
          />
        </Group>
        <Box className="d-flex justify-content-between"  >
        <Link style={{textDecoration:"none"}} to="/home-page">
           <Text   className="p-2"    style={{
             fontFamily: "Zain",
             fontWeight: "700",
             fontSize: "24px",
             lineHeight: "24px",
             color: "#B21222",
            }}>الثغرات المكتشفة</Text>
            </Link>
            <Link style={{textDecoration:"none"}} to="/home-page">
            <Text   className="p-2"  style={{
              fontFamily: "Zain",
              fontWeight: "700",
              fontSize: "24px",
              lineHeight: "24px",
              color: "#B21222",
            }}>الصفحة الرئيسية</Text>
            </Link> 
        
          <Image src={logo} alt="Logo" className="custom-size" />
        </Box>
      </Box>
    </Paper>
  );
};
