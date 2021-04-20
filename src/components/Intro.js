import React from 'react'

const Intro = () => {
    return (
        <div className='intro text'>
            <p>This is an application for classifying weeds in wild blueberry fields. The currently supported weeds are hair fescue, sheep sorrel, hawkweed, goldenrod, and bunchberry. This applicaton was presented at ASABE AIM 2021 with a <a href="https://www.asabemeetings.org/">corresponding paper</a> in the conference proceedings.</p>
            <p>To use the application, capture an image of the weed from directly above from a height of around 1 metre. Alternatively, download sample images below. Then, upload the image and let the deep learning algorithm do the work!</p>
        </div>
    )
}

export default Intro
