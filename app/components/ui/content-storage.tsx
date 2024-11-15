import { educationContent } from "@/app/lib/data"
import { generalContent } from "@/app/lib/data"
import { skillsContent } from "@/app/lib/data"
import { bigProjectsContent } from "@/app/lib/data"
import Image from "next/image"
import Carousel from "./carousel"
import Link from "next/link"
import Accordion from "./accordion"

const ContentStorage = new Map() 

ContentStorage.set("education", () => {
   return (
      educationContent.map((education, index, arr) => (
         <div key={education.id} className={index !== arr.length - 1 ? `mb-5 md:mb-8`: ""}>
            <h3>{education.title}</h3>
            <p>{education.description}</p>
         </div>
      ))
   )
})

ContentStorage.set("general", () => {
   return <p>{generalContent}</p>
})

ContentStorage.set("skills", () => {
   return (
      <div className="grid grid-cols-2 gap-y-4 lg:grid-cols-3 justify-center items-center">
         {skillsContent.map((skill) => (
         <div className="flex flex-col justify-center items-center" key={skill.id}>
            <Image
               src={skill.src}
               width={skill.mobileWidth}
               height={skill.mobileHeight}
               alt={skill.alt}
               draggable={false}
            />
            <p className="font-medium text-lg">{skill.text}</p>
         </div>
         ))}
      </div>
      
   )
})

ContentStorage.set("big-projects", () => {
   return (
      <>
         <div className="block md:hidden">
            <Carousel 
               items={bigProjectsContent} 
               keys={bigProjectsContent.map(item => item.id)}
               control="swipe"
               allowGrab={false}
               renderedItem={(bigProject) => (
                  <div className="grid grid-cols-1">
                     <div>
                        <h3>{bigProject.titleName}</h3>
                        <p>{bigProject.name}</p>
                        <Carousel 
                           items={bigProject.images} 
                           keys={bigProjectsContent.map(item => item.id)}
                           control="navigation"
                           allowGrab={false}
                           renderedItem={(img) => (
                              <Image 
                                 src={img.src} 
                                 alt={img.alt} 
                                 width={img.mobileWidth}
                                 height={img.mobileHeight}
                              />
                           )} 
                        />
                     </div>
                     <div>
                        <div>
                           <h3>{bigProject.titleDescription}</h3>
                           <Accordion 
                              wrapperKey={`accordion-wrapper-${bigProject.id}`} 
                              values={[
                              {
                                 key: `accordion-inner-${bigProject.id}`, 
                                 heading: "Description", 
                                 content: 
                                    <div className="block">
                                       <p>{bigProject.description}</p>
                                    </div>
                              }, 
                           ]}/>
                        </div>
                        <div>
                           <h3>{bigProject.titleTechnologies}</h3>
                           <div>
                              {bigProject.technologies.map(tech => (
                                 <div key={tech.id}>
                                    <p>{tech.name}</p>
                                 </div>
                              ))}
                           </div>
                        </div>
                        <div>
                           <h3>{bigProject.titleDemonstration}</h3>
                           <div className="grid grid-cols-2">
                              <Link href={bigProject.codeLink.href} className="text-primary-color underline text-lg md:text-xl">{bigProject.codeLink.text}</Link>
                              <Link href={bigProject.liveLink.href} className="text-primary-color underline text-lg md:text-xl">{bigProject.liveLink.text}</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               )} 
            />
         </div>
         <div className="hidden md:block">
            <Carousel 
               items={bigProjectsContent} 
               keys={bigProjectsContent.map(item => item.id)}
               control="navigation"
               allowGrab={false}
               renderedItem={(bigProject) => (
                  <div className="grid grid-cols-2">
                     <div>
                        <h3>{bigProject.titleName}</h3>
                        <p>{bigProject.name}</p>
                        <Carousel 
                           items={bigProject.images} 
                           keys={bigProjectsContent.map(item => item.id)}
                           control="pagination"
                           allowGrab={true}
                           renderedItem={(img) => (
                              <Image 
                                 src={img.src} 
                                 alt={img.alt} 
                                 width={img.desktopWidth}
                                 height={img.desktopHeight}
                              />
                           )} 
                        />
                     </div>
                     <div>
                        <div>
                           <h3>{bigProject.titleDescription}</h3>
                           <div className="block">
                              <p>{bigProject.description}</p>
                           </div>
                        </div>
                        <div>
                           <h3>{bigProject.titleTechnologies}</h3>
                           <div>
                              {bigProject.technologies.map(tech => (
                                 <div key={tech.id}>
                                    <p>{tech.name}</p>
                                 </div>
                              ))}
                           </div>
                        </div>
                        <div>
                           <h3>{bigProject.titleDemonstration}</h3>
                           <div className="grid grid-cols-2">
                              <Link href={bigProject.codeLink.href} className="text-primary-color underline text-lg md:text-xl">{bigProject.codeLink.text}</Link>
                              <Link href={bigProject.liveLink.href} className="text-primary-color underline text-lg md:text-xl">{bigProject.liveLink.text}</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               )} 
            />
         </div>
      </>
   )
})

ContentStorage.set("demos", () => {
   return (
      <div>
         <p>Hello from demos</p>
      </div>
   )
})

ContentStorage.set("contact-me", () => {
   return (
      <div>
         <p>Hello from contact me</p>
      </div>
   )
})

export default ContentStorage