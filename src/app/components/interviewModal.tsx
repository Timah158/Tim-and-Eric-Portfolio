"use client";

import CloseIcon from "../../../public/JSX/CloseIcon.jsx";
import { Dispatch, SetStateAction, FormEvent, ChangeEvent, useState} from "react";
import { createNewInterview } from "@/app/actions/interview";
import { useModal } from "@/app/context/modalContext";
import './interview.modules.css'

interface Props {
  toggleModal: boolean,
  updateModal: Dispatch<SetStateAction<boolean>>
}

interface Inputs {
  Date: string;
  Time: string;
  Person: string;
  Email: string;
  Phone: string;
  About?: string;
}
export const InterviewModal: React.FC<Props> = () => {

  const { toggleModal, updateModal } = useModal();
  const [errorVisible, setErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [inputs, setInputs] = useState<Inputs>({
    Date: "",
    Time: "",
    Person: "",
    Email: "",
    Phone: "",
    About: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    Object.entries(inputs).forEach(([key, value]) => {
      formData.append(key, value);
    });
    
    try {
      await createNewInterview(formData);
      updateModal(false);
    } catch (e) {
      setErrorMessage(e instanceof Error ? e.message : "An unknown error occurred.");
      setErrorVisible(true);
    }
  }

  return (
    <div className='modal_wrapper'>
        <div className='modal_content'>
            <CloseIcon className='close_button' onClick={() => updateModal(false)}/>
            <h3>Schedule An Interview</h3>
            <span className="error_message" style={{ display: errorVisible ? "block" : "none" }}><p>Error: {errorMessage}</p></span>
                <form id='interview_form' onSubmit={handleSubmit}>
                <div id='interview_row1'>
                  <input 
                  type="Date" 
                  name='Date'
                  value={inputs.Date || ""} 
                  onChange={handleChange}
                  required
                  />
                  <input 
                  type="Time" 
                  name='Time'
                  value={inputs.Time || ""} 
                  onChange={handleChange}
                  required
                  />
                  <select 
                  name="Person" 
                  id="Person" 
                  value={inputs.Person || ""} 
                  onChange={handleChange}
                  required
                  >
                    <option value="">Select a person</option>
                    <option value="Tim">Tim</option>
                    <option value="Eric">Eric</option>
                  </select>
                  <input 
                  type="Email" 
                  placeholder='email@email.com' 
                  name='Email'
                  value={inputs.Email || ""} 
                  onChange={handleChange}
                  required
                  />
                  <input 
                  type="tel" 
                  placeholder='888-888-8888' 
                  name='Phone'
                  value={inputs.Phone || ""} 
                  onChange={handleChange}
                  required
                  />
                </div>
                <textarea 
                placeholder='Tell us about your company...' 
                name='About'
                value={inputs.About || ""}
                onChange={handleChange}
                />
                <input type="submit" value="Submit"/>
            </form>

        </div>
      </div>
  )
}
