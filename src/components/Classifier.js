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

    //const modelJson = require("../assets/model/model.json")
    //const modelJson = tfn.io.fileSystem("../assets/model/model.json")
    //const modelWeight = require("../assets/model/group1-shard.bin")

    const imageRef = useRef()
    const textInputRef = useRef()
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
        const results = await model.classify(imageRef.current)
        //const results = await model.predict(imageRef.current)
        setResults(results)
    }

    const handleOnChange = (e) => {
        setImageURL(e.target.value)
        setResults([])
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

    console.log(results)

    
    return (
        <div className='classifier'>
            <h1 className='header'>Image Identification</h1>
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
        <span className='or'>OR</span>
        <input type='text' placeholder='Paste image URL' ref = {textInputRef} onChange={handleOnChange}/>
      </div>
      <div className='mainWrapper'>
        <div className='mainContent'>
          <div className='imageHolder'>
            {imageURL && <img src={imageURL} alt='Upload Preview' crossOrigin='anonymous' ref={imageRef}/>}
          </div>
          {results.length > 0 && <div className='resultsHolder'>
            {results.map((result, index) => {
              return (
                <div className='result' key={result.className}>
                  <span className='name'>{result.className}</span>
                  <span className='confidence'>Confidence level: {(result.probability * 100).toFixed(2)}% {index === 0 && <span className='bestGuess'>Best Guess</span>}</span>
                </div>
              )
            })}
          </div>}  
        </div>
        {imageURL && <button className='button' onClick={identify}>Identify Image</button>}
      </div>
        </div>
    )
}

export default Classifier
