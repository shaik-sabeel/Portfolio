import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mentalhealth from "../../Assets/Projects/MentalHealth.png";
import heart from "../../Assets/Projects/Heart.png";
import sked from "../../Assets/Projects/sked-ai.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mentalhealth}
              isBlog={false}
              title="Mental Health Analysis"
              description="🧠 AI-Powered Mental Health Assistance Platform
              A MERN stack web application team project designed to support students struggling with stress, anxiety, and mental health challenges. Features an assistive rule-based chatbot and an AI-powered Gemini chatbot for personalized guidance and stress reduction. Includes a mental health assessment, progress tracking with visual analytics, and personalized recommendations (videos, blogs, games)."
              ghLink="https://github.com/shaik-sabeel/MentalHealth"
              demoLink="https://mindcare-psi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sked}
              isBlog={false}
              title="Sked.AI"
              description="SKED.AI is an intelligent scheduling assistant that helps users efficiently organize their tasks, meetings, and daily routines. It analyzes user preferences and availability to automatically suggest optimal time slots and resolve scheduling conflicts. The system provides smart reminders and notifications to ensure better time management. By simplifying scheduling and enhancing productivity, SKED.AI helps users maintain a well-balanced and organized workflow."
              ghLink="https://github.com/shaik-sabeel/SKED.AI"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heart}
              isBlog={false}
              title="Heart Attack Prediction"
              description="Heart Disease Prediction Model is a machine learning-based system that predicts whether a person is at high or low risk of heart disease based on their health parameters. It analyzes inputs such as age, cholesterol level, blood pressure, and other medical factors to generate accurate predictions. The model helps in early detection and prevention by providing quick and reliable risk assessments. This project aims to support better healthcare decisions and promote awareness of heart health."
              ghLink="https://github.com/shaik-sabeel/Heart-Attack-Prediction"
              demoLink="https://shaik-sabeel-heart-disease-prediction-app-hkceir.streamlit.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
