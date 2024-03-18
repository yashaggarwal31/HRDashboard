import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FieldTypes } from './enums/survey-field-types'

export default function DialogFields(fieldType:any) {

    // console.log("dfdd",fieldType.fieldType);
    

  return (

    <div className="grid gap-2">

        {fieldType.fieldType===FieldTypes.TEXTINPUT &&
            <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="label">Label</Label> 
            <Input
                id="labelID"
                name='label'
                defaultValue="Your Label"
                className="col-span-2 h-8"
                onChange={(e)=>{console.log(e.target.value)}}
            />
            </div>
        }

        <Button>Submit Choices</Button>
    </div>
  )
}
