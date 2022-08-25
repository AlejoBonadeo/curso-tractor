import Link from "next/link"
import NavBar from "../components/ui/NavBar"

const About = () => {
  return (
    <>
        <NavBar/>
        <h1 className="pepito">About</h1>
        <Link href="/">Go to home</Link>
    </>
    )
}

export default About