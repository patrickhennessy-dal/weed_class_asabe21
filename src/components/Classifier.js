import React from 'react'
import { useState, useEffect, useRef } from 'react'
import * as mobilenet from "@tensorflow-models/mobilenet"
import * as tf from '@tensorflow/tfjs'
//import * as tfn from '@tensorflow/tfjs-node'
//import { fileSystem } from '@tensorflow/tfjs-node/dist/io'
//import  { bundleResourceIO } from '@tensorflow/tfjs-react-native';

const Classifier = () => {
    const[isModelLoading, setIsModelLoading] = useState(false)
    const[model, setModel] = useState(null)
    const[imageURL, setImageURL] = useState(null);
    const[results, setResults] = useState([])
    const[resultsProb, setResultsProb] = useState([])
    const weedNames = ['Goldenrod', 'Hawkweed', 'Bunchberry', 'Sheep Sorrel', 'No Weeds', 'Hair Fescue']

    //const modelJson = require("../assets/model/model.json")
    //const modelJson = tfn.io.fileSystem("../assets/model/model.json")
    //const modelWeight = require("../assets/model/group1-shard.bin")

    const imageRef = useRef()
    const fileInputRef = useRef()

    const loadModel = async () => {
        setIsModelLoading(true)
        try {
        //const model = await mobilenet.load()
        //const model = await tf.loadLayersModel(modelJson)
        //const model = await tf.loadLayersModel('https://www.dropbox.com/sh/dih4moq4fol5hwy/AAD0U9RfZ2osKU08gbtX_SZza?dl=0%2Fmodel.json')
        //const model = await tf.loadLayersModel('https://raw.githubusercontent.com/patrickhennessy-dal/weed_class_asabe21/master/src/assets/model/model.json')
        //const model = await tf.loadLayersModel('https://github.com/patrickhennessy-dal/weed_class_asabe21/blob/master/src/assets/model/model.json')
        //const model = await tf.loadLayersModel('https://173.252.4.22/model/model.json')
        //const model = await tf.loadLayersModel('https://192.168.0.31/model/model.json')
        const model = await tf.loadLayersModel('https://cdn.jsdelivr.net/gh/patrickhennessy-dal/weed_class_asabe21/src/assets/modelMN/model.json')
        //console.log(model.summary())
        setModel(model)
        //console.log('Model set')
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
            //console.log("imageURL set")
        } else {
            setImageURL(null)
        }
    }

    const identify = async () => {
        //console.log('identify')
        //console.log(model)
        let test_img = await tf.browser.fromPixelsAsync(imageRef.current)
        test_img = tf.expandDims(test_img,0)
        test_img = tf.image.resizeBilinear(test_img, [224,224])
        //const results = await model.classify(imageRef.current)
        //const results = await model.predict(imageRef.current)
        const prob = await model.predict(test_img)
        //setResults(prob)
        console.log('prob ' + prob)
        const result = tf.argMax(prob,1)
        console.log(prob[[0]])
        console.log('result ' + result)
        console.log(result.dataSync()[0])
        console.log(weedNames[result.dataSync()[0]]) 
        setResults(weedNames[result.dataSync()[0]])
        setResultsProb(prob[result.dataSync()[0]])
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
            <div className='inputHolder'>
                <input
                  type='file'
                  accept='image/*'
                  capture='camera'
                  className='uploadInput'
                  onChange={uploadImage}
                  ref={fileInputRef}
                />
                <button className='uploadImage' onClick={triggerUpload}>Upload Image</button>
            </div>
            <div className='mainWrapper'>
                <div className='mainContent'>
                    <div className='imageHolder'>
                        {imageURL && <img src={imageURL} alt='Upload Preview' crossOrigin='anonymous' ref={imageRef}/>}
                    </div>
                    {results.length > 0 && <div className='resultsHolder'>
                          <div className='result' key={results.className}>
                            <span className='name'><p>Result: {results} </p></span>
                            <span className='confidence'>Confidence level: {/*{(resultsProb * 100).toFixed(2)}*/}</span>
                          </div>
                    </div>}  
                </div>
                {imageURL && <button className='button' onClick={identify}>Identify Image</button>}
            </div>
        </div>
    )
}

export default Classifier
