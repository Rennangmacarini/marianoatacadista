import styles from './styles.module.scss'

export function Video() {
  
  return(
    <> 
    <video className={styles.video} src="/video/mariano.mp4" muted autoPlay loop></video>
    </>
    
  )
}