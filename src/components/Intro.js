import React from 'react'

const Intro = () => {
    return (
        <div className='intro text centreColumn'>
            <p>This is an application for classifying weeds in wild blueberry fields using the MobileNet Convolutional Neural Network. The currently supported weeds are hair fescue, sheep sorrel, hawkweed, goldenrod, and bunchberry. This applicaton was presented at ASABE AIM 2021 with a <a href='https://www.asabemeetings.org/' target='_blank' rel='noopener noreferrer'>corresponding paper</a> in the conference proceedings.</p>
            <p>To use the application, capture an image of the weed from directly above from a height of around 1 metre. Alternatively, download some <a href='https://www.dropbox.com/sh/tk734ttl2k6yw4n/AAAoJ4cJfgmjSatJYAh-JhYla?dl=0' target='_blank' rel='noopener noreferrer'>sample images</a>. Then, upload the image and let the deep learning algorithm do the work!</p>
        </div>
    )
}

export default Intro
