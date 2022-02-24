import React from 'react'

const Intro = () => {
    return (
        <div className='intro text centreColumn'>
            <p>This is an application for classifying weeds in wild blueberry fields using the MobileNet (Howard et al., 2017) Convolutional Neural Network. The currently supported weeds are hair fescue, sheep sorrel, hawkweed, goldenrod, and bunchberry. MobileNet was trained on Google Colab (Bisong, 2019) using TensorFlow (Abadi et al., 2015) and Keras (Chollet et al., 2020). The website runs on the ReactJS framework (Facebook Inc. & Walke, 2021) and processes the MobileNet model in your browser using Tensorflow.JS (Smilkov et al., 2019). This applicaton was presented at ASABE AIM 2021 with a <a href='https://github.com/patrickhennessy-dal/weed_class_asabe21/blob/master/src/assets/hennessy_asabe21_poster.pdf' target='_blank' rel='noopener noreferrer'>corresponding poster</a> in the conference proceedings.</p>
            <p>To use the application, capture an image of the weed from directly above from a height of around 1 metre. Alternatively, download some <a href='https://www.dropbox.com/sh/tk734ttl2k6yw4n/AAAoJ4cJfgmjSatJYAh-JhYla?dl=0' target='_blank' rel='noopener noreferrer'>sample images</a>. Then, upload the image and let the deep learning algorithm do the work!</p>
        </div>
    )
}

export default Intro
