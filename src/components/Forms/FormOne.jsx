import React from 'react';
import './Forms.css';

const FormSurvey = () => {
  return (
    <form className="form-container">
      {/* Question 1 */}
      <label>1. What is your full name?</label>
      <input type="text" className="input-line" />

      {/* Question 2 */}
      <label>2. Are you currently employed?</label>
      <select className="input-line">
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      {/* Question 3 */}
      <label>3. Which of these best describe you? (Select all that apply)</label>
      <div className="checkbox-group">
        <label><input type="checkbox" /> A. Student</label>
        <label><input type="checkbox" /> B. Professional</label>
        <label><input type="checkbox" /> C. Freelancer</label>
        <label><input type="checkbox" /> D. Entrepreneur</label>
      </div>

      {/* Question 4 */}
      <label>4. What is your current city?</label>
      <input type="text" className="input-line" />

      {/* Question 5 */}
      <label>5. Would you consider relocating?</label>
      <select className="input-line">
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      {/* Question 6 */}
      <label>6. What are your preferred work environments?</label>
      <div className="checkbox-group">
        <label><input type="checkbox" /> A. Office</label>
        <label><input type="checkbox" /> B. Remote</label>
        <label><input type="checkbox" /> C. Hybrid</label>
        <label><input type="checkbox" /> D. Flexible</label>
      </div>

      {/* Question 7 */}
      <label>7. Write a short description of your dream job.</label>
      <input type="text" className="input-line" />

      {/* Question 8 */}
      <label>8. Are you open to internships?</label>
      <select className="input-line">
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      {/* Question 9 */}
      <label>9. How do you prefer to communicate?</label>
      <div className="checkbox-group">
        <label><input type="checkbox" /> A. Email</label>
        <label><input type="checkbox" /> B. Phone</label>
        <label><input type="checkbox" /> C. Messaging Apps</label>
        <label><input type="checkbox" /> D. In-person</label>
      </div>

      {/* Question 10 */}
      <label>10. What motivates you the most?</label>
      <input type="text" className="input-line" />

      {/* Question 11 */}
      <label>11. Are you willing to work weekends?</label>
      <select className="input-line">
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      {/* Question 12 */}
      <label>12. What benefits are most important to you?</label>
      <div className="checkbox-group">
        <label><input type="checkbox" /> A. Health Insurance</label>
        <label><input type="checkbox" /> B. Remote Work</label>
        <label><input type="checkbox" /> C. Bonus Pay</label>
        <label><input type="checkbox" /> D. Vacation Time</label>
      </div>

      {/* Question 13 */}
      <label>13. What is your expected salary range?</label>
      <input type="text" className="input-line" />

      {/* Question 14 */}
      <label>14. Are you currently studying?</label>
      <select className="input-line">
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      {/* Question 15 */}
      <label>15. Any additional comments or notes?</label>
      <input type="text" className="input-line" />

      {/* Submit Button */}
      <button type="submit" className="submit-btn">Submit Survey</button>
    </form>
  );
};

export default FormSurvey;
