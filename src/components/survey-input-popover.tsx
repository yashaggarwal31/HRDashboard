'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import DialogFields from '@/components/DialogFields'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { FieldTypes } from "@/components/enums/survey-field-types";
 
export function SurveyInput({children, fieldType, formFields, setFormFields}:{children:string, fieldType:FieldTypes, formFields:any, setFormFields:any}) {

  const [labelValue, setLabelValue] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  const [multipleInput, setMultipleInput] = useState<string[]>([]);

    function addField(type:FieldTypes){
      // const label = formData.get('label') as string;

      if(type==FieldTypes.TEXTINPUT){
        setFormFields([...formFields, {"type":FieldTypes.TEXTINPUT,"label":labelValue}])
      }

      if(type==FieldTypes.DROPDOWN){
        setFormFields([...formFields, {"type":FieldTypes.DROPDOWN,"label":labelValue,"options":multipleInput}])
      }

      if(type==FieldTypes.CHECKBOX){
        setFormFields([...formFields, {"type":FieldTypes.CHECKBOX,"label":labelValue,"options":multipleInput}])
      }

      if(type==FieldTypes.FILEUPLOAD){
        setFormFields([...formFields,{"type":FieldTypes.FILEUPLOAD,"label":labelValue}])
      }

        
        
        //get field label
        // let fieldContent = 'Hello'
        // if(fieldType=='label'){
        //   setFormFields([...formFields, {"type":`${fieldType}`,"label":`${fieldContent}`}])
        // }
    }
    

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">{children}</Button>
      </PopoverTrigger>

      
      <PopoverContent className="w-80">
        {/* <form action={addField}> */}
            <div className="grid gap-4">
            <div className="space-y-2">
                <h4 className="font-medium leading-none">Field Title</h4>
                <p className="text-sm text-muted-foreground">
                {children}
                </p>
            </div>

              
                {fieldType===FieldTypes.TEXTINPUT &&
                    <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="label">Label</Label> 
                    <Input
                        id="labelID"
                        name='label'
                        defaultValue="Your Label"
                        className="col-span-2 h-8"
                        onChange={(e)=>{setLabelValue(e.target.value);console.log(e.target.value)}}
                    />
                    </div>
                    <Button className='' onClick={()=>addField(FieldTypes.TEXTINPUT)}>Submit Choices</Button>
                    </div>
                }

                {fieldType==FieldTypes.DROPDOWN &&
                   <div className="grid gap-2">
                   <div className="grid grid-cols-3 items-center gap-4">

                   <Label htmlFor="label">Question: </Label> 
                   <Input
                       id="labelID"
                       name='label'
                       defaultValue="Your Label"
                       className="col-span-2 h-8"
                       onChange={(e)=>{setLabelValue(e.target.value);console.log(e.target.value)}}
                   />

                    
                   <Label htmlFor="label">New Option</Label> 
                   <Input
                       id="labelID"
                       name='label'
                       defaultValue="Your Label"
                       className="col-span-2 h-8"
                       onChange={(e)=>{setInputValue(e.target.value);console.log(e.target.value)}}
                   />
                   <button onClick={()=>setMultipleInput([...multipleInput, inputValue])}>Add Option</button>
                   
                   <ul>
                   {multipleInput.map((item)=>{
                    return <li>{item}</li>
                   })}
                   </ul>

                   </div>
                   <Button className='' onClick={()=>addField(FieldTypes.DROPDOWN)}>Submit Choices</Button>
                   </div>
                }


                {fieldType==FieldTypes.CHECKBOX &&
                   <div className="grid gap-2">
                   <div className="grid grid-cols-3 items-center gap-4">

                   <Label htmlFor="label">Question: </Label> 
                   <Input
                       id="labelID"
                       name='label'
                       defaultValue="Your Label"
                       className="col-span-2 h-8"
                       onChange={(e)=>{setLabelValue(e.target.value);console.log(e.target.value)}}
                   />

                    
                   <Label htmlFor="label">New Option</Label> 
                   <Input
                       id="labelID"
                       name='label'
                       defaultValue="Your Label"
                       className="col-span-2 h-8"
                       onChange={(e)=>{setInputValue(e.target.value);console.log(e.target.value)}}
                   />
                   <button onClick={()=>setMultipleInput([...multipleInput, inputValue])}>Add Option</button>
                   
                   <ul>
                   {multipleInput.map((item)=>{
                    return <li>{item}</li>
                   })}
                   </ul>

                   </div>
                   <Button className='' onClick={()=>addField(FieldTypes.CHECKBOX)}>Submit Choices</Button>
                   </div>
                }

                {fieldType==FieldTypes.FILEUPLOAD &&
                  <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="label">Label</Label> 
                  <Input
                      id="labelID"
                      name='label'
                      defaultValue="Your Label"
                      className="col-span-2 h-8"
                      onChange={(e)=>{setLabelValue(e.target.value);console.log(e.target.value)}}
                  />
                  </div>
                  <Button className='' onClick={()=>addField(FieldTypes.FILEUPLOAD)}>Submit Choices</Button>
                  </div>
                }

            
            </div>
        {/* </form> */}
      </PopoverContent>
      
    </Popover>
  )
}