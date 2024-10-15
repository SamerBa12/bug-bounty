import { Image, Group, Paper, Box, Text } from "@mantine/core";
import logo from "../../assets/image/header/Vector.png";
import profile from "../../assets/image/darrebni-logo.jpg";
import { Buttonn } from "../Button/Button";
import "../../assets/css/header/headre.css";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/fonts/Zain/Zain-Bold.ttf";
import { IconBellRinging, IconNotification } from "@tabler/icons-react";
import { ImProfile } from "react-icons/im";
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
      <Box className="justify-between-center container">
        <Group>
          <Link to={"/personal-info-re"}>
            <Image radius={50} h={50} w={50} src={profile} content="fill" />
          </Link>
          <IconBellRinging color=" #B21222" stroke={1} />
        </Group>
        <Box className="d-flex justify-content-start ">
          <Box
            className="d-flex justify-content-start "
            style={{ paddingRight: "50px" }}
          >
            <Link
              style={{
                textDecoration: "none",
                borderBottom:
                  window.location.pathname === "/login"
                    ? "5px solid #B21222"
                    : "none",
                borderRadius: "8px",
                position: "absolute",
                top: "40px",
                right: "500px",
              }}
              to="/lo"
            >
              <Text
                className="p-2"
                style={{
                  fontFamily: "Zain",
                  fontWeight: "700",
                  fontSize: "24px",
                  lineHeight: "24px",
                  color: "#B21222",
                  position: "relative",
                  top: "-15px",
                }}
              >
                الثغرات المكتشفة
              </Text>
            </Link>
            <Link
              style={{
                textDecoration: "none",
                borderBottom:
                  window.location.pathname === "/home-page"
                    ? "5px solid #B21222"
                    : "none",
                borderRadius: "8px",
                position: "absolute",
                top: "40px",
                right: "280px",
              }}
              to="/home-page"
            >
              <Text
                className="p-2"
                style={{
                  fontFamily: "Zain",
                  textAlign: "center",
                  fontWeight: "700",
                  fontSize: "24px",
                  lineHeight: "24px",
                  color: "#B21222",
                  position: "relative",
                  top: "-15px",
                }}
              >
                الصفحة الرئيسية
              </Text>
            </Link>
          </Box>

          <Box>
            <Image src={logo} alt="Logo" className="custom-size" />
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};
