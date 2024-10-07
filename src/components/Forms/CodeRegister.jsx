import InputMantine from "../../components/Input/InputMantine";
import code from "../../assets/image/header/icon/code.png";
import { Buttonn } from "../Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiAddCode } from "../../apis/researcher/AddCode";
import { useSelector } from "react-redux";


export const CodeRegister = () => {
  const [codeR,setCodeR]=useState({
    code:""
  }) 
  
  const uuid= useSelector((state)=> state.researcher?.uuid || null )
  
  
  const handleChange=(e)=>{
    const {name,value}=e.target
    setCodeR((pre)=>({
      ...pre,[name]:value
    }))
  }
  const navigate=useNavigate()
  const handleBack=()=>{
    navigate('/')
  }
  const [err,setErr]=useState('')
  const handleSubmit= ()=>{
    const send = async (uuid,codeR)=>{
      if(!uuid){
        console.log('uuid is not available')
        return;
      }
      try{
        const response= await ApiAddCode(uuid,codeR)
        setErr(response)
        navigate('/login')
      }
      catch(err){
       console.log(err)
      }
    }
    send(uuid,codeR)
  }
  return (
    <div>
      <div >
        <form className="form w-100 gap-3"> 
            <div className="container-sm">
          <div className=" d-flex  flex-wrap gap-2">
            <div className=" d-flex flex-column w-75 mx-auto w-md-50 gap-3  p-4">
              <InputMantine
                size={"lg"}
                icon={<img src={code} alt="mail" />}
                placeholder="أدخل كود التسجيل  *"
                name="code"
                value={codeR.value}
                handleChange={handleChange}
                
              />
              
            </div>
          </div>
         
          </div>

          <div className="buttonBottom d-flex justify-content-center align-items-center gap-4 my-0">
            <Buttonn
              variant="filled"
              title=" رجوع "
              color="red"
              size="md"
              onClick={handleBack}
            />
            <Buttonn
              variant="outline"
              color="red"
              title="متابعة "
              size="md"
              className="m-3"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
