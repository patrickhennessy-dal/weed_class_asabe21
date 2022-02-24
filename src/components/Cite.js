import React from 'react'

const Cite = () => {
    return (
        <div className = 'cite text centreColumn'>
            <h2>Cite</h2>
            <p>If you wish to use this work, please cite our <a href='https://github.com/patrickhennessy-dal/weed_class_asabe21/blob/master/src/assets/hennessy_asabe21_poster.pdf' target='_blank' rel='noopener noreferrer'>poster</a> in the ASABE AIM 2021 conference proceedings:</p>
            {/*<pre><code className='citeCode'>{`
                const citation = () => {
                    title =     'Convolutional Neural Network Web Application for Aiding Field Management in Wild Blueberry';
                    authors =   ['Patrick J. Hennessy', 'Travis J. Esau', 'Arnold W. Schumann', 'Qamar U. Zaman', 'Scott N. White', 'Aitazaz A. Farooque'];
                    year =      2021;
                    procTitle = '2021 ASABE Annual International Meeting';
                    procCity =  'Virtual';
                };    
            `}</code></pre>*/}
            <pre className='citeCode'>
                <span>
{`const citation = () => {
    title       = 'Convolutional Neural Network Web Application for Aiding Field Management in Wild Blueberry';
    authors     = ['Patrick J. Hennessy', 'Travis J. Esau', 'Arnold W. Schumann', 'Qamar U. Zaman', 'Scott N. White', 'Aitazaz A. Farooque'];
    year        = 2021;
    procTitle   = '2021 ASABE Annual International Meeting';
    procCity    = 'Virtual';
};`}
                </span>    
            </pre>
        </div>
    )
}

export default Cite
