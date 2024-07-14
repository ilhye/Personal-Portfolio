import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <>
      <div className="row contact">
        <div className="col-md-5">
          <div className="row">
            <div className="col-md-1">
              <FaGithub className="icons" />
              <FaLinkedin className="icons" />
              <BsFillTelephoneFill className="icons" />
              <MdEmail className="icons" />
            </div>
            <div className="col-md-11 website">
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
        </div>
        <div className="col-md-7">
          <div class="mb-3">
            <label for="email" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">
              Message
            </label>
            <textarea
              class="form-control"
              id="message"
              rows="3"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}
