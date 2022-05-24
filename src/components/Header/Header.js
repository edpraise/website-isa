import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
 <Container>
   <Div1>
      <Link href= "/">
        <a style={{display: "flex", alignItems: "center", color: "white", marginBottom: "20px "}}>
          <DiCssdeck size= "3rem"/><Span>Isaski academy</Span>
        </a>
      </Link>
   </Div1>
   <Div2>
     <li>
       <Link href= "#projects">
       <NavLink>
         Home
       </NavLink>
       </Link>
     </li>
     <li>
       <Link href= "#tech">
       <NavLink>
         Contacts
       </NavLink>
       </Link>
     </li>
     <li>
       <Link href= "#about">
       <NavLink>
         About Us
       </NavLink>
       </Link>
     </li>
   </Div2>
   <Div3>
     <SocialIcons href='/kingisaski@gmail.com'>
       <AiFillMail size= "3rem"/>
     </SocialIcons>
     <SocialIcons href='/ https://t.me/isaskifx'>
       <AiFillLinkedin size= "3rem"/>
     </SocialIcons> <SocialIcons href='/https://m.facebook.com/isaskifx/'>
       <AiFillFacebook size= "3rem"/>
     </SocialIcons>

   </Div3>
 </Container>
);

export default Header;
