import React from 'react'

const Cite = () => {
    return (
        <div className = 'cite text centreColumn'>
            <h2>Cite</h2>
            <p>If you wish to use this work, please cite our <a href='https://www.asabemeetings.org/' target='_blank' rel='noopener noreferrer'>paper</a> in the ASABE AIM 2021 conference proceedings:</p>
            {/*<pre><code className='citeCode'>{`
                const citation = () => {
                    title =     'Convolutional Neural Network Web Application for Aiding Field Management in Wild Blueberry';
                    authors =   ['Patrick J. Hennessy', 'Travis J. Esau', 'Arnold W. Schumann', 'Aitazaz A. Farooque', 'Scott N. White', 'Qamar U. Zaman'];
                    year =      2021;
                    procTitle = '2021 ASABE Annual International Meeting';
                    procCity =  'Virtual';
                    doi =       '10.13031/aim.2100661';
                };    
            `}</code></pre>*/}
            <pre className='citeCode'>
                <span>
{`const citation = () => {
    title       = 'Convolutional Neural Network Web Application for Aiding Field Management in Wild Blueberry';
    authors     = ['Patrick J. Hennessy', 'Travis J. Esau', 'Arnold W. Schumann', 'Aitazaz A. Farooque', 'Scott N. White', 'Qamar U. Zaman'];
    year        = 2021;
    procTitle   = '2021 ASABE Annual International Meeting';
    procCity    = 'Virtual';
    doi         = '10.13031/aim.2100661';
};`}
                </span>    
            </pre>
        </div>
    )
}

export default Cite
