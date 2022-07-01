import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

// const testimonial = [{
//   title: "Project 1",
//   description: "This is a site for isa my friend for his forex academy portfolio site"
// },
// {
//   title: "Project 1",
//   description: "This is a site for isa my friend for his forex academy portfolio site"
// },
// {
//   title: "Project 1",
//   description: "This is a site for isa my friend for his forex academy portfolio site"
// },
// {
//   title: "Project 1",
//   description: "This is a site for isa my friend for his forex academy portfolio site"
// },
// {
//   title: "Project 1",
//   description: "This is a site for isa my friend for his forex academy portfolio site"
// }
// ];
const Projects = () => (
<Section noPadding id ='projects'>
  <SectionDivider/>
  <SectionTitle main>Our Classes</SectionTitle>
  <GridContainer>
    {projects.map(({id, image,title, description, tags, source, visit})=>(
    <BlogCard key={projects.id}>
      <img src= {image} style={{width: "100%"}}/>
      <TitleContent>
        <HeaderThree title>{title}

        </HeaderThree>
        <Hr />      </TitleContent>
        <CardInfo>
          {description}
        </CardInfo>
        <div>
          {/* <TitleContent>
            stack
          </TitleContent>    */}
          <TagList>
            {tags.map((tags,i ) => (

              <Tag key = {i}>{tags}</Tag>
            ))}
          </TagList>
        </div>
        {/* <UtilityList>
          <ExternalLinks href={visit}>
              code
          </ExternalLinks>
        </UtilityList> */}
    </BlogCard>
    ))}
  </GridContainer>
</Section>
);

export default Projects;