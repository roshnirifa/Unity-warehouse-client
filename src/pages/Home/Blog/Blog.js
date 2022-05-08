import React from 'react';

const Blog = () => {
    return (
        <div className='mt-5 container mb-5'>
            <h1 className='text-center mt-4 pt-5'>Question & Answer</h1>

            <div>
                <h3> Qus: Diiference between JS nad Nodejs</h3>
                <h5>JS</h5>
                <p>1. JS is a programming language which runs in web browsers</p>
                <p>2. JavaScript is used for any client-side activity for one web application</p>
                <p>3.JS is following Java Programming language standard</p>
                <h5>Nodejs</h5>
                <p>1. Nodejs is a Js runtime environment</p>
                <p>2 Nodejs used for accessing or running any operating system for non-blocking operation. </p>
                <p> 3.Nodejs is written in C++ and provides a V8 engine base browser javascript running engine, it helps us run a written javascript program in any browser environment.</p>
            </div>
            <div>
                <h3>Qus: Differences between sql and nosql databases.</h3>
                <h5>SQL</h5>
                <p>1.SQL databases are vertically scalable</p>
                <p>2.SQL database  always represent relational, tabular data, with rules about consistency and integrity.</p>
                <p>3.SQL databases have  static schema </p>
                <h5>NoSQL</h5>
                <p> 1.NoSQL databases are horizontally scalable</p>
                <p>2. NoSQL database didnt contain any consistency and interigity</p>
                <p>3.NoSQL databases have dynamic schema.</p>
            </div>
            <div>
                <h3>Qus:What is the purpose of jwt and how does it work</h3>
                <p>JWT means json web token which provides token based authentications. The purpose JWT is secure the data between client site and server site.By sharing a secret key with the Identity Provider the Service Provider can hash a part of a token it receives and compare it to the signature of the token.without authenticate user one can't access the informaion
                </p>
                <p>jwt works</p>
                <p>when a user try to login the client site send a requst to the server site which is user authentication request. The authentication server verifies the user and issues a JWT signed using a private key then the client will use the JWT to access protected resources by passing the JWT in the HTTP Authorization header, then server verifies the authenticity of the token using the public key.
                </p>
            </div>
        </div>
    );
};

export default Blog;