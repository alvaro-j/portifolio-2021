import React from 'react'

export default function Contato() {
    return (
        <div className='container'>
            <section className='contato'>
                <article>
                    <h1>Como me encontrar:</h1>
                    <ul>
                        <li><img src='images/github.svg' alt='github icon'></img><span><a href='https://www.github.com/alvaro-j' target='_blank' rel="noreferrer">Github</a></span></li> 
                        <li><img src='images/linkedin.svg' alt='linkedin icon'></img><span><a href='https://www.linkedin.com/in/alvaro-jaime/' target='_blank' rel="noreferrer">LinkedIn</a></span></li>
                        <li><img src='images/email.svg' alt='email icon'></img><span>E-mail: alvarojaime360@gmail.com</span></li>
                    </ul>
                </article>
                <div className='contato-img'><img src='images/undraw_contact_us_15o2.svg' alt='contact icons'></img></div>
            </section>
        </div>
    )
}

// linha 11 e 12: usou o rel="noreferrer" para fins de segurança do site.