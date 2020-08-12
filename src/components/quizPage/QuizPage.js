import React from 'react'
import './QuizPage.css'
import Button from 'react-bootstrap/Button';

export function QuizPage() {
    // const [show, toggleShow] = useState(true);

    // function startQuiz (){

    // }

    // return (
    //     <div id="header">
    //         <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
    //         <p>Find out the best options for you!</p>
    //         <button onClick={this.handleClick}>

    //         </button>

    //     </div>
    // )

  return (
    <div>
      {/* Default unchecked */}
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked">
        <label class="custom-control-label" for="defaultUnchecked">Default unchecked</label>
      </div>

      {/* Default checked */}
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultChecked" checked>
        <label class="custom-control-label" for="defaultChecked">Default checked</label>
      </div>

      {/* Default indeterminate */}
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultIndeterminate" checked>
        <label class="custom-control-label" for="defaultIndeterminate">Default indeterminate</label>
      </div>

      {/* Default unchecked disabled */}
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUncheckedDisabled" disabled>
        <label class="custom-control-label" for="defaultUncheckedDisabled">Default unchecked disabled</label>
      </div>

      {/* Default checked disabled */}
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultCheckedDisabled" checked disabled>
        <label class="custom-control-label" for="defaultCheckedDisabled">Default checked disabled</label>
      </div>
    </div>
  )
}
