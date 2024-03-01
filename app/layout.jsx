import '../styles/globals.css'
import styles from '../styles/layout.module.css'

export const metadata = {
    title: 'Family Pride USA',
    description: 'Celebrating and supporting the fabric of American families.'
}

export default async function RootLayout({children}){
    const imgUrl1 = '//images.ctfassets.net/vdnl4md1xpsv/1EkRtJnRue4wvhqujwCOUG/bdddac6ed0d0d276e9b9a3b36c009ab8/Group_5__1_.jpg'
    const imgUrl2 = 'https://images.ctfassets.net/vdnl4md1xpsv/62ciGzfb82Xy3gSZ6gDcWH/72fcdf6888a6b187d39cd38be71e9b25/Group_6_1.png'
 return(
    <html>
        <body className={styles.body}>
        {children}
        <img src={imgUrl1} alt="" className={styles.image} id={styles.image1}/>
        <img src={imgUrl2} alt="" className={styles.image} id={styles.image2}/>
        </body>
    </html>
 )   
}