import React from 'react'
import Head from 'next/head'
import {useRouter} from "next/router" // permet d'avoir les informations sur la route
import styles from '../../styles/Anim.module.css';

export default function PixelPhysique() 
{
    const routeur = useRouter()
    console.log(routeur);
  return (
    <main className={styles.main}>
        <Head>
            <title>{routeur.query.slug}</title>
        </Head>
        <h1>{routeur.query.slug}</h1>
        <canvas ></canvas>
        <div>
          <button>Warp</button>
        </div>
    </main>
  )
}
