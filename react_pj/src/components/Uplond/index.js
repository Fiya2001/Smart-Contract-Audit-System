// import React, { useState } from 'react';
// import axios from 'axios';

// function DropFiles() {
//     const [file, setFile] = useState(null);
//     const [results, setResults] = useState(null);

//     const handleFileChange = (event) => {
//         setFile(event.target.files[0]);
//     };

//     const analyzeContract = async () => {
//         if (!file) {
//             alert('Please select a file first.');
//             return;
//         }

//         const formData = new FormData();
//         formData.append('file', file);

//         try {
//             const response = await axios.post('http://localhost:8080/analyze-contracts', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });

//             setResults(response.data.results);
//         } catch (error) {
//             console.error('Error analyzing the contract:', error);
//         }
//     };

//     return (
//         <div>
//             <h2>Contract Analyzer</h2>
//             <input type="file" accept=".sol" onChange={handleFileChange} />
//             <button onClick={analyzeContract}>Analyze Contract</button>
//             <div>
//                 <h3>Analysis Results</h3>
//                 <pre>{results}</pre>
//             </div>
//         </div>
//     );
// }

// export default DropFiles;

/**
 * Above important
 */

import React, { useState, useRef } from 'react';
import axios from 'axios';

import {
    UplondContainer,
    UplondWrapper,
    UplondBox,
    UplondH1
} from './uplondElements';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

const DropFiles = () => {
    // State to store uploaded files
    // Reference to the input element for selecting files
    const inputRef = useRef();

    const [contractName, setContractName] = useState('');
    const [username, setUsername] = useState('');

    // Prevent default behavior when a file is dragged over
    const handleDragOver = (event) => {
        event.preventDefault();
    };

    // Handle file drop event
    const handleDrop = (event) => {
        event.preventDefault();
        setFile(event.dataTransfer.files[0]);
    };
    const [file, setFile] = useState(null);
    const [results, setResults] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Contract Name:', contractName);
        console.log('Username:', username);
        if (!file) {
            toast.info("Please select a flie")
            return
        }
        if (!contractName || contractName.length < 6) {
            toast.info("Contract name should contain atleast 6 characters")
            return
        }
        if (!username || username.length < 6) {
            toast.info("Username  should contain atleast 6 characters")
            return
        }
        analyzeContract()
    };

    const analyzeContract = async () => {
        setResults(null)
        const formData = new FormData();
        formData.append('file', file);
        formData.append('username', username)
        formData.append('contractName', contractName)

        try {
            const response = await axios.post('http://localhost:8080/analyze-contracts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setResults(response.data.fileName);
        } catch (error) {
            console.error('Error analyzing the contract:', error);

        }
    };

    const showAudit = () => {
        window.open('http://localhost:8080/analyzed-results/' + results + '.txt')
    }


    // If files are selected, display the list and buttons
    // if (file) {
    //     return (
    //         <UplondContainer className="uploads">
    //             <ul
    //                 <li key={0}>{file.name}</li>
    //             </ul>
    //             <div className="actions">
    //                 <button onClick={() => setFile(null)}>Cancel</button>
    //                 <button onClick={analyzeContract}>Upload</button>
    //             </div>
    //             <div>
    //                 <h3>Analysis Results</h3>
    //                 <pre>{results}</pre>
    //             </div>
    //         </UplondContainer>
    //     );
    // }

    // If no files are selected, display the drop zone
    return (
        <section className="uplondfile" id="uplondfiles">
            <br></br>
            <UplondContainer className="container">
                <UplondH1>Drop your Contract to Upload</UplondH1>

                <UplondWrapper className="DropFilecontainer" onDragOver={handleDragOver} onDrop={handleDrop}>
                    <div>
                        {
                            file ? <div className="uploads" style={{
                                display: 'flex',
                                color: 'white',
                                justifyContent: 'center',
                                marginBottom: '20px'
                            }}>
                                {file.name}
                            </div> : <></>
                        }
                        <input
                            type="file"
                            // multiple
                            onChange={(event) => setFile(event.target.files[0])}
                            hidden
                            accept=".sol"
                            ref={inputRef}
                        />
                        <UplondBox onClick={() => inputRef.current.click()}>Select Contract</UplondBox>
                    </div>

                    <div
                        style={{
                            color: 'white'
                        }}
                    >
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="contractName" >
                                <Form.Label style={{ color: 'white' }} >Contract Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Contract Name"
                                    value={contractName}
                                    onChange={(e) => setContractName(e.target.value)}
                                />
                            </Form.Group>
                            <br></br>

                            <Form.Group controlId="username">
                                <Form.Label style={{ color: 'white' }} >Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Form.Group>
                            <br></br>

                            <Button variant="secondary" type="submit">
                                Submit
                            </Button>
                            <span style={{ width: '10px', display: 'inline-block' }}></span>
                            {
                                results ? <Button variant="secondary" onClick={showAudit}>
                                    View Audit
                                </Button> : <></>
                            }

                        </Form>
                    </div>

                </UplondWrapper>


            </UplondContainer>

        </section>
    );
};

export default DropFiles;
