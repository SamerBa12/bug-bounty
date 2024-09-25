import { Box, Container, Group, Paper,Text } from '@mantine/core'
import '../../assets/fonts/Zain/Zain-Bold.ttf';
import { CardForm } from '../../components/Forms/CardForm';
import {Companies} from '../../constants/Companies'


const HomePage = () => {
  return (
    <>
<Text style={{ fontFamily:'Zain',fontWeight:'900',fontSize:'24px',lineHeight:'44.8px',color:"#1D1D13",textAlign:"right"}}>!اكتشف الفرص الآن </Text>

<Group direction='column' style={{ width:"100%"}} spacing='md' position="center"  align='center' p="0"> 
<Box style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
<Text style={{fontFamily:'Zain',fontWeight:'900', fontSize:'24px',lineHeight:'33.6px',color:"#1D1D13",textAlign:"canter"}}>مجموعة الشركات الموجودة</Text>
      </Box>
 
    <div className="d-flex flex-wrap justify-content-evenly  " >
      {Companies.map((card, index) => (
        <CardForm
          key={index}
          logo={card.logo}
          name={card.name}
          webSite={card.webSite}
          description={card.description}
         users={card.users}
         type={card.type}
        />
      ))}
    </div>
   
</Group>
    {/* <Paper>
        <h4> !أكثر من 127 شركة بانتظارك ماذا تنتظر ابدأ الآن</h4>
    </Paper> */}
    </>
  )
}

export default HomePage