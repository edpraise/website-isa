import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row noPadding>
   <LeftSection>
     <SectionTitle main center>
        Welcome to <br/>ISASKI TRAINING ACADAMY
     </SectionTitle>
     <SectionText>
     THE WEBSITE SERVE TO introduce people to the world of currency trading, THERE BY PROVIDING  educational content, Organizing seminar and Online classes to help them learn how to become profitable traders. We Help traders achieve there goals and support them in the course of our  trading journey
     </SectionText>
     <Button onClick = {()=>window.location ="https://google.com"}>Learn More</Button>
   </LeftSection>
 </Section>
);

export default Hero;