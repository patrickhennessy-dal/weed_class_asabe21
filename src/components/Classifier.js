import React from 'react'
import { useState, useEffect, useRef } from 'react'
//import * as mobilenet from "@tensorflow-models/mobilenet"
import * as tf from '@tensorflow/tfjs'

const Classifier = () => {
    const[isModelLoading, setIsModelLoading] = useState(false)
    const[model, setModel] = useState(null)
    const[imageURL, setImageURL] = useState(null);
    const[results, setResults] = useState([])
    const[resultsProb, setResultsProb] = useState([])
    const weedNames = ['Goldenrod', 'Hawkweed', 'Bunchberry', 'Sheep Sorrel', 'No Weeds', 'Hair Fescue']

    const imageRef = useRef()
    const fileInputRef = useRef()

    const loadModel = async () => {
        setIsModelLoading(true)
        try {
        const model = await tf.loadLayersModel('https://cdn.jsdelivr.net/gh/patrickhennessy-dal/weed_class_asabe21/src/assets/modelMN/model.json')
        setModel(model)
        setIsModelLoading(false)

        } catch(error) {
        console.log(error)
        setIsModelLoading(false)
        }
    }

    const uploadImage = e => {
        const { files } = e.target
        if (files.length > 0) {
            const url = URL.createObjectURL(files[0])
            setImageURL(url)
        } else {
            setImageURL(null)
        }
    }

    const identify = async () => {
        let test_img = await tf.browser.fromPixelsAsync(imageRef.current)
        test_img = tf.expandDims(test_img,0)
        test_img = tf.image.resizeBilinear(test_img, [224,224])
        const prob = await model.predict(test_img)
        const result = tf.argMax(prob,1)
        setResults(weedNames[result.dataSync()[0]])
        setResultsProb(prob.dataSync()[result.dataSync()[0]])
    }

    const triggerUpload = () => {
        fileInputRef.current.click()
    }

    useEffect(() => {
        loadModel()
    }, [])

    if (isModelLoading) {
        return <h2>Model Loading...</h2>
    }

    //console.log(results)

    
    return (
        <div className='classifier'>
            <div className='mainWrapper centreColumn'>
                <div className='mainContent'>
                    <div className='imageHolder'>
                        {imageURL && <img src={imageURL} className='image' alt='Upload Preview' crossOrigin='anonymous' ref={imageRef}/>}
                    </div>
                    {results.length > 0 && <div className='resultsHolder text'>
                          <div className='result' key={results.className}>
                            <span className='name'><p>Result: {results} </p></span>
                            <span className='confidence'>Confidence level: {(resultsProb * 100).toFixed(2)} %</span>
                          </div>
                    </div>}  
                </div>
                <div className='inputHolder'>
                <input
                  type='file'
                  accept='image/*'
                  capture='camera'
                  className='uploadInput'
                  onChange={uploadImage}
                  ref={fileInputRef}
                />
                <div className='btnHolder'>
                    <button className='ctrlBtn' onClick={triggerUpload}>Upload Image</button>
                    {imageURL && <button className='ctrlBtn' onClick={identify}>Identify Image</button>}
                </div>
            </div>
            {/*<div className='inputHolder'>
                <input
                  type='file'
                  accept='image/*'
                  capture='camera'
                  className='uploadInput'
                  onChange={uploadImage}
                  ref={fileInputRef}
                />
                <button className='ctrlBtn' onClick={triggerUpload}>Upload Image</button>
            </div>*/}
        </div>
      </div>
    )
}

export default Classifier
