import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Forms.css';

const FormSurvey = () => {
  const [formData, setFormData] = useState({
    name: '',
    q1: [],
    q2: '',
    q3: '',
    q4: [],
    q5: '',
    q6: '',
    q7: [],
    q8: '',
    q9: '',
    q10: [],
    q11: '',
    q12: '',
    q13: '',
    q14: '',
    q15: '',
    q16: '',
    q17: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      const questionName = name.split('-')[0];
      const optionValue = name.split('-')[1];
      
      setFormData(prev => {
        const currentOptions = prev[questionName] || [];
        if (checked) {
          return { ...prev, [questionName]: [...currentOptions, optionValue] };
        } else {
          return { ...prev, [questionName]: currentOptions.filter(item => item !== optionValue) };
        }
      });
    } else if (type === 'radio') {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.q14 && !formData.q15) {
      alert('Please provide contact information for your selected contact method');
      return;
    }

    // Prepare the email template parameters
    const questionTexts = {
      q1: '1. Which of these best describe you?',
      q2: '2. What is your current city?',
      q3: '3. Would you consider relocating?',
      q4: '4. What are your preferred work environments?',
      q5: '5. Write a short description of your dream job.',
      q6: '6. Are you open to internships?',
      q7: '7. How do you prefer to communicate?',
      q8: '8. What motivates you the most?',
      q9: '9. Are you willing to work weekends?',
      q10: '10. What benefits are most important to you?',
      q11: '11. What is your expected salary range?',
      q12: '12. Are you currently studying?',
      q13: '13. Any additional comments or notes?',
      q14: '14. How would you like to be contacted?',
      q15: '15. Contact information:',
      q16: '16. Are you currently employed?',
      q17: '17. Full name:'
    };

    const templateParams = {
      from_name: formData.q17 || 'Anonymous',
      to_name: 'Survey Administrator',
      message: Object.entries(formData)
        .map(([key, value]) => {
          const displayValue = Array.isArray(value) ? value.join(', ') : value;
          return `${questionTexts[key]}: ${displayValue || 'No answer'}`;
        })
        .join('\n\n'),
      reply_to: formData.q14 === 'email' ? formData.q15 : 'no-reply@example.com'
    };

    console.log('Sending email with params:', templateParams); // Debug log

    // Send the email using EmailJS
    emailjs.send(
      'service_33e9myk', // Your EmailJS service ID
      'template_mpbbsoj', // Your EmailJS template ID
      templateParams,
      'jyzzOytMmss1f4PmT' // Your EmailJS public key
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Form submitted successfully!');
      // Reset form after submission
      setFormData({
        name: '',
        q1: [],
        q2: '',
        q3: '',
        q4: [],
        q5: '',
        q6: '',
        q7: [],
        q8: '',
        q9: '',
        q10: [],
        q11: '',
        q12: '',
        q13: '',
        q14: '',
        q15: '',
        q16: '',
        q17: ''
      });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert(`Failed to submit form: ${err.text || 'Please try again later.'}`);
    });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      {/* Question 1 */}
      <label>1. Which of these best describe you? (Select all that apply)</label>
      <div className="checkbox-group">
        <label><input type="checkbox" name="q1-A" onChange={handleChange} checked={formData.q1.includes('A')} /> A. Student</label>
        <label><input type="checkbox" name="q1-B" onChange={handleChange} checked={formData.q1.includes('B')} /> B. Professional</label>
        <label><input type="checkbox" name="q1-C" onChange={handleChange} checked={formData.q1.includes('C')} /> C. Freelancer</label>
        <label><input type="checkbox" name="q1-D" onChange={handleChange} checked={formData.q1.includes('D')} /> D. Entrepreneur</label>
      </div>

      {/* Question 2 */}
      <label>2. What is your current city?</label>
      <input type="text" name="q2" className="input-line" onChange={handleChange} value={formData.q2} />

      {/* Question 3 */}
      <label>3. Would you consider relocating?</label>
      <select className="input-line" name="q3" onChange={handleChange} value={formData.q3}>
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      {/* Question 4 */}
      <label>4. What are your preferred work environments?</label>
      <div className="checkbox-group">
        <label><input type="checkbox" name="q4-A" onChange={handleChange} checked={formData.q4.includes('A')} /> A. Office</label>
        <label><input type="checkbox" name="q4-B" onChange={handleChange} checked={formData.q4.includes('B')} /> B. Remote</label>
        <label><input type="checkbox" name="q4-C" onChange={handleChange} checked={formData.q4.includes('C')} /> C. Hybrid</label>
        <label><input type="checkbox" name="q4-D" onChange={handleChange} checked={formData.q4.includes('D')} /> D. Flexible</label>
      </div>

      {/* Question 5 */}
      <label>5. Write a short description of your dream job.</label>
      <input type="text" name="q5" className="input-line" onChange={handleChange} value={formData.q5} />

      {/* Question 6 */}
      <label>6. Are you open to internships?</label>
      <select className="input-line" name="q6" onChange={handleChange} value={formData.q6}>
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      {/* Question 7 */}
      <label>7. How do you prefer to communicate?</label>
      <div className="checkbox-group">
        <label><input type="checkbox" name="q7-A" onChange={handleChange} checked={formData.q7.includes('A')} /> A. Email</label>
        <label><input type="checkbox" name="q7-B" onChange={handleChange} checked={formData.q7.includes('B')} /> B. Phone</label>
        <label><input type="checkbox" name="q7-C" onChange={handleChange} checked={formData.q7.includes('C')} /> C. Messaging Apps</label>
        <label><input type="checkbox" name="q7-D" onChange={handleChange} checked={formData.q7.includes('D')} /> D. In-person</label>
      </div>

      {/* Question 8 */}
      <label>8. What motivates you the most?</label>
      <input type="text" name="q8" className="input-line" onChange={handleChange} value={formData.q8} />

      {/* Question 9 */}
      <label>9. Are you willing to work weekends?</label>
      <select className="input-line" name="q9" onChange={handleChange} value={formData.q9}>
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      {/* Question 10 */}
      <label>10. What benefits are most important to you?</label>
      <div className="checkbox-group">
        <label><input type="checkbox" name="q10-A" onChange={handleChange} checked={formData.q10.includes('A')} /> A. Health Insurance</label>
        <label><input type="checkbox" name="q10-B" onChange={handleChange} checked={formData.q10.includes('B')} /> B. Remote Work</label>
        <label><input type="checkbox" name="q10-C" onChange={handleChange} checked={formData.q10.includes('C')} /> C. Bonus Pay</label>
        <label><input type="checkbox" name="q10-D" onChange={handleChange} checked={formData.q10.includes('D')} /> D. Vacation Time</label>
      </div>

      {/* Question 11 */}
      <label>11. What is your expected salary range?</label>
      <input type="text" name="q11" className="input-line" onChange={handleChange} value={formData.q11} />

      {/* Question 12 */}
      <label>12. Are you currently studying?</label>
      <select className="input-line" name="q12" onChange={handleChange} value={formData.q12}>
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      {/* Question 13 */}
      <label>13. Any additional comments or notes?</label>
      <input type="text" name="q13" className="input-line" onChange={handleChange} value={formData.q13} />
      
      {/* Question 14 */}
      <label>14. How would you like to be contacted? (Choose one)</label>
      <div className="radio-group">
        <label><input type="radio" name="q14" value="whatsapp" onChange={handleChange} checked={formData.q14 === 'whatsapp'} /> WhatsApp</label>
        <label><input type="radio" name="q14" value="telegram" onChange={handleChange} checked={formData.q14 === 'telegram'} /> Telegram</label>
        <label><input type="radio" name="q14" value="email" onChange={handleChange} checked={formData.q14 === 'email'} /> Email</label>
      </div>

      {/* Question 15 */}
      <label>15. Please provide your contact information:</label>
      <input 
        type="text" 
        name="q15" 
        className="input-line" 
        placeholder={
          formData.q14 === 'email' ? 'Enter your email address' : 
          formData.q14 ? 'Enter your phone number' : 
          'Enter your WhatsApp/Telegram number or Email address'
        } 
        onChange={handleChange} 
        value={formData.q15}
      />

      {/* Question 16 */}
      <label>16. Are you currently employed? (Optional)</label>
      <select className="input-line" name="q16" onChange={handleChange} value={formData.q16}>
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      
      {/* Question 17 */}
      <label>17. What is your full name? (Optional)</label>
      <input type="text" name="q17" className="input-line" onChange={handleChange} value={formData.q17} />
      
      {/* Submit Button */}
      <button type="submit" className="submit-btn">Submit Survey</button>
    </form>
  );
};

export default FormSurvey;