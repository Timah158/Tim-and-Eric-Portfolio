"use client";

import CloseIcon from "../../../public/JSX/CloseIcon.jsx";
import { Dispatch, SetStateAction, FormEvent, ChangeEvent, useState} from "react";
import { createNewInterview } from "@/app/actions/interview";
import './interview.modules.css'

interface Props {
  toggleModal: boolean,
  updateModal: (value: boolean) => void;
}

interface Inputs {
  Date: string;
  Time: string;
  Person: string;
  Email: string;
  Phone: string;
  About?: string;
}

const INITIAL_INPUTS = {
  Date: "",
  Time: "",
  Person: "",
  Email: "",
  Phone: "",
}

export const InterviewModal: React.FC<Props> = ({ updateModal, toggleModal }: Props) => {
  const [inputs, setInputs] = useState<Inputs>(INITIAL_INPUTS);

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

    await createNewInterview(formData);
  }

  return (
    <div className='modal_wrapper'>
        <div className='modal_content'>
            <CloseIcon className='close_button' onClick={() => updateModal(!toggleModal)}/>
            <h3>Schedule An Interview</h3>
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
