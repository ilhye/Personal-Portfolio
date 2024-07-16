import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "../styles/Contact.css";
import Button from "../components/button/Button";
import Website from "../components/column/Website";

export default function Contact() {
  return (
    <>
      <div className="row contact">
        <div className="col-md-2">
          <Website panel="contact"/>
        </div>
        <div className="col-md-10">
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
          <Button variant="primary" className="submit">Submit</Button>
        </div>
      </div>
    </>
  );
}
