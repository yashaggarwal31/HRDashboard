'use client'
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { SurveyInput } from "@/components/survey-input-popover";
import { FieldTypes } from "@/components/enums/survey-field-types";
import { Input } from "@/components/ui/input";


interface FormFields{
  type:FieldTypes,
  label?:string,
  options?:string[]
}

function Surveys() {
  const [formFields,setFormFields] = useState<FormFields[]>([]);

  return (
    <>
    <div>
      <Navbar />
      {/* <button onClick={()=>addField('label')}>Add Field Label</button>
      <button onClick={()=>addField('label')}>Add Dropdown</button>
      <button onClick={()=>addField('label')}>Add Checkbox</button>
      <button onClick={()=>addField('input')}>Add Text Input</button>
      <button onClick={()=>addField('fileUploader')}>Add Document Uploader</button> */}

      <SurveyInput fieldType={FieldTypes.TEXTINPUT} formFields={formFields} setFormFields={setFormFields}>Add Text Input</SurveyInput>
      <SurveyInput fieldType={FieldTypes.DROPDOWN} formFields={formFields} setFormFields={setFormFields}>Add Dropdown Input</SurveyInput>
      <SurveyInput fieldType={FieldTypes.CHECKBOX} formFields={formFields} setFormFields={setFormFields}>Add Checkbox Input</SurveyInput>
      <SurveyInput fieldType={FieldTypes.FILEUPLOAD} formFields={formFields} setFormFields={setFormFields}>Add Document Uploader Input</SurveyInput>


      <form action="">
        {formFields?.map((item:FormFields)=>(
          <>
          {item.type===FieldTypes.TEXTINPUT &&(<div><label>{item.label}</label><input/></div>)}
          {item.type==FieldTypes.DROPDOWN &&(<div><label>{item.label}</label><input/><select><option>Choose your pick</option>{item.options!.map((itemVal)=><option>{itemVal}</option>)}</select></div>)}
          {item.type==FieldTypes.CHECKBOX &&(<div><label>Question: {item.label} </label>{item.options?.map((itemVal)=><><label>{itemVal}</label><input type="checkbox"/></>)}</div>)}
          {item.type==FieldTypes.FILEUPLOAD &&(<div><label htmlFor="">{item.label}</label><input type='file' /></div>)}
          </>
        ))}
      </form>
    </div>
    </>
  );
}

export default Surveys;
