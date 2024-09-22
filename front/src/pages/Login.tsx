import { Link } from "react-router-dom";
import { useState } from "react";
import { StlCaixa } from "../components/box/white_box";
import {BtnStl} from "../components/Button/Button";
import { FlexDivResp } from "../components/FlexDiv/FlexDIv";
import { StlInput } from "../components/Inputs/Input";
import { Logo } from "../components/Logo/Logo";
import { LinhaSld } from "../components/Linha/Linha";



export function Login() {
  const [email,setEmail] = useState("");
  const [senha,setSenha] = useState("");
  const enviarDados = () =>{
    console.log(email,senha);    
  }

  
  return (
   <>
      <LinhaSld/>
      <StlCaixa height="90%" width='300px' radius={true} >
        <Logo height="50px" width="auto" />
        <h1 className="title_default">Login</h1>
        <StlInput onChange={e => setEmail(e.target.value)} type="email" height="50px" width="80%" placeholder="E-mail"/>
        <StlInput onChange={e => setSenha(e.target.value)} type="password" height="50px" width="80%" placeholder="Senha"/>
        <BtnStl onClick={enviarDados}  height="40px" width="80%">Entrar</BtnStl>
        <FlexDivResp>
          Não Tem Conta? <Link className="links" to='/cadastro'> Cadastre-Se</Link>
        </FlexDivResp>
        <FlexDivResp>
         

        </FlexDivResp>
      </StlCaixa>
    </>
  );
}
