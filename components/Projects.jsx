import React from 'react'
import { ProjectItem } from './ProjectItem'
import calcImg from '../public/assets/BasicHTMLCalc/Calculator_Html.jpg'
import Games from '../public/assets/BasicHTMLCalc/Games.PNG'
import timerApp from '../public/assets/BasicHTMLCalc/Games (1).PNG'
import ToDo from '../public/assets/BasicHTMLCalc/TO-DO.PNG'

export const Projects = () => {
  return (
    <div id='Projects' className='w-full py-28'> 
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Projects</p>
    <h2 className='py-4'>What I've Built</h2>
    <div className='grid md:grid-cols-2 gap-8'>
    <ProjectItem 
        title='Online Calcultor' 
        backgroundImg={calcImg} 
        projectUrl='https://github.com/milosst686/OnlineCalculator'
        usedPrograms= "HTML"
    />
      <ProjectItem 
        title='Games i was working on' 
        backgroundImg={Games} 
        projectUrl='https://milosst686.itch.io/'
        usedPrograms= "Unity, C#, PixelArt, 3D modeling"
    />
      <ProjectItem 
        title='Timer App' 
        backgroundImg={timerApp} 
        projectUrl='https://github.com/milosst686/TimerApp'
        usedPrograms= "Java, JSON"
    />
      <ProjectItem 
        title='To-Do' 
        backgroundImg={ToDo} 
        projectUrl='https://github.com/milosst686/To-DoList'
        usedPrograms= "HTML, Css, JavaScript"
    />
    </div>
        </div>
    </div>
  )
}
