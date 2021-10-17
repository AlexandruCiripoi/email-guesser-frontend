import Container from "react-bootstrap/Container";


const Home = () => {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="mt-4 text-center">Welcome to the email guesser app</h1>
            <h3 className="mt-4 text-center">This app has been created for an interview test</h3>
            <h3 className="mt-4 text-center">The frontend is created using React as well as the following libraries: Bootrstrap-React, React Router, React Hook Form and Axios. And has been deployed on Netlify.</h3>
            <h3 className="mt-4 text-center">The backend is created using Node.js/Typescript as well as the Express.js framework and Axios. And has been deployed on Heroku.</h3>
            <h3 className="mt-4 text-center">Link to the frontend github <a href="https://github.com/AlexandruCiripoi/email-guesser-backend">repo</a></h3>
            <h3 className="mt-4 text-center">Link to the backend github <a href="https://github.com/AlexandruCiripoi/email-guesser-frontend">repo</a></h3>
        </Container>

    );
};

export default Home;