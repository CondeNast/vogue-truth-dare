import React, { useState } from "react"
import withStyles from "react-jss"
import truth from "../data/truth"
import dare from "../data/dare"
import { TruthJar, DareJar } from "../assets/images"
import { getRandomInteger } from "../utils/helper"
import colors from "../data/colors"

const styles = {
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    backgroundColor: colors.blue,
  },
  generator: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  introText: {
    fontFamily: "LuckiestGuy",
    fontSize: "calc(32px + (42 - 32) * ((100vw - 300px) / (1600 - 300)))",
    lineHeight: 1.2,
    letterSpacing: "0.8px",
    width: "12ch",
    textAlign: "center",
    color: colors.white,
    textShadow: `4px 5px ${colors.black}`,
  },
  questionContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "50vh",
    width: "100%",
  },
  questionCard: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "20vh",
    width: "40vw",
    minWidth: "250px",
    padding: "3rem 4rem",
    margin: "1rem 1rem 4rem 1rem",
    backgroundColor: colors.grey,
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
    "@media only screen and (max-width: 500px)": {
      padding: "2rem 2rem",
      margin: "1rem 1rem 4rem 1rem",
    },
  },
  triangle: {
    content: "''",
    position: "absolute",
    left: 10,
    top: 10,
    borderStyle: "solid",
    borderWidth: "0 0 10ch 16ch",
    transition: "border-color 0.3s ease-in-out",
  },
  question: {
    fontFamily: "LuckiestGuy",
    fontSize: "calc(22px + (30 - 22) * ((100vw - 300px) / (1600 - 300)))",
    lineHeight: 1.2,
    letterSpacing: "0.8px",
    textAlign: "center",
    textTransform: "uppercase",
  },
  category: {
    position: "absolute",
    top: 25,
    left: 20,
    margin: 0,
    fontFamily: "LuckiestGuy",
    lineHeight: 1.2,
    letterSpacing: "0.8px",
    fontSize: "calc(16px + (18 - 16) * ((100vw - 300px) / (1600 - 300)))",
    zIndex: 2,
  },
  questionLeftTilt: {
    composes: "$question",
    transform: "rotate(-15deg)",
  },
  jarContainer: {
    margin: "1rem 1.5rem",
    cursor: "pointer",
  },
  jarImgTruth: {
    transform: "rotate(-5deg)",
  },
  jarImgDare: {
    transform: "rotate(5deg)",
  },
}

const Quiz = ({ classes }) => {
  const [activeQ, setActiveQ] = useState({
    qNo: "",
    question: "",
    category: "",
  })
  const [truthPool, setTruthPool] = useState(truth)
  const [darePool, setDarePool] = useState(dare)

  const showTruth = () => {
    // Show randomized unique 100 truths
    let questions = truthPool
    if (!truthPool.length) {
      questions = truth
    }

    const randomQIndex = getRandomInteger(0, questions.length)
    setActiveQ({
      ...questions[randomQIndex],
      category: "TRUTH",
    })
    console.log(randomQIndex, questions[randomQIndex])
    if (!truthPool.length) {
      setTruthPool(truth)
    } else {
      setTruthPool((d) => d.filter((_, i) => i !== randomQIndex))
    }
  }
  const showDare = () => {
    // Show randomized unique 100 truths
    let questions = darePool
    if (!darePool.length) {
      questions = dare
    }

    const randomQIndex = getRandomInteger(0, questions.length)
    setActiveQ({
      ...questions[randomQIndex],
      category: "DARE",
    })
    if (!truthPool.length) {
      setDarePool(dare)
    } else {
      setDarePool((d) => d.filter((_, i) => i !== randomQIndex))
    }
  }

  return (
    <section className={classes.container}>
      <div className={classes.questionContainer}>
        {
          <h2
            className={classes.introText}
            style={{
              display: activeQ.question ? "none" : "flex",
            }}>
            Lets start! Pick a question
          </h2>
        }
        <div
          className={classes.questionCard}
          style={{
            display: activeQ.question ? "flex" : "none",
            opacity: activeQ.question ? 1 : 0,
            transform:
              activeQ.category === "DARE" ? "rotate(-7deg)" : "rotate(3deg)",
          }}>
          <p className={classes.category}>{activeQ.category}</p>
          <h2 className={classes.question}>{activeQ.question}</h2>
          <div
            className={classes.triangle}
            style={{
              borderColor: `transparent transparent transparent ${
                activeQ.category === "DARE" ? colors.yellow : colors.pink
              }`,
            }}
          />
        </div>
      </div>
      <div className={classes.generator}>
        <div className={classes.jarContainer}>
          <img
            className={classes.jarImgTruth}
            src={TruthJar}
            alt="Click on this Truth Jar to generate a truth."
            onClick={showTruth}
          />
        </div>
        <div className={classes.jarContainer}>
          <img
            className={classes.jarImgDare}
            src={DareJar}
            alt="Click on this Dare Jar to generate a dare."
            onClick={showDare}
          />
        </div>
      </div>
    </section>
  )
}

export default withStyles(styles)(Quiz)
