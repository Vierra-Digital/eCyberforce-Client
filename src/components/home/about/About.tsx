import Image from 'next/image'
import imgSrc from '../about/img/about-img.png'
import styles from './About.module.css'
import Icon from "./img/Icon.svg";
function About() {
  return (
    <div className={styles.container}>
      <div className={styles.aboutImg}>
      <Image src={imgSrc} 
      alt="Description"
      />
        </div>
        <div className='styles.subcontainer'>
        <div>
          <h3 className={styles.title}>
            Empowering secure <br/>
          <span>cyberspace management</span><br/>
           for a seamless experience.</h3>
        </div>
        <div className={styles.content}>
          <p>With <span>three decades</span> of
             experience in the <br/> industry,
              <span>ECyberForce</span> has recently embarked<br/>
               on a new mission: assisting others
                in effectively <br/> managing the 
                complex realm of cyberspace.<br/>
                 Our expertise and passion 
                 enable us to provide <br/> valuable 
                 insights and support to 
                 organizations <br/> seeking to navigate
                 and excel in the rapidly <br/> evolving
                  digital landscape.</p>
        </div>
     
       <div className={styles.more}>
        <button>
        About Us 
        <Image src={Icon} width={16}
         height={10} 
        alt="arrow" 
        className={styles.btnIcon} />
        </button>
        
       
      </div>
      </div>
      </div>
  )
}

export default About