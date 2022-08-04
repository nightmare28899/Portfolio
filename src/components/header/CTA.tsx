
export default function CTA() {

    const CV = require('../assets/static/CV_KevLG.pdf');
    
    return (
        <div className='cta'>
            <a href={CV} download className='btn animate__animated animate__backInLeft'>Download CV</a>
            <a href="#contact" className='btn btn-primary animate__animated animate__backInRight'>Let's Talk</a>
        </div>
    )
}
