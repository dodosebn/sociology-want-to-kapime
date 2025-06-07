import React, { useState } from 'react';
import './Forms.css';
import ReCAPTCHA from "react-google-recaptcha";

const FormSurvey = () => {
  const [isVerified, setIsVerified] = useState(false);
  
  const onChangeRap = (value) => {
    setIsVerified(!!value);
  };

  return (
    <div className="form-wrapper">
      <form className="form-container">
        {/* <div className="form-header">
          <h1>Career Preferences Survey</h1>
          <p>Help us understand your professional needs and aspirations</p>
        </div> */}

        <div className="recaptcha-container">
          <ReCAPTCHA
            sitekey="6Lc6zFgrAAAAAKj52053YpaBaLUfFuSrgXxUS_G4"
            onChange={onChangeRap}
          />
        </div>

        <div className="form-section">
          <h2>Personal Information</h2>
          <div>
            <label>1. What is your full name?</label>
            <input type="text" className="input-line" disabled={!isVerified} required />
          </div>

          <div>
            <label>2. Are you currently employed?</label>
            <select className="input-line" disabled={!isVerified} required>
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div>
            <label>3. Which of these best describe you? (Select all that apply)</label>
            <div className={`checkbox-group ${!isVerified ? 'disabled' : ''}`}>
              <label><input type="checkbox" disabled={!isVerified} /> Student</label>
              <label><input type="checkbox" disabled={!isVerified} /> Professional</label>
              <label><input type="checkbox" disabled={!isVerified} /> Freelancer</label>
              <label><input type="checkbox" disabled={!isVerified} /> Entrepreneur</label>
            </div>
          </div>

          <div>
            <label>4. What is your current city?</label>
            <input type="text" className="input-line" disabled={!isVerified} required />
          </div>
        </div>

        <div className="form-section">
          <h2>Work Preferences</h2>
          <div>
            <label>5. Would you consider relocating?</label>
            <select className="input-line" disabled={!isVerified} required>
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div>
            <label>6. What are your preferred work environments?</label>
            <div className={`checkbox-group ${!isVerified ? 'disabled' : ''}`}>
              <label><input type="checkbox" disabled={!isVerified} /> Office</label>
              <label><input type="checkbox" disabled={!isVerified} /> Remote</label>
              <label><input type="checkbox" disabled={!isVerified} /> Hybrid</label>
              <label><input type="checkbox" disabled={!isVerified} /> Flexible</label>
            </div>
          </div>

          <div>
            <label>7. Write a short description of your dream job.</label>
            <input type="text" className="input-line" disabled={!isVerified} required />
          </div>

          <div>
            <label>8. Are you open to internships?</label>
            <select className="input-line" disabled={!isVerified} required>
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <div className="form-section">
          <h2>Communication & Benefits</h2>
          <div>
            <label>9. How do you prefer to communicate?</label>
            <div className={`checkbox-group ${!isVerified ? 'disabled' : ''}`}>
              <label><input type="checkbox" disabled={!isVerified} /> Email</label>
              <label><input type="checkbox" disabled={!isVerified} /> Phone</label>
              <label><input type="checkbox" disabled={!isVerified} /> Messaging Apps</label>
              <label><input type="checkbox" disabled={!isVerified} /> In-person</label>
            </div>
          </div>

          <div>
            <label>10. What motivates you the most?</label>
            <input type="text" className="input-line" disabled={!isVerified} required />
          </div>

          <div>
            <label>11. Are you willing to work weekends?</label>
            <select className="input-line" disabled={!isVerified} required>
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div>
            <label>12. What benefits are most important to you?</label>
            <div className={`checkbox-group ${!isVerified ? 'disabled' : ''}`}>
              <label><input type="checkbox" disabled={!isVerified} /> Health Insurance</label>
              <label><input type="checkbox" disabled={!isVerified} /> Remote Work</label>
              <label><input type="checkbox" disabled={!isVerified} /> Bonus Pay</label>
              <label><input type="checkbox" disabled={!isVerified} /> Vacation Time</label>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2>Additional Information</h2>
          <div>
            <label>13. What is your expected salary range?</label>
            <input type="text" className="input-line" disabled={!isVerified} required />
          </div>

          <div>
            <label>14. Are you currently studying?</label>
            <select className="input-line" disabled={!isVerified} required>
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div>
            <label>15. Any additional comments or notes?</label>
            <input type="text" className="input-line" disabled={!isVerified} />
          </div>
        </div>

        <button type="submit" className="submit-btn" disabled={!isVerified}>
          Submit Survey
        </button>
      </form>
    </div>
  );
};

export default FormSurvey;