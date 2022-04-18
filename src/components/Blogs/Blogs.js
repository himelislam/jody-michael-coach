import React from 'react';

const Blogs = () => {
    return (
        <div className='container' style={{ minHeight: "400px" }}>
            <div className='border rounded p-4 text-white my-4'>
                <div>
                    <h3 className='fw-light'>Q.1: Difference between authorization and authentication</h3>
                    <p className='fw-light'>Answer:</p>
                    <div>
                        <p>Authentication :</p>
                        <ul>
                            <li>The identity of users are checked for providing the access to the system.</li>
                            <li>Users or persons are verified.</li>
                            <li>It is done before the authorization process.</li>
                            <li>It needs usually user’s login details.</li>
                        </ul>
                    </div>
                    <div>
                        <p>Authorization :</p>
                        <ul>
                            <li>While in authorization process, person’s or user’s authorities are checked for accessing the resources.</li>
                            <li>While in this process, users or persons are validated.</li>
                            <li>While this process is done after the authentication process.</li>
                            <li>While it needs user’s privilege or security levels.</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className='fw-light'>Q.2: Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <p className='fw-light'>Answer: Firebase is a Backend-as-a-Service (Baas). Firebase provides varity of tools and services for developers so that they can build quality apps.There are also other options besides firebase. Like Auth0, Okta, OneLogin, SecureAuth, SafeNet etc</p>
                </div>
                <div>
                    <h3 className='fw-light'>Q.3: What other services does firebase provide other than authentication?</h3>
                    <p className='fw-light'>Answer: Firebase also provides varity of tools besides authentication.Firebase Provides Website hosting, Firebase Database, Realtime Database, Storage, Function, Machine Learning. So that we can host our website in firebase, we can use Cloud database for our project, amd we can also use Firebase storage to store our data.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;