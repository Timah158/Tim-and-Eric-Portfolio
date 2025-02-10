import CloseIcon from "../../../public/JSX/CloseIcon.jsx";
import { Dispatch, SetStateAction} from "react";
import './interview.modules.css'

interface Props {
  toggleModal: boolean,
  updateModal: Dispatch<SetStateAction<boolean>>
}

export const InterviewModal: React.FC<Props> = (props) => {
  return (
    <div className='modal_wrapper'>
        <div className='modal_content'>
            <CloseIcon className='close_button' onClick={() => props.updateModal(!props.toggleModal)}/>
            <h3>Schedule An Interview</h3>
            <form id='interview_form'>
                <div id='interview_row1'>
                  <input
                  type="date"
                  name='date'
                  value=""
                  required
                  />
                  <input
                  type="time"
                  name='time'
                  value=""
                  required
                  />
                  <select
                  name="person"
                  id="person"
                  value=""
                  required
                  >
                    <option></option>
                    <option value="Tim">Tim</option>
                    <option value="Eric">Eric</option>
                  </select>
                  <input
                  type="email"
                  placeholder='email@email.com'
                  name='email'
                  value=""
                  required
                  />
                  <input
                  type="tel"
                  placeholder='888-888-8888'
                  name='phone'
                  value=""
                  required
                  />
                </div>
                <textarea
                placeholder='Tell us about your company...'
                name='about'
                value=""
                />
                <input type="submit" value="Submit"/>
            </form>

        </div>
      </div>
  )
}
