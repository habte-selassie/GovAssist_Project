import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard"
import AlexaImage from './ images/alexa.png'
import CortanaImage from './ images/cortana.png'
import SiriImage from './ images/siri.png'



function App (){
  return(
    <div>
     <section className='hero is-primary'>
      <div className='hero-body'>
        <p className='title'>Personal Digital Assistants</p>
      </div>
     </section>
     
  <div className='container'>
    <div className='section'>
      <div className='columns'>
        <div className='column is-4'>
        <ProfileCard   description="Alexa was invented by Amazon and helps you buy things" image={AlexaImage} title="Alexa" handle="@alexa99"/>
        </div>
        <div className='column is-4'>
        <ProfileCard   description="Cortana was invented by Microsoft. Who knows what it does" image={CortanaImage} title="Cortana" handle="@cortana39"/>
        </div>
        <div className='column is-4'>
        <ProfileCard  description="Siri was invented by Apple and is being phased out" image={SiriImage} title="Siri" handle="@siri01"/>

        </div>
      </div>
    </div>
  </div> 
</div> 
   
   
     )
}

export default App