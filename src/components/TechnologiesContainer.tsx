import { FaPhp, FaJava, FaAws, FaLinux, FaDocker, FaNodeJs } from 'react-icons/fa'
import { SiNestjs, SiDotnet } from 'react-icons/si'
import { RiReactjsLine } from 'react-icons/ri'
import '../styles/components/technologiescontainer.sass'

const tecnologies = [
  { id: "php", name: "Php", icon: <FaPhp /> },
  { id: "javascript", name: "Javascript", icon: <FaJava /> },
  { id: "react", name: "React", icon: <RiReactjsLine /> },
  { id: "aws", name: "Aws", icon: < FaAws /> },
  { id: "linux", name: "Linux", icon: < FaLinux/> },
  { id: "nestjs", name: "Nestjs", icon: <SiNestjs /> },
  { id: "c#", name: "C#", icon: <SiDotnet /> },
  { id: "docker", name: "Docker", icon: <FaDocker /> },
  { id: "nodejs", name: "Nodejs", icon: <FaNodeJs/>}
]

const TechnologiesContainer = () => {
  return <section className="technologies-container">
    <h2>Tecnologia</h2>
    <div className="technologies-grid">
      {tecnologies.map((tech) => (
        <div className="technology-card" id={tech.id} key={tech.id}>
          {tech.icon}
           <div className='technology-infor'>
            <h3>{tech.name}</h3>
            <p>Algumas das tecnologia que tenho conhecimento!!</p>
           </div>
          </div>
        ))}
    </div>
  </section>
}

export default TechnologiesContainer