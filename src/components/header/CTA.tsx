import { Link } from 'react-scroll'

export default function CTA() {

    const CV = 'https://firebasestorage.googleapis.com/v0/b/portfolio-15cc6.appspot.com/o/CV_KevLG.pdf?alt=media&token=ecddccba-9d8a-4540-b685-9c5ab2864d61';
    
    return (
        <div className='cta'>
            <a href={CV} download className='btn animate__animated animate__backInLeft'>Download CV</a>
            <Link to="contact" className='btn btn-primary animate__animated animate__backInRight'>Let's Talk</Link>
        </div>
    )
}
