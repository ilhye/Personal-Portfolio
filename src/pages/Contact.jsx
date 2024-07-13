import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <>
      <div className="row">
        <div className="col-md-1">
          <FaGithub className="icons" />
          <FaLinkedin className="icons"/>
          <BsFillTelephoneFill className="icons"/>
          <MdEmail className="icons"/>
        </div>
        <div className="col-md-11 contacts">
          <p className="top">Github</p>
          <p>Username:</p>
          <p className="top">LinkedIn</p>
          <p>Username:</p>
          <p className="top">Phone Number</p>
          <p>09*********</p>
          <p className="top">Email</p>
          <p>***@gmail.com</p>
        </div>
      </div>
    </>
  );
}
