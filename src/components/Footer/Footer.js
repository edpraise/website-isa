import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
 <FooterWrapper>
   <LinkList>
   <LinkColumn>
   <LinkTitle>Call</LinkTitle>
   <LinkItem href='tell: +234 905 127 2457'>+234 905 127 2457</LinkItem>
   </LinkColumn>
   <LinkColumn>
   <LinkTitle>Email</LinkTitle>
   <LinkItem href='mailto: kingisaski@gmail.com'>kingisaski@gmail.com</LinkItem>
   </LinkColumn>
   </LinkList>
   <SocialIconsContainer>
     <CompanyContainer>
       <Slogan>
       Isaski FX
      Where Millionaires are made
       </Slogan>
     </CompanyContainer>
     {/* <SocialIcons href='/https://github.com'>
       <AiFillMail size= "3rem"/>
     </SocialIcons>
     <SocialIcons href='/https://github.com'>
       <AiFillInstagram size= "3rem"/>
     </SocialIcons> <SocialIcons href='/https://github.com'>
       <AiFillFacebook size= "3rem"/>
       </SocialIcons> */}
   </SocialIconsContainer>
 </FooterWrapper>
  );
};

export default Footer;
