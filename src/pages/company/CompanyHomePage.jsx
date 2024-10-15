import { Box, Group, Text } from "@mantine/core";
import "../../assets/fonts/Zain/Zain-Bold.ttf";
import { CardForm } from "../../components/Forms/CardForm";

import { useEffect } from "react";

import { Header } from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { ApiHomePageCompany } from "../../apis/company/ApiHomePageCompany";
import { fetchResearchers } from "../../redux/sliceCompanies";

const CompanyHomePage = () => {
  const AllResearchers = useSelector(
    (state) => state.sliceCompanies.researchers
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchApiHomePage = await ApiHomePageCompany();

        dispatch(fetchResearchers(fetchApiHomePage));
        console.log(fetchApiHomePage);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  },[]);
  return (
    <div className="backgroun">
      <div className="backgroun-content">
        <Header />
        <Box style={{ margin: "40px" }}>
          <Group
            direction="column"
            style={{ width: "100%" }}
            spacing="md"
            position="center"
            align="center"
            p="0"
          >
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Text
                style={{
                  fontFamily: "Zain",
                  fontWeight: "900",
                  fontSize: "24px",
                  lineHeight: "33.6px",
                  color: "#1D1D13",
                  textAlign: "canter",
                }}
              >
                الباحثين الأمنيين
              </Text>
            </Box>

            <div className="d-flex flex-wrap justify-content-evenly  ">
              {AllResearchers.map((card, index) => (
                <CardForm
                  key={index}
                  logo={card.image}
                  name={card.name}
                  webSite={card.webSite}
                  description={card.description}
                  users={card.users}
                  type={card.type}
                />
              ))}
            </div>
          </Group>
        </Box>
      </div>
    </div>
  );
};

export default CompanyHomePage;
