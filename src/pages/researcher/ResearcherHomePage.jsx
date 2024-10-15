import { ActionIcon, Box, Button, Group, Input, Paper, Text } from "@mantine/core";
import "../../assets/fonts/Zain/Zain-Bold.ttf";
import { CardForm } from "../../components/Forms/CardForm";

import { useEffect } from "react";
import { CiFilter } from "react-icons/ci";
import { Header } from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import {fetchCompanies, resetFilters, searchCompany} from '../../redux/sliceCompanies'
import { useState } from "react";
import { IconX } from "@tabler/icons-react";
import { ApiHomePageResearcher } from "../../apis/researcher/ApiHomePageResearcher";


const ResearcherHomePage = () => {
  const AllCompanies=useSelector((state)=> state.sliceCompanies.companies);
  const filteredCompanies=useSelector((state)=> state.sliceCompanies.filterdCompanies)
  const companiesToDisplay= filteredCompanies.length > 0 ? filteredCompanies : AllCompanies
  const dispatch =useDispatch();
  const [searchQuery,setSearchQuery]=useState('')
  const handleSearch = ()=>{
      dispatch(searchCompany(searchQuery))
  }
  const handleClearSearch=()=>{
    setSearchQuery('');
    dispatch (resetFilters())
  }
 
  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const fetchApiHomePage = await ApiHomePageResearcher()

        dispatch(fetchCompanies(fetchApiHomePage.companies))
        console.log(fetchApiHomePage.companies)
      }catch(err){
        console.error(err)
      }
    }
    fetchData()
  },[])
  return (
    <div className="backgroun">
      <div className="backgroun-content">
    <Header/>
      <Box style={{margin:"40px"}} >
        <Text
          style={{
            fontFamily: "Zain",
            fontWeight: "900",
            fontSize: "24px",
            lineHeight: "44.8px",
            color: "#1D1D13",
            textAlign: "right",
            marginBottom:"20px"
          }}
        >
          !اكتشف الفرص الآن{" "}
        </Text>
        <Paper shadow="xl"  className="w-100% " >
          <Text
            style={{
              fontFamily: "Zain",
              fontWeight: "900",
              fontSize: "16px",
              lineHeight: "22.4px",
              color: "#CC0A26",
              textAlign: "right",
            }}
          >
           
            !أكثر من 127 شركة بانتظارك ماذا تنتظر ابدأ الآن
          </Text>
          <Box style={{
            display:'flex',
            alignItems:'center',
            flexWrap:'nowrap',
            gap:'8px',
            flexDirection:'row-reverse',
            paddingBottom:'20px',
           
          }}>
          
          <Input 
          icon={null}
          rightSection={
            searchQuery && (
              <div style={{pointerEvents:'auto'}}>

              <ActionIcon onClick={()=>handleClearSearch()} >
              <IconX size={16} />
              </ActionIcon>    
              </div>
            )          } 
            
            placeholder="ابحث عن الشركة التي تريدها"
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            style={{flexGrow:1}}
            />
      
          <Button onClick={handleSearch}>ابحث</Button>
          <CiFilter style={{margin:'10px',border:"1px solid  #CC0A26"}} size={30} color="#CC0A26" />
          </Box>
        </Paper>

        <Group
          direction="column"
          style={{ width: "100%" }}
          spacing="md"
          position="center"
          align="center"
          p="0"
        >
          <Box
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
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
              مجموعة الشركات الموجودة
            </Text>
          </Box>

          <div className="d-flex flex-wrap justify-content-evenly  ">
            {companiesToDisplay.map((card, index) => (
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

export default ResearcherHomePage;
